export const required = (value) => {
    if (value) {
        return undefined
    }
    return 'field is required'
};

export const maxLengthCreator = (maxLength) => {
     return (value) => {
        if (value.length > maxLength) {
            return (`maximum ${maxLength} symbols`)
        }
        return undefined
    }
}