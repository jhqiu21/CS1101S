
// Question 1
/*

let result = list(null, null, null);
set_head(tail(tail(result)), tail(result));
set_head(tail(result), result);
display_list(result);

let x = pair(null, null);
let y = pair(null, x);
let result = pair(null , y);
set_head(y, result);
set_head(x, y);

*/

// Mutable List Processing

function mutable_reverse(xs) {
    if (is_null(xs) || is_null(tail(xs))) {
        return xs;
    } else {
        let temp = mutable_reverse(tail(xs));
        set_tail(tail(xs), xs);
        set_tail(xs, null);
        return temp;
    }
}

let as = list(1, 2, 3, 4, 5);
let bs = mutable_reverse(as);
// bs; // equal to list(5, 4, 3, 2, 1).
// as; // equal to list(1)

function mutable_remove(v, xs) {
    if (is_null(xs)) {
        return xs;
    } else if (head(xs) === v) {
        // Main different
        return tail(xs);
    } else {
        let rest = mutable_remove(v, tail(xs));
        set_tail(xs, rest);
        return xs;
    }
}

function mutable_remove_all(v, xs) {
    if (is_null(xs)) {
        return xs;
    } else if (head(xs) === v) {
        return mutable_remove_all(v, tail(xs));
    } else {
        let rest = mutable_remove_all(v, tail(xs));
        set_tail(xs, rest);
        return xs;
    }
}
// Example usage
let ras = list(1, 2, 3, 4, 3, 5, 3, 6, 5, 7, 10, 5, 4, 7, 5);
let result = mutable_remove_all(3, ras);
display(result); 
display(rs);

function mutable_merge(xs) {
    
}
