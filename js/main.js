const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");
const itens = JSON.parse(localStorage.getItem("itens")) || [];

console.log(itens);

itens.forEach((elemento) => {
  criaElemento(elemento);
});

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nome = evento.target.elements["nome"];
  const quantidade = evento.target.elements["quantidade"];

  const itemAtual = {
    nome: nome.value,
    quantidade: quantidade.value,
  };

  criaElemento(itemAtual);

  itens.push(itemAtual);

  localStorage.setItem("item", JSON.stringify(itemAtual));

  nome.value = "";
  quantidade.value = "";
});

const criaElemento = (item) => {
  const novoItem = document.createElement("li");
  novoItem.classList.add("item");

  const numeroItem = document.createElement("strong");
  numeroItem.innerHTML = item.quantidade;

  novoItem.appendChild(numeroItem);
  //<li class="item">nome
  //        <strong>quantidade</strong>
  //</li>
  //
  novoItem.innerHTML += item.nome;

  lista.appendChild(novoItem);
};
