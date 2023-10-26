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
        "heading": "f&zy studios",
        "content": "swjjsn dfnzuiuibv izhhzdfubvyba bzudbubzdy dfu;uhvbybvbbvu z;uizd;u;uadf;uzfuzdfuzdfug;uz;u zfduuidfj got pierakzufg gkfgug",
        "time": "2 seconds ago",
    },

    {
        "heading": "Wow",
        "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, reprehenderit doloremque omnis temporibus iure cum!",
        "time": "8 minutes ago",
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
    // Function to format the current time as HH:MM:SS
    function getCurrentTime() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const amOrPm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12; // Convert 0 to 12 for 12-hour time

        const timeString = `${formattedHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

        return `${timeString} ${amOrPm}`;
    }

    const noteBoxes = notes.map((note, index) => {
        const checkboxId = `star-${index}`;
        const currentTime = getCurrentTime(); // Get the current time

        return `
        <button class="project-box-wrapper">
            <div class="project-box" id="user-box">
                <div id="note-container">
                    <article class="note-article">
                        <div class="note-head">
                            <h2 class="note-head-title">${note.heading}</h2>
                            <div class="star-checkbox">
                                <input type="checkbox" id="${checkboxId}">
                                <label for="${checkboxId}">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star">
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                    </svg>
                                </label>
                            </div>
                        </div>
                        <div class="note-body">
                            <h3 class="note-body-content">${note.content}</h3>
                        </div>
                        <ul class="note-bottom">
                            <li class="note-bottom-time">${currentTime}</li>
                            <li title="Delete note"><i class="fa-solid fa-trash-can"></i></li>
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