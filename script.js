function celebrateWithConfetti() {
    const defaults = {
        spread: 360,
        ticks: 100,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
        shapes: ['star'],
        colors: ['#FFD700', '#FF1493', '#00FFFF', '#00FF00']
    };

    function shoot() {
        confetti({
            ...defaults,
            particleCount: 40,
            scalar: 1.2,
            shapes: ['star']
        });

        confetti({
            ...defaults,
            particleCount: 10,
            scalar: 0.75,
            shapes: ['circle']
        });
    }

    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);
}

function addNumbers() {
    const resultElement = document.getElementById('result');
    
    // Get the input values
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    // Reset animation by removing and re-adding the class
    resultElement.classList.remove('show');
    void resultElement.offsetWidth; // Trigger reflow
    
    // Check if the inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = 'Please enter valid numbers';
        resultElement.classList.add('show');
        return;
    }
    
    // Calculate the sum
    const sum = num1 + num2;
    
    // Display the result with animation
    resultElement.textContent = `Result: ${sum}`;
    resultElement.classList.add('show');
    
    // Trigger confetti celebration
    celebrateWithConfetti();
}