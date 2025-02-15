document.addEventListener("DOMContentLoaded", () => {
  const ch1Button = document.getElementById("ch1")
  const ch2Button = document.getElementById("ch2")
  const randomButton = document.getElementById("random")
  const backToHomeButton = document.getElementById("back-to-home")

  if (ch1Button) {
    ch1Button.addEventListener("click", () => {
      window.location.href = "challenge1.html"
    })
  }

  if (backToHomeButton) {
    backToHomeButton.addEventListener("click", () => {
      window.location.href = "index.html"
    })
  }
  if(ch2Button){
    ch2Button.addEventListener("click",()=>{
       window.location.href = "challenge2.html"
    })
  }
  if(randomButton){
    randomButton.addEventListener("click",()=>{
       window.location.href = "randomproject.html"
    })
  }
  // Add hover effect to profile buttons
  const profileButtons = document.querySelectorAll(".column button")
  profileButtons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      button.style.transform = "scale(1.05)"
    })
    button.addEventListener("mouseleave", () => {
      button.style.transform = "scale(1)"
    })
  })
})

