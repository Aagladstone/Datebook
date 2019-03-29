// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");

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
    console.log("hello ");
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
  deleteEvent: function(id) {
    // debugger;
    return $.ajax({
      type: "DELETE",
      url: "api/event/" + id
    }).then(function() {
      location.reload();
    });
  },
  updateEvent: function(id) {
    // debugger;
    return $.ajax({
      type: "PUT",
      url: "api/event/" + id
    }).then(function() {
      location.reload();
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var user = {
    name: $("#name")
      .val()
      .trim(),
    email: $("#email")
      .val()
      .trim()
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
  console.log("hello");
  event.preventDefault();

  var event = {
    eventName: $("#nameEvent")
      .val()
      .trim(),
    // CategorieId: $("#categorie-list")
    // .val(),
    description: $("#description")
      .val()
      .trim(),
    date: $("#date")
      .val(),
    time: $("#time")
      .val(),
    notification: false
    // $("#notification")
      .val()
    // UserId: $("#user-list")
    //   .val()
  };

  // if (!(user.name && user.email)) {
  //   alert("You must enter an example text and description!");
  //   return;
  // }
  API.saveEvent(event).then(function() {
    refreshExamples();
  });

  $("#nameEvent").val("");
  $("#categorie-list").val("");
  $("#date").val("");
  $("#time").val("");
  $("#description").val("");
  $("#notification").val(false);
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteEventBtnClick = function() {
  var idToDelete = $(this).attr("data-id");
  API.deleteEvent(idToDelete).then(function() {
    refreshExamples();
  });
};

// var updateEventClick = function() {
//   var idToUpdate = $(this).attr("data-id");
//   console.log(idToUpdate);
//   $(this).children().hide();
//   $(this)
//     .children("input.edit-title")
//     .val(idToUpdate.text);
//   $(this)
//     .children("input.edit-title")
//     .show();
//   $(this)
//     .children("input.edit-title")
//     .focus();
//   API.updateEvent(idToUpdate).then(function() {
//     refreshExamples();
//   });
// };

// Add event listeners to the submit and delete buttons
$(".submit").on("click", handleFormSubmit);
$(".submitEvent").on("click", handleEventSubmit);
$(".fa-trash-alt").on("click", handleDeleteEventBtnClick);
// $(document).on("click", ".card-title", updateEventClick);
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
