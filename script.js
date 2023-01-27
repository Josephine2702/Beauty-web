const headerLinks = document.querySelectorAll('.nav-link')


headerLinks.forEach(function(el){
el.addEventListener('mouseover', function(){
    el.classList.add('active');
})
})