
function addACard() {
  $("#callTheAjax").click(function(){
   $.ajax({
      url: '/api/cards',
      type: 'post',
      data: $("#theForm").serialize(),
      success: function(data){
        console.log(data);
      },
      error: function(err){
        console.log(err)
      }
    })
  })
}


$(document).ready(function() {

  //DECK View buttons
  $( "#editDeck" ).click(function() {
    $("#editDeck").toggle( "fast", function() {
    $( "#addCard" ).toggle( "fast", function() {
      $( "#deleteDeck" ).toggle( "fast", function() {
        // Animation complete.
        });
      });
    });
  });


  $( "#addCard").click(function() {
    $( "#addCardDiv").toggle( "fast", function(){
      //animation occured
    })
  });

  addACard();

  $( ".inputButtonCloseAdd").click(function() {
    $( "#addCardDiv").toggle( "fast", function(){
      //animation occured
    })
  });
});


