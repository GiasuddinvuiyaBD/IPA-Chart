const diphSoundɪə = document.querySelector('.diph-sound-ɪə');
const diphSoundeɪ = document.querySelector('.diph-sound-eɪ');
const diphSoundʊə = document.querySelector('.diph-sound-ʊə');
const diphSoundɔɪ = document.querySelector('.diph-sound-ɔɪ');
const diphSoundəʊ = document.querySelector('.diph-sound-əʊ');
const diphSoundeə = document.querySelector('.diph-sound-eə');
const diphSoundaɪ = document.querySelector('.diph-sound-aɪ');
const diphSoundaʊ = document.querySelector('.diph-sound-aʊ');
// monophthongs 
const monophLongSoundsiː = document.querySelector(".monoph-long-sounds-iː");
const monophLongSoundsuː = document.querySelector(".monoph-long-sounds-uː");
const monophLongSoundsɜː = document.querySelector(".monoph-long-sounds-ɜː");
const monophLongSoundsɔː = document.querySelector(".monoph-long-sounds-ɔː");
const monophLongSoundsɑː = document.querySelector(".monoph-long-sounds-ɑː");

const monophShortSoundsɪ = document.querySelector(".monoph-short-sounds-ɪ");
const monophShortSoundsʊ = document.querySelector(".monoph-short-sounds-ʊ");
const monophShortSoundse = document.querySelector(".monoph-short-sounds-e");
const monophShortSoundsə = document.querySelector(".monoph-short-sounds-ə");
const monophShortSoundsæ = document.querySelector(".monoph-short-sounds-æ");
const monophShortSoundsʌ = document.querySelector(".monoph-short-sounds-ʌ");
const monophShortSoundsɒ = document.querySelector(".monoph-short-sounds-ɒ");
// consonant 
const voicelessSoundsp = document.querySelector('.voiceless-sounds-p');
const voicelessSoundst = document.querySelector('.voiceless-sounds-t');
const voicelessSoundstʃ = document.querySelector('.voiceless-sounds-tʃ');
const voicelessSoundsk = document.querySelector('.voiceless-sounds-k');
const voicelessSoundsf = document.querySelector('.voiceless-sounds-f');
const voicelessSoundsθ = document.querySelector('.voiceless-sounds-θ');
const voicelessSoundss = document.querySelector('.voiceless-sounds-s');
const voicelessSoundsʃ = document.querySelector('.voiceless-sounds-ʃ');

const voicedSoundsb = document.querySelector('.voiced-sounds-b')
const voicedSoundsd = document.querySelector('.voiced-sounds-d')
const voicedSoundsdʒ = document.querySelector('.voiced-sounds-dʒ')
const voicedSoundsg = document.querySelector('.voiced-sounds-g')
const voicedSoundsv = document.querySelector('.voiced-sounds-v')
const voicedSoundsð = document.querySelector('.voiced-sounds-ð')
const voicedSoundsz = document.querySelector('.voiced-sounds-z')
const voicedSoundsʒ = document.querySelector('.voiced-sounds-ʒ')
const voicedSoundsm = document.querySelector('.voiced-sounds-m')
const voicedSoundsn = document.querySelector('.voiced-sounds-n')
const voicedSoundsŋ = document.querySelector('.voiced-sounds-ŋ')
const voicedSoundsh = document.querySelector('.voiced-sounds-h')
const voicedSoundsl = document.querySelector('.voiced-sounds-l')
const voicedSoundsr = document.querySelector('.voiced-sounds-r')
const voicedSoundsw = document.querySelector('.voiced-sounds-w')
const voicedSoundsj = document.querySelector('.voiced-sounds-j')


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

