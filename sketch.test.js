const {sum, prod } = require('./sketch');
// const diff = require('./sketch');

// test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3);
// });

test('adds 1 + 2 to equal 3', sumTest);

function sumTest() {
    expect(sum(1,2)).toBe(3);
} 

test('prod function exists',()=>{
    expect(prod).toBeDefined();
});

test('prod calculate 2 * 10 = 20',()=>{
    expect(prod(2,10)).toBe(20);
});