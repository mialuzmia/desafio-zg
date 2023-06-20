let botao = document.getElementById("box-enviar")
botao.addEventListener('click',calcularTipoTriangulo)


function calcularTipoTriangulo() {
    
    let boxLado1 = document.getElementById("box-num1");
    let boxLado2 = document.getElementById("box-num2");
    let boxLado3 = document.getElementById("box-num3");

    let res = document.getElementById('res')
    let resImg = document.getElementById('res-img')

    let lado1 = Number(boxLado1.value)
    let lado2 = Number(boxLado2.value)
    let lado3 = Number(boxLado3.value)

    if (boxLado1.value.length == 0 || boxLado2.value.length == 0 || boxLado3.value.length == 0) {
        alert('COMPLETE TODOS OS CAMPOS.')
    } else if(lado1 === lado2 && lado2 === lado3){
        res.innerHTML = 'Resultado: equilátero'
        resImg.setAttribute("src","img/equilatero.png")
    } else if(lado1 === lado2 || lado2 === lado3 || lado3 === lado1 ){
        res.innerHTML = 'Resultado: isóceles'
        resImg.setAttribute("src","img/isoceles.png")
    }else{
        res.innerHTML = 'Resultado: escaleno'
        resImg.setAttribute("src","img/escaleno.png")
    }
   
}
