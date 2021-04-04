const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>Useless Math Server</h1>
    <h2>Usage:</h2>
    <ul>
      <li>
        <div>
          <h3>/add/<code>float_a</code>/<code>float_b</code></h3>
          <p>Returns the sum of <code>float_a</code> and <code>float_b</code></p>
          <p>eg. <a href="/add/6/3">http://localhost:${port}/add/6/3</a> should return 9</p>
        </div>
      </li>
      <li>
        <div>
          <h3>/subtract/<code>float_a</code>/<code>float_b</code></h3>
          <p>Returns the difference of <code>float_a</code> and <code>float_b</code></p>
          <p>eg. <a href="/subtract/6/3">http://localhost:${port}/subtract/6/3</a> should return 3</p>
        </div>
      </li>
      <li>
        <div>
          <h3>/multiply/<code>float_a</code>/<code>float_b</code></h3>
          <p>Returns the product of <code>float_a</code> and <code>float_b</code></p>
          <p>eg. <a href="/multiply/6/3">http://localhost:${port}/multiply/6/3</a> should return 18</p>
        </div>
      </li>
      <li>
        <div>
          <h3>/divide/<code>float_a</code>/<code>float_b</code></h3>
          <p>Returns the quotient of <code>float_a</code> and <code>float_b</code></p>
          <p>eg. <a href="/divide/6/3">http://localhost:${port}/divide/6/3</a> should return 2</p>
        </div>
      </li>
      <li>
        <div>
          <h3>/power/<code>float_a</code>/<code>float_b</code></h3>
          <p>Returns <code>float_a</code> raised to <code>float_b</code></p>
          <p>eg. <a href="/power/6/3">http://localhost:${port}/power/6/3</a> should return 216</p>
        </div>
      </li>  
    </ul>
  `)
});

app.get('/add/:a/:b', (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400);
    res.send('TypeError');
    return;
  }

  const result = a + b;
  console.log(`${a} + ${b} = ${result}`);
  res.send(`${result}`);
});

app.get('/subtract/:a/:b', (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400);
    res.send('TypeError');
    return;
  }

  const result = a - b;
  console.log(`${a} - ${b} = ${result}`);
  res.send(`${result}`);
});

app.get('/multiply/:a/:b', (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400);
    res.send('TypeError');
    return;
  }

  const result = a * b;
  console.log(`${a} * ${b} = ${result}`);
  res.send(`${result}`);
});

app.get('/divide/:a/:b', (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400);
    res.send('TypeError');
    return;
  }

  const result = a / b;
  console.log(`${a} / ${b} = ${result}`);
  res.send(`${result}`);
});

app.get('/power/:a/:b', (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400);
    res.send('TypeError');
    return;
  }

  const result = Math.pow(a, b);
  console.log(`Math.pow(${a}, ${b}) = ${result}`);
  res.send(`${result}`);
});

app.listen(port, () => {
  console.log(`The useless math server is running, listening at http://localhost:${port}`)
});