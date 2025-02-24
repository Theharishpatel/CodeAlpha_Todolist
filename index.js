let inputs = document.querySelector('#inputs');
let list = document.querySelector('#list');

inputs.addEventListener("keyup", function(event){
    if (event.key == "Enter") {
        addItem(this.value)
        this.value = ""
    }
})

let addItem = (inputs) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = `${inputs} <i></i>`;
        
        listItem.addEventListener("click", function(){
            this.classList.toggle('done');
        })

        listItem.querySelector("i").addEventListener("click",function(){
            listItem.remove();
        })
        list.appendChild(listItem);
    
}