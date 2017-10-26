function tickets(payment) {
  const ticket = 25
  let register = 0

  for (let amount of payment) {
    
    if (amount === ticket) {
      register += amount

    } else {
      register -= amount - ticket

    }

    if (register < 0) {
      break
    }

  }

  if (register > 0) {
    return 'YES'
  } else {
    return 'NO'
  }

}

console.log(tickets([25, 25, 50]));
console.log(tickets([25, 100]));
console.log(tickets([25,25,50,100,25,50,25,100,25,25,25,100,25,25,25,100,25,25,25,100]));

// tickets([25, 25, 50]) //yes
// tickets([25, 100]) //no
