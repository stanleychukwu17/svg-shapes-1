function findSequence(input) {
    const predecessors = [];
    const subsequenceIndices = [];
    let subsequenceLength = 0;
  
    for (let i = 0; i < input.length; i++) {
        // Binary search for the largest positive `j ≤ L`
        //  such that `input[subsequenceIndices[j]] < input[i]`
        let low = 1, high = subsequenceLength;
        while (low <= high) {
            let middle = Math.ceil((low + high)/2);
            if (input[subsequenceIndices[middle]] < input[i])
                low = middle + 1;
            else
                high = middle - 1;
        }

        // After searching, `low` is 1 greater than the
        //  length of the longest prefix of `input[i]`
        let newLength = low;

        // The predecessor of `input[i]` is the last index of 
        //  the subsequence of length `newL - 1`
        predecessors[i] = subsequenceIndices[newLength - 1];
        subsequenceIndices[newLength] = i;
    
        // console.log(low, high, newLength, subsequenceLength, predecessors[i], subsequenceIndices[newLength - 1], subsequenceIndices); break;

        // If we found a subsequence longer than any we've
        //  found yet, update `subsequenceLength`
        if (newLength > subsequenceLength)
        subsequenceLength = newLength;
    }

    // Reconstruct the longest increasing subsequence
    let subsequence = [];
    let k = subsequenceIndices[subsequenceLength];
    console.log({predecessors, subsequenceIndices, subsequenceLength, k})
    for (let i = subsequenceLength - 1; i >= 0; i--) {
        console.log(i, k, input[k], predecessors[k], predecessors)
        subsequence.unshift(input[k]);
        k = predecessors[k];
    }

    return subsequence;
};
  
let james = findSequence([0, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15]);
console.log(james)