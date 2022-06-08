window.onscroll = function() {scrolling()};

function scrolling() {
  if (document.documentElement.scrollTop > 50) {
     document.getElementById("navi01").style.fontSize = 0.7 + 'em';
     document.getElementById("navi02").style.fontSize = 0.7 + 'em';
     document.getElementById('navNav').style.height = 0 + 'em';
  } else {
    document.getElementById("navi01").style.fontSize = 1 + 'em';
    document.getElementById("navi02").style.fontSize = 1 + 'em';
    document.getElementById('navNav').style.height = 4 + 'em';
  }

  var docWidth = document.documentElement.offsetWidth;
  [].forEach.call(
    document.querySelectorAll('*'),
    function(el) {
      if (el.offsetWidth > docWidth) {
        console.log(el);
      }
    }
  );

}


