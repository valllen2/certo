// Seleciona os elementos
const button1 = document.getElementById("btn-1");
const button2 = document.getElementById("btn-2");
const button3 = document.getElementById("btn-3");
const messageBox = document.getElementById("message");
const messageText = messageBox.querySelector("p");

// Mensagens românticas
const messages = [
    "Tu é a melhor parte do meu dia, voce deixa as coisas mais leves, tu é a melhor pessoa q ja brotou na minha vida desde q eu nasci ta, meu nivel de amores por tu é extremo, e eu nao sei como botar sentimentos em palavras, mas saiba q tu é extremamente importante para minha pessoa. 💜",
    "Eu me sinto sortuda dms por te ter na minha vida, tu me faz um bem absurdo ana, tu me faz a pessoa mais feliz do mundo so por conversar cntg, ser idiota cntg sabendo q tu vai ser ainda pior das ideia, eu amo cada minimo detalhe em tu, desde tua risada bestona por 0 motivos, ate a forma q tu me trata. Eu sou completamente apaixonada por ti, eu sou a pessoa mais besta do mundo por ti. Eu so qria acordar de madrugada com o cheiro do teu cabwlo na minha cara.",
    "Eu te quero pra sempre, eu não só quero como eu vou te dar todas as flores do universo, sendo de cetim ou nao, eu vou transcender de criatividade pra te dar todos os presentinhos do mundo, eu vou te entregar tanta coisa q tu vai terq fazer um quarto só pra deixar de exposição. Eu amo pra caralho o teu jeito, eu amo tuas perguntas bestas (em voz alta) de pessoas alheias q me faz ter ataques de vergonha. Eu amo quando tu canta pra dentro e eu tento ao maximo fingir q eu n to escutando p q tu n pare. Eu amo teus tapa q quase deslocam o meu ombro. Eu amo q tu me tira sorrios e risadas genuinas. Eu amo como eu posso ser eu mesma com meu humor negro perto de tu. Eu amo cada detalhe da tua personalidade, eu amo cada detalhe fisico em ti, e eu amo a forma q tu me faz me sentir. Eu amo tudo isso e mais um pouco. Eu te amo demaiz cuzidinha."
];

// Função para exibir mensagem
function showMessage(index) {
    messageText.textContent = messages[index];
    messageBox.classList.remove("hidden");
}

// Eventos de clique
button1.addEventListener("click", () => showMessage(0));
button2.addEventListener("click", () => showMessage(1));
button3.addEventListener("click", () => showMessage(2));