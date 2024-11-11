// This function checks if a given string is a palindrome
function isPalindrome(str) {
    const cleanedStr = str.replace(/\s+/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

function palindromeChecker() {
    let continueChecking = true;  // Loop control variable

    while (continueChecking) {
        const userInput = prompt("Enter a word or phrase to check if it's a palindrome:");

        if (userInput) {
            const resultText = isPalindrome(userInput)
                ? `"${userInput}" is a palindrome!`
                : `"${userInput}" is not a palindrome.`;

            document.getElementById('result').textContent = resultText;
        }

        continueChecking = confirm("Do you want to check another word or phrase?");
    }
}

palindromeChecker();
