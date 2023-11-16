// Question 5: Subsequence

let s = list (1,2,1,5,8);
let sequence_1 = list (1 ,1 ,5);
let sequence_2 = list (2 ,1 ,1);
let sequence_3 = null;
let sequence_4 = list (1,2,1,5,8);


function is_subsequence(xs, ys) {
    if (is_null(xs) && is_null(ys)) {
        return true;
    } else if (is_null(xs)) {
        return true;
    } else if (is_null(ys)) {
        return false;
    } else {
        return head(xs) === head(ys) 
            ? is_subsequence(tail(xs), tail(ys))
            : is_subsequence(xs, tail(ys));
    }
}


// is_subsequence (sequence_1 , s); // returns true
// is_subsequence (sequence_2 , s); // returns false
// is_subsequence (sequence_3 , s); // returns true
// is_subsequence (sequence_4 , s); // returns true



function all_subsequences (xs) {
    
}



all_subsequences (list (1 ,2 ,3));
// returns the following subsequences:
// list( [], list(1), list(2), list(3),
// list(1,2), list(1,3), list(2,3),
// list(1,2,3)
// )

/*

function longest_subsequence_length(s,t) {
    
}

longest_subsequence_length (list (1,2,6,1,3,1,4,1,2,6,1),
                            list (7,1,2,2,1,4,1,2,2,1,4,5,5));
// returns 7 because a longest subsequence is
// list(1,2,1,4,1,2,1)

*/