// Function to get the current date and time
function calculateAge(birthYear: number): number {
    const currentYear: number = new Date().getFullYear(); 
    const age: number = currentYear - birthYear; 
    return age; 
}

// print out the age calculation
const myAge: number = calculateAge(1990);
console.log(`${myAge}`);

// Function for compare age
function compareAges(myAge: number, otherAge: number): number {
    const ageDifference: number = Math.abs(myAge - otherAge); 
    return ageDifference; 
}

const otherParticipantAge: number = 25; 
const ageDifference: number = compareAges(myAge, otherParticipantAge); 
console.log(`${ageDifference}`);