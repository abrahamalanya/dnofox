// testimonials
function renderTestimonial(index) {
    const container = document.querySelector('.testimonials-container');
    const testimonial = testimonials[index];
    const html = `
        <div class="testimonial">
            <img src="${testimonial.image}" alt="${testimonial.name}">
            <blockquote>
                <p>${testimonial.text}</p>
                <cite>${testimonial.name}</cite>
            </blockquote>
        </div>
                `;
    container.innerHTML = html;
}

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;

prevBtn.addEventListener('click', () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : testimonials.length - 1;
    renderTestimonial(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = currentIndex < testimonials.length - 1 ? currentIndex + 1 : 0;
    renderTestimonial(currentIndex);
});
renderTestimonial(0);