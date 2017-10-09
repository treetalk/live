// Meetup API request using jquery ajax method. Currently you will need to insert your own API key below in order to get this to work. The current callback function for a successful request simply prints the response object to the console.

//
// NOTES:
//   -using meetup api v2 for open_events:
//    https://www.meetup.com/meetup_api/docs/2/open_events/
//    As of now it seems like newer api v3 does not
//    support methods that filter requests by event category.
//
//   -need to find a way to disentangle community events and environment events from meetup's
//    'community & environment' category. Also, it seems other relevant events exist in other //      categories and get left out...


//************************************************************************************************
//                               REQUEST OPTIONS                                              //
//************************************************************************************************
var category = '4';         // 4 is the meetup category for 'Community & Environment'
var timespan = ',2w'        //current to 2wks from now. format is 'weeks before today, weeks after"

                            //coordinates currently set to St. Louis. Eventually should be able to pull user coords from mapping framework.
var userLat = 38.643497;
var userLon = -90.28338;


var radius = 'smart';       //search radius. 'Smart' option adjusts based on event density.
var fields = 'group_photo'; //additional fields to return. seperate multiple options with commas

//********************************************
//      Insert your API Key Here            //
//********************************************
var APIkey = '**********************';


//**********************************************************************************************
//                              REQUEST BODY                                              //
//**********************************************************************************************
function loadMeetups(){
  $.ajax({
    type: 'GET',
    crossDomain: true,
    dataType: 'jsonp',
    url:
    'https://api.meetup.com/2/open_events.jsonp?category='+ category +'&time='+ timespan +'&lat='+ userLat +'&lon='+ userLon +'&radius='+ radius +'&fields='+ fields +'&key='+ APIkey + '&sign=true',
    async: "true",
  }).done(function(response) {
    console.log(response); //prints response object to console
  }).fail(function(xhr, textStatus) {
    alert(xhr.responseText);
    alert(textStatus);
  });
}
