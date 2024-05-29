document.addEventListener('DOMContentLoaded', function() {
    // Modal functionality
    var modal = document.getElementById('myModal');
    var closeBtn = document.querySelector('.close');

    document.querySelector('.s_filter').addEventListener('click', function() {
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});

document.querySelectorAll('.form input, .form textarea').forEach(field => {
    field.addEventListener('keyup', handleEvent);
    field.addEventListener('blur', handleEvent);
    field.addEventListener('focus', handleEvent);
    
    function handleEvent(e) {
      let label = field.previousElementSibling;
      
      if (e.type === 'keyup') {
        if (field.value === '') {
          label.classList.remove('active', 'highlight');
        } else {
          label.classList.add('active', 'highlight');
        }
      } else if (e.type === 'blur') {
        if (field.value === '') {
          label.classList.remove('active', 'highlight');
        } else {
          label.classList.remove('highlight');
        }
      } else if (e.type === 'focus') {
        if (field.value !== '') {
          label.classList.add('highlight');
        } else {
          label.classList.remove('highlight');
        }
      }
    }
  });
  
  document.querySelectorAll('.tab a').forEach(tab => {
    tab.addEventListener('click', function (e) {
      e.preventDefault();
      let target = document.querySelector(tab.getAttribute('href'));
  
      tab.parentNode.classList.add('active');
      let siblings = Array.from(tab.parentNode.parentNode.children);
      for (let sibling of siblings) {
        if (sibling !== tab.parentNode) {
          sibling.classList.remove('active');
        }
      }
  
      document.querySelectorAll('.tab-content > div').forEach(div => {
        if (div !== target) {
          div.style.display = 'none';
        }
      });
      target.style.display = 'block';
      target.style.opacity = 0;
      setTimeout(() => {
        target.style.opacity = 1;
      }, 200); // A slight delay to trigger CSS transition
    });
  });