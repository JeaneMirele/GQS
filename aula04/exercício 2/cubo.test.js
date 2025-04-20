const { cubo } = require('./volumeCubo.js') ;

describe('Teste para validar a função cubo', () => {
    test('Se eu enviar um valor inteiro, a função deve retornar o seu cubo', () => {
        expect(cubo(2)).toBe(8);
    });

    test('Se eu enviar um valor real, a função deve retornar seu cubo', () => {
        expect(cubo(4.5)).toBeCloseTo(91.125);
    })

    test("Se o valor for 0  ou negativo, exibe mensagem de erro", () => {
        expect(() => cubo(0)).toThrow("Erro, valor inválido");
    })


    test("Se o valor passado não for número inteiro ou real, gera um erro", () => {
        expect(() => cubo("text")).toThrow("O valor deve ser um número inteiro ou real.");
    })

});
