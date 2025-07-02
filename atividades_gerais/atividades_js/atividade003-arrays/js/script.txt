const produtos = [
  { nome: "Sabonete Natural", preco: 15.00, categoria: "cosmetico" },
  { nome: "Shampoo Organico", preco: 25.00, categoria: "cosmetico" },
  { nome: "Granola Artesanal", preco: 18.05, categoria: "alimento" },
  { nome: "Mel Puro", preco: 22.00, categoria: "alimento" },
];

document.addEventListener("DOMContentLoaded", function () {
  const seletor = document.getElementById("seletor");
  const resultado = document.getElementById("resultado");
  const listaProdutos = document.getElementById("listaProdutos");

  seletor.addEventListener("change", function () {
   
    const categoriaSelecionada = seletor.value;

    let produtosFiltrados = [];

    if (categoriaSelecionada === "todos") {
      produtosFiltrados = produtos;
    } else {
      
      produtosFiltrados = produtos.filter(function (produto) {
        return produto.categoria === categoriaSelecionada;
      });
    }

    let total = produtosFiltrados.reduce(function (soma, produto) {
      return soma + produto.preco;
    }, 0);

    
    resultado.innerHTML = `${total.toFixed(2)}`;

   
    listaProdutos.innerHTML = "";

    
    produtosFiltrados.forEach(function (produto) {
      const item = document.createElement("li");

     
      const nome = document.createElement("p");
      nome.textContent = produto.nome;
      nome.style.fontWeight = 'bold'

      
      const preco = document.createElement("p");
    
      preco.textContent = `R$ ${produto.preco.toFixed(2)}`;

      
      item.appendChild(nome);
      item.appendChild(preco);

      
      listaProdutos.appendChild(item);
    });
  });
});
