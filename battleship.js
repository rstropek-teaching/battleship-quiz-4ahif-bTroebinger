$(() => {
  // Select table containing the battleground
  const battleground = $('#battleground');

  // Build 10 x 10 grid for battleground
  for (let row = 0; row < 10; row++) {
    // Create table row
    const tr = $('<tr>');
    for (let column = 0; column < 10; column++) {
      // Create table cell with CSS class `water`. Note that we use
      // HTML data attributes  to store the coordinates of each cell
      // (see https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). 
      // That makes it much easier to find cells based on coordinates later.
      $('<td>').addClass('water').attr('data-r', row).attr('data-c', column).appendTo(tr);
    }

    // Add table row to battleground table
    tr.appendTo(battleground);
  }

  $('#generate').click(() => {
    // Here you have to add your code for building a random battleground.
    //Lenght of x and y borders
    const xLen = 10;
    const yLen = 10;
    //Different ship types with different sizes
    const size = [5,4,3,3,2];

    //Clear battelground if the game is started over
    for(let i = 0; i < xLen; i++){
      for(let j = 0; j < yLen; j++){
        $('td[data-r="i"][data-c="j"]').removeClass('ship').addClass('water');
      }
    }

    //Adding ships
    //Runs through loop until every ship is placed
    for(let counter = 0; counter < size.length;){
      //Variables for starting location, generated new everytime a new ship is beeing placed
      let stX = parseInt(0+Math.random()+(10-0));
      let stY = parseInt(0+Math.random()+(10-0));

      //If the number randomly generated is under or 5 the ship will try to be placed horizontal,
      //if it is over 5 it will try to be placed vertical
      let dir = parseInt(0+Math.random()+(10-0));

      //if this variable is true it will skip the currently random generated positions and start again
      let skipShip = false;
      //checking if it can be painted vertical
      if(dir > 5 && stX + size[count] < xLen){
        //checking if before or after where the ship should be is already a ship
        if($('td[data-r=${stX}][data-c=${stY - 1}]').hasClass('water')){
          if($('td[data-r=${stX}][data-c=${stY + size[count]}]').hasClass('water')){
            //checking if the lines left or right of ship have a ship class
            for(let i = 0; i < size[count]; i ++){
              if($('td[data-r=${stX - 1}][data-c=${stY + i}]').hasClass('water')||$('td[data-r=${stX + 1}][data-c=${stY + i}]').hasClass('water')){
                for(let i = 0; i < size[count]; i ++){
                  $('td[data-r=${stX}][data-c=${stY + i}]').removeClass('water').addClass('ship');
                }
                count ++;
              }
            }
          }
        }
         //checking if it can be painted horizontal
      }else if(dir <= 5 && stY + size[count] < yLen){
        //checking if before or after where the ship should be is already a ship
        if($('td[data-r=${stX - 1}][data-c=${stY}]').hasClass('water')){
          if($('td[data-r=${stX + size[count]}][data-c=${stY}]').hasClass('water')){
            //checking if the lines above or below of ship have a ship class
            for(let i = 0; i < size[count]; i ++){
              if($('td[data-r=${stX + i}][data-c=${stY + 1}]').hasClass('water')||$('td[data-r=${stX + i}][data-c=${stY - 1}]').hasClass('water')){
                //It passed all tests and can now be painted
                for(let i = 0; i < size[count]; i ++){
                  $('td[data-r=${stX + i}][data-c=${stY}]').removeClass('water').addClass('ship');
                }
                count ++;
              }
            }
          }
        }
      }else{
        alert("No place found for the ship!");
      } 
    }

    // Tip: The next line of code demonstrates how you can select a table cell
    // using coordinates, remove CSS classes and add CSS classes. 
    $('td[data-r="1"][data-c="1"]').removeClass('water').addClass('ship');
    $('td[data-r="2"][data-c="1"]').removeClass('water').addClass('ship');
    $('td[data-r="3"][data-c="1"]').removeClass('water').addClass('ship');
  });
});