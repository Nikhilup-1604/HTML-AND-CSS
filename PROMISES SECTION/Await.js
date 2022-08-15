//Await keyword -- Genrally used with async functions,it waits and pause the exscution until a promise is resolved.


const delayedColorChange = (color,delay) => {
    return new Promise((resolve,reject)=>{
        setTimeout(() =>{
            document.body.style.backgroundColor = color;
            resolve();
       },delay)
       
    })
 }

async function rainbow(){
    await delayedColorChange('violet',1000)
    await delayedColorChange('indigo',1000)
    await delayedColorChange('blue',1000)
    await delayedColorChange('Green',1000)
    await delayedColorChange('Yellow',1000)
    await delayedColorChange('Orange',1000)
    await delayedColorChange('red',1000)
    return "ALL DONE!"

 }
// rainbow()
//     .then(()=> console.log("END OF RAINBOW")) 

async function printRainbow(){
    let data = await rainbow();
    console.log("END OF RAINBOW",data)
}
printRainbow()