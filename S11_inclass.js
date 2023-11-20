
// Stream of Pairs

// Q1(a)
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

// Q1(c)
const integers = pair(1, () => integers); // An Infinite Stream
// const s2 = stream_pairs(integers); // Runs forever

// Q1(d)

function stream_append_pickle(xs, ys) {
    // expect second arguement to be wrapped in a nullary function
    return is_null(xs)
        ? ys()
        : pair(head(xs), () => stream_append_pickle(stream_tail(xs), ys));
}

function stream_pairs2(s) {
    return is_null(s)
        ? null
        : stream_append_pickle(
            stream_map(
                sn => pair(head(s), sn),
                stream_tail(s)),
            // pass recursive call inside a nullary function as 
            // a second arugrmrnt to stream_append_pickle
            // this pickle will be activated when we reach the empty list
            // at the end of the first arguement list
            () => stream_pairs(stream_tail(s)));
}

const s3 = stream_pairs2(integers);
// eval_stream(s3, 10);