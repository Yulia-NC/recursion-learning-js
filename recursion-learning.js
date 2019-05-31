 const factorial = (n) => {
      if (n === 1) {
          return 1;
      }
      else {
          return n * factorial(n-1);
      }
  }
  const answer = factorial(3);

  const factorial = (n) => {
      const iter = (counter, acc) => {
          if (counter === 1) {
              return acc;
          } 
          return iter(counter - 1, counter * acc)
      }
      return iter(n, 1);
  }


  const sequenceSum = (begin, end) => {
   if (begin > end) {
        return NaN;
      } else if (begin === end) {
        return begin;
      } else {
        return begin + sequenceSum(begin+1, end)
      }
  };