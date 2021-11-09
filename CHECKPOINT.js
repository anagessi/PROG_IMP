let comida;
let t_padrao;
let tempo;

if (comida = `Pipoca`) {
    t_padrao = 10;
}
else if (comida = `Macarrão`) {
    t_padrao = 8;
}
else if (comida = `Carne`) {
    t_padrao = 15;
}
else if (comida = `Feijão`) {
    t_padrao = 12;
}
else if (comida = 'Brigadeiro') {
    t_padrao = 8;
}
else {
    t_padrao = 0;
}

function menuMicroondas (comida, tempo) {
    if(comida == `Pipoca` || comida == `Macarrão` || comida == `Carne` || comida == `Feijão` || comida == `Brigadeiro`) {
        if(tempo > 2*t_padrao && tempo <= 3*t_padrao){
            console.log (`Sua comida queimou`);
        }
        else if(tempo < t_padrao){
            console.log(`Tempo Insuficiente`);
        }
        else if (tempo > 3*t_padrao){
            console.log (`Kabumm!`);
        }
        else if (tempo = t_padrao){
            console.log(`Prato bom, bom apetite`);
        }
    }  
    else {
        console.log (`Prato Inexistente`)
    }

}

menuMicroondas (`Arroz`, 5);