const $box1 = document.querySelector('.box-1');
const $box2 = document.querySelector('.box-2');
const $box3 = document.querySelector('.box-3');
const $box4 = document.querySelector('.box-4');

function removeBox(boxNumber) {
    const $box = document.querySelector('.box-' + boxNumber);
    $box.remove();
}

$box1.addEventListener('click', function() {
    removeBox(1);
})

$box2.addEventListener('click', function() {
    removeBox(2);
})

$box3.addEventListener('click', function() {
    removeBox(3);
})

$box4.addEventListener('click', function() {
    removeBox(4);
})