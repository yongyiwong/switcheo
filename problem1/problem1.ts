var sum_to_n_a = function (n) {
  // your code here
  if (typeof n !== 'number') {
    throw ('Input parameter is not number');
  }
  if (!Number.isInteger(n)) {
    throw ('Input parameter is not integer');
  }

  let result = 0;

  if (n >= 0) {
    for (let i = 0; i <= n; i++) {
      result += i;
    }
  } else {
    for (let i = 0; i >= n; i--) {
      result += i;
    }
  }

  return result;
};

var sum_to_n_b = function (n) {
  // your code here
  if (typeof n !== 'number') {
    throw ('Input parameter is not number');
  }

  if (!Number.isInteger(n)) {
    throw ('Input parameter is not integer');
  }

  if (n >= 0)
    return (n + 1) * n / 2;
    
  return n * (-n + 1) / 2;
};

var sum_to_n_c = function (n) {
  // your code here
  if (typeof n !== 'number') {
    throw ('Input parameter is not number');
  }

  if (!Number.isInteger(n)) {
    throw ('Input parameter is not integer');
  }
  if ((n > 0 && n <= 1) || (n < 0 && n >= -1))
    return n;

  return n > 0 ? n + sum_to_n_c(n - 1) : n + sum_to_n_c(n + 1);
};