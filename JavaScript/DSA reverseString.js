function reverseString(text) {
    // Code goes here
    // return text.split("").reverse().join("")
    return [...text].reduce((acc, cum) => acc - cum, "")
}

reverseString("code")