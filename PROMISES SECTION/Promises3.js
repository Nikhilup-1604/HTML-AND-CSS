// // Creating our own Promises

// //As we know there are basically three cases of promises 
// //1.resolve()

// new Promise((resolve,reject)=>{
//     resolve();
// })

// //2.reject()

// new Promise((resolve,reject)=>{
//     reject();
// })

// //3.pending

// new Promise((resolve,reject)=>{
//     //do nothing
// })

const fakeRequest = (url) =>{
    return new Promise((resolve,reject) =>{
        const rand = Math.random()
        setTimeout(()=>{
            if(rand< 0.7){
                resolve('Your Fake Data Here');
            }
            reject('OH SORRY Failed!!!! ');
        },1000) 
    })
}

fakeRequest('xyz/1')
    .then((data)=>{
        console.log("Done with Request")
        console.log(data);
    })
    .catch((err)=>{
        console.log(err)
    })

 const delayedColorChange = (color,delay) => {
    return new Promise((resolve,reject)=>{
        setTimeout(() =>{
            document.body.style.backgroundColor = color;
            resolve();
       },delay)
       
    })
 }

// delayedColorChange('red',1000)
// .then(()=>{
//     return delayedColorChange("orange",1000)
// })
// .then(()=>{
//     return delayedColorChange("yellow",1000)
// })
// .then(()=>{
//     return delayedColorChange("green",1000)
// })
// .then(()=>{
//     return delayedColorChange("blue",1000)
// })
// .then(()=>{
//     return delayedColorChange("indigo",1000)
// })
// .then(()=>{
//     return delayedColorChange("violet",1000)
// })
// .catch(()=>{
//     console.log("It Failed!!!")
// })


// Implicit return 
delayedColorChange('red',1000)
    .then(()=> delayedColorChange("orange",1000))
    .then(()=> delayedColorChange("yellow",1000))
    .then(()=> delayedColorChange("green",1000))
    .then(()=> delayedColorChange("blue",1000))
    .then(()=> delayedColorChange("indigo",1000))
    .then(()=> delayedColorChange("violet",1000))
    .catch(()=> console.log("It Failed!!!"))
