const card_number = document.getElementById('card_number');
const card_holder = document.getElementById('card_holder');
const card_date_month = document.getElementById('card_date_month');
const card_date_year = document.getElementById('card_date_year');
const cvc_text = document.getElementById('card_back-side-number');
const holder_input = document.getElementById('holder_input');
const number_input = document.getElementById('number_input');
const mm = document.getElementById('mm');
const yy = document.getElementById('yy');
const cvc = document.getElementById('cvc');
const form = document.querySelector('form')

holder_input.addEventListener('input',(event)=>{
    console.log(event.target.value)
    card_holder.innerText = event.target.value
})

number_input.addEventListener('input',(event)=>{
    console.log(event.target.value)
    card_number.innerText = event.target.value
})

mm.addEventListener('input',(event)=>{
    console.log(event.target.value)
    card_date_month.innerText = event.target.value
})

yy.addEventListener('input',(event)=>{
    console.log(event.target.value)
    card_date_year.innerText = event.target.value
})

cvc.addEventListener('input',(event)=>{
    console.log(event.target.value)
    cvc_text.innerText = event.target.value
})

const maskOptions = {
    mask: '**** **** **** ****'
  }
IMask(number_input, maskOptions)

function textValidate(text){
    if(/^[a-z\s]+$/i.test(text)){
        return true
    }
}

function numberValidate(number){
    if(/\d+$/.test(number)){
        return true
    }
}

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    let complete = true
    if(holder_input.value === ''){
        document.getElementById('holder_warning').style.visibility = 'visible'
        document.getElementById('holder_warning').innerText = "Can't be blank"
        holder_input.classList.add('red_border')
        complete = false;
    }else if(!textValidate(holder_input.value)){
        document.getElementById('holder_warning').style.visibility = 'visible'
        document.getElementById('holder_warning').innerText = "Wrong format, text only"
        holder_input.classList.add('red_border')
        complete = false;
    }
    if(number_input.value === ''){
        document.getElementById('number_warning').style.visibility = 'visible'
        document.getElementById('number_warning').innerText = "Can't be blank"
        number_input.classList.add('red_border')
        complete = false;
    }else if(!numberValidate(number_input.value)){
        document.getElementById('number_warning').style.visibility = 'visible'
        document.getElementById('number_warning').innerText = "Wrong format, numbers only"
        number_input.classList.add('red_border')
        complete = false;
    }
    if(mm.value === '' || yy.value === ''){
        document.getElementById('date_warning').style.visibility = 'visible'
        document.getElementById('date_warning').innerText = "Can't be blank"
        mm.classList.add('red_border')
        yy.classList.add('red_border')
        complete = false;
    }
    else if(!numberValidate(mm.value) || !numberValidate(yy.value)){
        document.getElementById('date_warning').style.visibility = 'visible'
        document.getElementById('date_warning').innerText = "Wrong format, numbers only"
        mm.classList.add('red_border')
        yy.classList.add('red_border')
        complete = false;
    }
    if(cvc.value === ''){
        document.getElementById('cvc_warning').style.visibility = 'visible'
        document.getElementById('cvc_warning').innerText = "Can't be blank"
        cvc.classList.add('red_border')
        complete = false;
    }else if(!numberValidate(cvc.value)){
        document.getElementById('cvc_warning').style.visibility = 'visible'
        document.getElementById('cvc_warning').innerText = "Wrong format, numbers only"
        cvc.classList.add('red_border')
        complete = false;
    }
    if(complete == true){
        document.querySelector('form').remove()
        const div = document.createElement('div')
        const figure = document.createElement('figure')
        const img = document.createElement('img')
        const h1 = document.createElement('h1')
        const span = document.createElement('span')
        const btn = document.createElement('btn')

        const container = document.querySelector('.container')
        container.append(div)
        div.append(figure)
        figure.append(img)
        div.append(h1)
        div.append(span)
        div.append(btn)

        h1.innerText = 'THANK YOU!'
        span.innerText = "We've added your card details"
        img.src = 'images/icon-complete.svg'

        btn.innerText = 'Continue'

        div.classList = 'complete_div'
        btn.classList = 'btn'
    }
})


