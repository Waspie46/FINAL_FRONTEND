const slides = [
    {
        img: "/FINAL_PROJECT_WAYPOINT/PHOTOS/carousl1.jpg",
        text: "მიწის ნაკვეთის აზომვა / დაკვლავა",
        arrowColor: "white"
    },
    {
        img: "/FINAL_PROJECT_WAYPOINT/PHOTOS/carousl2.webp",
        text: "ბინის/სახლის შიდა აზომვითი ნახაზის მომზადება",
        arrowColor: "white"
    },
    {
        img: "/FINAL_PROJECT_WAYPOINT/PHOTOS/carousl3.png",
        text: "ტოპოგრაფიული გეგმის მომზადება",
        arrowColor: "black"
    }
];

let index = 0;

const img = document.querySelector(".hero-image1 img");
const subtitle = document.querySelector(".subtitle");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

function updateSlide() {
    img.src = slides[index].img;
    subtitle.textContent = slides[index].text;

    left.style.color = slides[index].arrowColor;
    right.style.color = slides[index].arrowColor;
}

right.onclick = () => {
    index = (index + 1) % slides.length;
    updateSlide();
};

left.onclick = () => {
    index = (index - 1 + slides.length) % slides.length;
    updateSlide();
};



const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav")
const contact = document.querySelector(".contact")

burger.addEventListener("click", () => {
    nav.classList.toggle("active");
    contact.classList.toggle("active")
});