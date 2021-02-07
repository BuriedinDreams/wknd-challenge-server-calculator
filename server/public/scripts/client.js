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
      theOperator: mathOperator, // this is coming from the top of the file.
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
      // not sure what to do with this yet just have it ...
      fetchSolvedMaths();
    })
    .catch(function (error) {
      console.log('Wah Wah', error);
    });
}
//

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
