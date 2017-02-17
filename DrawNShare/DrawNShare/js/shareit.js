
var mainCanvas = null;

$(document).ready(function () {
    var shareit = $.connection.mainHub;
    shareit.client.broadcastMessage = function (name, image) {
        //mainCanvas = paper.getPaper();
        //var imgParser = new DOMParser();
        //var img = imgParser.parseFromString(image, 'image/svg+xml');
        
        console.log(image);

        var senderName = '<p>' + name + '</p>';
        var messageImg = '<svg id="newDrawing" class="drawing">' + image + '</svg>';
        $('#discussion').append('<li>' + senderName + messageImg + '</li>');

        //var tmpCanvas = new paper.PaperScope();
        //tmpCanvas.setup($('newDrawing')[0]);
        //tmpCanvas.project.importJSON(image);
        //tmpCanvas.view.draw();
        
        $('#newDrawing').removeAttr('id');

        //mainCanvas.activate();

        window.scrollTo(0, document.body.scrollHeight);
    };
    
    $.connection.hub.start().done(function () {
        $('#send').click(function () {
            //console.log($('#userName').val());
            //console.log(paper.project.exportJSON());
            $.connection.mainHub.server.send($('#userName').val(), $(paper.project.exportSVG()).html());
            paper.project.activeLayer.removeChildren();
        });
    });
});