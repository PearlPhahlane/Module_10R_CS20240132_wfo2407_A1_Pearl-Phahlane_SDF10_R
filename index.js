import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js"
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js"


const firebaseConfig = {
    databaseURL: "https://leads-tracker-app-563e4-default-rtdb.europe-west1.firebasedatabase.app/"

}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)

console.log(database)


const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    
    console.log(inputValue)
})