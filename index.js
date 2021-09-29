function findSequence(obj) {
    var deyGo = true;
    var kopIndex = 0;
    var defIndex = 1;
    var curIndex = 0;
    var nextIndex = 1;
    var curNum = obj[curIndex];
    var nextNum = obj[nextIndex];
    var disSq = [];
    var totalSequence = [];

    disSq.push(curNum);
    while (deyGo) {

        console.log('checking', curNum, nextNum)
        if (curNum < nextNum) {
            // console.log('e pass', curNum, nextNum)
            disSq.push(nextNum);
            curIndex = nextIndex;
            nextIndex++;

            curNum = obj[curIndex];
            nextNum = obj[nextIndex];
            // console.log('we move to', curNum, nextNum)
        } else {
            nextIndex++;
            nextNum = obj[nextIndex];
        }


        // console.log('the end', defIndex, curIndex, nextIndex);

        if (nextIndex >= obj.length) {
            totalSequence.push(disSq);
            disSq = [];

            if (defIndex >= obj.length) {
                console.log('canceled here')
                deyGo = false;
            } else {
                defIndex++;
                nextIndex = defIndex;
            }

            curNum = obj[kopIndex];
            nextNum = obj[defIndex];

            console.log({kopIndex, defIndex, curIndex, nextIndex})
            // console.log('the end', defIndex, curIndex, nextIndex);
            if (defIndex > 2) { deyGo = false; }
        }
    }


        console.log(obj, disSq, totalSequence)
}

// totalSequence.push();
findSequence([10, 22, 9, 33, 21, 50, 60, 80])

// answer should be = [10, 22, 33, 50, 60, 80]