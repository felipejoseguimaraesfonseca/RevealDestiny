const answerElement = document.querySelector("#answer")
const inputQuestion = document.querySelector("#inputQuestion")
const buttonQuestion = document.querySelector("#buttonQuestion")
const answers = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
]

function askQuestion() {
    if(inputQuestion.value == "") {
        alert("Digite a sua pergunta")
        return
    } else {
        buttonQuestion.setAttribute("disabled", true)

        const question = "<div>" + inputQuestion.value + "</div>"

        const totalAnswers = answers.length
        const randomNumber = Math.floor(Math.random() * totalAnswers)

        answerElement.innerHTML = question + answers[randomNumber]

        answerElement.style.opacity = 1;

        setTimeout(function(){
            answerElement.style.opacity = 0;
            buttonQuestion.removeAttribute("disabled")
        }, 3000) 
    }
}