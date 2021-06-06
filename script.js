const myForm = document.getElementById("myForm")
const openFormBtn = document.getElementById("openForm")
const closeFormBtn = document.getElementById("closeForm")

const openForm = () =>{
    myForm.style.display = "block";
}

const closeForm = () =>{
    myForm.style.display = "none";
}

openFormBtn.addEventListener('click', () =>{
   openForm()
})

closeFormBtn.addEventListener('click', () =>{
   closeForm()
})

