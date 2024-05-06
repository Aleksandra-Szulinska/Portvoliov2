
    document.addEventListener('DOMContentLoaded', function() {
        const form = document.querySelector('#contact-me form');
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 
            const name = document.querySelector('#name').value;
            const email = document.querySelector('#email').value;
            const message = document.querySelector('#message').value;
            
            const mailtoLink = `mailto:alexszuli@yahoo.com?subject=New Message from ${name}&body=${message}%0A%0AReply to: ${email}`;
            
            window.location.href = mailtoLink;
        });
    });

