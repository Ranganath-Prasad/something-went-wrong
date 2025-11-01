document.addEventListener('DOMContentLoaded', function () {
    const anchorTags = document.querySelectorAll('a');

    function handleAnchorClick(event) {
        // Prevent the default action (navigating to the link's href)
        event.preventDefault();

        const clickedElement = event.currentTarget;
        const elementId = clickedElement.getAttribute('id');
        alert(elementId)
        openModal()

    }

    anchorTags.forEach(anchor => {
        anchor.addEventListener('click', handleAnchorClick);
    });


    const modal = document.getElementById('myModal');
    const closeFooterBtn = document.getElementById('closeModalFooterBtn');
    closeFooterBtn.addEventListener('click', closeModal);

    function openModal() {
        alert('opening modal')
        modal.classList.remove('hidden');
        // Best practice: Add a class to the body to prevent background scrolling
        document.body.classList.add('overflow-hidden');
    }

    function closeModal() {
        modal.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    }


});