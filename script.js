function generatePassword(length) {
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    const allChars = upperCase + lowerCase + numbers + specialChars;

    const getRandomChar = (str) => str[Math.floor(Math.random() * str.length)];

    let password = [
        getRandomChar(upperCase),
        getRandomChar(lowerCase),
        getRandomChar(numbers),
        getRandomChar(specialChars)
    ];

    for (let i = 4; i < length; i++) {
        password.push(getRandomChar(allChars));
    }

    password = password.sort(() => Math.random() - 0.5);

    return password.join('');
}

console.log(generatePassword(8)); 
console.log(generatePassword(8)); 
console.log(generatePassword(12));