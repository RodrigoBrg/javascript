function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano   ){
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ``
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            gênero = 'Homem'
            if(idade >=0 && idade < 12){
                //Criança
                img.setAttribute('src', 'fotoCriançaMenino.png')

            } else if (idade < 21){
                //]ovemm
                img.setAttribute('src', 'fotoJovemHomem.png')

            } else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'fotoHomemAdulto.png')

            } else{
                //idoso
                img.setAttribute('src', 'fotoHomemIdoso.png')
            }

        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if(idade >=0 && idade < 12){
                //Criança
                img.setAttribute('src', 'fotoCriançaMenina.png')

            } else if (idade < 21){
                //]ovemm
                img.setAttribute('src', 'fotoJovemMulher.png')

            } else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'fotoMulherAdulta.png')

            } else{
                //idoso
                img.setAttribute('src', 'fotoMulherIdosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}