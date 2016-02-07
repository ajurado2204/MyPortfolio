// Initialize collapse button
$(".button-collapse").sideNav({
    menuWidth: 200, // Default is 240
    edge: 'left' // Choose the horizontal origin
  }
);

$('.contactmodaltrigger').on('click', function(){
  $('#modal1').openModal({
    dismissible: false, // Modal can be dismissed by clicking outside of the modal
    opacity: .3, // Opacity of modal background
    in_duration: 500, // Transition in duration
    out_duration: 300 // Transition out duration
  });
});

$('.loginmodaltrigger').on('click', function(){
  $('#modal2').openModal({
    dismissible: false, // Modal can be dismissed by clicking outside of the modal
    opacity: .3, // Opacity of modal background
    in_duration: 500, // Transition in duration
    out_duration: 300 // Transition out duration
  });
});