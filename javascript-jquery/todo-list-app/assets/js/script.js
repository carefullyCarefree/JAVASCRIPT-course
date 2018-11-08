// Check off todos by clicking
// $('li').click(function(){
//   if ($(this).css("color") === "rgb(128, 128, 128)"){
//     $(this).css({
//       color: "black",
//       textDecoration: "none"
//     });
//   } else {
//     $(this).css({
//       color: "grey",
//       textDecoration: "line-through"
//     });
//   }
// })
// $('li').click(function(){
//   $(this).toggleClass("completed");
// })
//
// $('span').click(function(event){
//   $(this).parent().fadeOut(500, function(){
//     $(this).remove();
//   });
//   event.stopPropagation();
// })

// You have to use "on" instead of "click" because click will not function with anything newly created
$('ul').on('click', "li", function(){
  $(this).toggleClass("completed");
})

// stopPropagation allows you to stop other events from firing after the first one.
$('ul').on('click', 'span', function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
})

// Append allows you to add a string of html and add it to the element selected
$('input[type = "text"]').keypress(function(event){
  if(event.which === 13){
    var todoText = $(this).val();
    $(this).val("");
    $('ul').append('<li><span><i class="far fa-trash-alt"></i></span> ' + todoText + '</li>');
  }
})

$("button i").click(function(){
  $('input[type = "text"]').fadeToggle();
})
