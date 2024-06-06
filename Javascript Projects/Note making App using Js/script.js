// Load notes from local storage on page load
document.addEventListener('DOMContentLoaded', function() {
    loadData();
});

// Function to add a new note
function addNote() {
    var noteInput = document.getElementById('noteInput').value;
    if (noteInput.trim() !== '') {
        var noteList = document.getElementById('noteList');
        var li = document.createElement('li');
        li.innerHTML = noteInput + ' <button onclick="editNote(this)">Edit</button> <button onclick="deleteNote(this)">Delete</button>';
        noteList.insertBefore(li, noteList.childNodes[0]); // Add new note to the top of the list
        saveData(); // Save notes to local storage
        document.getElementById('noteInput').value = ''; // Clear input field after adding note
    } else {
        alert('Please enter a note before adding.');
    }
}

// Function to edit a note
function editNote(element) {
    var newNote = prompt('Enter your new note:');
    if (newNote !== null && newNote.trim() !== '') {
        element.parentNode.firstChild.nodeValue = newNote;
        saveData();
    }
}

// Function to delete a note
function deleteNote(element) {
    if (confirm('Are you sure you want to delete this note?')) {
        element.parentNode.remove();
        saveData();
    }
}

// Function to save notes to local storage
function saveData() {
    var notes = [];
    var noteList = document.getElementById('noteList').getElementsByTagName('li');
    for (var i = 0; i < noteList.length; i++) {
        notes.push(noteList[i].textContent.trim());
    }
    localStorage.setItem('notes', JSON.stringify(notes));
}

// Function to load notes from local storage
function loadData() {
    var storedNotes = JSON.parse(localStorage.getItem('notes'));
    if (storedNotes) {
        var noteList = document.getElementById('noteList');
        storedNotes.forEach(function(note) {
            var li = document.createElement('li');
            li.innerHTML = note + ' <button onclick="editNote(this)">Edit</button> <button onclick="deleteNote(this)">Delete</button>';
            noteList.appendChild(li);
        });
    }
}

// Event listener for Add Note button
document.getElementById('addNoteBtn').addEventListener('click', addNote);
