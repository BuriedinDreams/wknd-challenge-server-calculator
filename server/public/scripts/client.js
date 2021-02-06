console.log('hello from client.js');

$(document).ready(onReady);

function onReady() {
  console.log('jQuery is working');

  $(document).on('click', '#innerFace', retrieveMaths);
}

function retrieveMaths(event) {
  event.preventDefault();
  console.log('inside the retrieveMaths func');

  const retrieveInfoArray = [
    // This is going to capture the values of these inputs
    // I will then be able to send the info to server side.
    {
      enterNum1: $('#numOne').val(),
      additionValue: $('#addInput').val(),
      minusValue: $('#minusInput').val(),
      multiValue: $('#multiInput').val(),
      divideValue: $('#divideInput').val(),
      enterNum2: $('#numTwo').val(),
      submitValue: $('#equals').val(),
      resetValue: $('#clearBtn').val(),
    },
  ];
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
    })
    .catch(function (error) {
      console.log('Wah Wah', error);
    });
}
