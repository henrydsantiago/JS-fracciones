function simplificar(numerador,denominador){
    var maxComunDivisor = function maxComunDivisor(a,b){
      return b ? maxComunDivisor(b, a%b) : a;
    };
    maxComunDivisor = maxComunDivisor(numerador,denominador);
    return [numerador/maxComunDivisor, denominador/maxComunDivisor];
  }

function addFracciones(fracciones){
    let fraccionesString =[]
    for(let i in fracciones){
        let fraccion = fracciones[i].split("+")
        let fr = [];
        let div = [];
        let numerador;
        let denominador;
  
        for(let j in fraccion){
            div = (fraccion[j].split("/"))
            fr.push(div[0])
            fr.push(div[1])
            numerador = (parseInt(fr[0]) * parseInt(fr[3])) + (parseInt(fr[1]) * parseInt(fr[2]))
            denominador = parseInt(fr[1]) * parseInt(fr[3])
          }
          let salida = simplificar(numerador,denominador);
          fraccionesString[i] = salida[0] + "/"+ salida[1]
    }
    return fraccionesString
  }

const fracciones = ["2/6 + 2/6", "7/10 + 13/10"]
let resultado = addFracciones(fracciones)
console.log(resultado)
  