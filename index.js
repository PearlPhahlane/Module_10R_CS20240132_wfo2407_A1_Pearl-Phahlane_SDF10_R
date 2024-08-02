import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js"
import { getDatabase, ref, push, onValue } from
 "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js"


const firebaseConfig = {
    databaseURL: "https://shopping-list-app-dee8b-default-rtdb.europe-west1.firebasedatabase.app/"
}


const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const shoppingListInDB = ref (database, "shoppingList")


const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const shoppingListEl = document.getElementById("shopping-list")

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    
    push(shoppingListInDB, inputValue)

    clearInputFieldEl()

    appendItemToShoppingListEl(inputValue)

    
})

onValue(shoppingListInDB, function(snapshot) {
    let itemsArray = Object.entries(snapshot.val())


    clearShoppingListEL()
    

    for (let i = 0; i < itemsArray.length; i ++) {
        let currentItem = itemsArray[i]
        let currentItemId = currentItem[0]
        let currentItemValue = currentItem[1]
       
        appendItemToShoppingListEl(itemsArray[i])
    }

})

function clearShoppingListEL() {
    shoppingListEl.innerHTML = ""
}

function clearInputFieldEl() {
    inputFieldEl.value = ""
}

function appendItemToShoppingListEl(itemValue) {
    shoppingListEl.innerHTML += `<li>${itemValue}</li>`;
}