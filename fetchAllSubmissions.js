const express = require('express');
const app = express();
const submissions = require('./allSubmissions.json');
const allSubmissions = [];
// allSubmissions.push('abc');
submissions.submissions_dump.forEach(element => {
    if (element.status_display === "Accepted" && allSubmissions && allSubmissions.findIndex((subm) => subm.title === element.title) === -1) {
        const options = {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        };
        const formattedDate = (new Date(element.timestamp * 1000)).toLocaleString('en-US', options);
        const [month, day, year, time] = formattedDate.split(' ');
        const finalDate = `${day.substring(0, day.length - 1)} ${month} ${year} ${time}`;
        const obj = {
            "id": element.id,
            "question_id": element.question_id,
            "lang_name": element.lang_name,
            "time": element.time,
            "timestamp": element.timestamp,
            "status_display": element.status_display,
            "title": element.title,
            "date": finalDate
        };
        allSubmissions.push(obj);
    }
});

// Custom sorting function based on the time string
function compareTime(a, b) {
    // Check if both submissions have the 'time' property
    if (!a.time || !b.time) {
        return 0; // Return 0 if either 'time' property is missing
    }

    // Extracting the weeks, months, and days from the time string
    const regex = /(\d+)\s*weeks?/i;
    const aWeeks = parseInt((a.time.match(regex) || [])[1]) || 0;
    const bWeeks = parseInt((b.time.match(regex) || [])[1]) || 0;

    const regex2 = /(\d+)\s*months?/i;
    const aMonths = parseInt((a.time.match(regex2) || [])[1]) || 0;
    const bMonths = parseInt((b.time.match(regex2) || [])[1]) || 0;

    const regex3 = /(\d+)\s*days?/i;
    const aDays = parseInt((a.time.match(regex3) || [])[1]) || 0;
    const bDays = parseInt((b.time.match(regex3) || [])[1]) || 0;

    // Calculate total time in days for comparison
    const aTotalDays = aWeeks * 7 + aMonths * 30 + aDays;
    const bTotalDays = bWeeks * 7 + bMonths * 30 + bDays;

    return aTotalDays - bTotalDays;
}

// // Sort the submissions array using the custom compareTime function
// allSubmissions.sort(compareTime);

allSubmissions.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA - dateB;
});
app.get('/', (req, res) => {
    allSubmissions.push(allSubmissions.length);
    res.send(allSubmissions);
});
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});































// const axios = require('axios'); // Import Axios for making HTTP requests

// async function fetchSubmissions() {
//     const baseURL = 'https://leetcode.com/api/submissions/?offset=';
//     const limit = 20;
//     const submissions = [];

//     // Iterate over each offset
//     for (let offset = 0; offset <= 20; offset += limit) {
//         try {
//             // Make GET request to fetch submissions for the current offset
//             const response = await axios.get(`${baseURL}${offset}&limit=${limit}`);
//             // Push submissions into the array
//             submissions.push(...response.data.submissions_dump);
//         } catch (error) {
//             console.error('Error fetching submissions:', error);
//         }
//     }

//     return submissions;
// }

// // Call the function and log the result
// fetchSubmissions().then(submissions => {
//     console.log('All submissions:', submissions);
// }).catch(error => {
//     console.error('Error:', error);
// });


