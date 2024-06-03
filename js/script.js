// vowel sounds
const pElm = document.querySelectorAll('.section-1 p');


// sounds added here
// const test = new Audio("audio/ɪə.mp3");
const aɪ = new Audio("audio/aɪ.wav")
const aʊ = new Audio("audio/aʊ.wav")
const eə = new Audio("audio/eə.wav")
const eɪ = new Audio("audio/eɪ.wav")
const əʊ = new Audio("audio/əʊ.wav")
const ɪə = new Audio("audio/ɪə.wav")
const ɔɪ = new Audio("audio/ɔɪ.wav")
const ʊə = new Audio("audio/ʊə.wav")
// long vowel sounds
const iː = new Audio("audio/iː.wav")
const uː = new Audio("audio/uː.wav")
const ɜː = new Audio("audio/ɜː.wav")
const ɔː = new Audio("audio/ɔː.wav")
const ɑː = new Audio("audio/ɑː.wav")
// short sound
const ɪ = new Audio("audio/ɪ.wav")
const ʊ = new Audio("audio/ʊ.wav")
const e = new Audio("audio/e.mp3")
const ə = new Audio("audio/ə.wav")
const æ = new Audio("audio/æ.wav")
const ʌ = new Audio("audio/ʌ.wav")
const ɒ = new Audio("audio/ɒ.wav")
// consonant sounds
const p = new Audio("audio/p.wav");
const b = new Audio("audio/b.wav");
const t = new Audio("audio/t.wav");
const d = new Audio("audio/d.wav");
const tʃ = new Audio("audio/tʃ.wav");
const dʒ = new Audio("audio/dʒ.wav");
const k = new Audio("audio/k.wav");
const g = new Audio("audio/g.wav");
const f = new Audio("audio/f.wav");
const v = new Audio("audio/v.wav");
const θ = new Audio("audio/θ.wav");
const ð = new Audio("audio/ð.wav");
const s = new Audio("audio/s.wav");
const z = new Audio("audio/z.wav");
const ʃ = new Audio("audio/ʃ.wav");
const ʒ = new Audio("audio/ʒ.wav");
const m = new Audio("audio/m.wav");
const n = new Audio("audio/n.wav");
const ŋ = new Audio("audio/ŋ.wav");
const h = new Audio("audio/h.wav");
const l = new Audio("audio/l.wav");
const r = new Audio("audio/r.wav");
const w = new Audio("audio/w.wav");
const j = new Audio("audio/j.wav");


// 
pElm.forEach((elm) =>
{
    
    elm.addEventListener('click',(evt) => 
    {
        
        evt.preventDefault()
        switch(true)
        {
            case evt.target.classList[0] === 'monoph-long-sounds-iː' : 
              iː.play();
            break;
            case evt.target.classList[0] === 'monoph-long-sounds-uː' : 
              uː.play();
            break;
            case evt.target.classList[0] === 'monoph-long-sounds-ɜː' : 
              ɜː.play();
            break;
            case evt.target.classList[0] === 'monoph-long-sounds-ɔː' : 
              ɔː.play();
             break;
            case evt.target.classList[0] === 'monoph-long-sounds-ɑː' : 
              ɑː.play();
            break;
            // short sounds
            case evt.target.classList[0] === 'monoph-short-sounds-ɪ' : 
              ɪ.play();
            break;
            case evt.target.classList[0] === 'monoph-short-sounds-ʊ' : 
              ʊ.play();
            break;
            case evt.target.classList[0] === 'monoph-short-sounds-e' : 
              e.play();
            break;
            case evt.target.classList[0] === 'monoph-short-sounds-ə' : 
              ə.play();
            break;
            case evt.target.classList[0] === 'monoph-short-sounds-æ' : 
              æ.play();
            break;
            case evt.target.classList[0] === 'monoph-short-sounds-ʌ' : 
              ʌ.play();
            break;
            case evt.target.classList[0] === 'monoph-short-sounds-ɒ' : 
              ɒ.play();
            break;
            // dipththongs
            case evt.target.classList[0] === 'diph-sound-ɪə' : 
              ɪə.play();
            break;
            case evt.target.classList[0] === 'diph-sound-eɪ' : 
              eɪ.play();
            break;
            case evt.target.classList[0] === 'diph-sound-ʊə' : 
              ʊə.play();
            break;
            case evt.target.classList[0] === 'diph-sound-ɔɪ' : 
              ɔɪ.play();
            break;
            case evt.target.classList[0] === 'diph-sound-əʊ' : 
              əʊ.play();
            break;
            case evt.target.classList[0] === 'diph-sound-eə' : 
              eə.play();
            break;
            case evt.target.classList[0] === 'diph-sound-aɪ' : 
              aɪ.play();
            break;
            case evt.target.classList[0] === 'diph-sound-aʊ' : 
              aʊ.play();
            break;
            // consonant sounds 
            case evt.target.classList[0] === 'voiceless-sounds-p' : 
              p.play();
            break;
            case evt.target.classList[0] === 'voiced-sounds-b' : 
              b.play();
            break;
            case evt.target.classList[0] === 'voiceless-sounds-t' : 
              t.play();
            break;
            case evt.target.classList[0] === 'voiced-sounds-d' : 
              d.play();
            break;
            case evt.target.classList[0] === 'voiceless-sounds-tʃ' : 
              tʃ.play();
            break;
            case evt.target.classList[0] === 'voiced-sounds-dʒ' : 
            dʒ.play();
            break;
            case evt.target.classList[0] === 'voiceless-sounds-k' : 
             k.play();
            break;
            case evt.target.classList[0] === 'voiced-sounds-g' : 
             g.play();
            break;
            case evt.target.classList[0] === 'voiceless-sounds-f' : 
             f.play();
            break;
            case evt.target.classList[0] === 'voiced-sounds-v' : 
             v.play();
            break;
            case evt.target.classList[0] === 'voiceless-sounds-θ' : 
              θ.play();
            break;
            case evt.target.classList[0] === 'voiced-sounds-ð' : 
              ð.play();
            break;
            case evt.target.classList[0] === 'voiceless-sounds-s' : 
              s.play();
            break;
            case evt.target.classList[0] === 'voiced-sounds-z' : 
              z.play();
            break;
            case evt.target.classList[0] === 'voiceless-sounds-ʃ' : 
              ʃ.play();
            break;
            case evt.target.classList[0] === 'voiced-sounds-ʒ' : 
            ʒ.play();
            break;
            case evt.target.classList[0] === 'voiced-sounds-m' : 
            m.play();
            break;
            case evt.target.classList[0] === 'voiced-sounds-n' : 
            n.play();
            break;
            case evt.target.classList[0] === 'voiced-sounds-ŋ' : 
            ŋ.play();
            break;
            case evt.target.classList[0] === 'voiced-sounds-h' : 
            h.play();
            break;
            case evt.target.classList[0] === 'voiced-sounds-l' : 
            l.play();
            break;
            case evt.target.classList[0] === 'voiced-sounds-r' : 
            r.play();
            break;
            case evt.target.classList[0] === 'voiced-sounds-w' : 
            w.play();
            break;
            case evt.target.classList[0] === 'voiced-sounds-j' : 
            j.play();
            break;
        }
    })
})



