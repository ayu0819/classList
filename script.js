// classList
document.addEventListener('DOMContentLoaded', function() {
    const colour = document.querySelector('.classList-btn');

    colour.addEventListener('click',function() {
        this.classList.toggle('active');
    },false);
},false);

// className
document.addEventListener('DOMContentLoaded', function() {
    const colour = document.querySelector('.className-btn');

    colour.addEventListener('mouseover',function(){
        this.className='active';
    }),false;

    colour.addEventListener('mouseout',function(){
        this.className='className-btn';
    }),false;
},false);

// style
document.addEventListener('DOMContentLoaded', function() {
    const colour = document.querySelector('.style-btn');

     colour.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#b32945';
     },false)

     colour.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#d7506b';
     },false)
},false);






