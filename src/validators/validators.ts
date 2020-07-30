export type fieldValidatorsType = (value: string) => string | undefined 

export const required: fieldValidatorsType = (value) => {
    if (value) {
        return undefined
    }
    return 'field is required'
};

export const maxLengthCreator = (maxLength: number): fieldValidatorsType => {
     return (value) => {
        if (value.length > maxLength) {
            return (`maximum ${maxLength} symbols`)
        }
        return undefined
    }
}