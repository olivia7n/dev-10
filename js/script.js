function showEvents(data) {                           // Callback when JSON loads
  var newContent = '';                                // Variable to hold HTML
 
    // BUILD UP STRING WITH NEW CONTENT (could also use DOM manipulation)
    for (var i = 0; i < data.events.length; i++) {    // Loop through object
      newContent += '<div class="event">';
      newContent += '<img src="' + data.events[i].map + '" ';
      newContent += 'alt="' + data.events[i].location + '" />';
      newContent += '<p><b>' + data.events[i].location + '</b><br>';
      newContent += data.events[i].date + '</p>';
      newContent += '</div>';
    }

    // Update the page with the new content
    document.getElementById('content').innerHTML = newContent;
}

showEvents({
  "events": [
    {
      "location": "Killen, AL",
      "date": "Aug 1",
      "map": "https://www.una.edu/international/why-choose-una/227x150xflorence-alabama.jpg.pagespeed.ic.H_q6lbu4ug.jpg"
    },
    {
      "location": "Sheffield, AL",
      "date": "Aug 15",
      "map": "https://cdn.thecrazytourist.com/wp-content/uploads/2019/04/ccimage-3154916511_570cb55ebc_b.jpg"
    },
    {
      "location": "Tuscumbia, AL",
      "date": "Sep 30",
      "map": "https://cdn.thecrazytourist.com/wp-content/uploads/2019/04/ccimage-shutterstock_1223937.jpg"
    }
  ]
});