const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the "public" folder
app.use(express.static('public'));

// Simple GET endpoint
app.get('/hello', (req, res) => {
    res.send('Hello, World!');
});

// Endpoint to add two numbers
app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Please provide valid numbers for num1 and num2.');
    }

    const sum = num1 + num2;
    res.send(`The sum of ${num1} and ${num2} is ${sum}.`);
});

app.get('/subtract', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Please provide valid numbers for num1 and num2.');
    }

    const difference = num1 - num2;
    res.send(`The difference between ${num1} and ${num2} is ${difference}.`);
});

app.get('/multiply', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Please provide valid numbers for num1 and num2.');
    }

    const product = num1 * num2;
    res.send(`The product of ${num1} and ${num2} is ${product}.`);
});

app.get('/divide', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Please provide valid numbers for num1 and num2.');
    }

    if (num2 === 0) {
        return res.status(400).send('Division by zero is not allowed.');
    }

    const quotient = num1 / num2;
    res.send(`The quotient of ${num1} divided by ${num2} is ${quotient}.`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});