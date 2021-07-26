// This is the data for holding current page
let pageNumber = 0

// pick the relevant tags
const nextTag = document.querySelector("footer img.next")
const previousTag = document.querySelector("footer img.prev")
const outputTag = document.querySelector("h2")

// make a function to increase pageNumber
const next = function () {
  pageNumber = pageNumber + 1

  if (pageNumber > 10) {
    pageNumber = 1
  }

  updateSection()
}

// make a function to decrease pageNumber
const previous = function () {
  pageNumber = pageNumber - 1

  if (pageNumber < 1) {
    pageNumber = 10
  }

  updateSection()
}

// update the section's content and style
const updateSection = function () {
  outputTag.innerHTML = pageNumber
}

// on click of nextTag, run this
nextTag.addEventListener("click", function () {
  next()
})

// on click of previousTag, run this
previousTag.addEventListener("click", function () {
  previous()
})
