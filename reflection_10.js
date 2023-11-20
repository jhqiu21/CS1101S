// Defined functions in addition to Source 3
function memo_fun(fun) {
    let already_run = false;
    let result = undefined;

    function mfun() {
        if (!already_run) {
            result = fun();
            already_run = true;
            return result;
        } else {
            return result;
        }
    }
    return mfun;
}

function add_streams(s1, s2) {
    return is_null(s1)
        ? s2
        : is_null(s2)
        ? s1
        : pair(head(s1) + head(s2),
               () => add_streams(stream_tail(s1), 
                                 stream_tail(s2)));
}

function mul_streams(s1, s2) {
    return is_null(s1)
        ? s2
        : is_null(s2)
        ? s1
        : pair(head(s1) * head(s2),
               () => mul_streams(stream_tail(s1), 
                                 stream_tail(s2)));
}

function scale_stream(s, f) {
    return stream_map(x => x * f, s);
}

const integers = integers_from(1);
const ones = pair(1, () => ones);


// Q1

const x = stream_map(display, enum_stream(0, 10));
// stream_ref(x, 3);
// stream_ref(x, 5);

function stream_map_optimized(f, s) {
    return is_null(s)
        ? null
        : pair(f(head(s)), 
                memo_fun(() => stream_map_optimized(
                                    f, stream_tail(s))));
}
stream_ref(x, 3);
stream_ref(x, 5);


// Q2

function zip_list_of_stream(xs) {
    return pair(head(head(xs)),
                () => zip_list_of_stream(
                        append(tail(xs), 
                               list(stream_tail(head(xs))))));
}

const one = pair(1, () => one);
const two = pair(2, () => two);
const three = pair(3, () => three);
let ls = list(one, two, three);

eval_stream(zip_list_of_stream(ls), 10);

