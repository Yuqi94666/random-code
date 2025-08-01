//The padStart() method of String values pads this string with a given string (repeated and/or truncated, if needed) 
// so that the resulting string has a given length. The padding is applied from the start of this string.
function timeConversion(s) {
	const [time, modifier] = s.split(/(AM|PM)/);
	let [hours, mins, secs] = time.split(":");
	if (modifier.toUpperCase() === 'AM') {
		if (parseInt(hours) == 12) hours = 0;
	} else if (modifier.toUpperCase() === 'PM') {
		if (parseInt(hours) !== 12)
			hours = parseInt(hours) + 12;
	}
	return `${String(hours).padStart(2, '0')}:${mins}:${secs}`;
}

timeConversion('07:05:45PM'); // Example usage


function nearlySimilarRectangles(sides) {
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }

    const ratioMap = new Map();
    for (const [a, b] of sides) {
        const g = gcd(a, b);
        const key = `${a / g}/${b / g}`;
        ratioMap.set(key, (ratioMap.get(key) || 0) + 1);
    }

    let count = 0;
    for (const num of ratioMap.values()) {
        if (num > 1) {
            count += (num * (num - 1)) / 2;
        }
    }

    return count;
}

function minTime(files, numCores, limit) {
    const savings = [];
    let totalTime = 0;

    for (let time of files) {
        totalTime += time;
        if (time % numCores === 0) {
            const saved = time - time / numCores;
            savings.push(saved);
        }
    }

    // Sort savings in descending order
    savings.sort((a, b) => b - a);

    // Apply up to 'limit' optimizations
    for (let i = 0; i < Math.min(limit, savings.length); i++) {
        totalTime -= savings[i];
    }

    return totalTime;
}
