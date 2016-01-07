function addACard() {
 $("#addACard").click(function(){
   $.ajax({
     url: '/api/cards',
     type: 'post',
     data: $("#addCardForm").serialize(),
   })
   .done(function(response) {
     console.log("success/hello");
     console.log(response);
   })
   .fail(function() {
     console.log("error");
   })

 })
}

function deleteACard(){
  $('.deleteButton').click(function(){
    var value = this.value;
    $.ajax({
      url: '/api/cards/'+value,
      type: 'DELETE',
      //dataType: 'json',
      //data: $("#deleteCardForm").serialize()
    })
    .done(function() {
      console.log("success");
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });
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
  deleteACard();

  $( ".closeAdd").click(function() {
    $( "#addCardDiv").toggle( "fast", function(){
      //animation occured
    })
  });

  $( ".showAnswer" ).click(function() {
      var id= this.value;
      console.log(id);
        $("#"+id+"answer").show( "fast", function(){
          console.log("showing answer")
        });
        $("#"+id+"showAnswer").hide('fast', function() {
          console.log("")
        });
  });

  $( ".editCardButton" ).click(function() {
      var id= this.value;
      editItem(id);
  });

  $( ".saveCardButton" ).click(function() {
      var id= this.value;
      saveItem(id);
  });

});
