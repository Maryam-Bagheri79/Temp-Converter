let convertBtn = document.querySelector('.convert')

let resetBtn = document.querySelector('.reset')

let changetBtn = document.querySelector('.change')

let title = document.querySelector('#title')

let error = document.querySelector('.div-erco')

let newElmH = document.createElement('h3')

let input = document.getElementById('input')

resetBtn.addEventListener('click', function () {

    input.placeholder = '°C'
    title.innerHTML = 'Converter °C to °F'
    newElmH.remove()
    input.value = ''

})

changetBtn.addEventListener('click', function () {

    newElmH.remove()

    input.value = ''
    let placeHolder = input.placeholder

    if (placeHolder === '°C') {

        title.innerHTML = 'Converter °F to °C'
        input.placeholder = '°F'
        document.title = '°F to °C'

    } else {

        title.innerHTML = 'Converter °C to °F'
        input.placeholder = '°C'
        document.title = '°C to °F'

    }
})

convertBtn.addEventListener('click', function () {

    let inputValue = input.value

    if (inputValue === '') {

        newElmH.innerHTML = 'Write Correct Value!'
        error.append(newElmH)

        document.querySelector('.div-erco').classList.remove('correct')
        document.querySelector('.div-erco').classList.add('error')
        // console.log(error.append('Write Correct Value!', newElmH))
    }
    else if (isNaN(+inputValue)) {

        newElmH.innerHTML = 'Wrong Value!'
        error.append(newElmH)

        document.querySelector('.div-erco').classList.remove('correct')
        document.querySelector('.div-erco').classList.add('error')


    } else {

        let placeHolder = input.placeholder

        if (placeHolder === '°C') {

            let far = +inputValue * 9 / 5 + 32;
            newElmH.innerHTML = +inputValue + ' °C is ' + far + ' °F '

            error.append(newElmH)
            document.querySelector('.div-erco').classList.remove('error')
            document.querySelector('.div-erco').classList.add('correct')

        } else {

            let cel = (+inputValue - 32) * 5 / 9
            newElmH.innerHTML = +inputValue + ' °F is ' + cel + ' °C '

            error.append(newElmH)
            document.querySelector('.div-erco').classList.remove('error')
            document.querySelector('.div-erco').classList.add('correct')

        }

    }

})