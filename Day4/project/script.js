// Add Scroll Event Listener
window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    console.log(scrollPosition);
    // Apply animations when elements come into view based on scroll position
    if (scrollPosition > 0 && scrollPosition < 90) {
        document.getElementById('card-one').classList.add('bounceInLeft');
        document.getElementById('card-two').classList.add('pulse');
        document.getElementById('card-three').classList.add('bounceIn');
    }

    if (scrollPosition > 360 && scrollPosition < 486) {
        document.getElementById('textpara').classList.add('fadeInTopRight');
    }
});
