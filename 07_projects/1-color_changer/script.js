const dots = document.querySelectorAll(".dot")
const body = document.querySelector('body')

dots.forEach(function(dot) {
    console.log(dot)
    dot.addEventListener('click',function(e){
        console.log(e)
        console.log(e.target)
        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'pink'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'orange'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id
        }
    })
});
// console.log(dot)