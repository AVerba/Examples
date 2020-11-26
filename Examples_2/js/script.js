function GoogleReadyHandlertugnnn3b() {
    var infoWindow, map = new google.maps.Map(document.getElementById("page_contact"), {
        center: {lat: 50.499022148143204, lng: 30.38418304179541},
        zoom: 11,
        disableDefaultUI: true,
        zoomControl: true,
        mapTypeControl: true,
        mapTypeId: "roadmap"
    });
    infoWindow = new google.maps.InfoWindow();
    (new google.maps.Marker({
        position: {lat: 50.443405279048406, lng: 30.52390281564964},
        map: map,
        title: decodeURIComponent("%D0%A2%D0%BE%D1%87%D0%BA%D0%B02")
    }))
    .addListener('click', function (e) {
        infoWindow.setContent(decodeURIComponent("%D0%A2%D0%BE%D1%87%D0%BA%D0%B0"));
        infoWindow.open(map, this);
    });
    return map;}

    // Slider

    let offset = 0;
    let slideIndex = 1;

    const slides = document.querySelectorAll('.news__slide'),
        prev = document.querySelector('.news__slider-prev'),
        next = document.querySelector('.news__slider-next'),
        total = document.querySelector('#total'),
        current = document.querySelector('#current'),
        slidesWrapper = document.querySelector('.news__slider-wrapper'),
        width = window.getComputedStyle(slidesWrapper).width,
        slidesField = document.querySelector('.news__slider-inner');

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent =  `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent =  slideIndex;
    }
    
    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    next.addEventListener('click', () => {
        if (offset == (+width.slice(0, width.length - 2) * (slides.length - 1))) {
            offset = 0;
        } else {
            offset += +width.slice(0, width.length - 2); 
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }
        if (slides.length < 10) {
            current.textContent =  `0${slideIndex}`;
        } else {
            current.textContent =  slideIndex;
        }
    });
    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = +width.slice(0, width.length - 2) * (slides.length - 1);
        } else {
            offset -= +width.slice(0, width.length - 2);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;
        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }
        if (slides.length < 10) {
            current.textContent =  `0${slideIndex}`;
        } else {
            current.textContent =  slideIndex;
        }
    });


