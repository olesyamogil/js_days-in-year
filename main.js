daysInYear = function(year) {
    try {
        if (!Number.isInteger(year) || year <= 0) {
            throw new TypeError('year is not valid');
        }
        return year % 4 === 0 ? 366 : 365;
    }
    catch (err){
        if (err.name === 'TypeError') {
            console.log(err.message);
        } else {
            throw err;
        }
    }

};


daysInYear(2019); // 365
daysInYear('2019'); // exception
daysInYear(2020); // 366
daysInYear(2020.2); // exception
daysInYear(2100); // 365
daysInYear({year: 2100}); // exception
