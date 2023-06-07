// Get the draggable options and the drop zone
const options = document.querySelectorAll('.option');
const dropzone = document.querySelector('.dropzone');

// Add event listeners to the options for drag events
options.forEach(option => {
  option.addEventListener('dragstart', dragStart);
  option.addEventListener('dragend', dragEnd);
});

// Add event listeners to the drop zone for drop events
dropzone.addEventListener('dragover', dragOver);
dropzone.addEventListener('dragenter', dragEnter);
dropzone.addEventListener('dragleave', dragLeave);
dropzone.addEventListener('drop', dragDrop);

// Drag functions
function dragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.id);
}

function dragEnd() {
  // Do any necessary cleanup or visual changes after dragging ends
}

// Drop zone functions
function dragOver(event) {
  event.preventDefault();
}

function dragEnter(event) {
  event.preventDefault();
  dropzone.style.backgroundColor = '#999';
}

function dragLeave() {
  dropzone.style.backgroundColor = '#ccc';
}

function dragDrop(event) {
  event.preventDefault();
  dropzone.style.backgroundColor = '#ccc';

  const optionId = event.dataTransfer.getData('text/plain');
  const option = document.getElementById(optionId);

  // Check if the selected option is correct and update the drop zone text
  if (option.innerText === 'Option 2') {
    dropzone.innerText = 'Correct!';
    dropzone.style.backgroundColor = 'green';
  } else {
    dropzone.innerText = 'Incorrect!';
    dropzone.style.backgroundColor = 'red';
  }
}