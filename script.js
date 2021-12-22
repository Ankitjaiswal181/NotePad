console.log("heuy");
Shownotes();
const addBtn = document.getElementById("addBtn");
addBtn.addEventListener('click', function (e) {
    let addTxt = document.getElementById("addTxt");
    let noteTitle=document.getElementById("noteTitle");
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        noteObj = [];
    }
    else {
        noteObj = JSON.parse(notes);
    }
    let obj={
        title:noteTitle.value,
        text:addTxt.value
    }
    noteObj.push(obj);
    localStorage.setItem("notes", JSON.stringify(noteObj));
    addTxt.value = "";
    noteTitle.value="";
    console.log(noteObj);
    Shownotes();
});
// function to read elements from local storage
function Shownotes() {

    let notes = localStorage.getItem("notes");

    if (notes == null) {
        noteObj = [];
    }
    else {
        noteObj = JSON.parse(notes);
    }
    let html = '';
    
    noteObj.forEach(function (element, index) {
        
        html += `
    <div class="noteCard  my-2 mx-2 card" style="width: 18rem;">

                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">${element.text}</p>
                    <button id="${index}" class="btn btn-primary" onclick="deleteNote(this.id)">Delete Note</button>
                </div>
            </div>`;
    });
    let notesElm = document.getElementById("notes");
    if (noteObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `No Notes Created Yet`;

    }
}
function deleteNote(index) {
    console.log("I am deleting Note", index);
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        noteObj = [];
    }
    else {
        noteObj = JSON.parse(notes);
    }
    noteObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(noteObj));
    Shownotes();
}

let search=document.getElementById("searchTxt");
search.addEventListener('input',function(){
    let inputVal=search.value.tolowercase();
    // console.log("hello !! Jobless Man", inputVal);
   let noteCards= document.getElementsByClassName('noteCard');
   Array.from(noteCards).forEach(function(element){
       let cardText=element.getElementsByTagName("p")[0].innerText;
       if(cardText.includes(inputVal)){
           element.style.display="block";
       }
       else{
           element.style.display="none";
       }
   }) 
});

/*
1.Add Title
2.Mark A Note as Important
3.Separate notes by User 
*/
let obj={
    Name: "Ankit",
    Age:27
}