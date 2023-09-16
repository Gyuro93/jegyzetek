let tombok: number[] = [1, 2, 3, 4, 5];

// Funkció az összegzéshez
function osszeAd(arr: number[]): number {
    let sum: number = 0;
    for (let i: number = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log("A számok összege " + osszeAd(tombok));