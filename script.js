class Pessoa {
    constructor(psnome,psidade){
    this.nome = psnome
    this.idade = psidade
}
getNome(){
    return this.nome
}
getIdade(){
    return this.idade
}
setNome(nome){
    this.nome = nome
}
setIdade(idade){
    this.idade = idade
}
   
}

let pessoas = []
const btn_add = document.querySelector("#btn_add")
const res = document.querySelector(".res")

const addPessoa=()=>{
    res.innerHTML = ""
    pessoas.map((p)=>{
        const div = document.createElement("div")
        div.setAttribute("class","pessoa")
        div.innerHTML = `Nome: ${p.getNome()}<br/>
        Idade: ${p.getIdade()}`
        res.appendChild(div)
    })
}

btn_add.addEventListener("click",(evt)=>{
    const nome = document.querySelector("#f_nome")
    const idade = document.querySelector("#f_idade")
    const p = new Pessoa(nome.value,idade.value)
    pessoas.push(p)
    nome.value = ""
    idade.value = ""
    nome.focus()
    addPessoa()
})
