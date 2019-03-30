// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
localStorage.setItem("id", "");
localStorage.setItem("name", "");

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
  deleteEvent: function(id) {
    return $.ajax({
      type: "DELETE",
      url: "api/event/" + id
    }).then(function() {
      location.reload();
    });
  },
  updateEvent: function(id) {
    return $.ajax({
      type: "PUT",
      url: "api/event/" + id
    }).then(function() {
      location.reload();
    });
  }
  // showEvents: function(id) {
  //   return $.ajax({
  //     type: "GET",
  //     url: "/" + id
  //   }).then(function() {

  //   });
  // }
};

// refreshExamples gets new examples from the db and repopulates the list
$("#user-list2").change(function() {
  var userValue = this.value;
  var userName1 = this[this.selectedIndex].innerText;

  localStorage.setItem("id", userValue);
  localStorage.setItem("name", userName1);

  return $.ajax({
    type: "GET",
    url: "/" + userValue
  }).then(function() {
    window.location.replace("/" + userValue);
    // error("")
    // $("#user-list2").val();
  });
});

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
  $(".user-errors").empty();

<<<<<<< HEAD
  // if (!(user.name && user.email)) {
  //   alert("You must enter an example text and description!");
  //   return;
  // }
=======
  if (!user.name) {
    // alert("You must enter an example text and description!");
    return $(".user-errors").append("The name must be populated.");
  }
  if (!user.email) {
    // alert("You must enter an example text and description!");
    return $(".user-errors").append("The email must be populated.");
  }
>>>>>>> b276f5820b0204a81e0d359a31820d835d7fc820
  API.saveUser(user).then(function() {
    refreshExamples();
  });

  $("#name").val("");
  $("#email").val("");
};

var handleEventSubmit = function(event) {
  event.preventDefault();
 
  var event = {
    eventName: $("#nameEvent")
      .val()
      .trim(),
    CategorieId: $("#categorie-list").val(),
    description: $("#description")
      .val()
      .trim(),
    date: $("#date").val(),
    time: $("#time").val(),
    UserId: $("#user-list").val()
  };
 
  $(".event-errors").empty();
  debugger;
  if (!event.eventName) {
    // alert("You must enter an example text and description!");
    return $(".event-errors").append("The name of event must be populated.");
  }
  if (!event.date) {
    // alert("You must enter an example text and description!");
    return $(".event-errors").append("The date must be populated.");
  }
  if (!event.time) {
    // alert("You must enter an example text and description!");
    return $(".event-errors").append("The time must be populated.");
  }
  if (!event.description) {
    // alert("You must enter an example text and description!");
    return $(".event-errors").append("The description must be populated.");
  }
  if (!event.UserId) {
    // alert("You must enter an example text and description!");
    return $(".event-errors").append("The user must be populated.");
  }
  if (!event.CategorieId) {
    // alert("You must enter an example text and description!");
    return $(".event-errors").append("The categorie must be populated.");
  }
  
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

var handleDeleteEventBtnClick = function() {
  var idToDelete = $(this).attr("data-id");
  API.deleteEvent(idToDelete).then(function() {
    refreshExamples();
  });
};

$(".submitUser").on("click", handleFormSubmit);
$(".submitEvent").on("click", handleEventSubmit);
$(".fa-trash-alt").on("click", handleDeleteEventBtnClick);
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
