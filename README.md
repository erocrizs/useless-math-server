# Useless Math Server

## Usage
Run
```sh
npm install
npm start
```

## Endpoints

### GET /add/`float_a`/`float_b`
Returns the sum of `float_a` and `float_b`

* eg. `http://localhost:3000/add/6/3` should return 9

### GET /subtract/`float_a`/`float_b`
Returns the difference of `float_a` and `float_b`

* eg. `http://localhost:3000/subtract/6/3` should return 3

### GET /multiply/`float_a`/`float_b`
Returns the product of `float_a` and `float_b`

* eg. `http://localhost:3000/multiply/6/3` should return 18

### GET /divide/`float_a`/`float_b`
Returns the quotient of `float_a` and `float_b`

* eg. `http://localhost:3000/divide/6/3` should return 2

### GET /power/`float_a`/`float_b`
Returns `float_a` raised to `float_b`

* eg. `http://localhost:3000/power/6/3` should return 216
