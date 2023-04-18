const dialog = document.querySelector('dialog');
const dummy = document.querySelector('#dummyImg');
const closebutt = document.querySelector('#closeButton')


const showDialog = (src, alt) => {
    dummy.src = src;
    dummy.alt = alt;

    dialog.showModal();
}

closebutt.addEventListener('click', ()=>{
    dialog.close();
})