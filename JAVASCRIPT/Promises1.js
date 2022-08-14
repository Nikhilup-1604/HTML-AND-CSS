

const fakeRequestPromise = (url) => {
    return new Promise((resolve,reject)=>{
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(()=> {
            if(delay > 5000){
                reject('Connection timeout :(')
            }else{
                resolve(`here is your fake data from ${url}`)
            }
        },delay)  
    }) 
   
}

fakeRequestPromise('xyz/1.com')
// Here, above function is an Promise object. We can use the promise concept of .then and .catch on rquest
    .then((data)=>{
        console.log("It Worked for xyz/1",data)
        fakeRequestPromise('xyz/2.com')
            .then((data)=>{
                console.log("It worked for xyz/2",data)
                fakeRequestPromise('xyz/3.com')
                    .then((data)=>{
                        console.log("It worked for xyz/3",data)
                    })
                    .catch(()=>{
                        console.log("It failed for xyz/3")
                    })
            })
            .catch(()=>{
                console.log("It failed for xyz/2")
            })
    })
    .catch(()=>{
        console.log("It Failed for xyz/1")
    })

