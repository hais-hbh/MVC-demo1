import './app1.css'
import $ from 'jquery'

let $number = $('#number')
let $btn1 = $('#add1')
let $btn2 = $('#minus1')
let $btn3 = $('#mul2')
let $btn4 = $('#divide2')
let n = localStorage.getItem('n')
$number.text(n || 100);
$btn1.on('click', () => {
    let n = parseInt($number.text())
    n += 1
    localStorage.setItem('n',n)
    $('#number').text(n)
})
$btn2.on('click', () => {
    let n = parseInt($number.text())
    n -= 1
    localStorage.setItem('n',n)
    $('#number').text(n)
})
$btn3.on('click', () => {
    let n = parseInt($number.text())
    n *= 2
    localStorage.setItem('n',n)
    $('#number').text(n)
})
$btn4.on('click', () => {
    let n = parseInt($number.text())
    n /= 2
    localStorage.setItem('n',n)
    $('#number').text(n)
})


