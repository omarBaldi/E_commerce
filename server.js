const express = require('express');
const app = express();
const cors = require('cors');

/* Middleware */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

/* Routes */
app.get('/', (_, res) => {
	res.send('Homepage here');
});

/* Server running */
const port = process.env.PORT ?? 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
