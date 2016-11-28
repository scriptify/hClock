export function addClass(elem, name = '') {
  elem.className = `${ elem.className } ${ name }`;
}

export function removeClass(elem, name = '') {
  elem.className = elem.className.split(` ${name}`)[0];
}

export function animate(elementsToAnimate, className) {

  return new Promise((resolve, reject) => {

    let executed = 0;

    const animated = (elem, className) => {
      removeClass(elem, className);
      executed++;
      if(executed == elementsToAnimate.length || (executed == 1 && !elementsToAnimate.length)) {
        resolve();
      }
    };

    const animate = (el, className) => {
      addClass(el, className);
      el.addEventListener('animationend', e => animated(el, className));
      el.addEventListener('webkitAnimationEnd', e => animated(el, className));
      el.addEventListener('oanimationend', e => animated(el, className));
    };

    if(typeof elementsToAnimate.forEach === 'function') {
      elementsToAnimate.forEach(el => animate(el, className));
    } else {
      animate(elementsToAnimate, className);
    }

  });




}
