// Configuração da animação principal do site         
let app = document.getElementById('titulo');

let typewriter = new Typewriter(app, {
    loop: true,
    delay: 65,
});

typewriter
    .pauseFor(1000)
    .typeString('Criando inovações para sistemas empresariais')
    .pauseFor(5000)
    .deleteChars(10)
    .start();