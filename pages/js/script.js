const nav = document.querySelector('nav')
        const container1 = document.querySelector('.container1-clientes')
        const container2 = document.querySelector('.container2-clientes')

        const imagem1 = document.querySelector('#img-frente')
        const imagem2 = document.querySelector('#img-atras')

        const ls = document.querySelector(".ls-seg")
        const hc = document.querySelector(".hc-seg")

        let previousScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

        let x = -130
        let y = 100

        const quemSomos = document.querySelector('#quemSomos')
        const equipe = document.querySelector('#equipe')
        const contato = document.querySelector('#contato')

        window.addEventListener('scroll', function() {
            var nav = document.querySelector('.naav');
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

        quemSomos.addEventListener('click', () => {
            window.location.href = `./pages/quem-somos.html${location.hash}`
        })
        equipe.addEventListener('click', () => {
            window.location.href = `./pages/equipe.html${location.hash}`
        })
        contato.addEventListener('click', () => {
            window.location.href = `./pages/contato.html${location.hash}`
        })
