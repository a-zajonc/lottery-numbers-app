export function getRandomNumber(min, max, array) {
    let random = Math.floor(Math.random() * (max - min)) + min
    if (array.length < 1) {
        return random
    }

    if ([...array].includes(random)) {
        random = getRandomNumber(min, max, array);
    }
    return random
}

