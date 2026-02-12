

export function getCurrentWeekDay() : string{
    const now: Date = new Date();

    //to get the desired option
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long'
    }

    return now.toLocaleDateString('en-US', options);
}