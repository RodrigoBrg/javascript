function Contar(){
    let ini = document.querySelector('input#txti')
    let fim = document.querySelector('input#txtf')
    let passo = document.querySelector('input#txtp')
    let res = document.querySelector('div#res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam dados!')
    }else {

        res.innerHTML = 'Contando: '

        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(passo.value)

        for(let c = i; c <= f; c+= p){
            res.innerHTML += ` ${c}`
        }
    }   
}