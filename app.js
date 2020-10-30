const Express = require('express');
const server = require('./config/server');
const port = process.env.PORT || '3000';

const app = new Express();
server(app);

app.listen(port, () => {
  console.log(`The app is listening on the port ${port}`);
});
