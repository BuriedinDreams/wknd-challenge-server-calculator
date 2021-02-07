console.log('hello from client.js');

$(document).ready(onReady);

function onReady() {
  console.log('jQuery is working');

  $(document).on('click', '#numOne', retrieveMaths);

  $(document).on('submit', '#equals', submitAction);

  $(document).on('reset', '#clearBtn', clearForm);
}
// this info is being pulled from the DOM.
function retrieveMaths(event) {
  event.preventDefault();
  console.log('inside the retrieveMaths func');

  const retrieveInfoArray = [
    // This is going to capture the values of these inputs
    // I will then be able to send the info to server side.
    {
      enterNum1: Number($('#numOne').val()),
      additionValue: $('#addInput').val(),
      minusValue: $('#minusInput').val(),
      multiValue: $('#multiInput').val(),
      divideValue: $('#divideInput').val(),
      enterNum2: Number($('#numTwo').val()),
    },
  ];
  console.log('Array info', retrieveInfoArray);

  function submitAction(event) {
    event.preventDefault();
    console.log('inside submitAction func');

    // submitValue: $('#equals').val(),
    // resetValue: $('#clearBtn').val(),
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
    })
    .catch(function (error) {
      console.log('Wah Wah', error);
    });
}
