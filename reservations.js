$("#calendar").datepicker(
{
    onSelect: function()
    { 
        var date = $(this).datepicker({dateFormat: 'yy-mm-dd'}).val(); 
        var email = document.getElementById('reservation-email').value
        document.getElementById('reservation-confirm').innerHTML = 'Reservation for ' + date + ' has been made. A confirmation email will be sent to your email: ' + email + '. Thank you!';
    }
});