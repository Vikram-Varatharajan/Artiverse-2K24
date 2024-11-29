function downloadFiles() {
  
    var fileUrls = ['./pdf/Problem Statement - Artiverse.pdf', './pdf/Abstract Template - Artiverse.docx'];
    
    var anchor = document.createElement('a');
    anchor.style.display = 'none';
    document.body.appendChild(anchor);
    
    fileUrls.forEach(function(url) {
      anchor.href = url;
      anchor.download = url.split('/').pop(); 
      anchor.click(); 
    });
    
    document.body.removeChild(anchor);
  }
  