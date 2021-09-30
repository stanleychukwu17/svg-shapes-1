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
        if (curNum < nextNum) {
            disSq.push(nextNum);
            curIndex = nextIndex;
            nextIndex++;

            curNum = obj[curIndex];
            nextNum = obj[nextIndex];
        } else {
            nextIndex++;
            nextNum = obj[nextIndex];
        }

        if (nextIndex >= obj.length) {
            totalSequence.push(disSq);
            disSq = [];
            defIndex++;

            if (defIndex >= obj.length) {
                if (kopIndex >= obj.length) { console.log('ended'); deyGo = false; }
                else {
                    kopIndex++;
                    defIndex = kopIndex + 1;
                }
            }

            nextIndex = defIndex;
            curNum = obj[kopIndex];
            nextNum = obj[defIndex];
            disSq.push(curNum);

            if (kopIndex > 1) { deyGo = false; }
        }
    }


    totalSequence.forEach((ech) => {
        if (ech.length >= 5) console.log(ech);
    })
        console.log(obj, disSq, totalSequence)
}