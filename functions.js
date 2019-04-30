function* fibonacci(n, current = 0, next = 1) {
    if (typeof n !== "number" || typeof current !== "number" || typeof next !== "number") return alert("WRONG!")
    if (n === 0) {
        return current;
    }
    yield current;
    yield* fibonacci(n - 1, next, current + next);
}


module.exports = [...fibonacci(5)]