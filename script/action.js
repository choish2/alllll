  
$(document).ready(function() {
    $('#section1 li').mouseenter(function() {
        $(this).addClass('on').siblings().removeClass('on')
        // clearInterval(autoRolling)
        RollingNumber = $(this).index()//마우스 올린 형제 번호 구하기
        /* let = imgsrc = $(this).find('figure img').attr('src')
        console.log(imgsrc)
        $('.big_img img').attr('src', imgsrc)
        }) 글자크게보기*/
    })

    $('#section1 li').mouseleave(function() {

        $(this).removeClass('on')
        // autoRolling = setInterval(imgRolling, 2000)
    })

    let RollingNumber = 0
    // let autoRolling = setInterval(imgRolling, 2000)
     
        function imgRolling(){
            RollingNumber++
            if(RollingNumber >= 4) RollingNumber = 0

            $('.small_img li').eq(RollingNumber).addClass('on').siblings().removeClass('on')
            let imgsrc = 
            $('.small_img li').eq(RollingNumber).find('figure img').attr('src')
            $('.big_img img').attr('src', imgsrc)
            
        }   

    // $('.big_img').mouseenter(function() {
    //     $(this).addClass('on').delay(1000)
    //     setTimeout(() => {
    //         $('.big_img').removeClass('on')
    //         return false;

    //     }, 1000);
    // }) 글씨가 옆으로 나옴


    })


    document.addEventListener('DOMContentLoaded', function() {
        const productImage = document.getElementById('productImage');
        const magnifyingGlass = document.getElementById('magnifyingGlass');

        productImage.addEventListener('mousemove', function(e) {
            const rect = productImage.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // 확대경 위치 설정
            magnifyingGlass.style.left = `${x - magnifyingGlass.offsetWidth / 10}px`;
            magnifyingGlass.style.top = `${y - magnifyingGlass.offsetHeight / 5}px`;

            // 이미지 확대 위치 조정
            magnifyingGlass.style.backgroundPosition = `-${x * 1}px -${y * 1}px`;
        });

        productImage.addEventListener('mouseenter', function() {
            magnifyingGlass.style.display = 'block';
            magnifyingGlass.style.transform = 'scale(1.5)';
            
        });

        productImage.addEventListener('mouseleave', function() {
            magnifyingGlass.style.display = 'none';
            magnifyingGlass.style.transform = 'scale(1)';
        
        
        });
    });

    $('.gnb li').mouseenter(function() {
        $(this).children().css({'font-weight': 700 , 'color': '#000'})
    
    })
    $('.gnb li').mouseleave(function() {
        $(this).children().css({'font-weight': 500 , 'color': '#fff'})
    
    })