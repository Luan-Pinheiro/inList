document.getElementById('tab').style.display = 'none';

let res = document.querySelector('div#res');
let vecN = [];
let numeroBase = document.querySelector('input#numerobase');


function verificar(){;
    (numeroBase.value < 101 && numeroBase.value > 0 && numeroBase.value.length > 0) ? inserir() : alerta();
}

function retornaPresenca(vetor, numero){
    let existeNoArray;
    
    if(vetor.indexOf(numero) != -1){
        existeNoArray = true;
    }else{
        existeNoArray = false;
    }
    
    return existeNoArray;
}
function inserir(){
    document.getElementById('tab').style.display = 'block';
    let insertbar = document.getElementById('insertbar');
    let existeNoArray = retornaPresenca(vecN, numeroBase.value);
    if(existeNoArray)
        alerta();
    else{
        vecN.push(numeroBase.value);
        let item = document.createElement('option');
        item.text = `O número ${numeroBase.value} foi adicionado a lista`;
        insertbar.appendChild(item);
        res.innerHTML = '';
    }
    numeroBase.value = '';
    numeroBase.focus();
}

function finalizar(){
    vecN.sort();
    res.innerHTML = `<p>Ao todos existem ${vecN.length} númeors cadastrados</p>`;
    res.innerHTML += `<p>O maior termo é o número ${vecN[vecN.length-1]}</p>`;
    res.innerHTML += `<p>O menor termo é o número ${vecN[0]}</p>`;
    res.innerHTML += `<p>Os valores são [${vecN}]</p>`;


}
function alerta(){
    alert("Insira um valor válido ainda não inserido ou dentro do intervalo");
    return;
}
function limpar(){
    location.reload();
}