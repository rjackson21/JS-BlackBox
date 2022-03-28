window.addEventListener('click', function(e) {

    const box = document.querySelector('div')
    box.classList.add('change')

    function removeChange() {
        box.classList.remove('change')
    }

    this.window.setTimeout(removeChange, 200)
})