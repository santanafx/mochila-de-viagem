const form = document.getElementById("novoItem");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  criaElemento(
    evento.target.elements["nome"].value,
    evento.target.elements["quantidade"].value
  );
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
  novoItem.innerHTML = nome;

  const lista = document.getElementById("lista");

  lista.appendChild(novoItem);

  console.log(novoItem);
};
