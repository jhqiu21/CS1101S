// 2013 Function Questions

// Q2 Functioning Numbers

function one(x) {
    return x + 1;
}

function two(x) {
    return x + 2;
}

function three(x) {
    return x + 3;
}

// Q2(a)

function function_to_number(fun) {
    return fun(0);
}

function number_to_function(num) {
    return x => num + x;
}

// function_to_number(number_to_function(3));

// Q2(b)

function functional_plus(fun1, fun2) {
    return x => fun1(fun2(x));
}

//function_to_number(functional_plus(one, two));

// Q2(c)

function minus_one(f) { 
    /* pre-decleared */ 
    return number_to_function(function_to_number(f) - 1);
}

function is_zero(f) {
    /* pre-decleared */
    return function_to_number(f) === 0;
}

function functional_times(fun1, fun2) {
    if (is_zero(fun1) || is_zero(fun2)) {
        return x => x;
    } else {
        return functional_plus(fun2, functional_times(minus_one(fun1), fun2));
    }
}

// function_to_number(functional_times(two, three));
// function_to_number(functional_times(minus_one(three), minus_one(three)));


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