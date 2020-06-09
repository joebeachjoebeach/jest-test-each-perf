const doThing = (...input) => {
    return input.join(".");
};

describe("slow test", () => {
    const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8"];
    const symbols = ["!", "@", "#", "$", "%", "^", "&", "*"];

    const data = [];

    letters.forEach((letter) => {
        numbers.forEach((number) => {
            symbols.forEach((symbol) => {
                for (let value = 0; value < 100; value += 1) {
                    data.push([
                        value.toString(),
                        symbol,
                        number,
                        letter,
                    ]);
                }
            });
        });
    });

    // This takes ~40s on my system
    it.each(data)("test %#", (str, str2, str3, str4) => {
        const expected = [str, str2, str3, str4].join(".");
        const actual = doThing(str, str2, str3, str4);
        expect(actual).toEqual(expected);
    });

    // This takes ~3s on my system
    it("everything", () => {
        data.forEach(([str, str2, str3, str4]) => {
            const expected = [str, str2, str3, str4].join(".");
            const actual = doThing(str, str2, str3, str4);
            expect(actual).toEqual(expected);
        });
    });
});
