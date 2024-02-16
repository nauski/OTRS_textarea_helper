let isFullScreen = false;

function toggleFullScreen(textarea) {
  if (isFullScreen) {
    textarea.style.position = '';
    textarea.style.left = '';
    textarea.style.top = '';
    textarea.style.width = '';
    textarea.style.height = '';
    textarea.style.zIndex = '';
    isFullScreen = false;
  } else {
    textarea.style.position = 'fixed';
    textarea.style.left = '0';
    textarea.style.top = '0';
    textarea.style.width = '100%';
    textarea.style.height = '100%';
    textarea.style.zIndex = '10000';
    isFullScreen = true;
  }
}

document.addEventListener('click', function(e) {
  if (e.target.tagName.toLowerCase() === 'textarea') {
        activeTextarea = e.target; // Set the active textarea
    floatButton.style.display = 'block';
  } else {
    floatButton.style.display = 'none'; // Hide the button button if the textarea is not activated
  }
  
}, true);

// Prevent touch events from reaching other elements when in fullscreen mode
document.addEventListener('touchstart', function(e) {
  if (isFullScreen) e.stopPropagation();
}, true);
document.addEventListener('touchend', function(e) {
  if (isFullScreen) e.stopPropagation();
}, true);
document.addEventListener('touchmove', function(e) {
  if (isFullScreen) e.stopPropagation();
}, true);

// Ensure the button is initially hidden
const floatButton = document.createElement('button');
floatButton.textContent = 'Toggle Fullscreen';
floatButton.style.position = 'fixed';
floatButton.style.bottom = '20px';
floatButton.style.right = '20px';
floatButton.style.zIndex = '10001';
floatButton.style.display = 'none';

document.body.appendChild(floatButton);

let activeTextarea = null;

function toggleFullScreen() {
  if (activeTextarea.style.position === 'fixed') {
    // Exit fullscreen mode
    activeTextarea.style.position = '';
    activeTextarea.style.left = '';
    activeTextarea.style.top = '';
    activeTextarea.style.width = '';
    activeTextarea.style.height = '';
    activeTextarea.style.zIndex = '';
    floatButton.style.display = 'none';
  } else {
    // Enter fullscreen mode
    activeTextarea.style.position = 'fixed';
    activeTextarea.style.left = '0';
    activeTextarea.style.top = '0';
    activeTextarea.style.width = '100%';
    activeTextarea.style.height = '100%';
    activeTextarea.style.zIndex = '10000';
    floatButton.style.display = 'block';
  }
}

// Toggle fullscreen when button is clicked
floatButton.addEventListener('click', toggleFullScreen);

// Set active textarea and show button without entering fullscreen
document.addEventListener('click', function(e) {
  if (e.target.tagName.toLowerCase() === 'textarea') {
    activeTextarea = e.target;
    floatButton.style.display = 'block';
  }
}, true);

document.addEventListener('touchstart', function(e) {
  if (e.target.tagName.toLowerCase() === 'textarea') {
    activeTextarea = e.target;
    floatButton.style.display = 'block';
  }
}, true);

