document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Gracias por tu mensaje. Me pondré en contacto contigo pronto.');
    this.reset();
});
