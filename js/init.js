document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('#left-one');
  var instances = M.Sidenav.init(elems, {});

 elems = document.querySelectorAll('#right-one');
 instances = M.Sidenav.init(elems, {edge:'right',draggable:false});

 elems = document.querySelectorAll('.scrollspy');
 instances = M.ScrollSpy.init(elems, {scrollOffset:0});

});

$(document).ready(function(){
  $('.pushpin').pushpin();
/*  $('.pushpin-head').each(function() {
   var $this = $(this);
   var $target = $('#' + $(this).attr('data-target'));
   $this.pushpin({
     top: $target.offset().top,
     bottom: $target.offset().top + $target.outerHeight() - $this.height()
   });
 });

 */
 });
