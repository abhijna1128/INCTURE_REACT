 const display = document.getElementById('display');
  function press(char) {
    const operators = ['+', '-', '*', '/'];
    if (operators.includes(char)) {
      if (display.value === '' || operators.includes(display.value.slice(-1))) {
        return;
      }
    }

    display.value += char;
  }

  function calculate() {
    try {
      let result = eval(display.value);

      if (!isFinite(result)) {
        alert("Error: Cannot divide by zero");
        clearDisplay();
        return;
      }

      display.value = result;
    } catch {
      alert("Error: Invalid expression");
      clearDisplay();
    }
  }
  function clearDisplay() {
    display.value = '';
  }