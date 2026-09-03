function dibujarGraficoConsumo(pasos) {
    let grafico = "";
    for(let i = 0; i < pasos; i++){
        grafico = grafico + "██";
        console.log(grafico);
    }
}

dibujarGraficoConsumo(3);