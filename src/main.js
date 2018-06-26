import './reset.css'
import './main.less'

function addListener(element, type, callback) {
  if (element.addEventListener) {
    element.addEventListener(type, callback)
  } else if (element.attachEvent) {
    element.attachEvent('on' + type, callback)
  }
}

function clickNav() {
  document.getElementById("menu_list").classList.add("hidden")
}

addListener(document, 'DOMContentLoaded', function () {
  var hasAddEvent
  var mq = window.matchMedia("(max-width: 1000px)")
  if (mq.matches) {
    document.getElementById("menu_list").classList.add("hidden");
    document.getElementById("menu_button").classList.remove("hidden")
    hasAddEvent = true
    addListener(document.getElementById("menu_list"), 'click', clickNav)
  }

  addListener(document.getElementById("menu_button"), 'click', function () {
    document.getElementById("menu_list").classList.toggle("hidden")
  })

  addListener(window, 'resize', function () {
    var width = window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth
    if (width > 1000) {
      document.getElementById("menu_list").classList.remove("hidden")
      document.getElementById('menu_button').classList.add('hidden')
      if (hasAddEvent) {
        document.getElementById('menu_list').removeEventListener('click', clickNav)
        hasAddEvent = false
      }
    } else {
      document.getElementById("menu_list").classList.add("hidden")
      document.getElementById("menu_button").classList.remove("hidden")
      if (!hasAddEvent) {
        addListener(document.getElementById("menu_list"), 'click', clickNav)
        hasAddEvent = true
      }
    }
  })

})