document.addEventListener('DOMContentLoaded', function() {
    let currentgroup = 1;


    document.getElementById('show-more').addEventListener('click', function() {
        currentgroup++;
        const nextGroupElements = document.querySelectorAll('.group-' + currentgroup);
        if (nextGroupElements.length > 0) {
            nextGroupElements.forEach(Element => {
                Element.classList.remove('hidden');
            });
        } else {
            document.getElementById('show-more').classList.add('hidden');
        };
    });
});