
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  const sliderImgs = document.querySelectorAll(".slide-in");

  function transitionImg(event){
      sliderImgs.forEach(transitionImg => {
          const transitionAt = (window.scrollY + window.innerHeight) - transitionImg.height/2;
          const imgBottom = transitionImg.offsetTop + transitionImg.height;
          const halfVis = transitionAt > transitionImg.offsetTop;
          const isNotScrolledPast = window.scrollY < imgBottom;
          if(isNotScrolledPast && halfVis){
            transitionImg.classList.add('active');
          } else {
              transitionImg.classList.remove('active');
          }
      })
  }

  window.addEventListener("scroll", debounce(transitionImg))