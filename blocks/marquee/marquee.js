export default function decorate(block) {
  const singleLine = [...block.firstElementChild.children];
  block.classList.add(`marquee-${singleLine.length}-singleLine`);
}
