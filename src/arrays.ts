/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const length: number = numbers.length;
    const numberFirstAndLast: number[] = [];
    if (length === 0) {
        return numberFirstAndLast;
    } else {
        numberFirstAndLast[0] = numbers[0];
        numberFirstAndLast[1] = numbers[length - 1];
    }
    return numberFirstAndLast;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const triple = numbers.map((numbers: number): number => numbers * 3);
    return triple;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const stringToInt = numbers.map((numbers: string): number =>
        Number.parseInt(numbers) ? +numbers : 0
    );
    return stringToInt;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const noDollars = amounts.map((numbers: string): string =>
        numbers.replace("$", "")
    );

    const stringToInt = noDollars.map((numbers: string): number =>
        Number.parseInt(numbers) ? +numbers : 0
    );
    return stringToInt;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const questionMark = messages.filter((message) => !message.endsWith("?"));
    const exclamationPoint = questionMark.map((message: string): string =>
        message.includes("!") ? message.toUpperCase() : message
    );
    //    const removeQuotes = exclamationPoint.map((message: string): string =>
    //        message = message.filter(e => e !== "")
    //    );
    return exclamationPoint;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWordCount = words.filter(
        (word: string): boolean => word.length < 4
    );
    return shortWordCount.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const colorCheck = colors.every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green"
    );
    return colorCheck;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    const sum = addends.reduce((total, num) => total + num, 0);
    return sum + "=" + addends.join("+");
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    // Search for the index of a negative number
    const negative = values.findIndex((number) => number < 0);
    // Code for if there are no negative numbers. Get sum of all values.
    if (negative === -1) {
        const totalSum = values.reduce(
            (total: number, item: number) => total + item,
            0
        );
        // Add sum to the end of the array
        return [...values, totalSum];
    } else {
        // This code is for when the negative number is found.
        // When it's found it gets the sum of the positive numbers before it.
        const sum = values
            .slice(0, negative)
            .reduce((total: number, item: number) => total + item, 0);

        //values to seperate the array to make it easier to return.
        const beforeNeg = values.slice(0, negative + 1);
        const afterNeg = values.slice(negative + 1, values.length);

        return [...beforeNeg, sum, ...afterNeg];
    }
}
