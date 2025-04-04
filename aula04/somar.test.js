const { somar } = require('./somar.js') ;



describe('teste para validar a função Somar', () => {
    test('Somar corretamente inteiros positivos', () =>{
        expect(somar(2,2)).toBe(4);
    });

    test('Somar com números negativos', () =>{
        expect(somar(2,-2)).toBe(0);
    });


});

