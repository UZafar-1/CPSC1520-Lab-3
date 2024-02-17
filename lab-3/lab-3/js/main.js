// Task 1: Show the JavaScript Resources
document.getElementById('show-resources').addEventListener('click', function() {
    var resourcesDiv = document.getElementById('resources');
    resourcesDiv.classList.toggle('d-none');
});

// Task 2 & 3: Making the links bold on hover and removing the bold on mouseout
document.getElementById('resources').addEventListener('mouseover', function(e) {
    if (e.target.tagName === 'A') { // Ensure the event is fired only for links
        e.target.classList.add('fw-bold');
    }
});

document.getElementById('resources').addEventListener('mouseout', function(e) {
    if (e.target.tagName === 'A') { // Ensure the event is fired only for links
        e.target.classList.remove('fw-bold');
    }
});

// Task 4 & 5: Italicize a clicked item and remove Italic on mouseout
document.getElementById('resources').addEventListener('click', function(e) {
    if (e.target.classList.contains('list-group-item')) { // Check if the clicked item is a list-group-item
        e.target.classList.add('fst-italic');
    }
});

document.getElementById('resources').addEventListener('mouseout', function(e) {
    if (e.target.classList.contains('list-group-item')) { // Check if the item is a list-group-item
        e.target.classList.remove('fst-italic');
    }
});
