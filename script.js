// const menu = {
//   class: '.principal',
//   ativar(){
//     const menuElement = document.querySelector(this.class)
//     console.log(menuElement)
//   }
// }

// menu.ativar()

// function upperName(name) {
//   return name.toUpperCase()
// }

class Menu {
  constructor(menu) {
    this.menuElement = document.querySelector(menu)
    this.activeClass = 'active'
  }
  addActiveEvent() {
    this.menuElement.addEventListener('click', function (event) {
      event.target.classList.add(this.activeClass)
    })
  }
}

const menu = new Menu ('.principal')
menu.addActiveEvent()
console.log(menu)