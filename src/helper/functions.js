export  function formatToKOrMillion(value) {
    console.log(value)
    // Check if the value is in the millions
    if (value >= 1_000_000) {
        return (value / 1_000_000).toFixed(1) + 'M';
    }
    // Check if the value is in the thousands
    else if (value >= 1_000) {
        return (value / 1_000).toFixed(1) + 'K';
    }
    // Return the value as is if it's less than 1,000
    else {
        return value
    }
}