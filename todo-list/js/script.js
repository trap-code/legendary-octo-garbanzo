$(function() {
  var $list = $("ul");
  
  var $newItemButton = $("#newItemButton");
  var $newItemForm = $("#newItemForm");
  var $textInput = $("input:text");

  $newItemButton.show();
  $newItemForm.hide();

  $newItemButton.on("click", function() {
    $newItemButton.hide();
    $newItemForm.show();
  });

  $newItemForm.on("submit", function(e) {
    e.preventDefault();
    if ($textInput.val().length > 0) {
      $list.append("<li>" + $textInput.val() + "</li>");
      $textInput.val("");
    }
    $newItemButton.show();
    $newItemForm.hide();
  });

  $list.on("click", function(event) {
    $target = $(event.target);
    if ($target.is("li")) {
      $target.remove();
    }
  });
});
