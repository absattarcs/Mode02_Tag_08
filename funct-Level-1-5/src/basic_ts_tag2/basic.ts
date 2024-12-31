
function multiplyAndDivide(a: number, b: number): void {
    //Result of multiplication
    console.log(`Multiplikation von 10 und 2: = ${a * b}`);

    // if case for result of multiplication
    if (b === 0) {
        console.error("Division durch 0 nicht erlaubt");
    } else {
        // else cas result of mutliplication
        console.log(`Division von 10 und 2: = ${a / b}`);
    }
}

// Calling the function
multiplyAndDivide(10, 2);   
multiplyAndDivide(30, 20);   
multiplyAndDivide(100, 100); 
multiplyAndDivide(5, 0);     
multiplyAndDivide(45, 173);  
multiplyAndDivide(1, 1000); 