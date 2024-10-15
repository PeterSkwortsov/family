//открывающаяся картинка

// const images = document.querySelectorAll('.img');
// const popUp = document.querySelector('.pop-up');
// const popUpImg = document.querySelector('.pop-up img');
// const popUpClose = document.querySelectorAll('.pop-up span');
// const overlay = document.querySelector('.overlay');



// images.forEach((event) => {
//     event.addEventListener('click', function () {
//         popUp.style.display = 'block';
//         document.body.style.position = 'fixed';        
//         popUpImg.src = event.src;
        
//     })
// })



// overlay.addEventListener('click', () => {
//     popUp.style.display = 'none';

//     document.body.style.position = '';
//     document.body.style.top = '';


// });

// popUpClose.forEach((event) => {
//     event.addEventListener('click', () => {
//         popUp.style.display = 'none';
//         document.body.style.position = '';
//         document.body.style.top = '';

//     })
// })

// исправление бага закрытия картинки 



// блок о нас 

const text1 = document.querySelectorAll(".text-1");
const denisImg = document.querySelectorAll(".denis-img");
const denisText = document.querySelectorAll(".denis-text");
const overlayPerson = document.querySelectorAll(".overlay-person")

overlayPerson.forEach((event) => {
    event.addEventListener('click', () => {
        event.style.display = 'none'
        let res = event.nextElementSibling;
        res.classList.toggle('hidden');
        });
    })

denisImg.forEach((event) => {
    event.addEventListener('click', () => {
        let res = event.nextElementSibling
        res.style.display = 'block';
        let res2 = res.nextElementSibling // тут открыли denis-text
        res2.classList.add('hidden');
        console.log(res2)
        // res2.classList.add('hidden');
    })
})




// всплытие вопроса 

const btnQ = document.querySelectorAll('.btn-question');
const opisanie = document.querySelectorAll('.opisanie');

btnQ.forEach((event) => {
    event.addEventListener('click', function () {
        let res = event.nextElementSibling // вышли на opisanie
        res.classList.toggle('hidden');
        let btn = res.previousElementSibling; // вышли на btn-question
        btn.classList.add('hidden')
    })
})

opisanie.forEach((event) => {
    event.addEventListener('click', function () {
        let opisanie = event // получил opisanie
        let btn = event.previousElementSibling // вышли на btnQ

        if (btn.classList  = 'hidden') {
            opisanie.classList.add('hidden')
            btn.classList.remove('hidden')
        }
    })
})

// грид сетка

let film = document.querySelector('input[name="ceiling"]');
let bigBook = document.querySelector('input[name="walls"]');
let miniBook = document.querySelector('input[name="floor"]');
let scanFoto = document.querySelector('input[name="scan"]');
let slideShow = document.querySelector('input[name="slide"]');
let fotoBook = document.querySelector('input[name="fotobook"]');
let interviewVideo = document.querySelector('input[name="interview-video"]');
let interviewText = document.querySelector('input[name="interview-text"]');

let close = document.querySelector(".close");

let inputs = document.querySelectorAll(".custom-checkbox");
let blockCalc = document.querySelector(".calc-price")

let totalPriceElement = document.querySelector('.calc-price-text'); // текст выбора
let totalPrice = document.querySelector('#total-price'); // итоговая цена




function calculate () {
    let total1 = 0;
    let total2 = 0;
    let total3 = 0;
    let total4 = 0;
    let total5 = 0;
    let total6 = 0;
    let total7 = 0;
    let total8 = 0;


    if (film.checked) {
        total1 = parseFloat(film.value);
        str = film.name;
	}

	if (bigBook.checked) {
        total2 = parseFloat(bigBook.value);
        str = bigBook.name;
	}

	if (miniBook.checked) {
        total3 = parseFloat(miniBook.value);
        str = miniBook.name;
	}
	if (scanFoto.checked) {
        total4 = parseFloat(scanFoto.value);
        str = scanFoto.name;
	}
	if (slideShow.checked) {
        total5 = parseFloat(slideShow.value);
        str = slideShow.name;
	}
	if (fotoBook.checked) {
        total6 = parseFloat(fotoBook.value);
        str = fotoBook.name;
	}
	if (interviewVideo.checked) {
        total7 = parseFloat(interviewVideo.value);
        str = interviewVideo.name;
	}
	if (interviewText.checked) {
        total8 = parseFloat(interviewText.value);
        str = interviewText.name;
	}
    
    totalPrice.innerText = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8;
}
   
   



    for (const input of inputs) {
       input.addEventListener('change', nameLine);
    }

    function nameLine () {
        calculate ()
    }

    inputs.forEach((el) => {
      el.addEventListener('click', function () {
        blockCalc.style.display = 'block'
      })
    })

    close.addEventListener('click', function () {
      blockCalc.style.display = 'none';
      inputs.forEach((el) => {
        el.checked = null;
      })
        
    })


    let samt = 0;
window.addEventListener('scroll', function() {
samt <= 10 ? samt++ : AOS.refresh();
});