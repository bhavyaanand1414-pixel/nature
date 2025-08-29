// a=4
// console.log(a);
// b=5
// console.log(b)
// let c=24
// c=75
// console.log(c)
// // in let value of variable can be changed
// // const d=65
// // d=87
// // console.log(d)//here it will show error because const is supposed to have constant values
// let age=45
// if(age>18){
//     console.log("you can drive")
// }
// else(
//     console.log("you can't drive")
// )
// let userName="bhavya"
// console.log("welcome "+userName)
// let num1=6
// let num2=7
// console.log(num1+num2)

// let arr=[1,2,3,4,5]
// console.log(arr);
// let arr_new= arr
// arr_new=arr_new.push(6)
// console.log(arr);


// console.log(1+2)
// console.log(1+"2")
// console.log("1"+"2")
// console.log("1"+2)

// const name="bhavya"
// console.log(typeof name);
// const age=5
// console.log(typeof age);
// const dataIs=false
// console.log(typeof dataIs);
// const array=null
// console.log(typeof array);
// const array2=undefined
// console.log(typeof array2)

//date
// const today = new Date()
// console.log(today.toLocaleDateString());
// console.log(today);
// console.log(today.getDate())

// function sum(a,b) {       //declaring function
//     console.log(a+b);
//    return a+b;
    
// }
// const new_sum=sum(4,8)    //calling function
// console.log(new_sum);

//making function a variable

// const add = function(a,b){
//     return a+b
// }
// console.log(add(3,4))

//FLAT ARROW FUNCTION  where we dont use the word function but still define it as such

// const add= (a,b)=> {
//     return a+b
// }
// console.log(add(9,8))

// const bhavya={
//     surname: "anand",
//     year  :"1",
//     age : 20,
// }

// document.addEventListener('DOMContentLoaded',()=>{
//     const createbtn=document.getElementById('createbtn');
//     const createresult= document.getElementById('createresult');
// })

// createbtn,addEventListener('click',()=>{
//     const newElm=document.createElement('p');
//     newElm.textContent='this is a new element'

//     createresult.appendchild(newElm)
// })

document.addEventListener('DOMContentLoaded',()=>{
    //create element
    const createbtn=document.getElementById('createbtn');
    const createresult=document.getElementById('createresult');

    createbtn.addEventListener('click',()=>{
        const newElm=document.createElement('p');
        newElm.textContent='this is a new element';
    
        createresult.appendChild(newElm)
    })
    //update element
    const updateBtn = document.getElementById('updateBtn');
    const updateText = document.getElementById('updateText');

    updateBtn.addEventListener('click',()=>{
        updateText.innerHTML='<h1>changed text</h1>';
    });

    //deleteElement

    const deleteBtn=document.getElementById('deleteBtn');
    const deleteText = document.getElementById('deleteText');

    deleteBtn.addEventListener('click',()=>{
        deleteText.innerHTML='';
    });

    //event handelling(hover)

    const hoverBtn =document.getElementById('hoverBtn');
    const hoverText = document.getElementById('hoverText');

    hoverBtn.addEventListener('mouseover',()=>{
        hoverText.textContent='hovered';
    })
    hoverBtn.addEventListener('mouseout',()=>{
        hoverText.textContent='hover over this button'
        
    })
    // console.log(hoverBtn.style);
    // hoverBtn.style=this["-webkit-transition-delay"]

    const transversalBtn = document.getElementById('transversalBtn');
    const siblingOne= document.getElementById('siblingOne');
    const siblingTwo= document.getElementById('siblingTwo');

    transversalBtn.addEventListener('click',()=>{
        console.log(siblingTwo.style);
        siblingTwo.style.color='blue';
    })

    //css manipulation
cssmanipulation.addEventListener('click',()=>{
    cssmanipulation.style.backgroundColor='pink'
    cssmanipulation.style.color='black'
    cssmanipulation.style.fontSize='50px'

})
})
