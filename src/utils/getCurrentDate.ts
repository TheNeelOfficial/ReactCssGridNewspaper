export function getCurrentDate(separator=':'){

    let newDate = new Date()
    let date = newDate.toDateString();
    
    return `${`${date}`}`
    }