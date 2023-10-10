function cutIt(arr){
    //coding here...
    let sortedArr = arr.sort((a, b) => a.length - b.length)
    let shortestStrLength = sortedArr[0].length;
    for(let i = 0; i < arr.length; i++) {
     arr[i] = arr[i].substr(0,shortestStrLength)
    } 
    return arr;
  }