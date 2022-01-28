function contar(){
var ini = document.getElementById('txti')
var fim = document.getElementById('txtf')
var passo = document.getElementById('txtp')
var res = document.getElementById('res')

if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0)

{window.alert('[ERRO] faltam dados')}

else {res.innerHTML = ('contando:')
var i = Number(ini.value)
var f = Number(fim.value)
var p = Number(passo.value)
    if(1 < f)
    //contagem crecente
    { for(var c = i; c <= f; c += p){
    res.innerHTML += '\u{1F449} ' + c + ' '  

    }
} else
 //contagem decrecente
{for (var c = i; c >=f; c-= p ){
    res.innerHTML += '\u{1F449} ' + c + ' '  
 }
}res.innerHTML += '\u{1f3c1}'
}
}