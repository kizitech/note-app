// ALL MAIN ELEMENT
const noteItems = document.getElementsByClassName("note-item");
const mainApp = document.getElementById("random");
const app = document.querySelector(".app");
const searchBar = document.querySelector(".search-bar");
const searchBarForm = document.querySelector(".search-bar form");
const outputHT = document.querySelector(".viewer-content-heading");
const outputBT = document.querySelector(".viewer-content-paragraph");
const viewTC = document.querySelector(".viewer-color");
const mainExitBtn = document.querySelector(".main-exit-btn");
const editCloseBtn = document.querySelector(".editor-footer-btn-container button:nth-child(1)");
const editorContainer = document.querySelector(".editor-container");
const editor = document.querySelector(".editor");
const inputHT = document.getElementById("input-head-text");
const inputBT = document.getElementById("input-body-text");
const addBtn = document.querySelector(".new-note-add-btn");


// END

/*
** GET'S ALL SAVED LIST FROM LOCAL STORAGE ON LOAD
** AND ADD TO ALL NOTE ARRAY
** ALSO MAKE ALL LIST ITEM CLICKABLE
*/
this.onload = async () => {
    let response = "";
    let https = new XMLHttpRequest();
    https.open("POST", "assets/scripts/read.php");
    https.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    https.onload = function() {
        response = this.responseText;
        if (response != "null") {
            allNoteList = JSON.parse(response);
            showNoteFromStorage();
        }
    };
    https.send();
};
// END

// MAKE NOTE ITEMS CLICKABLE
function addEvent() {
    if (noteItems.length) {
        for (let x = 0; x < noteItems.length; x++) {
            noteItems[x].addEventListener("click", previewCurrent);
        }
    }
}
// END

// ADDS GIVEN VALUE TO APP INTERFACE
function addNote(value) {
    mainApp.innerHTML = value;
}
// END

// ALL NOTE LIST ARRAY
let allNoteList = [];
// END

// DISPLAY ALL NOTE LIST ARRAY IN APP
function showNoteFromStorage() {
    let txt = "";
    for (let x = 0; x < allNoteList.length; x++) {
        let i = allNoteList[x].sampleText;
        if (i.length > 65) {i = i.substr(0, 65) + "..."};
        txt += "<div class='note-item' id='" + allNoteList[x].listId + "'><div class='note-head'>" + allNoteList[x].headtext + "</div><div class='note-body'>" + i + "</div><div class='note-date-and-style'>" + '<span class="date">' + allNoteList[x].dateText + '</span><span class="style-color"></span>' + "</div></div>";
    }
    addNote(txt);
    // color adder
    for ( let x = 0; x < allNoteList.length; x++) {
        document.querySelector("#id" + x + " .note-date-and-style .style-color").style.backgroundColor = allNoteList[x].color;
    }
    addEvent();
}
// END

// GET VIEWER AND INPUT DATA INTO IT
function previewCurrent() {
    for (const item of noteItems) {
        item.style.flexBasis = "100%";
        item.style.marginBottom = "10px"; 
    }
    app.style.width = "25%";
    mainApp.style.gap = "0";
    searchBar.style.position = "none";
    searchBarForm.style.position = "none";
    searchBarForm.style.width = "100%";
    let id = this.id;
    id = id.replace("id", "");
    id = Number(id);
    host.viewCurrentItem = id;
    viewTC.style.backgroundColor = allNoteList[id].color;
    let x = allNoteList[id].headtext;
    let i = allNoteList[id].sampleText;
    outputHT.innerHTML = x;
    outputBT.innerHTML = i;
}
// END

// CURRENT STATE OF APP
let host = {
    editClicked: false,
    viewClicked: false,
    editorEmpty: true,
    contentAlreadySaved: false,
    viewCurrentItem: undefined
};
// END


/*
** CLOSE EDITOR OR VIEWER
** WHEN YOU CLICK OUTSIDE THEM
*/
editCloseBtn.addEventListener("click", () => {
    editor.style.marginTop = "-900px";
    setTimeout(() => editorContainer.style.display = "none", 350);
    host.contentAlreadySaved = false;
    inputHT.value = "";
    inputBT.value = "";
});

mainExitBtn.addEventListener("click", () => {
    for (const item of noteItems) {
        item.style.flexBasis = "calc(25% - 7.5px)";
        item.style.marginBottom = "10px"; 
    }
    app.style.width = "80%";
    mainApp.style.gap = "10px";
    searchBar.style.position = "relative";
    searchBarForm.style.position = "absolute";
    searchBarForm.style.width = "300px";
    outputBT.innerHTML = "";
    outputHT.innerHTML = "";
    host.viewCurrentItem = undefined;
});
// END

/*
** SAVES NOTES TO ALLNOTELIST ARRAY && LOCALSTORAGE
** UPDATES NOTE ON APP DISPLAY
*/
function addNewOne() {
    try {
        // triggers if the text is already saved and being edited
        if (host.contentAlreadySaved) {
            host.contentAlreadySaved = false;
            throw "saved";
            // trigger if the editor is empty
        } else if (Number(inputHT.value) == 0 && Number(inputBT.value) == 0 ) {
            throw "empty value";
            // triggers if the editor is no empty
        } else {
            throw "valid value";
        }
    } catch (value) {
        if (value === "saved") {
            try {
                if (Number(inputHT.value) === 0 && Number(inputBT.value) === 0 ) {
                    throw "empty value";
                } else {
                    throw "valid value";
                }
            } catch (msg) {
                if (msg === "empty value") {
                    alert("please input some text");
                } else {
                    let date = new Date();
                    let id = host.viewCurrentItem;
                    host.viewCurrentItem = undefined;
                    let i = inputHT.value;
                    i = i.replace(i[0], i[0].toUpperCase());
                    if (Number(i.length)) {i = i.replace(i[0], i[0].toUpperCase());}
                    let k = inputBT.value;
                    if (Number(k.length)) {k = k.replace(k[0], k[0].toUpperCase());}
                    // let c = colorPicker.value;
                    allNoteList[id].headtext = i;
                    allNoteList[id].sampleText = k;
                    allNoteList[id].dateText = date;
                    allNoteList[id].color = c;
                    inputHT.value = "";
                    inputBT.value = "";
                    // colorPicker.value = "#FF0000";
                    showNoteFromStorage();
                    editorContainer.style.display = "none";
                    editor.style.marginTop = "-25px";
                    saveToLocalStorage();
                }
            }
        } else if (value === "empty value") {
            alert("please input some text");
        } else {
            let date = new Date();
            let x = allNoteList.length;
            x = "id" + x;
            let i = inputHT.value;
            if (Number(i.length)) {i = i.replace(i[0], i[0].toUpperCase());}
            let k = inputBT.value;
            if (Number(k.length)) {k = k.replace(k[0], k[0].toUpperCase());}
            // let c = colorPicker.value;
            let obj =  {
                headtext: i,
                sampleText: k,
                dateText: date,
                listId: x // add ,
                // color: c
            };
            allNoteList.push(obj);
            inputHT.value = "";
            inputBT.value = "";
            // colorPicker.value = "#FF0000";
            showNoteFromStorage();
            editorContainer.style.display = "none";
            editor.style.marginTop = "-25px";
            saveToLocalStorage();
        }
    };
}
// END

// SAVE ALL NOTE TO LOCAL STORAGE
function saveToLocalStorage() {
    let stringList = JSON.stringify(allNoteList);
    let https = new XMLHttpRequest();
    https.onload = function() {
        let message = this.responseText;
        alert(message);
    }
    https.open("POST", "assets/scripts/save.php");
    https.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    https.send(`note=${stringList}`);
}
// END

// OPEN EDITOR
addBtn.addEventListener("click", addNewNote);
function addNewNote() {
    editorContainer.style.display = "block";
    setTimeout(() => editor.style.marginTop = "0", 50)
    inputHT.autofocus = true;
}
// END
