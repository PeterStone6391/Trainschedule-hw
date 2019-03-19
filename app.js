// Had David help me setup my firebase and build a list of initial variables
// unfortunately my database doesn't seem to be working once i hit the submit button. I set the database to real time like it was talked about but everytime i refresh the firebase page it goes back to cloud?? need help going through this again

// document.ready is absolutely necessary for this page to work.
$(document).ready(function() {
  // Initialize Firebase this is what links all my stuff to my firebase database and ensures that all the train information is stored there and not cleared every time the user refreshes
  var config = {
    apiKey: "AIzaSyBLv1Etabvui4FjbuKD0Tj_V8oqDsblKCU",
    authDomain: "train-schedule-homework-88221.firebaseapp.com",
    databaseURL: "https://train-schedule-homework-88221.firebaseio.com",
    projectId: "train-schedule-homework-88221",
    storageBucket: "train-schedule-homework-88221.appspot.com",
    messagingSenderId: "544286917525"
  };

  firebase.initializeApp(config);
  // setting my database variable to always call back to firebase.
  var database = firebase.database();
  // this is a bank of variables I created that I assign value to depending on what the user submits in the form.
  var trainName;
  var trainDestination;
  var firstTrain;
  var trainFrequency;
  var currentTime;

  console.log("CURRENT TIME: " + currentTime);

  // getting value on submit being clicked. I added .trim() just in case the user accidentally added spaces that were not supposed to be there. This was more important for moment than anything else.
  $("#submit").on("click", function() {
    // preventDefault If this method is called, the default action of the event will not be triggered so the page wont refresh everytime.
    //.val() and .trim()
    //jQuery also has trim function like javascript trim, which removes spaces from starting and from end of the string. The .val() method is primarily used to get the values of form elements such as input, select and textarea. When called on an empty collection, it returns undefined. looked up terms on google!
    event.preventDefault();
    trainName = $("#typeName")
      .val()
      .trim();
    trainDestination = $("#typeDestination")
      .val()
      .trim();
    firstTrain = $("#typeTime")
      .val()
      .trim();
    trainFrequency = $("#typeFrequency")
      .val()
      .trim();
    currentTime = moment()
      .format("hh:mm")
      .trim();

    console.log(trainName, trainDestination, firstTrain, trainFrequency);

    // clear out inputs after the user clicks submit and the information has been stored.
    $(".form-control").val("");
    // this pushes all the information I've grabbed from the page to firebase. I also create data classes for firebase to recognize and properly store the information I grabbed from the page and assigned to my variables.
    database.ref().push({
      // first part is the data class in firebase and second part is the variable that is being stored in firebase.
      trainName: trainName,
      trainDestination: trainDestination,
      firstTrain: firstTrain,
      trainFrequency: trainFrequency
    });
  });
  // need to grab info from firebase and start appending it back onto my html page
  //need to make firebase grab values from the input data stored on firebase and reassign them to variables above
  // need to work on the timing of train schedules so that when a user inputs the data
  // make calculation of time remaining to make this train schedule useful for users
  // append data into the table
  // need to go over the class activity again and look it over with tutor to get this right, I feel like i am on the right track
  //
});
