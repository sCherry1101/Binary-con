function convert(mode) {
    const decimalInput = document.getElementById('decimal');
    const binaryInput = document.getElementById('binary');
    const outputDiv = document.getElementById('none');

    if(mode === 'dec_to_bin') {
        const decValue = parseInt(decimalInput.value);
        if(isNaN(decValue)) {
            outputDiv.textContent = "Please enter a valid decimal number!";
            return;
        }
        const binValue = decValue.toString(2);
        binaryInput.value = binValue;
        outputDiv.textContent = `${decValue} in binary is ${binValue}`;
    }

    if(mode === 'bin_to_dec') {
        const binValue = binaryInput.value.trim();
        if(!/^[01]+$/.test(binValue)) {
            outputDiv.textContent = "Please enter a valid binary number!";
            return;
        }
        const decValue = parseInt(binValue, 2);
        decimalInput.value = decValue;
        outputDiv.textContent = `${binValue} in decimal is ${decValue}`;
    }
}

