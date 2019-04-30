const fibonacci2 = require('./functions')


test("isArray", () => {
    expect(Array.isArray(['fibonacci2'])).toBe(true);
})

test("expect value inside array", () => {
    expect(fibonacci2[4]).toBe(3)
})

test("is not NaN", () => {
    expect(fibonacci2).not.toBeNaN()
})

test("is not undefinded", () => {
    expect(fibonacci2).toBeDefined()
})