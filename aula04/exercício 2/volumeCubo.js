function cubo(aresta){
    if(aresta === 0 || aresta < 0){
        throw new Error("Erro, valor inválido");
    }

    if (typeof aresta !== "number" || isNaN(aresta)) {
        throw new Error("O valor deve ser um número inteiro ou real.");
    }
    
    return aresta**3;

}

module.exports = {cubo};