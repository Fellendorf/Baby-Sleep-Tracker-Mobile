export default Utils = {
    extractByRegex(string, regex) {
        return string.match(regex)[1];
    }
}