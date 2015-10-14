$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var nameInput = $("input#name").val();
    var lastNameInput = $("input#lastName").val();
    var nickNameInput = $("input#nickName").val();
    var favoriteFoodInput= $("input#favoriteFood").val();
    var favoriteColorInput= $("input#favoriteColor").val();
    var favoriteHobbieInput= $("input#favoriteHobbie").val();
    var favoritePetInput= $("input#favoritePet").val();
    var favoriteCityInput= $("input#favoriteCity").val();
    var favoriteDrinkInput= $("input#favoriteDrink").val();
    var favoriteSingerInput= $("input#favoriteSinger").val();

    $(".name").text(nameInput);
    $(".lastName").text(lastNameInput);
    $(".nickName").text(nickNameInput);
    $(".favoriteFood").text(favoriteFoodInput);
    $(".favoriteColor").text(favoriteColorInput);
    $(".favoriteHobbie").text(favoriteHobbieInput);
    $(".favoritePet").text(favoritePetInput);
    $(".favoriteCity").text(favoriteCityInput);
    $(".favoriteDrink").text(favoriteDrinkInput);
    $(".favoriteSinger").text(favoriteSingerInput);

    $("#story").show();

    event.preventDefault();
  });
});
