const moment = require('moment');

const isValid = (date, formats = ['DD-MM-YYYY', 'YYYY-MM-DD', 'DD/MM/YYYY', 'YYYY/MM/DD']) => {
    if (!moment(date, formats).isValid()) {
        return false;
    }

    return true;
};

module.exports = isValid;
