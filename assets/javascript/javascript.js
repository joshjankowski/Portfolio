window.transitionToPage = function(href) {
    document.querySelector('.body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 500)
}

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('.body').style.opacity = 1
})

// Create Responsive Mobile NavBar
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    console.log("hello govna")
    navbarLinks.classList.toggle('active')
} )