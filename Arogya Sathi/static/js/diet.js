document.getElementById('button1').addEventListener('click', function() {
    hideAllContent();
    document.getElementById('content1').style.display = 'block';
  });
  
  document.getElementById('button2').addEventListener('click', function() {
    hideAllContent();
    document.getElementById('content2').style.display = 'block';
  });
  
  document.getElementById('button3').addEventListener('click', function() {
    hideAllContent();
    document.getElementById('content3').style.display = 'block';
  });
  
  document.getElementById('button4').addEventListener('click', function() {
    hideAllContent();
    document.getElementById('content4').style.display = 'block';
  });
  
  function hideAllContent() {
    var contents = document.getElementsByClassName('dietdata');
    for (var i = 0; i < contents.length; i++) {
      contents[i].style.display = 'none';
    }
  }
  