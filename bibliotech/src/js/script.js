const botao = document.getElementById("enviar")
const lista = document.getElementById("lista")
let listaCheck = []
const livro = {
    nome: document.getElementById("nome"),
    descricao: document.getElementById("descricao"),
    genero: document.getElementById("genero")
}
const aluno = {
    nomeAluno: document.getElementById("nomeAluno"),
    serie: document.getElementById("serie"),
    turma: document.getElementById("turma"),
    dataColeta: document.getElementById("data"),
    dataDevolucao: document.getElementById("dataRetorno")
}

botao.addEventListener("click", (event) => {
    event.preventDefault()

    if (livro.nome.value == "" || aluno.nomeAluno.value == "" || aluno.dataColeta.value == "" || aluno.dataDevolucao.value == "") {
        alert("Forneça todas as informações para enviar.")
        return
    } else if (listaCheck.indexOf(aluno.nomeAluno.value) !== listaCheck.lastIndexOf(aluno.nomeAluno.value)) {
            alert("Esse aluno já alugou um livro")
            return
        } else {
        listaCheck.push(aluno.nomeAluno.value)
        for (let i = 0; i <= listaCheck.length; i++) {
            if (i == listaCheck.length) {
                const item = document.createElement("li")
                item.classList.add("itemLista" + i)
                const check = document.createElement("input")

                check.type = "checkbox"

                check.classList.add("checkItem")

                item.appendChild(check)

                item.innerHTML += "livro " + livro.nome.value + " - agendado pelo aluno " + aluno.nomeAluno.value + "no dia" + aluno.dataColeta.value

                lista.appendChild(item)
            }
        }
        
    }
})

apagar.addEventListener("click", () => {
    const checkBoxes = document.querySelectorAll(".checkItem")
    const itens = document.querySelectorAll("li")

    checkBoxes.forEach((check, i) => {
        if (check.checked) {
            itens[i].remove()
            listaCheck.slice(i)
        }
    })
})