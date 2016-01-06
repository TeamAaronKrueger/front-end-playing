



function editItem (id) {

    $("#"+id+"edit").hide('fast', function() {
      console.log("edit button is hidden")
    });

    $("#"+id+"text").hide('fast', function() {
      console.log("text is hidden")
    });

    $("#"+id+"qtext").hide('fast', function() {
      console.log("quantity text is hidden")
    });

    var itemText = $("#"+id+"text").text();

    $("#"+id+"input").attr('placeholder', itemText);
      //puts the current text in as placeholder in input box

    var quantityText = $("#"+id+"qtext").text();

    $("#"+id+"qinput").attr('placeholder', quantityText);

    $("#"+id+"qinput").show('fast', function() {
      //animation occured
    });

    $("#"+id+"input").show('fast', function() {
      //animation occured
    });

    $("#"+id+"check").show('fast', function() {
      //animation occured
    });

  };


  function renameItem (id) {

        var newText = $("#"+id+"input").val();
        var newqText = $("#"+id+"qinput").val();

        console.log($("#"+id+"input").val());

        $("#"+id+"text").text(newText);
        $("#"+id+"qtext").text(newqText);
        //variables for new quantity and new text

        $("#"+id+"input").hide('fast', function() {
          //text input box hidden
        });

        $("#"+id+"qinput").hide('fast', function() {
          //quantity input box hidden
        });

        $("#"+id+"text").show('fast', function() {
          //shows item text
        });

        $("#"+id+"qtext").show('fast', function() {
          //shows item quantity again
        });

        $("#"+id+"check").hide('fast', function() {
          //hides check button
        });

        $("#"+id+"edit").show('fast', function() {
          //animation occured
        });
      };

//add list item button
function addItemBtn() {
      $('#add-list-item').show('fast', function() {

      });
      console.log ('add item clicked')
    }



function editTodo (id) {

        $("#todo"+id+"edit").hide('fast', function() {
          console.log("edit button is hidden")
        });

        $("#todo"+id+"text").hide('fast', function() {
          console.log("text is hidden")
        });

        var itemText = $("#"+id+"text").text();

        $("#todo"+id+"input").attr('placeholder', itemText);
          //puts the current text in as placeholder in input box


        $("#todo"+id+"input").show('fast', function() {
          //animation occured
        });

        $("#todo"+id+"check").show('fast', function() {
          //animation occured
        });

      };


    function renameTodo (id) {

            var newText = $("#todo"+id+"input").val();
            console.log($("#todo"+id+"input").val());

            $("#todo"+id+"text").text(newText);
            //variables for new text

            $("#todo"+id+"input").hide('fast', function() {
              //text input box hidden
            });


            $("#todo"+id+"text").show('fast', function() {
              //shows item text
            });

            $("#todo"+id+"check").hide('fast', function() {
              //hides check button
            });

            $("#todo"+id+"edit").show('fast', function() {
              //animation occured
            });
          };

    //add list item button
  function addTodoBtn() {
          $('#add-todo-item').show('fast', function() {

          });
          console.log ('add item clicked')
        }
