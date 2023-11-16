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
    if (is_null(xs)) {
        return list(null);
    } else {
        let rest = all_subsequences(tail(xs));
        let x = head(xs);
        let has_x = map(elem => pair(x, elem), rest);
        return append(rest, has_x);
    }
}

// all_subsequences (list (1 ,2 ,3));
// returns the following subsequences:
// list( [], list(1), list(2), list(3),
// list(1,2), list(1,3), list(2,3),
// list(1,2,3)
// )



function longest_subsequence_length(s,t) {
    // Dynamic Programming
    let ls = length(s);
    let lt = length(t);
    
    function list_to_arr(L) {
        let len = length(L);
        let arr = [];
        let k = 0;
        for(let p = L; !is_null(p); p = tail(p)) {
            arr[k] = head(p);
            k = k + 1;
        }
        return arr;
    }
    let x = list_to_arr(s);
    let y = list_to_arr(t);
    // Construct a 2 dementational array
    let len = [];
    for (let i = 0; i <= ls; i = i + 1) {
        len[i] = [];
        for (let j = 0; j <= lt; j = j + 1) {
            len[i][j] = 0;
        }
    }
    // Remark: row === 0 and colomn === 0 is "empty"
    for (let i = 1; i <= ls; i = i + 1) {
        for (let j = 1; j <= lt; j = j + 1) {
            if (x[i] === y[j]) {
                len[i][j] = len[i - 1][j - 1] + 1;
            } else {
                len[i][j] = math_max(len[i][j - 1], len[i - 1][j]);
            }
        }
    }  
    return len[ls][lt];
}

longest_subsequence_length (list (1,2,6,1,3,1,4,1,2,6,1),
                            list (7,1,2,2,1,4,1,2,2,1,4,5,5));
// returns 7 because a longest subsequence is
// list(1,2,1,4,1,2,1)

