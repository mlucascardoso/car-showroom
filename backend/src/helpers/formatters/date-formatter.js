const moment = require('moment');

const format = (date, toFormat = 'YYYY-MM-DD', formats = ['DD-MM-YYYY', 'YYYY-MM-DD', 'DD/MM/YYYY', 'YYYY/MM/DD']) => {
    if (!moment(date, formats).isValid()) {
        return date;
    }

    return moment(date, formats).format(toFormat);
};

module.exports = format;
