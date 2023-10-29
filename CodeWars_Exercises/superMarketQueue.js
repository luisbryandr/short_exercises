function queueTime(customers, n) {
    //TODO
    let tills = [];
    let time = 0;
    let i = 0;
    let j = 0;
    if(customers.length === 0) {
        return 0;
    } else if(customers.length <= n) {
        return Math.max(...customers);
    } else {
        for(i = 0; i < n; i++) {
            tills.push(customers[i]);
        }
        for(j = i; j < customers.length; j++) {
            tills.sort(function(a, b) {
                return a - b;
            });
            tills[0] += customers[j];
        }
        time = Math.max(...tills);
        return time;
    }
  }

  console.log(queueTime([], 1), 0);
  console.log(queueTime([1,2,3,4], 1), 10);
  console.log(queueTime([2,2,3,3,4,4], 2), 9);