export default {
    extractByRegex(str: string, regex: RegExp): string | null {
        const match = str.match(regex);
        return match ? match[1] : null;
    }
}