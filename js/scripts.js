$(document).ready(function () {
  var animalInfo = prompt("Please choose an animal: Whale, Dog or Dolphin").toLowerCase();
  if (animalInfo === "whale") {
    $(".whale").show();
  }
  if (animalInfo === "dog") {
    $(".dog").show();
  }
  if (animalInfo === "dolphin") {
    $(".dolphin").show();
  }

  $("#whale").click(function() {
    $("#whaleInfo").show();
  });
  $("#dog").click(function() {
    $("#dogInfo").show();
  });
});
