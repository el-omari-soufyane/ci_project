class Converter {
    constructor() {}

    convert(romanNumber) {
        return romanNumber == 1 ? "I" : romanNumber == 2 ? "II" : "ERROR"
    }
}