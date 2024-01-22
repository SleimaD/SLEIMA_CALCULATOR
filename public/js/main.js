//? Get the output element
let output = document.querySelector('.result');

//? Get all the buttons
let buttons = document.querySelectorAll('.bouton, .operator, .equal, .clear');

//? for click events on the buttons
buttons.forEach(button => {
 button.addEventListener('click', () => {
    //? Get the value of the button
    let value = button.innerText;

    //? Perform the corresponding operation
    switch (value) {
      case 'C':
        //? Clear the output
        output.innerText = '';
        break;
      case '=':
        //? Evaluate the expression in the output
        try {
          output.innerText = eval(output.innerText);
        } catch (error) {
          output.innerText = 'Error';
        }
        break;
      default:
        //? Append the button value to the output
        output.innerText += value;
    }
 });
 
});
