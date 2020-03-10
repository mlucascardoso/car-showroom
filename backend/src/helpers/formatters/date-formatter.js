const moment = require('moment');

const format = (date, formats = ['DD-MM-YYYY', 'YYYY-MM-DD', 'DD/MM/YYYY', 'YYYY/MM/DD'], toFormat = 'YYYY-MM-DD') => {
    return moment(date, formats).format(toFormat);
};

module.exports = {
    format
};
