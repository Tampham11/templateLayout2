// $(document).ready(function() {
	
// });

document.addEventListener("DOMContentLoaded", function(){
    var navbarCustom = document.getElementsByClassName('navbar-custom')[0];
    window.addEventListener("scroll", function(){
        console.log(window.pageYOffset);
        if(window.pageYOffset > 100){
            navbarCustom.classList.add('nenxanh');
        }
        else{
            navbarCustom.classList.remove('nenxanh');
        }
    })
})