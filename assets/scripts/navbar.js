var mouse_is_inside = false;

$(document).ready(function() {
    $('#menu, #checkbox-nav').hover(function() {
        mouse_is_inside = true;
    }, function() {
        mouse_is_inside = false;
    });

    $("body").mouseup(function() {
        if ($("#checkbox-nav").is(":checked") && !mouse_is_inside) {
            $("#checkbox-nav").prop("checked", false);
        }
    });
});