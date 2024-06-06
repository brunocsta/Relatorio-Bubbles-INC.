const lista =[];
const notas = [60,50,60,58,54,54,58,50,53,54,58,48,69,34,55,51,52,44,51,69,64,66,55,52,61,46,31,57,52,44,18,41,53,55,61,51,44];
let maiorNota = 0;
let solucaoMaiorNota;
const melhoresSolucoes = [];
const div = document.getElementById("saidaRelatorio");
function gerarRelatorio(){
    


    for(let i = 0; i < notas.length; i++){
        lista.push(`<p>Solucão #${i}, nota: ${notas[i]} </p>`);
        console.log("Printando indices da lista" + lista[i]);


    };
    div.innerHTML = lista.join("");


    
};

function mostrarMelhorSolucao(){
    for(let i = 0; i < notas.length; i++){
        if(notas[i] >= maiorNota){
            maiorNota = notas[i];
        };
    };

    for(let x = 0; x < notas.length; x++){
        if(notas[x] == maiorNota){
            melhoresSolucoes.push(x);
        };

    }
    console.log(melhoresSolucoes)
    solucaoMaiorNota = notas.indexOf(maiorNota);
    div.innerHTML = `As Solucoes ${melhoresSolucoes.join(" e ")}  tem nota: ${maiorNota}`;
}
