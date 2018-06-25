import './reset.css'
import './main.less'

function addListener(element, type, callback) {
  if (element.addEventListener) {
    element.addEventListener(type, callback)
  } else if (element.attachEvent) {
    element.attachEvent('on' + type, callback)
  }
}

addListener(document, 'DOMContentLoaded', function () {
  
  var mq = window.matchMedia("(max-width: 1000px)")
  if (mq.matches) {
    document.getElementById("menu_list").classList.add("hidden");
    document.getElementById("menu_button").classList.remove("hidden")
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
    } else {
      document.getElementById("menu_list").classList.add("hidden")
      document.getElementById("menu_button").classList.remove("hidden")
      
    }
  })
  
})