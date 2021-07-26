// data for holding current page number
let pageNumber = 0

// content for the pages
const pages = [
  { copy: "a Brooklyn-based graphic designer", background: "#edc7a9", circle: "#3e78ed" },
  { copy: "Kanye West's biggest fan", background: "#a1fffe", circle: "#e34a47" },
  { copy: "looking for a job at the start of October", background: "#d3c7f3", circle: "#f7fe00" },
  { copy: `letting you <a href="pdf.pdf">download her PDF</a>.`, background: "#faffb8", circle: "#b472e6" }
]

// pick the relevant tags
const nextTag = document.querySelector("footer img.next")
const previousTag = document.querySelector("footer img.prev")
const randomTag = document.querySelector("footer img.random")
const outputTag = document.querySelector("h2")
const circleTag = document.querySelector("section div.circle")
const bodyTag = document.querySelector("body")

// make a function to increase pageNumber
const next = function () {
  pageNumber = pageNumber + 1

  if (pageNumber > pages.length - 1) {
    pageNumber = 0
  }

  updateSection()
}

// make a function to decrease pageNumber
const previous = function () {
  pageNumber = pageNumber - 1

  if (pageNumber < 0) {
    pageNumber = pages.length - 1
  }

  updateSection()
}

// make a function to randomise pageNumber
const random = function () {
  pageNumber = Math.floor( Math.random() * pages.length )

  updateSection()
}

// update the section's content and style
const updateSection = function () {
  outputTag.innerHTML = pages[pageNumber].copy
  circleTag.style.backgroundColor = pages[pageNumber].circle
  bodyTag.style.backgroundColor = pages[pageNumber].background
}

// on click of nextTag, run this
nextTag.addEventListener("click", function () {
  next()
})

// on click of previousTag, run this
previousTag.addEventListener("click", function () {
  previous()
})

// on click of randomTag, run this
randomTag.addEventListener("click", function () {
  random()
})
