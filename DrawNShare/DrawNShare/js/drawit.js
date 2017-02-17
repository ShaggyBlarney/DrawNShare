var colors = {
    palette: ['#ff0099', '#f3f315', '#83f52c', '#ff6600', '#6e0dd0', '#ffffff'],
    selected: null
}

//var mainCanvas = null;

var penTool = new Tool();

$(document).ready(function () {
    //mainCanvas = paper.getPaper();
    var colorPaletteBar = ""
    for (i = 0; i < colors.palette.length; i++) {
        colorPaletteBar += '<button type="button" class="paletteColor" value="' + colors.palette[i] + '" style="background-color:' + colors.palette[i] + '"></button>'
    }
    $('#colorPalette').append(colorPaletteBar);
    colors.selected = colors.palette[0];
    penTool.activate();
});

// sets draw color with user clicks a palette option
$('.paletteColor').click(function () {
    colors.selected = $(this).val();
    $('paletteColor').removeClass('selected');
    $(this).addClass('selected');
});

// clear button function
$('#clear').click(function () {
    project.activeLayer.removeChildren();
});

var path;

// Pen Tool Setup
penTool.minDistance = 10;
penTool.onMouseDown = function (event) {
 	path = new Path();
 	path.strokeColor = colors.selected;
 }

penTool.onMouseDrag = function(event) {
     path.add(event.point);
     path.smooth();
 }

penTool.onMouseUp = function(event) {
    path.add(event.point);
 	path.strokeWidth = 5;
 	path.strokeCap = 'round';
 	path.closed = false;
 	path.simplify(10);
 }