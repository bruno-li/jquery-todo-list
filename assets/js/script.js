// Check off specific Todos by clicking
$("li").click(function() {
    $(this).toggleClass("completed");
});

// click on x to delete todo
$("span").click(function(event){
    // event object is used to stop bubbling the listeners
    // if not used, all the elements will receive the click 
    $(this).parent().fadeOut(500,function(){
        // the this bellow refers to the li element and not the span element
        // thats because it is used inside the callback function which is a li element
        $(this).remove();
    })
    event.stopPropagation();

});