function fib(number) {

  if (number === 0) { return 0 }
  if (number === 1) { return 1 }

  return number + fib(number - 1)

}

fib(5)
console.log(fib(5));
