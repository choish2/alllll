$('.gnb li').mouseenter(function() {
    $(this).children().css({'font-weight': 700 , 'color': '#000'})

})

$('.gnb li').mouseleave(function() {
    $(this).children().css({'font-weight': 500 , 'color': '#666'})

})

$('#section1 .centerbox1200 .menu > li').mouseenter(function() {
    $(this).children().css({'font-weight': 700 , 'color': '#000'})
    $(this).css({ 'border-bottom': '3px solid #000'})    

})

$('#section1 .centerbox1200 .menu > li').mouseleave(function() {
    $(this).children().css({'font-weight': 500 , 'color': '#767676'})
    $(this).css({ 'border-bottom': '0px solid #000'})    

})

//잼인는 숟자짤르기 놀이^^~~~
// $('.text_box1 .ex').each(function() {
//     let name = $(this).text();
//     let nameComp = name.substr(0, 1) + '**' ;
//     $(this).text(nameComp);
// })


$('.floating_menu a').click(function(){
    let target = $(this).attr('href');
    let targetpos = $(target).offset().top
    $('html, body').animate({scrollTop: targetpos}, 500);   
    return false;
})

// $(window).scroll(function() {
//     let scrollTop = $(window).scrollTop();
//     let top = $('.top_menu').offset().top;
  //스크롤해서 해당 위치가 됐을때 열리게함 
//     if(scrollTop >= top - 50){
//         $('.floating_menu a').addClass('on');
//     }else{
//         $('.floating_menu a').removeClass('on');
//     }
// else = 위 조건의 반대라면이라는 뜻 위 if문에 이어짐    
// })

$(window).scroll(function(){
    let scrollTop = $(window).scrollTop();
    let top = $('.top_menu').offset().top;
    
    $('.floating_menu a').not(href="#visual").each(function(){
        let target = $(this).attr('href');
        let targetpos = $(target).offset().top;

    if(scrollTop >= targetpos - winh/4){
        $('.floating_menu a').removeClass('on');
        $(this).addClass('on');
    }

    })

} )

if(window.innerWidth <= 768){
    document.addEventListener('DOMContentLoaded', function() {
        const productImage = document.getElementById('productImage');
        const magnifyingGlass = document.getElementById('magnifyingGlass');

        productImage.addEventListener('mousemove', function(e) {
            const rect = productImage.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // 확대경 위치 설정
            magnifyingGlass.style.left = `${x - magnifyingGlass.offsetWidth / 1}px`;
            magnifyingGlass.style.top = `${y - magnifyingGlass.offsetHeight / 1}px`;

            // 이미지 확대 위치 조정
            magnifyingGlass.style.backgroundPosition = `-${x * 13}px -${y * 10}px`;
        });

        productImage.addEventListener('mouseenter', function() {
            magnifyingGlass.style.display = 'block';
            magnifyingGlass.style.transform = 'scale(1.2)';
            
        });

        productImage.addEventListener('mouseleave', function() {
            magnifyingGlass.style.display = 'none';
            magnifyingGlass.style.transform = 'scale(1)';
        
        
        });
    
    });





}
