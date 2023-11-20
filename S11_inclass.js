
// Stream of Pairs

// Q1
function stream_pairs(s) {
    return is_null(s)
        ? null
        : stream_append(
            stream_map(
                sn => pair(head(s), sn),
                stream_tail(s)),
            stream_pairs(stream_tail(s)));
}

function ints(s, n) {
    return s > n
        ? null 
        : pair(s, () => ints(s + 1, n));
}

const five = ints(1, 5);
eval_stream(stream_pairs(five), 10);

