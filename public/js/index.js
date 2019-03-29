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
    return $.ajax({
      type: "PUT",
      url: "api/event/" + id
    }).then(function() {
      location.reload();
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
// var userValue = $("#user-list2").val();
$("#user-list2").change(function() {
  var userValue = this.value;
  var usernameaaa = this.name;
  alert(usernameaaa);
  return $.ajax({
    type: "GET",
    url: "/" + userValue
  }).then(function() {
    localStorage.setItem("id", usernameaaa);
 
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
  debugger;
  console.log(
    $("#user-list")
      .val()
      .trim() + "hello"
  );
  debugger;
  event.preventDefault();

  var event = {
    eventName: $("#nameEvent")
      .val()
      .trim(),
    notification: false,
    date: $("#date")
      .val()
      .trim(),
    time: $("#time")
      .val()
      .trim(),
    description: $("#description")
      .val()
      .trim(),
    UserId: $("#user-list").val()
  };
  console.log(event.userId);

  // if (!(user.name && user.email)) {
  //   alert("You must enter an example text and description!");
  //   return;
  // }
  API.saveEvent(event).then(function() {
    refreshExamples();
  });

  $("#nameEvent").val("");
  $("#date").val("");
  $("#time").val("");
  $("#description").val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteEventBtnClick = function() {
  var idToDelete = $(this).attr("data-id");
  API.deleteEvent(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$(".submit").on("click", handleFormSubmit);
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

// $(document).ready(function() {
//   var url = window.location.search;
//   var userId;
//   var event;
//   if (url.indexOf("?userId=") !== -1) {
//     userId = url.split("=")[1];
//     getPosts(userId);
//   }
//   // If there's no authorId we just get all posts as usual
//   else {
//     getPosts();
//   }

//   function getPosts(user) {
//     userId = user || "";
//     if (userId) {
//       userId = "/?userId=" + userId;
//     }
//     $.get("/api/event" + userId, function(data) {
//       console.log("Event", data);
//       event = data;
//       // if (!event || !event.length) {
//       //   displayEmpty(user);
//       // } else {
//       //   initializeRows();
//       // }
//     });
//   }
// });
