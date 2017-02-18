
$(document).ready(function () {
    var shareit = $.connection.mainHub;
    shareit.client.broadcastMessage = function (name, image, timestamp) {
        

        var senderName = '<p>' + name + '<small> - ' + timestamp + '</small></p>';
        var messageImg = '<svg id="newDrawing" class="drawing">' + image + '</svg>';
        $('#discussion').append('<li>' + senderName + messageImg + '</li>');
        
        $('#newDrawing').removeAttr('id');

        window.scrollTo(0, document.body.scrollHeight); // scrolls window down with new message
    };
    
    $.connection.hub.start().done(function () {
        $('#send').click(function () {
            if (!paper.project.isEmpty() && !paper.project.activeLayer.isEmpty()) { // stops user from posting empty images
                $.connection.mainHub.server.send($('#userName').val(), $(paper.project.exportSVG()).html());
                paper.project.activeLayer.removeChildren();
            }
        });
    });
});
