$("#calendar").datepicker(
{
    onSelect: function()
    { 
        var dateObject = $(this).datepicker('getDate'); 
        console.log(dateObject);
    }
});