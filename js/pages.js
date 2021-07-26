const nextTag = document.querySelector("footer img.next")
const outputTag = document.querySelector("h2")

nextTag.addEventListener("click", function () {
  outputTag.innerHTML = "it worked!"
})