// Read values from localStorage safely. getItem may return null,
// so provide a default and avoid accessing .toString without calling it.
const rawComp1 = localStorage.getItem('comp1');
const rawComp2 = localStorage.getItem('comp2');
const tempo = localStorage.getItem('tempo');

// Ensure we have strings (and trim accidental whitespace).
const comp1 = String(rawComp1);
const comp2 = String(rawComp2);

// Update DOM if elements exist on the page.
const comp1El = document.querySelector('#comp1 .nome');
const comp2El = document.querySelector('#comp2 .nome');
if (comp1El) comp1El.textContent = comp1;
if (comp2El) comp2El.textContent = comp2;

// Update tempo display (index.html uses section#tempo > h1)
const tempoEl = document.querySelector('#tempo p');
tempoEl.textContent = `0${tempo}:00`;

// Variáveis globais
let interval = null;
let pausar = false;
let min = 0;
let seg = 0;

tempoEl.addEventListener('click', () => {

    // 1) Se não está contando NEM pausado → inicia
    if (interval === null && pausar === false) {
        iniciarContagem();
        return;
    }

    // 2) Se está rodando → pausa
    if (!pausar) {
        pausar = true;
        clearInterval(interval);
        interval = null;
        return;
    }

    // 3) Se está pausado → continua
    if (pausar) {
        pausar = false;
        continuarContagem();
    }
});

function iniciarContagem() {
    [min, seg] = tempoEl.textContent.split(':').map(Number);
    interval = setInterval(tick, 1000);
}

function continuarContagem() {
    interval = setInterval(tick, 1000);
}

function tick() {
    if (seg === 0) {
        if (min === 0) {
            clearInterval(interval);
            interval = null;
            return;
        }
        min--;
        seg = 59;
    } else {
        seg--;
    }

    const minStr = String(min).padStart(2, '0');
    const segStr = String(seg).padStart(2, '0');

    tempoEl.textContent = `${minStr}:${segStr}`;
}

const btn = document.querySelectorAll('.comp i, .comp .van i')


// funcionamento dos botoes
btn.forEach(b => {
    let meuElemento = b;
    b.addEventListener('click', function(event) {
        const clickX = event.clientX;

        const rect = meuElemento.getBoundingClientRect();

        const meioDoElementoX = rect.left + rect.width / 2;

        if (clickX < meioDoElementoX) {
            let txt = Number(b.textContent)
            txt -=1
            b.textContent = txt
        } else {
            let txt = Number(b.textContent)
            txt +=1
            b.textContent = txt
        }
    })
});

const retorna = document.querySelector('#tempo i');

retorna.addEventListener('click', () => {
    window.location = "index.html"
})

document.addEventListener('keypress', (ev) => {
    let query = ev.key
    let a;

    switch (query) {
    // azul
        case 'q':
            // -- vantagem
            a  = Number(btn[0].textContent)
            a--
            btn[0].textContent = a
            break;
        case 'w':
            // ++ vantagem
            a  = Number(btn[0].textContent)
            a++
            btn[0].textContent = a
            break;

        case 'a':
            // ++ desvantagem
            a  = Number(btn[1].textContent)
            a--
            btn[1].textContent = a
            break;

        case 's':
            // -- desvantagem
            a  = Number(btn[1].textContent)
            a++
            btn[1].textContent = a
            break;
        case 'z':
            // -- pontos
            a  = Number(btn[2].textContent)
            a--
            btn[2].textContent = a
            break;

        case 'x':
            // ++ pontos
            a  = Number(btn[2].textContent)
            a++
            btn[2].textContent = a
            break;

    // vermelho

        case 'o':
            // -- vantagem
            a  = Number(btn[3].textContent)
            a--
            btn[3].textContent = a
            break;
        case 'p':
            // ++ vantagem
            a  = Number(btn[3].textContent)
            a++
            btn[3].textContent = a
            break;

        case 'k':
            // ++ desvantagem
            a  = Number(btn[4].textContent)
            a--
            btn[4].textContent = a
            break;

        case 'l':
            // -- desvantagem
            a  = Number(btn[4].textContent)
            a++
            btn[4].textContent = a
            break;
        case 'n':
            // -- pontos
            a  = Number(btn[5].textContent)
            a--
            btn[5].textContent = a
            break;

        case 'm':
            // ++ pontos
            a  = Number(btn[5].textContent)
            a++
            btn[5].textContent = a
            break;

        default:
            console.log('tecla nao encontrada')
            break;
    }
})