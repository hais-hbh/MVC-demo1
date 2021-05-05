import './app4.css'
import $ from 'jquery'

let $circle = $('#app4 .circle')

$circle.on('mousemove',()=>{
    $circle.addClass('active')
}).on('mouseleave',()=>{
    $circle.removeClass('active')
})