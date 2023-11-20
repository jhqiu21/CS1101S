
// CS1101S In-class Studio Sheet 9

function count_pairs(x) {
    if (!is_pair(x)) {
        return 0;
    } else {
        return 1 + count_pairs(head(x)) + count_pairs(tail(x));
    }
}

// Output: 3
let ver1 = list(0, 0, 0); 
display(count_pairs(ver1));

// Output: 4
let four = pair(null, null);
let inte = pair(four, four);
let ver2 = pair(inte, null);
display(count_pairs(ver2));

// Output: 7
let sev = pair(null, null);
let inte_1 = pair(sev, sev);
let ver3 = pair(inte_1, inte_1);
display(count_pairs(ver3));
