var tombok = [1, 2, 3, 4, 5];
// Funkció az összegzéshez
function osszeAd(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log("A számok összege " + osszeAd(tombok));
