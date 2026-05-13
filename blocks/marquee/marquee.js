import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  const singleLine = document.createElement('p');
forEach((div) => {
      if (div.children.length === 1 && div.querySelector('p')) div.className = 'marquee';
    });
  block.replaceChildren(singleLine);
}
