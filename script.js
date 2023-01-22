const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
//document.querySelector -> procurando no meu HTML o primeiro HEADER e o BUTTON dentro dele
const button = document.querySelector("header button")

//adicionando um evento ao primeiro button selecionado la em cima, no caso evendo de click. e adicionando uma função
button.addEventListener("click", add)
form.addEventListener("change", save)

//função que vai executar quando o botao for clicado
function add() {
  //estou pegando a data atual e formatando em DD/MM
  const today = new Date().toLocaleDateString("pt-br").slice(0, 5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso❗❗❗")
    return
  }

  alert("Adicionado com sucesso ✅ ")
  nlwSetup.addDay(today)
}

function save() {
  //guardando a informção adicionada no meu navegador
  //JSON.stringfy converte o valor do objeto para string(TEXTO)
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

//trazendo os itens ja salvos no local storage
//JSON.parse converte o string em objeto
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
//setando as datas dentro do meu forms, criado como objeto la em cima
nlwSetup.setData(data)
//fazendo o carregamento das informações, diretamente da biblioteca utilizada
nlwSetup.load()
