const notesData = [

    {
        "heading": "Wow",
        "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, reprehenderit doloremque omnis temporibus iure cum!",
        "time": "2 seconds ago",
    },

    {
        "heading": "Wow",
        "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, reprehenderit doloremque omnis temporibus iure cum!",
        "time": "2 seconds ago",
    },

    {
        "heading": "Wow",
        "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, reprehenderit doloremque omnis temporibus iure cum!",
        "time": "2 seconds ago",
    },

    {
        "heading": "Wow",
        "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, reprehenderit doloremque omnis temporibus iure cum!",
        "time": "2 seconds ago",
    },

    {
        "heading": "Wow",
        "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, reprehenderit doloremque omnis temporibus iure cum!",
        "time": "2 seconds ago",
    },

    {
        "heading": "Wow",
        "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, reprehenderit doloremque omnis temporibus iure cum!",
        "time": "2 seconds ago",
    },

    {
        "heading": "Wow",
        "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, reprehenderit doloremque omnis temporibus iure cum!",
        "time": "2 seconds ago",
    },

    {
        "heading": "Wow",
        "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, reprehenderit doloremque omnis temporibus iure cum!",
        "time": "2 seconds ago",
    },

    {
        "heading": "Wow",
        "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, reprehenderit doloremque omnis temporibus iure cum!",
        "time": "2 seconds ago",
    },

    {
        "heading": "Wow",
        "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, reprehenderit doloremque omnis temporibus iure cum!",
        "time": "2 seconds ago",
    },

    {
        "heading": "Wow wow",
        "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, reprehenderit doloremque omnis temporibus iure cum!",
        "time": "3 seconds ago",
    },

    {
        "heading": "Wow",
        "content": "Lorem ipsum yes dolor sit amet consectetur adipisicing elit. Quae, reprehenderit doloremque omnis temporibus iure cum!",
        "time": "3 seconds ago",
    },

    {
        "heading": "Wow wow",
        "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, reprehenderit doloremque omnis temporibus iure cum!",
        "time": "3 seconds ago",
    },

    {
        "heading": "Wow",
        "content": "Lorem ipsum yes dolor sit amet consectetur adipisicing elit. Quae, reprehenderit doloremque omnis temporibus iure cum!",
        "time": "3 seconds ago",
    },

];




// Function to generate and display the note boxes
function displayNotes(notes) {
    const noteBoxes = notes.map((note, index) => {
        return `
            <button class="project-box-wrapper">
                <div class="project-box" id="user-box">
                    <div id="note-container">
                        <article class="note-article">
                            <h2 class="note-head">${note.heading}</h2>
                            <div class="note-body">
                                <h3 class="note-body-content">${note.content}</h3>
                            </div>
                            <ul class="note-bottom">
                                <li class="note-bottom-time">${note.time}</li>
                                <li title="Open Note"><i class="fa-regular fa-folder-open"></i></li>
                            </ul>
                        </article>
                    </div>
                </div>
            </button>
        `;
    });

    const noteBoxesHtml = noteBoxes.join('');
    const projectBoxesElement = document.getElementById("projectBoxes");
    projectBoxesElement.innerHTML = noteBoxesHtml;

    // Update the total number of notes
    const totalNotesCountElement = document.getElementById("total-notes-count");
    totalNotesCountElement.textContent = notes.length;
}

// Initial display of all notes
displayNotes(notesData);

// Get the search input element
const searchInput = document.getElementById("user-search-input");

// Add an event listener to the search input for real-time filtering
searchInput.addEventListener("input", function () {
    const searchQuery = searchInput.value.toLowerCase();

    // Filter notes that match the search query
    const filteredNotes = notesData.filter(note => {
        return note.heading.toLowerCase().includes(searchQuery) || note.content.toLowerCase().includes(searchQuery);
    });

    // Display the filtered notes
    displayNotes(filteredNotes);
});
