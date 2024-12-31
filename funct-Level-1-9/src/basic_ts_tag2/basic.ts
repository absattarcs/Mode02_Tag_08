
//function to introduce yourself
function introduceYourself(vorname: string, nachname: string, geburtsort: string, alter: number, wohnort: string): void {
    
    // Construct the introduction message using string concatenation
    const introduction: string = "Mein Name ist " + vorname + " " + nachname + ". " + "Ich bin in " + geburtsort + " geboren. " + "Ich lerne bei SuperCode. " + "Ich bin " + alter + " Jahre alt. " + "Ich wohne in " + wohnort + ".";

    // Print the introduction console
    console.log(introduction);
}

//function with your arguments
introduceYourself("Aurora", "Stardust", "New York", 20, "Celestia");
