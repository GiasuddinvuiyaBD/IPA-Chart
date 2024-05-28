const diphSoundɪə = document.querySelector('.diph-sound-ɪə');
const diphSoundeɪ = document.querySelector('.diph-sound-eɪ');
const diphSoundʊə = document.querySelector('.diph-sound-ʊə');
const diphSoundɔɪ = document.querySelector('.diph-sound-ɔɪ');
const diphSoundəʊ = document.querySelector('.diph-sound-əʊ');
const diphSoundeə = document.querySelector('.diph-sound-eə');
const diphSoundaɪ = document.querySelector('.diph-sound-aɪ');
const diphSoundaʊ = document.querySelector('.diph-sound-aʊ');


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


diphSoundɪə.addEventListener('click',(evt) => 
{
    evt.preventDefault(); 
    ɪə.play();
})

diphSoundeɪ.addEventListener('click',(evt) => 
{
    evt.preventDefault(); 
    eɪ.play();
})

diphSoundʊə.addEventListener('click',(evt) => 
{
    evt.preventDefault(); 
    ʊə.play();
})

diphSoundɔɪ.addEventListener('click',(evt) => 
{
    evt.preventDefault(); 
    ɔɪ.play();
})

diphSoundəʊ.addEventListener('click',(evt) => 
{
    evt.preventDefault(); 
    əʊ.play();
})

diphSoundeə.addEventListener('click',(evt) => 
{
    evt.preventDefault(); 
    eə.play();
})

diphSoundɪə.addEventListener('click',(evt) => 
{
    evt.preventDefault(); 
    ɪə.play();
})

diphSoundaɪ.addEventListener('click',(evt) => 
{
    evt.preventDefault(); 
    aɪ.play();
})

diphSoundaʊ.addEventListener('click',(evt) => 
{
    evt.preventDefault(); 
    aʊ.play();
})

