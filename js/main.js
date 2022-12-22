const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");
const itens = [];

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nome = evento.target.elements["nome"];
  const quantidade = evento.target.elements["quantidade"];

  criaElemento(nome.value, quantidade.value);

  nome.value = "";
  quantidade.value = "";
});

const criaElemento = (nome, quantidade) => {
  console.log(nome);
  console.log(quantidade);

  const novoItem = document.createElement("li");
  novoItem.classList.add("item");

  const numeroItem = document.createElement("strong");
  numeroItem.innerHTML = quantidade;

  novoItem.appendChild(numeroItem);
  //<li class="item">nome
  //        <strong>quantidade</strong>
  //</li>
  //
  novoItem.innerHTML += nome;

  lista.appendChild(novoItem);

  console.log(novoItem);

  const itemAtual = {
    nome: nome,
    quantidade: quantidade,
  };

  itens.push(itemAtual);

  localStorage.setItem("item", JSON.stringify(itemAtual));
};
