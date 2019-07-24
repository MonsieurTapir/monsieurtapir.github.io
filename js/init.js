
function offset(elt) {
        var rect = elt.getBoundingClientRect(), bodyElt = document.body;
        var sct=window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
        var scl=window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
        return {
            top: rect.top + sct,
            left: rect.left + scl
        }
    }

function correctWidth(){
  var parentwidth =  document.querySelector('.container').offsetWidth;
  elems = document.querySelectorAll('.underlined');
  elems.forEach(function(currentValue){
    currentValue.style.width = parentwidth.toString()+"px";
  });
}
window.onresize=correctWidth;
document.addEventListener('DOMContentLoaded', function() {
  correctWidth();
  var elems = document.querySelectorAll('#left-one');
  var instances = M.Sidenav.init(elems, {});

  elems = document.querySelectorAll('#right-one');
  instances = M.Sidenav.init(elems, {
    edge: 'right',
    draggable: false
  });

  elems = document.querySelectorAll('.scrollspy');
  instances = M.ScrollSpy.init(elems, {
    scrollOffset: 0
  });

  elems = document.querySelectorAll('.collapsible');
  instances = M.Collapsible.init(elems, {});

  elems = document.querySelectorAll('.pushpin');
  instances = M.Pushpin.init(elems, {});

  elems = document.querySelectorAll('.pushpin-title');
  elems.forEach(function(currentValue){
    var tar=document.querySelector('#'+currentValue.getAttribute('data-target'));
    M.Pushpin.init(currentValue,{
      top: offset(tar).top,
      bottom: offset(tar).top + tar.offsetHeight - currentValue.offsetHeight
    });
  });

});
