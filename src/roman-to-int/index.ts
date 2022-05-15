function getEquivalency(s: string): number {
    const equivalency = new Map<string, number>([
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["III", 3],
        ["II", 2],
        ["I", 1]
    ]);

    const value = equivalency.get(s);
    if (value) return value;
    else throw new Error(`Error: ${value} is not a valid roman numeral.`);
}

function isAValidRomanNumeral(romanNumeral: string) : boolean {
    const regex = /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/gm;
    const matches = romanNumeral.match(regex)
    return matches !== null;
}

function romanToInt(romanNumeral: string): number | undefined {
    if(!isAValidRomanNumeral(romanNumeral)) throw new Error(`Error: ${romanNumeral} is not a valid roman numeral.`);
    const regex = /M|CM|D|CD|C|XC|L|XL|X|IX|V|IV|III|II|I/gm;
    const matches = romanNumeral.toUpperCase().match(regex);
    return matches?.reduce(
        (prev: number, current: string) => prev + getEquivalency(current),
        0
    );
}

export default romanToInt;