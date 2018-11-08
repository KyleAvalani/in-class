function myFetch(url) {
    // return a promise 
    let myPromise = new Promise((resolve, reject) => {

        let status = url;
        // if everythingw as successful, then resolve
        if (status) {
            resolve();
        } else {
            reject();
        }
        // else reject


    })

    return myPromise;
}

myFetch(true).then(() => {
    console.log("Success");
}).catch( () =>{
    console.log("Rejected");
})