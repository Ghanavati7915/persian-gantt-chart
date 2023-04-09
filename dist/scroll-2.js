$('.gantt').dragScroll({
    onStart: function($this) {
        console.log($this);
        // $('.drag').dragscroll('destroy');
    },
    onMove: function($this) {
        console.log($this);
    },
    onEnd: function($this) {
        console.log($this);
    }
});

$('.gantt').dragScroll({
    direction: 'scrollRight'
});
$('.gantt').dragScroll({
    direction: 'scrollTop'
});