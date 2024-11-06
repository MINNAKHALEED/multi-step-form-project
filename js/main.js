// const firstDiv = document.querySelectorAll('.fristdiv')
// console.log(firstDiv)

const allDiv = document.querySelector('#alldiv')
console.log(allDiv)

const div = document.querySelectorAll('.div')
console.log(div)

const nextBtn = document.querySelectorAll('.next')
console.log(nextBtn)

const backBtn = document.querySelectorAll('.back')
console.log(backBtn)

let i = 0

nextBtn.forEach(item => {
  item.addEventListener("click", (eo) => {
    i++
    updateDiv()
  
     step.parentElement.parentElement.getElementsByClassName('active')[0].classList.remove('active')
     step.parentElement.parentElement.getElementsByTagName('span')[i].classList.add('active')
  })
});


backBtn.forEach(item => {
  item.addEventListener("click", (eo) => {
    i--
    updateDiv()
  
     step.parentElement.parentElement.getElementsByClassName('active')[0].classList.remove('active')
     step.parentElement.parentElement.getElementsByTagName('span')[i].classList.add('active')
  })
});


const updateDiv = () => {
  allDiv.getElementsByClassName("div-active")[0].classList.remove('div-active')
  
  div[i].classList.add("div-active")

}

const allCircle = document.querySelectorAll('.circle')
// console.log(allCircle)

const step = document.querySelector('.step')
// console.log(step)


  allCircle.forEach((circle, index) => {
  
  circle.addEventListener("click", () => {
  step.parentElement.parentElement.getElementsByClassName('active')[0].classList.remove('active')
  
    circle.classList.add("active")

    allDiv.getElementsByClassName("div-active")[0].classList.remove('div-active')
    
    div[index].classList.add("div-active")

    i = index

    })
  
  });




