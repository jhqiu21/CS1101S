
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

function mutable_remove(v, xs) {
    let len = length(xs);
    
}

function mutable_remove_all(v, xs) {
    let len = length(xs);
    if (is_null(xs)) {
        return xs;
    } else if (is_null(tail(xs))) {
        return v === head(xs)
            ? null
            : xs;
    } else {
        
    }
}



let as = list(1, 2, 3, 4, 5);
let bs = mutable_reverse(as);
bs; // equal to list(5, 4, 3, 2, 1).
// as; // equal to list(1)