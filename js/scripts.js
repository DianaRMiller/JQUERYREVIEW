$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var nameInput = $("input#name").val();
    var lastNameInput = $("input#lastName").val();
    var favoriteFoodInput= $("input#favoriteFood").val();
    var favoriteColorInput= $("input#favoriteColor").val();
    var favoriteHobbieInput= $("input#favoriteHobbie").val();

    $(".name").text(nameInput);
    $(".lastName").text(lastNameInput);
    $(".age").text(ageInput);
    $(".favoriteFood").text(favoriteFoodInput);
    $(".favoriteColor").text(favoriteColorInput);
    $(".favoriteHobbie").text(favoriteHobbieInput);

    event.preventDefault();
  });
});
