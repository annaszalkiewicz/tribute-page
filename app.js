/*Fix for keyboard users. When someone click on accordion link it expands and show tab content */

const links = document.getElementsByTagName('a');

for (const link of links) {
  link.addEventListener('keypress', () => {
    link.setAttribute('aria-expanded', true)
  })
}