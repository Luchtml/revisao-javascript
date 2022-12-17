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

// class Menu {
//   constructor(menu) {
//     this.menuElement = document.querySelector(menu);
//     this.activeClass = 'active';
//   }
//   addActiveEvent() {
//     this.menuElement.addEventListener('click',  (event) => {
//       event.target.classList.add(this.activeClass);
//     console.log(this);

//     });
//   }
// }

// const menu = new Menu('.principal');
// menu.addActiveEvent();

// function handleMouseMove(event) {
//   const { clientX, clientY, target } = event;
//   console.log(clientX, clientY);
// }

// const frutas = ['Banana', 'Uva']

// document.documentElement.addEventListener('mousemove', handleMouseMove);
// function showList(empresa, ...clientes) {
//   console.log(empresa)
//   console.log(clientes)
// }

// showList('Lucas', 'Joa', 'Thamires', 10)

// const numeros = [1,2,3,4,5,6,7,8,9]

// console.log(Math.max(...numeros))


const carro = {cor: 'Azul', portas: 4, ano: 2020}

const cloneCarro = {...carro, turbo: true}