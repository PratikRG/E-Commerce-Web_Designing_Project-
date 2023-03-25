$(document).read(function (){

    $('#form').submit(function(e){

        var name = $('#name').var().trim();
        var name = $('#email').var().trim();
        var name = $('#msg').var().trim();

        $('.error').remove();
        var isValidForm = true;

        if(name.length < 1){
            $('#name').after('<span class="error">This field is required</span>');
            var isValidForm = false;
        }
        if(email.length < 1){
            $('#email').after('<span class="error">This field is required</span>');
            var isValidForm = false;
        }
        if(msg.length < 1){
            $('#msg').after('<span class="error">This field is required</span>');
            var isValidForm = false;
        }
        return isValidForm;
    });
});