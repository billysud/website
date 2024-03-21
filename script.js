// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Get references to Block 1 and Block 2
    const block1 = document.querySelector('.block1');
    const block2 = document.querySelector('.block2');

    // Function to switch blocks
    function switchBlocks() {
        // Toggle the visibility of Block 1 and Block 2
        block1.style.transform = block1.style.transform === 'translateX(0)' ? 'translateX(-100%)' : 'translateX(0)';
        block2.style.transform = block2.style.transform === 'translateX(0)' ? 'translateX(-100%)' : 'translateX(0)';
    }

    // Initial animation delay (3 seconds)
    setTimeout(switchBlocks, 3000);

    // Set interval for continuous animation (6 seconds total)
    setInterval(switchBlocks, 6000);
});
