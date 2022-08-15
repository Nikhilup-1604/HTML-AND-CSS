//Magic of Promises --> 
// Here we have learnt how to chain on .then() for each returning  promises and only one .catch() for all .then() .

const fakeRequestPromise = (url) => {
    return new Promise((resolve,reject)=>{
        const delay = Math.floor(Math.random() * (3000)) + 500;
        setTimeout(()=> {
            if(delay > 3000){
                reject('Connection timeout :(')
            }else{
                resolve(`here is your fake data from ${url}`)
            }
        },delay)  
    }) 
   
}

fakeRequestPromise('promises2.com/1')
    .then((data)=>{
        console.log(data)
        console.log("IT WORKED(Page1)!!!")
        return fakeRequestPromise("promises2.com/2")
    })
    .then((data)=>{
        console.log(data)
        console.log("IT WORKED(Page2)!!!")
        return fakeRequestPromise("promises2.com/3")
    })

    .then((data)=>{
        console.log(data)
        console.log("IT WORKED(Page3)!!!")
        
    })

    .catch((err)=>{
        console.log(err);
        console.log("It Failed")
    })

