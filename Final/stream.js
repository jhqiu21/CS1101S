// Stream 
function make_alternating_stream(s) {
    return is_null(s)
        ? null
        : is_null(stream_tail(s))
            ? s
            : pair( head(s), 
                    () => pair(-1 * head(stream_tail(s)), 
                                () => make_alternating_stream(
                                    stream_tail(stream_tail(s)))));
}




function skip_stream(s) {
    
// takes an infinite stream as argument and returns an infinite 
// stream that contains only every second element of the given stream.
    
    return pair(head(s), () => skip_stream(stream_tail(stream_tail(s))));
}