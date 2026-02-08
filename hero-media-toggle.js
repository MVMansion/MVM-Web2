document.addEventListener('DOMContentLoaded', function () {
  function shouldUseImage() {
    var conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (window.innerWidth <= 600) return true;
    if (conn) {
      if (conn.saveData) return true;
      var et = conn.effectiveType || '';
      if (et.indexOf('2g') !== -1 || et.indexOf('slow-2g') !== -1) return true;
      if (typeof conn.downlink === 'number' && conn.downlink < 1.5) return true;
    }
    return false;
  }

  var video = document.getElementById('heroVideo');
  var img = document.getElementById('heroImage');

  if (!video || !img) return;

  if (shouldUseImage()) {
    video.style.display = 'none';
    img.style.display = 'block';
  } else {
    video.style.display = 'block';
    img.style.display = 'none';
  }
});
