function findSequence(obj) {
    var deyGo = true;
    var kopIfy = 0;
    var defIndex = 0;
    var curIndex = 0;
    var nextIndex = 1;
    var curNum = obj[curIndex];
    var nextNum = obj[nextIndex];
    var disSq = [];

    disSq.push(curNum);
    while (deyGo) {

        if (curNum < nextNum) {
            // console.log('e pass', curNum, nextNum)
            disSq.push(nextNum);
            curIndex = nextIndex;
            nextIndex++;

            curNum = obj[curIndex];
            nextNum = obj[nextIndex];
            // console.log('we move to', curNum, nextNum)
        } else {
            // console.log('not more', curNum, nextNum)
            nextIndex++;
            nextNum = obj[nextIndex];
            // console.log('we move to', curNum, nextNum)
        }


        // console.log('the end', defIndex, curIndex, nextIndex);

        if (nextIndex >= obj.length) {
            if (defIndex >= obj.length) { deyGo = false; }
            else {
                defIndex++;
                curIndex = defIndex;
                nextIndex = curIndex + 1;
            }

            // console.log('the end', defIndex, curIndex, nextIndex);
            deyGo = false;
        }
    }


        console.log(disSq)
}

findSequence([10, 22, 9, 33, 21, 50, 60, 80])

// answer should be = [10, 22, 33, 50, 60, 80]