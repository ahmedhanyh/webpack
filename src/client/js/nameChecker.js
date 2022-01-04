function checkForName(inputText) {
    return /^(ftp|http|https):\/\/[^ "]+$/.test(inputText);
}

export { checkForName }
