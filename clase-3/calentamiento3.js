function bmi(peso, altura) {
    let total = peso / altura**2;
    if( total < 18.5){
        return "Bajo de peso";
    }
    else if (total >=18.5 && total <= 24.4){
        return "Normal";
    }
    else if (total >=25 && total <= 29.9){
        return "Sobrepeso";
    }
    else if (total >=30){
        return "Obeso";
    }
}

console.log(bmi(65, 1.8));
console.log(bmi(72, 1.6));
console.log(bmi(52, 1.75));
console.log(bmi(135, 1.7));
    
