// setTimeout(()=>{
//     document.body.style.backgroundColor = 'violet';
//     setTimeout(()=>{
//         document.body.style.backgroundColor = 'indigo';
//         setTimeout(()=>{
//             document.body.style.backgroundColor = 'blue';
//             setTimeout(()=>{
//                 document.body.style.backgroundColor = 'green';
//                 setTimeout(()=>{
//                     document.body.style.backgroundColor = 'yellow';
//                     setTimeout(()=>{
//                         document.body.style.backgroundColor = 'orange';
//                         setTimeout(()=>{
//                             document.body.style.backgroundColor = 'red';
//                         },1000)
//                     },1000)
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// },1000)
 

// const delayedColorChange = (newColor,delay,doNext) => {
//     setTimeout(() =>{
//         document.body.style.backgroundColor = newColor;
//         doNext &&doNext();
//     },delay)
// }

// delayedColorChange("violet",1000,() =>{
//     delayedColorChange("indigo",1000,()=>{
//         delayedColorChange("blue",1000,()=>{
//             delayedColorChange("green",1000,()=>{
//                 delayedColorChange("yellow",1000,()=>{
//                     delayedColorChange("orange",1000,()=>{
//                         delayedColorChange("red",1000,()=>{

//                         })

//                     })

//                 })

//             })
//         })
//     })
// })



searchMoviesAPI('The Social Network',()=>{
    saveToMyDb(movies,()=>{
        // if it works,then this --> success
    },()=>{
        // if it doesn't work,then this --> failure
    })
},()=>{
    // if API doesn't work or it is Down

})