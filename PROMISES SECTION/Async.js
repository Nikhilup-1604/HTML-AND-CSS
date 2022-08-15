//normal function

function hello(){

}

//async function -- always return a promise

async function hello(){

}

// const sing = async() =>{
//         return "hmm hm hm hm hmmm hmm ";
// }

// sing()
//     .then((data)=> console.log("Promises resolved with data",data))


//  const sing = async() =>{
//     throw 'Oh No,Problem'
//     return "hmm hm hm hm hmmm hmm ";
//  }


 
// sing()
//     .then((data)=> console.log("Promises resolved with data",data))

//     .catch((err) => console.log("Promise rejected",err))


const login = async(username,password) =>{
    if(!username || !password) throw 'Missing Credentials'
    if(password === "nik16") return 'WELCOME'
    throw "Invalid Password"

}

login("nick","nik16a")
    .then((data) => console.log("LOGGED IN ",data)) 
    .catch((err) => console.log(err)) 
