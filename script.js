// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('myButton');
    const output = document.getElementById('output');
    
    // Add click event listener to the button
    button.addEventListener('click', function() {
        const messages = [
            'Hello from JavaScript!',
            'The button works!',
            'JavaScript is running!',
            'You clicked the button!'
        ];
        
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        output.textContent = randomMessage;
        
        // Add a simple animation
        output.style.transform = 'scale(1.1)';
        setTimeout(() => {
            output.style.transform = 'scale(1)';
        }, 200);
    });
});

