const fakeRequestPromise = (url) => {
    return new Promise((resolve,reject)=>{
        const delay = Math.floor(Math.random() * (3000)) + 500;
        setTimeout(()=> {
            if(delay > 1000){
                reject('Connection timeout :(')
            }else{
                resolve(`here is your fake data from ${url}`)
            }
        },delay)  
    }) 
   
}

async function makeTwoREquest(){
    try{
        let data1 = await fakeRequestPromise('page1.com')
        console.log(data1)
        let data2 = await fakeRequestPromise('page2.com')
        console.log(data2)
    }
    catch(e){
        console.log("Caught an Error: ", e)
    }
}