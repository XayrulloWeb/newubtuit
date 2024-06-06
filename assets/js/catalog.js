document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.Gtext');
    
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const targetTable = document.getElementById(targetId);
        
        if (targetTable.style.display === 'none' || targetTable.style.display === '') {
          targetTable.style.display = 'block';
        } else {
          targetTable.style.display = 'none';
        }
      });
    });
  });