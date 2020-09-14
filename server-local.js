'use strict';

const app = require('./express/server');

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Local app listening on port ${PORT}!`));
