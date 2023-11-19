// Stream 

function stream_tail(stream) {
    return tail(stream)();
}

function ones_stream() {
    return pair(1, ones_stream);
}

function enum_stream(low, high) {
    return low > high
        ? null
        : pair(low, () => enum_stream(low + 1, high));
}

function stream_ref(s, n) {
    return n === 0
        ? head(s)
        : stream_ref(stream_tail(s), n - 1);
}

function eval_stream(s, n) {
    return n === 0
        ? null
        : pair(head(s), eval_stream(stream_tail(s), n - 1));
}

function fib_stream_ver1(a, b) {
    return pair(a, () => fib_stream_ver1(b, a + b));
}

function more(a, b) {
    // return 1, 1, 2, 1, 2, 3, 1, 2, 3, 4, 1...
    return a > b
        ? more(1, b + 1)
        : pair(a, () => more(a + 1, b));
}

function replace(s, a, b) {
    // create a new stream by replacing in a given stream a 
    // particular value by another value
    return is_null(s) 
        ? null
        : pair(head(s) === a ? a : b, () => replace(stream_tail(s), a, b));
}

function list_to_inf_stream(xs) {
    function helper(ys) {
        return is_null(ys)
            ? helper(ys)
            : pair(head(ys), () => list_to_inf_stream(tail(ys)));
    }
    return is_null(xs)
        ? null
        : helper(xs);
}

function add_streams(s1, s2) {
    if (is_null(s1)) {
        return s2;
    } else if (is_null(s2)) {
        return s1;
    } else {
        return pair(head(s1) + head(s2), 
                    () => add_streams(stream_tail(s1), 
                                      stream_tail(s2)));
    }
}
// Important, cook it with memorization
const fib_stream_ver2 = pair(0, 
                            pair(1,
                                () => add_streams(stream_tail(fib_stream_ver2),
                                                  fib_stream_ver2)));






function stream_map(f, s) {
    return is_null(s)
        ? null
        : pair(f(head(s)), () => stream_map(f, stream_tail(s)));
}

function stream_filter(p, s) {
    return is_null(s)
        ? null
        : p(head(s))
            ? pair(head(s), () => stream_filter(p, stream_tail(s)))
            : stream_filter(p, stream_tail(s));
}


function make_alternating_stream(s) {
    return is_null(s)
        ? null
        : is_null(stream_tail(s))
            ? s
            : pair( head(s), 
                    () => pair(-1 * head(stream_tail(s)), 
                                () => make_alternating_stream(
                                    stream_tail(stream_tail(s)))));
}

function skip_stream(s) {
    
// takes an infinite stream as argument and returns an infinite 
// stream that contains only every second element of the given stream.
    return pair(head(s), () => skip_stream(stream_tail(stream_tail(s))));
}

function partial_sum(s) {
    
}