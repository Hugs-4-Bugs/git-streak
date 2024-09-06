const fs = require('fs');
const moment = require('moment');

const startDate = moment('2022-01-01');
const endDate = moment('2022-12-31');
const excludedDates = [
    moment('2022-12-07'),
    moment('2022-11-30')
];

const dates = [];
let currentDate = startDate.clone();

while (currentDate.isSameOrBefore(endDate)) {
    if (!excludedDates.some(excluded => excluded.isSame(currentDate, 'day'))) {
        dates.push(currentDate.toISOString());
    }
    currentDate.add(1, 'day');
}

const data = {
    dates: dates
};

fs.writeFileSync('data.json', JSON.stringify(data, null, 2), 'utf-8');
console.log('data.json file has been created with the correct dates.');
