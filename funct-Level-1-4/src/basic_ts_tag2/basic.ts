function showHero(heroName: string, heroPower: string, heroEnemy: string): void {
    // Declare the variables
    const nameOutput: string = `Mein:e Lieblingsheld:in ist: ${heroName}`;
    const powerOutput: string = `Er/sie hat die Fähigkeit: ${heroPower}`;
    const enemyOutput: string = `Sein/ihr größte/r Gegner:in ist: ${heroEnemy}`;

    // Print string to the console
    console.log(nameOutput + ". " + powerOutput + ". " + enemyOutput + ".");
}

// Call the function 
showHero("SuperCoder", "unbegrenzte Kreativität", "Der Fehlerteufel");
