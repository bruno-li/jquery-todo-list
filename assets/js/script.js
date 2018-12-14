// Check off specific Todos by clicking

// the second argument "li" is for when a new element <li></li> is created dinamically
// it will add the listener to that element, but the listener is on the parent element UL
// which is loaded when the page first start, so the listeners are set up in the UL element
// and not the LI element, but the LI parent element is the UL
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

// click on x to delete todo
// the event only will trigger if a span element is clicked inside the parent element UL
$("ul").on("click", "span", function(event) {
  // event object is used to stop bubbling the listeners
  // if not used, all the elements will receive the click
  $(this)
    .parent()
    .fadeOut(500, function() {
      // the this bellow refers to the li element and not the span element
      // thats because it is used inside the callback function which is a li element
      $(this).remove();
    });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        // grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        // create a new li and add to ul
        $("ul").append("<li><span>X</span> "+ todoText +"</li>");
    }
});