const express = require('express');

const app = express();
let messageJson = { message: 'Hello World' };

app.use(express.json());

app.get('/message', (request, response) => {
    response.send(messageJson);
});

app.listen(3000, () => {
    console.log('running...');
});