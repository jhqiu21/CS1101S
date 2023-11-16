// Question 4: Token Rings

let token_ring_1 = list(false, true);
set_tail(tail(token_ring_1), token_ring_1);

let token_ring_2 = list(false, false, false);
set_tail(tail(tail(token_ring_2)), token_ring_2);

function has_token(xs) {
    function helper(xs, ys) {
        if(head(xs)) {
            return true;
        } else {
            if (tail(xs) === ys) {
                return false;
            } else {
                return helper(tail(xs), ys);
            }
        }
    }
    return helper(xs, xs);
}

