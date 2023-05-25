let items = [];
let originalItems = [];

function addItem() { //populate
    let inputField = document.getElementById("inputField");
    let item = inputField.value;
    items.push(item);
    originalItems.push(item);
    inputField.value = "";
    updateList();
}

function sortList() {
    items.sort(); //sort
    updateList();
}

function unsortList() {
    items = [...originalItems]; // so not item1,item2,item3...
    updateList();
}

function updateList() {
    let list = document.getElementById("list");
    list.innerHTML = "";
    for (let item of items) {
        let li = document.createElement("li"); //output
        li.innerText = item;
        list.appendChild(li);
    }
}