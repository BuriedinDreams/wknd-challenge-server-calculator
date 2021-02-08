console.log('hello from client.js');

$(document).ready(onReady);

let mathOperator = ''; // place to store a global operator

function onReady() {
  console.log('jQuery is working');

  $(document).on('click', '.operatorInput', retrieveOperator);

  $('#equals').on('click', retrieveMaths);

  // $(document).on('reset', '#clearBtn', clearForm);
}
// this info is being pulled from the DOM.

function retrieveOperator(event) {
  event.preventDefault();
  mathOperator = this.value;
  console.log('Clicked operator: ', this.value);
}

function retrieveMaths(event) {
  event.preventDefault();
  console.log('inside the retrieveMaths func');

  const retrieveInfoArray =
    // This is going to capture the values of these inputs
    // I will then be able to send the info to server side.
    {
      enterNum1: Number($('#numOne').val()),
      enterNum2: Number($('#numTwo').val()),
      theOperator: mathOperator, // this is coming from the retrieveOperator func.
    };

  console.log('Array info', retrieveInfoArray);

  // POST quote data to server
  $.ajax({
    url: '/calculator',
    method: 'POST',
    // this becomes .req.body - data:
    data: {
      items_to_equate: retrieveInfoArray,
    },
  })
    .then(function () {
      console.log('Huzzah!');
      //
      fetchSolvedMaths(); // this is calling the function so it will run here.
    })
    .catch(function (error) {
      console.log('Wah Wah', error);
    });
}
//
function fetchSolvedMaths() {
  let ajaxOptions = {
    url: '/calculator',
    method: 'GET',
  };

  $.ajax(ajaxOptions)
    //
    .then(function (mathResults) {
      // This parameter ^ is calculation.historyOfResults from 'GET'

      console.log('got a response', mathResults);
      //

      $('#prevEquResults').empty();
      for (let nums of mathResults) {
        //  mathResults is the array in calc.js file.
        // this is looping through the
        console.log('nums', nums.enterNum1);
        console.log('nums', nums.theOperator);
        console.log('nums', nums.enterNum2);
        console.log('nums', nums.currentResults); // this is being grabbed from calc.js
        $('#equationResults').empty();
        //
        $('#equationResults').append(`
        <li> ${Number(nums.currentResults)} </li>
        `);

        $('#prevEquResults').append(`
        <li>${nums.enterNum1} ${nums.theOperator} ${nums.enterNum2} = ${nums.currentResults}</li>
        `);
      }
    })

    .catch(function (error) {
      console.log('Oh no something broke!', error);
    });
}
//
function clearForm(event) {
  event.preventDefault();
  // this is going to clear the inputs
  $('#numOne').val('');
  $('#addInput').val('');
  $('#minusInput').val('');
  $('#multiInput').val('');
  $('#divideInput').val('');
}
//
//
