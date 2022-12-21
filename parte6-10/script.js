// fetch


// const requisicao = fetch ('https://ranekapi.origamid.dev/json/api/produto').then(function(response) {
//   console.log(response)
// })

// console.log(requisicao)

// Async / Await

// Arrays metodos

const precos = [
  "Crédito",
  "R$ 200",
  "R$ 400",
  "Contas Pagar",
  "R$ 300",
  "R$ 400",
  "Meus dados"
];

const precosFiltro = precos.filter((preco) => {
return preco.includes('R$')
})

const precosNumeros = precosFiltro.map((preco) => {
  console.log(preco)
  return +preco.replace("R$ ", "")
})

console.log(precosNumeros)


const total = precosNumeros.reduce((acc, item) => acc + item);


console.log(total)