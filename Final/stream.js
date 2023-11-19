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

function fib_stream(a, b) {
    return pair(a, () => fib_stream(b, a + b));
}

function more(a, b) {
    // return 1, 1, 2, 1, 2, 3, 1, 2, 3, 4, 1...
    return a > b
        ? more(1, b + 1)
        : pair(a, () => more(a + 1, b));
}

function replace()

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