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

//make_list(100000, null);

append_iter(make_list(100000, null), list(100001));
