function nota(n1,n2,n3){
    somaNecessaria = 18;
    somaNotas = n1+n2+n3;
    difNotas = somaNecessaria - somaNotas;

    if(difNotas <= 0){
        return "Aluno já atingiu a nota necessária para aprovação";
    }

    if(difNotas > 0){
        return parseFloat(difNotas.toFixed(1));
    }
}
module.exports = {nota};