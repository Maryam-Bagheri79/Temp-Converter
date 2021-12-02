let convertBtn = document.querySelector('.convert')

let resetBtn = document.querySelector('.reset')

let changetBtn = document.querySelector('.change')

let title = document.querySelector('#title')

let error = document.querySelector('.erco')

let input = document.getElementById('input')

function reset() {

    input.value = ''
    error.innerHTML = ''

}

function change() {


    input.value = ''

    error.innerHTML = ''

    // let placeHolder = input.placeholder

    if (input.placeholder === '°C') {

        title.innerHTML = 'Converter °F to °C'
        input.placeholder = '°F'
        document.title = '°F to °C'

    } else {

        title.innerHTML = 'Converter °C to °F'
        input.placeholder = '°C'
        document.title = '°C to °F'

    }
}

function convert() {

    let inputValue = input.value

    if (inputValue === '') {

        error.innerHTML = 'Write Correct Value!'

        error.style.color = 'rgb(179, 46, 46)'

    }
    else if (isNaN(+inputValue)) {

        error.innerHTML = 'Wrong Value!'

        error.style.color = 'rgb(179, 46, 46)'

    } else {

        // let placeHolder = input.placeholder

        if (input.placeholder === '°C') {

            let far = +inputValue * 9 / 5 + 32;

            error.innerHTML = +inputValue + ' °C is ' + far + ' °F '

            error.style.color = 'rgb(31, 128, 80)'

        } else {

            let cel = (+inputValue - 32) * 5 / 9;

            error.innerHTML = +inputValue + ' °F is ' + cel + ' °C '

            error.style.color = 'rgb(31, 128, 80)'


        }

    }

}
resetBtn.addEventListener('click', reset)

changetBtn.addEventListener('click', change)

convertBtn.addEventListener('click', convert)
