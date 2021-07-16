// ========== Preloader ==================

// $(window).load(function() { 
//     $('#preloader').fadeOut(); 
//     $('.preloader_img').delay(1000).fadeOut('slow'); 	
// });

setTimeout(function(){        
    $('#preloader').fadeOut();
    $('.preloader_img').delay(150).fadeOut('slow'); 
}, 2500);
// ============ Scroll Header ============
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

