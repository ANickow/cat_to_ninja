 $(document).ready(function(){
    var oldSrc;
    var oldAlt;
     $('img').click(function() {
        oldSrc = $(this).attr('src');
        oldAlt = $(this).attr('alt');
        $(this).attr('src', $(this).attr('data-alt-src'));
        $(this).attr('alt', $(this).attr('data-alt-alt'));
        $(this).attr('data-alt-src', oldSrc);
        $(this).attr('data-alt-alt', oldAlt);
    });
 });