$('#open').click(function() {
    $('#map-main').toggleClass("info");
})

$('#close').click(function() {
    $('#map-main').toggleClass("info");
})

$('#list-icon').click(function() {
    // Add 'currently selected' class to clicked icon
    $(this).addClass("current");
    $('#map-icon').removeClass("current");
    $('#social-icon').removeClass("current");

    $('#map-main').removeClass("info");

    $('#map-main').removeClass("social");
    $('#map-main').addClass("list");
})

$('#map-icon').click(function() {
    // Add 'currently selected' class to clicked icon
    $('#list-icon').removeClass("current");
    $(this).addClass("current");
    $('#social-icon').removeClass("current");

    $('#map-main').removeClass("list");
    $('#map-main').removeClass("social");

    $('#map-main').removeClass("info");
})

$('#social-icon').click(function() {
    // Add 'currently selected' class to clicked icon
    $('#list-icon').removeClass("current");
    $('#map-icon').removeClass("current");
    $(this).addClass("current");

    $('#map-main').removeClass("info");

    $('#map-main').removeClass("list");
    $('#map-main').addClass("social");
})
