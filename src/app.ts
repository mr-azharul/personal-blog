const loaders = require('./loaders');
const express = require('express');

async function startServer() {
    const app = express();
    await loaders.init({ expressApp: app });

    app.listen(process.env.PORT, err => {
        if (err) {
            console.log(err);
            return err;
        }

        console.log(`Your server is ready !`);
    });
}

startServer();