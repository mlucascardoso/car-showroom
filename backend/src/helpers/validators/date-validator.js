const moment = require('moment');

const isValid = (date, formats = ['DD-MM-YYYY', 'YYYY-MM-DD', 'DD/MM/YYYY', 'YYYY/MM/DD']) => {
    if (!moment(date, formats).isValid()) {
        return false;
    }

    return true;
};

const format = (date, formats = ['DD-MM-YYYY', 'YYYY-MM-DD', 'DD/MM/YYYY', 'YYYY/MM/DD'], toFormat = 'YYYY-MM-DD') => {
    return moment(date, formats).format(toFormat);
};

module.exports = {
    format,
    isValid
};
