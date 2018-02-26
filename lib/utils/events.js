const event = [
  'onclick',
  'ondblclick',
  'onmousedown',
  'onmouseup',
  'onmouseover',
  'onmousemove',
  'onmouseout',
  'onmouseenter',
  'onmouseleave',
  'ontouchcancel',
  'ontouchend',
  'ontouchmove',
  'ontouchstart',
  'ondragstart',
  'ondrag',
  'ondragenter',
  'ondragleave',
  'ondragover',
  'ondrop',
  'ondragend',
  'onkeydown',
  'onkeypress',
  'onkeyup',
  'onunload',
  'onabort',
  'onerror',
  'onresize',
  'onscroll',
  'onselect',
  'onchange',
  'onsubmit',
  'onreset',
  'onfocus',
  'onblur',
  'oninput',
  'oncontextmenu',
  'onfocusin',
  'onfocusout'
];

module.exports = (newNode, oldNode) => {
  for (let i = 0; i < event.length; i++) {
    let ev = events[i];

    if (newNode[ev]) {
      oldNode[ev] = newNode[ev];
    } else if (oldNode[ev]) {
      oldNode[ev] = undefined;
    }
  }
};
