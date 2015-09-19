$(document).ready(function() {
    $('#uploadForm').submit(function() {

        console.log('upload');

        $(this).ajaxSubmit({
            error: function(xhr) {
                status('Error: ' + xhr.status);
            },
            success: function(response) {
                console.log(response);
            }
        });
        return false;
    });
});
