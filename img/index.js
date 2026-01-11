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


        if (valorSexo[0].checked){
           genero='homem'
           if(idade >= 0 && idade < 5){
            
           }
        }else if(valorSexo[1].checked){
           genero='mulher'
        }
        resultado.innerHTML=`genero: ${genero} idade: ${idade}`
    }
}