function cutIt(arr){
    let shortestStrLength = arr[0].length;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length < shortestStrLength) {
            shortestStrLength = arr[i].length;
        }
    }
    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].substr(0,shortestStrLength)
    }
    return arr;
  }



//   let sortedArr = arr.sort((a, b) => a.length - b.length)
//   let shortestStrLength = sortedArr[0].length;
//   for(let i = 0; i < arr.length; i++) {
//    arr[i] = arr[i].substr(0,shortestStrLength)
//   } 
//   return arr;