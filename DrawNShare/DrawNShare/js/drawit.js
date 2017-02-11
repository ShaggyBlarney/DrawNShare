var colorPalette = ['#ff0099', '#f3f315', '#83f52c', '#ff6600', '#6e0dd0'];
var selectedTool = 'pencil';
var selectedColour = '#000000';
tool.minDistance = 10;

$(document).ready(function () {
    var colors = ""
    for (i = 0; i < colorPalette.length; i++) {
        colors += '<button type="button" class="paletteColor" value="' + colorPalette[i] + '" style="background-color:' + colorPalette[i] + '"></button>'
    }
    $('#colorPalette').append(colors);
});

$('.paletteColor').click(function () {
    selectedColour = $(this).val();
});

var path;
 function onMouseDown(event) {
 	path = new Path();
 	path.strokeColor = 'black';
 }

 function onMouseDrag(event) {
     path.add(event.point);
     path.smooth();
 }

 function onMouseUp(event) {
    path.add(event.point);
 	path.strokeColor = selectedColour;
 	path.strokeWidth = 5;
 	path.strokeCap = 'round';
 	path.closed = false;
 	path.smooth();

 }