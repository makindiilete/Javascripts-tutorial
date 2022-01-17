/*From the code of our "count" exercise, we want to modify the code and add error handling to : -
 * If the first an argument, throw an exception
 * Wrap "const count & console.log" in a try catch block
 * Catch the exception and log it on the console*/

//MY SOLUTION
const numbers = [1, 2, 3, 4];
//here we try to output the function result
try {
    const count = countOccurences([], 2);
    console.log(count); // RESULT : - Error: Please supply at least one element to the array
}

try {
    const count = countOccurences(null, 2);
    console.log(count); // RESULT : - Error: Argument must be an array
}
// if we try fails, we catch the error behind the failure
catch (e) {
    console.log(e);
}

function countOccurences(array, searchElement) {
    //if the user supply an array with atleast one element
    if (Array.isArray(array) && array.length !== 0) {
        return array.reduce((accumulator, currentValue) => {
            if (currentValue === searchElement) accumulator++;
            return accumulator;
        }, 0);
    }
    //else if the user supply an argument that is not an array
    else if (!Array.isArray(array)) {
        throw new Error("Argument must be an array");
    }
    // if the user supply an empty array
    else if (array.length === 0) {
        throw new Error("Please supply at least one element to the array");
    }
}

//MOSH SOLUTION


try {
    const numbers = [1, 2, 3, 4];
    const count = countOccurrences(null, 1);
    console.log(count);
}
catch (e) {
    console.log(e.message);
}

function countOccurrences(array, searchElement) {
    if (!Array.isArray(array))
        throw new Error('Invalid array.');

    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        return accumulator + occurrence;
    }, 0);
}
