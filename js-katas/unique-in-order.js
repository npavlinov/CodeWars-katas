function uniqueInOrder(iterable) {
    var final = []
    var prev
    
    for (var i = 0; i < iterable.length; i++) {
      if (iterable[i] !== prev) {
        final.push(prev = iterable[i])
      }
    }
    
    return final
  }

// solution 2
/* var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
} */