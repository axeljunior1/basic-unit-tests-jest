const computeAge = require("../src/computeAge");

test('Calcul de l age avec le mois courant inferieur au mois de naissance', () => {
    // TODO: Tester fizzbuzz()
    expect(computeAge(new Date(2000,4,23),new Date(2022,1,17))).toBe(21);
});

test('Calcul de l age avec le mois courant supperieur au mois de naissance', () => {
    // TODO: Tester fizzbuzz()
    expect(computeAge(new Date(2000,4,23),new Date(2022,5,15))).toBe(22);
});

test('Calcul de l age avec les mois de niss et mois courant egaux: jourNaiss>jourCourant', () => {
    // TODO: Tester fizzbuzz()
    expect(computeAge(new Date(2000,4,23),new Date(2022,4,15))).toBe(21);
});

test('Calcul de l age avec les mois de niss et mois courant egaux: jourNaiss < jourCourant', () => {
    // TODO: Tester fizzbuzz()
    expect(computeAge(new Date(2000,4,23),new Date(2022,4,25))).toBe(22);
});
