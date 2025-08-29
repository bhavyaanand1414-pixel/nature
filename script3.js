// setTimeout(()=>{
//     console.log('get focused bhavya');
    
// },500)
// console.log('hi i am bhavya anand')

// function getData(data){
//     setTimeout(()=>{
//         console.log('data recieved');
//         data()
//     },1000)
// }
// function processData(data){
//     setTimeout(()=>{
//         console.log('data is processed')
//         data()
//     },1000)
// }
// function saveData(data){
//     setTimeout(()=>{
//         console.log('data is saved');
//         data()
//     },1000)

// }

// //nested callbacks   callback hell
// getData(()=>{
//     processData(()=>{
//         saveData(()=>{
//             setTimeout(()=>{
//                 console.log('all done!');
//             },500)
            
            
//         })
//     })
// })


//another way without using callback hell

//promises

function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('data is retrieved');
            resolve("retrieved data")
            
        },1000)
    })
}

function processData(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('data is procesed');
            resolve("processed data")
            
        },1000)
    })
}

function saveData(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('data is saved');
            resolve("saved data")
            
        },1000)
    })
}//chaining promises
// getData()
// .then(processData)
// .then(saveData)
// .then((result)=>{
//     console.log("all done");
    
// })

// .catch((error)=>{
//     console.log("some error occured");
    
// })

// .finally(()=>{

// })

//using async/await to avoid callback hell


// async function performfunction() {
//     try{
//       const data=await getData();
//       const processedData=await processData(data);
//       const savedData= await saveData(processedData) ;
//       console.log("all done!",savedData);
      
//     }
//     catch (error){
//         console.error("error",error);
//     }
    
    
// }
// performfunction()

document.addEventListener('DOMContentLoaded',()=>{
    const searchBtn=document.getElementById('searchBtn')
    const inputName=document.getElementById('inputName')
})
searchBtn.addEventListener('click',searchpokemon)
searchBtn.addEventListener('keydown',(event)=>{
    if((event.key)=="enter"){
        searchpokemon();
    }
        
    }
)
function searchpokemon(){
    const query=inputName.value.toLowerCase().trim()
    if(query){
        const apiurl=`https://pokeapi.co/api/v2/pokemon/${query}`

        fetch(apiurl).then(response=>{
            if(!response.ok){
                throw new Error('oops pokemon not found');
                
            }
            return response.json();
            
        })
        .then(data =>{
            displayPokemon(data);
        })
        .catch(error =>{
            console.error('error',error);
            displayError(error.message)
        })

    }
}
function displayPokemon(pokemon){
    const pokemonInfo=document.getElementById('pokemonInfo');

    pokemonInfo.innerHTML=`
    <div class="pokemon-name">${pokemon.name}</div>
    <div class="pokemon-image">
           <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    </div>     
    <div class="pokemon-details"> 
        <p><strong>height:</strong>${pokemon.height/10}m</p>
        <p><strong>weight:</strong>${pokemon.weight/10}kg</p>
        <p><strong>type:</strong>${pokemon.types.map(type=> type.type.name).join(', ')}</p>
    </div> `
}

function displayError(message){
    const pokemonInfo=document.getElementById('pokemonInfo');
    pokemonInfo.innerHTML=`<p class="error">${message}</p>`
}