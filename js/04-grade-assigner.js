//Variable declaration.  Use will be prompted to enter a number from 1-100.
const grade = prompt('Enter a grade between 1-100.');

// If statement to first validate 'grade' value to be within 1-100. If valid, grade letter will display. If not valid, error will display.

if (grade >= 1 && grade <= 100){

    if(grade >= 90 & grade <= 100) {
        console.log('You received an A.');
    }else if(grade >= 80 & grade <= 89){
        console.log('You received an B.');
    }else if(grade >= 70 & grade <= 79){
        console.log('You received an C.');
    }else if(grade >= 60 & grade <= 69){
        console.log('You received an D.');
    }else{
        console.log('You received an F.');
    };

}else{
    console.log('Input is invalid. Only numbers from 1-100 are accepted. ');
};




// The “Grade Assigner” Application

// Usage: Use else if or switch statements

// Collect the a number between 1 and 100 from the user.
// Make sure that number is between 1 and 100, if it is not, let the user know that only numbers between 1 and 100 are accepted.
// If the score is between 60 and 69, write out “You received a D” into the console.
// If the score is between 70 and 79, write out “You received a C” into the console.
// If the score is between 80 and 89, write out “You received a B” into the console.
// If the score is between 90 and 100, write out “You received an A” into the console.
// If the score is less than 60, write out “You received an F” into the console.