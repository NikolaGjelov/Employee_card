const get = (name) => document.querySelector(name)
const edit = get(".edit")
let name = get(".name")
let lastName = get(".last-name")
let loc = get(".location")
let btn = get(".buttons")
let cancel = get(".cancel-btn")
let save = get(".save-btn")

window.addEventListener("load", ()=>{
  let FromLocalStorage = getFromLocalStorage()
  name.value= FromLocalStorage.name
  lastName.value= FromLocalStorage.lastName
  loc.value= FromLocalStorage.loc
})

edit.addEventListener("click", () => {
  removeReadOnly()
  btn.style.display="block";
  edit.style.display="none"

})
cancel.addEventListener("click", ()=>{
  setReadOnly()
  edit.style.display="block"
  btn.style.display="none";
})

 function removeReadOnly(){
  name.removeAttribute("readonly");
  lastName.removeAttribute("readonly");
  loc.removeAttribute("readonly")
 }

 function setReadOnly() {
  name.setAttribute("readonly",true);
  lastName.setAttribute("readonly", true);
  loc.setAttribute("readonly", true)
 }

 save.addEventListener("click", () => {
  saveInput()
  setReadOnly()
  edit.style.display="block"
  btn.style.display="none"
 })

 function saveInput() {
 let inputs = {} 
 inputs.name = name.value
 inputs.lastName = lastName.value
 inputs.loc = loc.value
 localStorage.setItem("inputs", JSON.stringify(inputs))
 }

 function getFromLocalStorage () {
  return JSON.parse(localStorage.getItem("inputs"))
 }