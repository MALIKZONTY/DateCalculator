// script.js
document.getElementById('dateForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const year = parseInt(document.getElementById('year').value);
    const month = parseInt(document.getElementById('month').value);
    const date = parseInt(document.getElementById('date').value);

    getDayOfWeek(year, month, date);
});

function getDayOfWeek(year, month, date) {
    let mz1, mz2, c, d, e, mz3, o1;

    if (year > 400) {
        mz1 = 0;
        let a = year - 1;
        let b = a % 400;

        if (b >= 100) {
            if (b >= 100 && b < 200) {
                mz2 = 5;
                c = b % 100;
            }
            if (b >= 200 && b < 300) {
                mz2 = 3;
                c = b % 200;
            }
            if (b >= 300 && b < 400) {
                mz2 = 1;
                c = b % 300;
            }
        } else {
            mz1 = 0;
            mz2 = 0;
            c = b;
        }

        if (c >= 4) {
            d = Math.floor(c / 4);
            e = (c - d) + (d * 2);
            mz3 = (e >= 7) ? e % 7 : e;
        } else {
            mz3 = c;
        }
    }

    o1 = mz1 + mz2 + mz3;
    console.log(`Odd days of past years: ${o1}`);

    const x = [3, 0, 3, 2, 3, 2, 3, 3, 2, 3, 2, 3];
    const y = [3, 1, 3, 2, 3, 2, 3, 3, 2, 3, 2, 3];
    let sum = 0, z1, z2, o2;

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        z1 = month - 1;
        for (let i = 0; i < z1; i++) {
            sum += y[i];
        }
    } else {
        z1 = month - 1;
        for (let i = 0; i < z1; i++) {
            sum += x[i];
        }
    }

    z2 = sum + date;
    o2 = (z2 >= 7) ? z2 % 7 : z2;
    console.log(`Odd days of present year: ${o2}`);

    let oddDays = o1 + o2;
    oddDays = (oddDays >= 7) ? oddDays % 7 : oddDays;
    console.log(`Total odd days: ${oddDays}`);

    let day;
    switch (oddDays) {
        case 0: day = 'SUNDAY'; break;
        case 1: day = 'MONDAY'; break;
        case 2: day = 'TUESDAY'; break;
        case 3: day = 'WEDNESDAY'; break;
        case 4: day = 'THURSDAY'; break;
        case 5: day = 'FRIDAY'; break;
        case 6: day = 'SATURDAY'; break;
    }

    document.getElementById('result').innerText = `${year}-${month}-${date} is ${day}`;
}
