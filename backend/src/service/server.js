const express = require('express');

const { port } = require('./config/setup/environment')();

const startServer = () => {
    const app = express();

    require('./config/setup')(app);

    app.listen(port, err => {
        if (err) {
            console.error(err);
            process.exit(1);
        }

        console.log(`
      ################################################
      🛡️  Server listening on port: ${port}         🛡️
      ################################################
    `);
    });
};

startServer();
