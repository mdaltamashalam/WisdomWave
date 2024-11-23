document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".clientSpeakTerm-item");
    const dots = document.querySelectorAll(".dot");
    let index = 0;

    function showSlide(i) {
        items.forEach((item, idx) => {
            item.classList.remove("active");
            dots[idx].classList.remove("active");
        });
        items[i].classList.add("active");
        dots[i].classList.add("active");
    }

    function nextSlide() {
        index = (index + 1) % items.length;
        showSlide(index);
    }

    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            index = i;
            showSlide(index);
        });
    });

    setInterval(nextSlide, 5000); // Change slide every 5 seconds
});





// JavaScript for Client Speak section
document.addEventListener('DOMContentLoaded', function () {
    const clientSpeakTerms = document.querySelectorAll('.clientSpeakTerm-item');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;

    // Function to update testimonials and navigation dots
    function updateTestimonials(index) {
        // Hide all clientSpeakTerms
        clientSpeakTerms.forEach((term, i) => {
            term.classList.remove('active');
            dots[i].classList.remove('active');
        });

        // Show the current testimonial
        clientSpeakTerms[index].classList.add('active');
        dots[index].classList.add('active');
    }

    // Event listener for each dot
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index; // Update currentIndex
            updateTestimonials(currentIndex);
        });
    });

    // Optional: Auto-rotate testimonials every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % clientSpeakTerms.length; // Cycle through
        updateTestimonials(currentIndex);
    }, 5000); // Change the duration as needed (5000ms = 5 seconds)
});



// Topics is started here 

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });



    const carouselSlide = document.querySelector('.carousel-slide');
    const prues = document.querySelectorAll('.prue');
    
    // Buttons
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    // Counter
    let counter = 0;
    const size = prues[0].clientWidth + 30; // Card width + margin
    
    // Button Listeners
    nextBtn.addEventListener('click', () => {
        if (counter >= prues.length - 1) return;
        carouselSlide.style.transition = "transform 0.5s ease-in-out";
        counter++;
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    });
    
    prevBtn.addEventListener('click', () => {
        if (counter <= 0) return;
        carouselSlide.style.transition = "transform 0.5s ease-in-out";
        counter--;
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    });
    
    



