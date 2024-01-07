const dia = window.document.getElementById('dia')
const hora = window.document.getElementById('hora')
const minuto = window.document.getElementById('minuto')
const segundo = window.document.getElementById('segundo')

const data_lancamento = '10 jan 2024'

function countDown() {
    const lancamento = new Date (data_lancamento)
    const hoje = new Date ()

    const segundo_total = (lancamento - hoje)/1000;

    const diaTotal = Math.floor (segundo_total / 60 /60 / 24);
    const horaTotal = Math.floor (segundo_total / 60 / 60) %24;
    const minutoTotal = Math.floor (segundo_total / 60) %60;
    const segundoTotal = Math.floor (segundo_total) %60;

    dia.innerHTML = timer (diaTotal)+'D'
    hora.innerHTML = timer (horaTotal)+'H'
    minuto.innerHTML = timer (minutoTotal)+'M'
    segundo.innerHTML = timer (segundoTotal)+'S'
}

function timer( tempo ) {
    return tempo <10? `0${tempo}` : tempo;
}


countDown();
setInterval(countDown, 1000)