const sum = require('./sketch');
// const diff = require('./sketch');

// test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3);
// });

test('adds 1 + 2 to equal 3', sumTest);

function sumTest() {
    expect(sum(1,2)).toBe(3);
} 

// test('diff 4 - 2 to equal 2', diffTest);

// function diffTest(){
//     expect(diff(4,2)).toBe(2);
// }