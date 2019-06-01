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
      return iter(n, 1); //n-counter(счетчик-верхние пределы),1-acc
  }

  factorial = (n) => {            //console.log(factorial(2)): n=3 
      let counter = 1;            // <-
      let result = 1;             // <-   

      while (counter <= n) {        //  1 <= 3     2 <=3   3 <= 3  4 <= 3 ОТБОЙ
          result = result * counter;// r = 1*1=1   1*2=2    2*3=6
          counter = counter + 1;    // c = 1+1=2   2+1=3    3+1=4
        }

        return result;                           //  return 6
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

  const smallestDivisor = num => {
    if (num === 1) {
        return 1;
      }
    const iter = (num, div) => {  //num-counter, div-acc
      if (div === num || (num % div === 0)) return div;
      return iter(num, div + 1);
    };
    return iter(num, 2);
  };