$(document).on('click', '.trigger-largeContent', function (event) {
    event.preventDefault();
    $('#modal-Large').iziModal('open', this); // Do not forget the "this"
});	
$("#modal-Large").iziModal({
    title: 'COMPETENCES',
    subtitle: 'Technique, Cognitive, Relationnelle',
    theme: '',
    headerColor: '#e65100',
    overlayColor: 'rgba(0, 0, 0, 0.4)',
    iconColor: '',
    iconClass: null,
    width: 800,
    padding: 0,
    overlayClose: true,
    closeOnEscape: true,
    bodyOverflow: false,
});

// Large with gallery
$(document).on('click', '.trigger-large-gallery', function (event) {
    event.preventDefault();
    $('#modal-Large-gallery').iziModal('open', this); // Do not forget the "this"
});	
$("#modal-Large-gallery").iziModal({
    title: 'EXPERIENCE',
    subtitle: 'Professionelle,Stage,Immersion',
    theme: 'My Life',
    headerColor: ' #00ff04 ',
    overlayColor: 'rgba(0, 0, 0, 0.4)',
    iconColor: '',
    iconClass: null,
    fullscreen: true,
    width: 600,
    padding: 0,
    overlayClose: true,
    closeOnEscape: true,
    bodyOverflow: false,
    focusInput: true,
    closeButton: true,

    onFullscreen: function(modal){

    },
    onOpened: function() {
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            slidesPerView: 1,
            loop: true
        });
    },
});