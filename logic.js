$("submit").on("click", function(event) {
    event.preventDefault();
    var newReservation = {
        customerName: $("#name").val().trim(),
        phoneNumber: $("#phone").val().trim(),
        customerEmail: $("#email").val().trim(),
        customerID: $("#id").val().trim()
      };

    $.post("/api/new", newReservation).done(function(data) {
        console.log(data);
        alert("Adding reservation...");
      });
    });

$("clear").on("click", function() {
    event.preventDefault();
    $.post("/api/clear").done(function(){
        alert("Clearing tables...");
    });
});