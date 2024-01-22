//? Get the output element
let output = document.querySelector('.result');

//? Get all the buttons
let buttons = document.querySelectorAll('.bouton, .operator, .equal, .clear');

let last = false


//? for click events on the buttons
buttons.forEach(button => {

    button.addEventListener('click', () => {

        //? Get the value of the button
        let value = button.innerText;


        if (output.innerText === '' && value !== '-' && ["+", "-", "*", "/", "%"].includes(value)) {
            return;
        } //? to prevent from starting with an operator ( except '-' )


        //? If the last character of the output is an operator and the clicked button is also an operator, return 
        if (["+", "-", "*", "/", "%"].includes(output.innerText.slice(-1)) && ["+", "-", "*", "/", "%"].includes(value)) {
            return;
        }else if (last) {
            if (["+", "-", "*", "/", "%"].includes(value)) {
                last = false
                output.innerText += value
            }else{
                last  = false
                output.innerText = button.value
            }
        }


        //? Perform the corresponding operation
        switch (value) {
            case 'C':
                //? Clear the output
                output.innerText = '';
                break;
            case '=':
                //? Evaluate the expression in the output
                try {
                    output.innerText = Function("return " + output.innerText)();
                    last = true 
                } catch (error) {
                    output.innerText = 'Error';
                }
                break;
            default:
                //? add the button value to the output
                output.innerText += value;
        }

    });

});
