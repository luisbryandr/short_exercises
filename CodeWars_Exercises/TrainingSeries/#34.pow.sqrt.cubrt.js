function cutCube(volume,n){
    return Math.cbrt(n) % 1 === 0 && Math.cbrt(volume / n) % 1 === 0;
}