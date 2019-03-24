// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#user-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveUser: function(user) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/user",
      data: JSON.stringify(user)
    }).then(function() {
      location.reload();
    });
  },
  saveEvent: function(event) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/event",
      data: JSON.stringify(event)
    }).then(function() {
      location.reload();
    });
  },
  getUser: function() {
    return $.ajax({
      url: "/",
      type: "GET"
    }).then(function() {
      location.reload();
    });
  },
  // getEvent: function() {
  //   return $.ajax({
  //     url: "/",
  //     type: "GET"
  //   }).then(function() {
  //     location.reload();
  //   });
  // },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var user = {
    name: $("#name").val().trim(),
    email: $("#email").val().trim()
  };

  if (!(user.name && user.email)) {
    alert("You must enter an example text and description!");
    return;
  }
  API.saveUser(user).then(function() {
    refreshExamples();
  });

  $("#name").val("");
  $("#email").val("");
};

var handleEventSubmit = function(event) {
  event.preventDefault();

  var event = {
    eventName: $("#eventName").val().trim(),
    notification: false,
    date: $("#eventDate").val().trim(),
    time: $("#eventTime").val().trim(),
    description: $("#eventDescription").val().trim()
  };

  // if (!(user.name && user.email)) {
  //   alert("You must enter an example text and description!");
  //   return;
  // }
console.log("hello?")
  API.saveEvent(event).then(function() {
    refreshExamples();
  });

  $("#eventName").val("");
  $("#eventDate").val("");
  $("#eventTime").val("");
  $("#eventDescription").val("");
  console.log("this far?")
  console.log(event)
};
// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$(".submit").on("click", handleFormSubmit);
$(".eventSubmit").on("click", handleEventSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);
$(document).ready(function() {
  $(".scroll-down").on("click", function(e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $("section:first-of-type").offset().top
      },
      300
    );
  });
});
