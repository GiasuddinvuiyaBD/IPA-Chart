const diphSound1 = document.querySelector('.diph-sound1');


// seeting audio 
const buttonAudio = new Audio("audio/final-button.wav");
// const test = new Audio("audio/ɪə.mp3");
const aɪ = new Audio("audio/aɪ.wav")
const aʊ = new Audio("audio/aʊ.wav")
const eə = new Audio("audio/eə.wav")
const eɪ = new Audio("audio/eɪ.wav")
const əʊ = new Audio("audio/əʊ.wav")
const ɪə = new Audio("audio/ɪə.wav")
const ɔɪ = new Audio("audio/ɔɪ.wav")
const ʊə = new Audio("audio/ʊə.wav")



diphSound1.addEventListener('click',(evt) => 
{
    evt.preventDefault(); 
    ɪə.play();
})


