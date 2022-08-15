// Promises -- > A promise is an object representing the eventual completion or failure of an asynchronous operation.

const fakeRequestCallBack = (url,success,failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(()=> {
        if(delay > 4000){
            failure('Connection timeout :(')
        }else{
            success(`here is your fake data from ${url}`)
        }
    },delay) 
}




fakeRequestCallBack('books.com/page1',
    function(response1){
        console.log("It Worked!!!!")
        console.log(`With data: ${response1}`)
        fakeRequestCallBack('books.com/page2',
            function(response2){
                console.log("It worked Again!!")
                console.log(response2)
                    fakeRequestCallBack('books.com/page3',function(response3) {
                        console.log("It worked Again!!")
                        console.log(response3)
                    },function(err3){
                        console.log("It failed 0n 3rd attempt!!")
                        console.log(err3)
                    })
            },
            function(err2){
                console.log("It Failed on 2nd attempt!!")
                console.log(err2)
            }) 
    },function(err1){
        console.log("It Failed on 1st attempt!!!!!!")
        console.log(`with data ${err1}`)
})