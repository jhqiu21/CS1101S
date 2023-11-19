// Continuation Passing Style

/*

The CPS style follows a simple rule: Functions should never return 
a value other than undefined. Instead, have an additional argument,
the continuation function that is applied to the result.

*/

function app(current_xs, ys, c) {
    return is_null(current_xs)
           ? c(ys)
           : app(tail(current_xs), ys,
                 x => c(pair(head(current_xs), x)));
}

function append_iter(xs, ys) {
    return app(xs, ys, x => x);
}

function make_list(i, xs) {
    return i === 0 
           ? xs 
           : make_list(i - 1, pair(i, xs));
}

// make_list(100000, null);
// append_iter(make_list(100000, null), list(100001));
// append_iter(list(1, 2, 3, 4, 5), list(6, 7, 8, 9));

function plus_cps(x, y, ret) {
    return ret(x + y);
}

function sum_cps(x, y, z, ret) {
    return plus_cps(x, y,
                    x_plus_y => plus_cps(x_plus_y, z, ret));
}

// sum_cps(1, 2, 3, display); // displays the value 6


function length_cps(xs, ret) {
    if (is_null(xs)) {
        return ret(0);
    } else {
        return length_cps(tail(xs),
        tail_result =>
        ret(1 + tail_result));
    }
}
length_cps(list(10, 20, 30), display);