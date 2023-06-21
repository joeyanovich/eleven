const nav = document.querySelector('nav')
        const container1 = document.querySelector('.container1-clientes')
        const container2 = document.querySelector('.container2-clientes')

        const imagem1 = document.querySelector('#img-frente')
        const imagem2 = document.querySelector('#img-atras')

        const ls = document.querySelector(".ls-seg")
        const hc = document.querySelector(".hc-seg")
        
        const lsMobile = document.querySelector(".ls-mobile")
        const hcMobile = document.querySelector(".hc-mobile")
        const hcMobileCnt = document.querySelector(".inferior-healthcare")
        const lsMobileCnt = document.querySelector(".inferior-lifescience")
        const inferior = document.querySelector(".inferior")

        let previousScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

        let x = -130
        let y = 100

        window.addEventListener('scroll', function() {
            var nav = document.querySelector('.nav-desktop');
            var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollPosition > 0) {
                nav.classList.remove('menu-desactive')
                nav.classList.add('menu')
                // element.style.display = 'block'; // Exibe o elemento
            } else {
                nav.classList.remove('menu')
                nav.classList.add('menu-desactive')
                // element.style.display = 'none'; // Oculta o elemento
            }
        });

        window.addEventListener('scroll', function() {
            var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

            if(scrollPosition >= 2000 && scrollPosition <= 3200){
                if (scrollPosition > previousScrollPosition) {
                    x += 2.5
                    y -= 2.5
                    container1.style.transform = `translateX(${x}px)`;
                    container2.style.transform = `translateX(${y}px)`;
                } else {
                    x -= 2.5
                    y += 2.5
                    container1.style.transform = `translateX(${x}px)`;
                    container2.style.transform = `translateX(${y}px)`;
                }
            }

            previousScrollPosition = scrollPosition;
        });

        var stateImage = false

        function switchSlide() {
            stateImage = !stateImage;

            if (stateImage) {
                imagem1.classList.remove('img-frente');
                imagem1.classList.add('img-atras');
                imagem2.classList.remove('img-atras');
                imagem2.classList.add('img-frente');
                ls.style.display = 'block'
                hc.style.display = 'none'
            } else {
                imagem1.classList.remove('img-atras');
                imagem1.classList.add('img-frente');
                imagem2.classList.remove('img-frente');
                imagem2.classList.add('img-atras');
                hc.style.display = 'block'
                ls.style.display = 'none'
            }
        }

        var toggle = false;
        function switchbtn(value){

            if(value === 2){
                hcMobile.style.backgroundColor = "#ECECEC"
                hcMobileCnt.style.display = "none"
                lsMobileCnt.style.display = "block"
                lsMobile.style.backgroundColor = "#BFDBFE"
            } else if(value ===3){
                lsMobile.style.backgroundColor = "#ECECEC"
                lsMobileCnt.style.display = "none"
                hcMobileCnt.style.display = "block"
                hcMobile.style.backgroundColor = "#FBCFE8"
            }
        }

        var menuOpenned = false
        var menu = document.querySelector('.menuu')

        function handleMenu() {
            menuOpenned = !menuOpenned;

            if(menuOpenned) {
                menu.style.transform = `translateX(0)`
            } else {
                menu.style.transform = `translateX(100%)`
            }
        }
                
        function changeLanguage(lang) {
            location.hash = lang;
            location.reload();
        }

    
        
        
