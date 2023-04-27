// let num = Math.floor(Math.random()*10);
// console.log(num);

// const getBurgerPromise = new Promise ((resolve, reject)=>{
// if(num%2 == 0){
//     resolve("You will get burger");
// }else{
//     reject("REJECTED You will not get burger");
// }
// });
// console.log(getBurgerPromise);

// getBurgerPromise.then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// });

// Create 3 promises
// 1.roomclean->5000
// 2.removeGarbage->3000
// 3.getPrize->2000

let roomClean = new Promise((reslove, reject) => {

    let isRoomCleaned = true;
    setTimeout(() => {
        // console.log("Room is being cleaned");
        if (isRoomCleaned === true) {
            reslove("Room is cleaned");
        } else {
            reject("Room is not cleaned");
        }
    }, 5000)
});

let removeGarbage = new Promise((reslove, reject) => {

    let isGarbageRemoved = true;
    setTimeout(() => {
        // console.log("Garbage is being Removed");
        if (isGarbageRemoved === true) {
            reslove("Garbage is removed");
        } else {
            reject("Garbage is not removed")
        }
    }, 3000);
});

let getPrize = new Promise((reslove, reject) => {

    let didGetPrize = true;
    setTimeout(() => {
        // console.log("Waiting for prize result");
        if (didGetPrize) {
            reslove("Won the prize");
        } else {
            reject("Did not won the prize");
        }
    }, 1000)

})
// console.log(roomClean);

roomClean.then((msg) => {
    let outMsg = `${msg}`;
    // console.log(outMsg);
    removeGarbage.then((msg) => {
        outMsg += `${msg}`;
        // console.log(outMsg);
        getPrize.then((msg) => {
            outMsg += `${msg}`;
            console.log(outMsg);
        }).catch((msg) => {
            console.log(`${msg}`);
        }).catch((msg) => {
            console.log(`${msg}`);
        }).catch((msg) => {
            console.log(`${msg}`);
        })
    })
})
