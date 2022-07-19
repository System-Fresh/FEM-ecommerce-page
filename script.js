
const openMenu = document.querySelector('.menu-btn')
const closeMenu = document.querySelector('.close-menu')
const menu = document.querySelector('.menu-list')
const menuOverlay = document.querySelector('.show-overlay')

function menuOpen(){
    closeMenu.style.display = 'block'
    openMenu.style.display = 'none'
    menuOverlay.style.display = 'block'
    menu.style.display = 'block'
}
function menuClose(){
    openMenu.style.display = 'block'
    closeMenu.style.display = 'none'
    menuOverlay.style.display = 'none'
    menu.style.display = 'none'
}

openMenu.addEventListener('click', menuOpen)
closeMenu.addEventListener('click', menuClose)



//hero script
// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    // captionText.innerHTML = dots[slideIndex-1].alt;
  }

  //image changer
  function myFunction(smallImg){
    var fullimg = document.getElementById("imageBox");
    fullimg.src = smallImg.src
  }

  //hero right 

   
    // mobile slider
    var mobileSlide = document.querySelector('.mobile-slider').children;
    var prevSlide = document.querySelector('.left-slider');
    var nextSlide = document.querySelector('.right-slider');
    var totalSlides = mobileSlide.length;
    var index = 0;

    nextSlide.onclick=function() {
        next("next");
    }
    prevSlide.onclick=function() {
        next("prev");
    }

    function next(direction){

        if(direction=="next"){
            index++;
            if(index==totalSlides){
                index=0;
            }
        }
        else{
            if(index==0){
            index=totalSlides-1;
        }  
        else{
            index--;
        }

        }
        for(i=0;i<mobileSlide.length;i++){
            mobileSlide[i].classList.remove("current");
        }
        mobileSlide[index].classList.add("current");
    }
  //end of hero script




  //shopping cart
 
  // var shoppingCart = document.querySelector(".shopping-cart");
  // var shoppingCartId = document.getElementById("shopping-cart")
  // var emptyCart = document.querySelector(".emptycart")
  

  // shopping cart toggle

//   function shoppingCartToggle(){
//     shoppingCart.classList.toggle("shopping-cart-height");
// }
// // end of shopping cart toggle

let deleteButton = true;

$('.plus').click(function (){
    var number = $('.article-number').text();
    number ++;
    $('.article-number').text(number);   
    })
$('.minus').click(function(){
    var number = $('.article-number').text();
    if (number < 1 ) return;
    else {
        number --;
        $('.article-number').text(number);
    }
})    
$('.icon-cart').click(function(){
    if (deleteButton) {
     $('.cart-container').toggleClass('cart-container-unset'); 
     $('.cart-container-buy').removeClass('cart-container-buy-unset');
    }else if (!deleteButton){
        $('.cart-container').removeClass('cart-container-unset'); 
        $('.cart-container-buy').toggleClass('cart-container-buy-unset');

    }})

$('.cart-add').click(function(){
    let number = $('.article-number').text();
    if (number === 0)return;
    else if (number > 0){
        const fid = $('.number').text();
        const newFid =substrict(fid); 
        const result = number * newFid ;
        const textDisplay = '$' + newFid + ' x ' + number ;
        const textDisplay2 = '   $' + result + '.00';
        $('.result').text(textDisplay); 
        $('.result-plus').text(textDisplay2);
        deleteButton = false;
        $('.number-cart').css('display','unset');
        $('.number-cart').text(number);
        $('.cart-container').removeClass('cart-container-unset');
    }
    $('.article-number').text('0');
    
})
$('.delete').click(function(){
         deleteButton = true;
        $('.cart-container-buy').removeClass('cart-container-buy-unset');  
        $('.cart-container').addClass('cart-container-unset');
        $('.number-cart').css('display','none');

})


// function section
function substrictImg (text){
    var fid = '';
    fid = text[21];
    console.log(fid);
    return fid;
}
function substrict(word){
    var fid = '';
    for (var i = 1; i < word.length-3; i++ ){
        fid += $('.number').text()[i];
        

    }return fid;
}
function substrictPercentage(word){
    var fid = '';
    for (var i = 0; i < word.length-1; i++ ){
        fid += $('span').text()[i];
        

    }return fid;
}

//localStorage













