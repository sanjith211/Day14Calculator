let display = document.getElementById('result');

        function appendToDisplay(char) {
            display.value += char;
        }

        function clearDisplay() {
            display.value = '';
        }

        function removeLastValue() {
            display.value =  display.value.toString().slice(0,-1);
        }


        function calculate() {
            try {
                display.value = eval(display.value);
            } catch (error) {
                alert('Invalid expression');
                clearDisplay();
            }
        }

        document.addEventListener('keydown', function (event) {
            const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.', 'Enter'];
            if (!allowedKeys.includes(event.key)) {
                event.preventDefault();
                alert('Only numbers and basic operators (+, -, *, /) are allowed');
            }
        });