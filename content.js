let isFullScreen = false;

// Toggle fullscreen for textarea
function toggleFullScreen(textarea) {
  if (isFullScreen) {
    // Exit fullscreen mode
    textarea.style.position = '';
    textarea.style.left = '';
    textarea.style.top = '';
    textarea.style.width = '';
    textarea.style.height = '';
    textarea.style.zIndex = '';
    isFullScreen = false;
  } else {
    // Enter fullscreen mode
    textarea.style.position = 'fixed';
    textarea.style.left = '0';
    textarea.style.top = '0';
    textarea.style.width = '100%';
    textarea.style.height = '100%';
    textarea.style.zIndex = '10000';
    isFullScreen = true;
  }
}

// Listen for clicks on the page to detect textarea
document.addEventListener('click', function(e) {
  if (e.target.tagName.toLowerCase() === 'textarea') {
    toggleFullScreen(e.target);
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

