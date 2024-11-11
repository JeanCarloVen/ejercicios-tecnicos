/*
Enunciado Ejercicio 60:
Programa que calcule el beneficio de un producto despues de restarle:
- 20% de descuento
- 21% de iva
- 15% de irpf
 
*/

const product = {
    price : 100,
    descount : 20,
    iva : 21,
    irpf : 15
}

function profitForCostumer(data){

    let priceDescount = data.price - data.price*data.descount/100;

    let priceDescIVa = priceDescount - priceDescount * data.iva/100;
    
    let priceDescIVaIRPF = priceDescIVa - priceDescIVa * data.irpf/100;

    console.log(priceDescIVaIRPF)

    let beneficio = data.price - priceDescIVaIRPF

    console.log(beneficio);

}

profitForCostumer(product)