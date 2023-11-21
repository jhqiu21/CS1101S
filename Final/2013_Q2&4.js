// 2013 Function Questions




// Q4 Cutting and Pasting

// Can Try to draw CSE Machine ?

// Q4(a)
const f = () => {
    function f(x) {
        return x + 2;
    }
    return f;
};

f()(5); // return 7

// Q4(b)
const g = () => {
    let y = 3;
    function g() {
        return y => y + 2;
    }
    return g;
};

g()()(1); // return 3

// Q4(c)
let z = 1;
function h(z) {
    return z + 1;
}

h(z); // return 2