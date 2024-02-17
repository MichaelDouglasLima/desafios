const $output = document.querySelector('.output');
const $input = document.querySelector('.text-field');
const $form = document.querySelector('.form');

$form.addEventListener('submit', function(event) {
    event.preventDefault();
    $output.textContent = $input.value; 
})

$input.addEventListener('input', function() {
    $output.textContent = $input.value; 
})