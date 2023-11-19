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


function mutable_append(xs, ys) {
    let p = xs;
    while(!is_null(tail(p))) {
        p = tail(p);
    }
    set_tail(p, ys);
    return xs;
}


let A_node = list("A");
let B_node = list("B");
let C_node = list("C");
let D_node = list("D");
let E_node = list("E");
set_tail(A_node, list(B_node, C_node));
set_tail(B_node, list(A_node, C_node));
set_tail(C_node, list(B_node, A_node, D_node));
set_tail(D_node, list(C_node));

function is_linked(x, y) {
    let str = head(y);
    if (is_null(x)) {
        return false;
    } else {
        return head(x) === y
            ? true
            : is_linked(tail(x), y);
    }
}

