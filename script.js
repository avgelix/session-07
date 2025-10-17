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

function toggleSecondInput() {
    const operation = document.getElementById('operation').value;
    const num2Input = document.getElementById('num2');
    
    if (operation === 'sqrt') {
        num2Input.style.display = 'none';
    } else {
        num2Input.style.display = 'block';
    }
}

function calculate() {
    const resultElement = document.getElementById('result');
    const operation = document.getElementById('operation').value;
    
    // Get the input values
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    // Reset animation
    resultElement.classList.remove('show');
    void resultElement.offsetWidth; // Trigger reflow
    
    // Validate first number
    if (isNaN(num1)) {
        resultElement.textContent = 'Please enter a valid number';
        resultElement.classList.add('show');
        return;
    }
    
    // Calculate based on operation
    let result;
    let error = false;
    
    switch(operation) {
        case 'add':
            if (isNaN(num2)) {
                error = 'Please enter a second number';
                break;
            }
            result = num1 + num2;
            break;
            
        case 'subtract':
            if (isNaN(num2)) {
                error = 'Please enter a second number';
                break;
            }
            result = num1 - num2;
            break;
            
        case 'multiply':
            if (isNaN(num2)) {
                error = 'Please enter a second number';
                break;
            }
            result = num1 * num2;
            break;
            
        case 'divide':
            if (isNaN(num2)) {
                error = 'Please enter a second number';
                break;
            }
            if (num2 === 0) {
                error = 'Cannot divide by zero';
                break;
            }
            result = num1 / num2;
            break;
            
        case 'sqrt':
            if (num1 < 0) {
                error = 'Cannot calculate square root of a negative number';
                break;
            }
            result = Math.sqrt(num1);
            break;
    }
    
    // Display result or error
    if (error) {
        resultElement.textContent = error;
    } else {
        // Format the result to handle long decimal places
        result = Number.isInteger(result) ? result : parseFloat(result.toFixed(4));
        resultElement.textContent = `${result}`;
        celebrateWithConfetti();
    }
    
    resultElement.classList.add('show');
}