export default function decorate(block) {
  const singleLine = [...block.innerText];
  block.classList.add(`marquee-${singleLine.length}-arjaAI`);
  block.replaceWith(singleLine);
}
