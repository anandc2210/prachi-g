const readMore = document.querySelector('.read-more');
const letterBody = document.querySelector('.letter-body');
if (readMore && letterBody) readMore.addEventListener('click', () => { letterBody.classList.add('open'); readMore.setAttribute('aria-expanded', 'true'); });
