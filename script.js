const addNoteClick = () => {
    let inputElement = document.getElementsByClassName('input-box')[0]; 
    let newNote = document.createElement('div');
    newNote.classList.add('text-box');
    newNote.innerText = inputElement.value;
    if (newNote.innerText !== "") {
    document.body.appendChild(newNote);
    inputElement.value = "";

    let dateObj = new Date();
    let month = dateObj.getUTCMonth() + 1;
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();
    //let newDate = document.createElement('div');
    newNote.classList.add('text-box');
    newNote.innerText += `\nDate is ${day}/${month}/${year}`;  
    document.body.appendChild(newDate);
    } else{
        alert("Try and write something");
    }
}

// const addDateClick = () => {
//     let dateObj = new Date();
//     let month = dateObj.getUTCMonth() + 1;
//     let day = dateObj.getUTCDate();
//     let year = dateObj.getUTCFullYear();
//     let newDate = document.createElement('span');
//     newDate.innerText = day + "/" + month + "/" + year;  
//     document.body.appendChild(newDate);
// }

