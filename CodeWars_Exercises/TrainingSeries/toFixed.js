function howManySmaller(arr,n){
    //coding here..
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i].toFixed(2) < n){
            count++;
        }
    }
    return count;
    
  }

  console.log(howManySmaller([1.234,1.235,1.228],1.24));
  console.log(howManySmaller([1.1888,1.1868,1.1838],1.19));