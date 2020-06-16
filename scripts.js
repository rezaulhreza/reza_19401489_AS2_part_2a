const image = document.querySelector('.image');
/* the first element in the document with the class ".image" is returned
which will display the image
*/
const hover = document.querySelector('.hover');
/* the first element in the document with the class ".hover" is returned*/

const modal = document.querySelector('.modal');
/*the first element in the document with the class "modal" is returned
Associated with the modal window, selecting the modal*/
*/

const close = document.querySelector('.close');
/*the first element in the document with the class "close" is returned
Associated with the close icon
*/
function show() {
  hover.classList.add('active');
  modal.classList.add('show');
}