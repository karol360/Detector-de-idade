function verificar(){
    var data = new Date()
    var ano = data.getFullYear() //ano atual
    var anoNascimento = window.document.getElementById('blocoano')
    var resultado = window.document.querySelector('div#resultado')

    if(anoNascimento.value.length == 0 || Number(anoNascimento.value)> ano){
        window.alert('[ERRO] Digite o ano novamente!!')
    } else{
        var valorSexo = document.getElementsByName('sexo')
        var idade = ano - Number(anoNascimento.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        //HOMEM

        if (valorSexo[0].checked){
           genero='homem'

           if(idade >= 0 && idade < 5){
            //bebe
                img.setAttribute('src','./bebe-homem.jpg')
           }else if(idade >=5 && idade < 15 ){
            //criança
                img.setAttribute('src', './crianca-masculina.avif')
           }else if(idade >= 15 && idade < 50){
            //jovem
                img.setAttribute('src','./jovem-homem.avif')
           }else if(idade >= 50){
            //idoso
                img.setAttribute('src','./idoso-homem.avif')
           }

        //MULHER

        }else if(valorSexo[1].checked){
           genero='mulher'

           if(idade >= 0 && idade < 5){
            //bebe
                img.setAttribute('src','./bebe-mulher.jpg')
           }else if(idade >=5 && idade < 15 ){
            //criança
                img.setAttribute('src', './crianca-feminina.jpg')
           }else if(idade >= 15 && idade < 50){
            //jovem
                img.setAttribute('src','./jovem-mulher.avif')
           }else if(idade >= 50){
            //idoso
                img.setAttribute('src','./idoso-mulher.jpg')
           }
        }
        resultado.innerHTML=`Identificamos um/a <strong>${genero}</strong> de <strong>${idade}</strong> anos.`
        resultado.appendChild(img)
    }
}