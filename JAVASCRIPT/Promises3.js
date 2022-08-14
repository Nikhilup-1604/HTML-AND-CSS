// Creating our own Promises

//As we know there are basically three cases of promises 
//1.resolve()

new Promise((resolve,reject)=>{
    resolve();
})

//2.reject()

new Promise((resolve,reject)=>{
    reject();
})

//3.pending

new Promise((resolve,reject)=>{
    //do nothing
})