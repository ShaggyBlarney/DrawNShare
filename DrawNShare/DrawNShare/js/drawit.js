// options for the drawing tools, such as stroke width and colours.
var toolSettings = {
    stroke: {
        symbol: ['❘', '❙', '❚'],
        values: [1 , 3, 5],
        selected: 1
    },
    colors : {
        palette: ['#ff0099', '#f3f315', '#83f52c', '#ff6600', '#6e0dd0', '#ffffff'],
        selected: null
    }
}



var penTool = new Tool();

$(document).ready(function () {
    // setup of the colour palettes
    var colorPaletteBar = ""
    for (i = 0; i < toolSettings.colors.palette.length; i++) {
        colorPaletteBar += '<button type="button" class="paletteColor" value="' + toolSettings.colors.palette[i] + '" style="background-color:' + toolSettings.colors.palette[i] + '"></button>'
    }
    $('#colorPalette').append(colorPaletteBar);
    toolSettings.colors.selected = toolSettings.colors.palette[0];

    // setup the width selector
    var strokeSelector = ""
    for (i = 0; i < toolSettings.stroke.symbol.length; i++) {
        strokeSelector += '<button type="button" class="strokeWidth" value="' + toolSettings.stroke.values[i] + '">' + toolSettings.stroke.symbol[i] + '</button>'
    }
    $('#strokeSelector').append(strokeSelector);
    

    penTool.activate();
});

// sets draw color with user clicks a palette option
$('.paletteColor').click(function () {
    toolSettings.colors.selected = $(this).val();
    $('paletteColor').removeClass('selected');
    $(this).addClass('selected');
});

// sets stroke width when stroke selection is made
$('.strokeWidth').click(function () {
    toolSettings.stroke.selected = $(this).val();
   
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
 	path.strokeColor = toolSettings.colors.selected;
 }

penTool.onMouseDrag = function(event) {
     path.add(event.point);
     path.smooth();
 }

penTool.onMouseUp = function(event) {
    path.add(event.point);
 	path.strokeWidth = toolSettings.stroke.selected;
 	path.strokeCap = 'round';
 	path.closed = false;
 	path.simplify(10);
 }
