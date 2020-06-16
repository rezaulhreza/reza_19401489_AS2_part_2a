const image = document.querySelector('.image');
/* the first element in the document with the class ".image" is returned
which will display the image
*/
const hover = document.querySelector('.hover');
/* the first element in the document with the class ".hover" is returned*/

const modal = document.querySelector('.modal');
/*the first element in the document with the class "modal" is returned
Associated with the modal window, selecting the modal*/


const close = document.querySelector('.close');
/*the first element in the document with the class "close" is returned
Associated with the close icon
*/
function show() {
  hover.classList.add('active');
  modal.classList.add('show');
}
/*after clicking on the icon the photo will show up as a modal window. adding the image into the modal
The close button will appear but will not work*/


function hide() {
  hover.classList.remove('active');
  modal.classList.remove('show'); /*this will activate the close icon, event will take place after clicking the mouse*/
}

image.addEventListener('click', show);
/*Targeting method , setting up the  show function which is called when the click event is delivered. The image will show up by this*/
close.addEventListener('click', hide);
/*Targeting method , setting up the  hide function which is called when the click event is delivered. Close button will take place and upon clicking on it, the modal window will be closed*/