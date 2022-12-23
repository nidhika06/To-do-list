// const AddTaskInput=document.getElementById('input11');
// const input22=document.getElementById('input22');
// const add=document.getElementById('add');
// const clear=document.getElementById('sub');
// const hidden=document.querySelector('.hidden');
// const tasks=document.querySelector('.task');

// hidden.classList.add('last');
// add.addEventListener('click',function(e){
//     e.preventDefault();
//     console.log('hello');
    
//     if(input11.value!=""){
//         hidden.classList.remove('last');
//         hidden.innerText=input11.value;
//     }
//     else {
//         hidden.classList.add('last');
//     }
    
// })

// <div class="col">
// <div class="border border-dark mt-3 hidden task" >
//     <div class="text-end">
//         <i class="fa-solid fa-xmark fs-3 me-2"></i>

//     </div>
    
// </div>
// </div>

// const Addtask=()=>{
//     let AddTaskInputContent=AddTaskInput.value;
//     if(AddTaskInputContent==""){
//         alter("please add a task");
//         return;
//     }
//     const task=document.createElement('div');
//     task.classList.add("border","border-dark","mt-3","hidden task")
//     const task1=document.createElement('div');
//     task1.classList.add('task','text-end');
//     task.appendChild(task1);
//     const paragraph=document.createElement('p');
//     paragraph.textContent=AddTaskInputContent;
//     task.appendChild(paragraph);
//     const icon=document.createElement('i');
//     icon.classList.add("fa-solid","fa-xmark","fs-3","me-2");
//     task.appendChild(icon);
// }


// add.addEventListener("click",function(){
//     console.log("hello")
//     Addtask();
// })


// const  Addtask =()=>{

//     let AddTaskInputContent =AddTaskInput.value;

//     // <div class="task  border d-flex justify-content-between ">
                        
//     //         <p class="TaskContent p-2 " >dsdsdsdsd</p> 
//     //         <span class="bg-dark p-3 " >
//     //             <a href="" class=" text-white text-decoration-none"> X</a>
//     //         </span>

//     // </div>


//     if(AddTaskInputContent==""){

//         alert("please add a task")
//         return;
//     }
//    const task= document.createElement("div")
//    task.classList.add("task","border","d-flex","justify-content-between","mb-3");

//    const paragraph=document.createElement("p");
//    paragraph.classList.add("TaskContent","p-2");
//    paragraph.textContent=AddTaskInputContent;

//    task.appendChild(paragraph);

//    const span =document.createElement("span");
//    span.classList.add("bg-dark","p-3")
//    task.appendChild(span);

//    const a =document.createElement("a");
//    a.classList.add("text-decoration-none","text-white")
//    a.textContent="X";
//    a.href="#"
//    span.appendChild(a);

//    tasks.appendChild(task);
//    AddTaskInputContent="";



//    a.addEventListener("click",function(){


//     tasks.removeChild(task);



//    })

// }   



//******************************************************* */



const Addbtn=document.querySelector(".Add");
const clearBtn=document.querySelector(".clear");
const AddTaskInput=document.querySelector(".AddtaskInput");
const SearchTaskInput=document.querySelector(".SearchtaskInput");


const tasks=document.querySelector(".tasks");


const Addtask=()=>{
    console.log("hello")
    let AddTaskInputConst=AddTaskInput.value;
    if(AddTaskInputConst==""){
        alert("please add a task");
        return;
    }
    const task=document.createElement("div");
    task.classList.add("task","border","d-flex","justify-content-between","mb-3");
     
    const paragraph=document.createElement("p");
    paragraph.classList.add("TaskContent","p-2");
    paragraph.textContent=AddTaskInputConst;
 
    task.appendChild(paragraph);


    const span =document.createElement("span");
   span.classList.add("bg-dark","p-3")
   task.appendChild(span);

   const a =document.createElement("a");
   a.classList.add("text-decoration-none","text-white")
   a.textContent="X";
   a.href="#"
   span.appendChild(a);

   tasks.appendChild(task);
   AddTaskInputConst="";



   a.addEventListener("click",function(){


    tasks.removeChild(task);



   })





}

Addbtn.addEventListener("click",Addtask);
// search task




const searchtask=()=>{


    const paragraphList=document.querySelectorAll(".TaskContent");
 
    console.log(paragraphList);
 
 
    paragraphList.forEach(text => {
 
     if(text.textContent.toLowerCase().includes(SearchTaskInput.value.toLowerCase())){
         text.parentElement.classList.remove("d-none");
 
     }
     else{
         text.parentElement.classList.add("d-none");
 
 
     }
        
    });
}
SearchTaskInput.addEventListener("input",searchtask);



// clear

clearBtn.addEventListener("click",function(){


    tasks.textContent="";
})
