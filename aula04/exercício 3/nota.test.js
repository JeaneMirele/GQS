const {nota} = require ("./nota.js");

describe("Testes para validar a função nota", () =>{
    test("Se eu enviar valores, o retorno será a nota que falta para o aluno ser aprovado", () =>{
        expect(nota(6.8, 9.4, 0.0)).toBe(1.8);
    })
    test("Se eu enviar notas necessárias, o retorno será que o aluno já foi aprovado", () =>{
        expect(nota(6.0, 5.0, 7.0)).toBe("Aluno já atingiu a nota necessária para aprovação");
    })
    
})