class Produto {
  constructor(produto, preco) {
    this.produto = produto;
    this.preco = preco;
  }
}

let carinho = [];

// Função para adicionar produtos ao carrinho
function comprar(produto, preco) {
  let novoProduto = new Produto(produto, preco);
  carinho.push(novoProduto);
  exibirLista();
  exibirTotal();
}

// Função para calcular o total
function calcularTotal() {
  let total = 0;
  for (let i = 0; i < carinho.length; i++) {
    total += carinho[i].preco;
  }
  return total;
}

// Função para exibir o total na página
function exibirTotal() {
  const totalElement = document.getElementById("total");
  if (totalElement) {
    totalElement.innerHTML = `<p>Total: R$${calcularTotal().toFixed(2)}</p>`;
  }
}

// Função para exibir a lista de produtos no carrinho
function exibirLista() {
  const listaProdutos = document.getElementById("listaProdutos");
  listaProdutos.innerHTML = "";

  for (let i = 0; i < carinho.length; i++) {
    const produto = carinho[i];

    const itemLista = document.createElement("li");
    itemLista.appendChild(
      document.createTextNode(`${produto.produto} - R$${produto.preco.toFixed(2)}`)
    );
    listaProdutos.appendChild(itemLista);
  }
}

