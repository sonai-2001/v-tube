import moment from "moment";

function formatDateAndAgo(date) {
    // Format the date to display the day (e.g., "Monday")
    const day = moment(date).format('dddd');
    
    // Calculate how long ago the date was from today (e.g., "2 days ago")
    const ago = moment(date).fromNow();
    return ago
  }
export default formatDateAndAgo