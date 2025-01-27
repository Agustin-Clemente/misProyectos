const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
  button.addEventListener('mouseenter', () => {
    const preview = button.querySelector('.preview');
    preview.style.display = 'block';

    const buttonRect = button.getBoundingClientRect();
    const previewRect = preview.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Posición inicial
    preview.style.left = '0';
    preview.style.right = 'auto';
    preview.style.top = '100%';
    preview.style.bottom = 'auto';

    // Ajustar para borde derecho
    if (buttonRect.right > previewRect.width) {
      preview.style.left = 'auto';
      preview.style.right = '0';
    } 

    // Ajustar para borde izquierdo
    if (buttonRect.left > 300) {
      preview.style.left = 'auto';
      preview.style.right = '0';
    }


    if (viewportWidth < 1200) {
      // Ajustar para borde superior
    if (buttonRect.top - previewRect.height < 0) { 
      preview.style.top = '100%'; 
      preview.style.bottom = 'auto'; 
    } 
    
      // Ajustar para borde inferior 
      if (buttonRect.bottom + previewRect.height > viewportHeight) { 
        preview.style.top = 'auto'; 
        preview.style.bottom = '100%'; 
      }
    }
    
  });

  button.addEventListener('mouseleave', () => {
    const preview = button.querySelector('.preview');
    preview.style.display = 'none';
  });
});
