const carousel1 = [
    {
        id: 1,
        img: '../assets/clients-logo/apoiolab-color.png'
    },
    {
        id: 2,
        img:'../assets/clients-logo/atlantis-color.png'
    },
    {
        id: 3,
        img: '../assets/clients-logo/biociencia-color.png',
    },
    {
        id: 4,
        img:'../assets/clients-logo/bioproxjr-color.png'
    },
    {
        id: 5,
        img: '../assets/clients-logo/gntlab-color.png'
    },
    {
        id: 6,
        img: '../assets/clients-logo/grupobr4-color.png'
    },
    {
        id: 7,
        img: '../assets/clients-logo/lanlab-color.png'
    },
    {
        id: 8,
        img: '../assets/clients-logo/bioxtracta-color.png'
    },
    {
        id: 9,
        img:'../assets/clients-logo/jflab-color.png'
    }    
]

const carousel2 = [
    {
        id: 1,
        img: '../assets/clients-logo/novabio-color.png'
    },
    {
        id: 2,
        img: '../assets/clients-logo/omaxlab-color.png'
    },
    {
        id: 3,
        img: '../assets/clients-logo/progenix-color.png'
    },
    {
        id: 4,
        img: '../assets/clients-logo/rbcc.png'
    },
    {
        id: 5,
        img: '../assets/clients-logo/veritas-color.png'
    },
    {
        id: 6,
        img:'../assets/clients-logo/zymo-color.png'
    },
    {
        id: 7,
        img:'../assets/clients-logo/trissomia-color.png'
    },
    {
        id: 8,
        img:'../assets/clients-logo/upbioestoque-color.png'
    },
]

const cliente = document.querySelector('.aqui');
const scrollSpeed = 5; // Velocidade de rolagem (pode ajustar conforme necessário)

let scrollLeft = 0;

carousel1.forEach(item => {
    const img = document.createElement('img');
    img.src = item.img;
    cliente.appendChild(img);
});

function handleScroll() {
    scrollLeft += scrollSpeed;
    cliente.style.transform = `translateX(-${scrollLeft}px)`;
  
    // Verificar se atingiu o final do carrossel e reiniciar
    const scrollWidth = cliente.scrollWidth;
    const clientWidth = cliente.clientWidth;
  
    if (scrollLeft >= scrollWidth - clientWidth) {
        scrollLeft = 0;
        cliente.style.transform = 'translateX(0)';
    }
}

window.addEventListener('scroll', handleScroll);

