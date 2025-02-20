const box1 = document.getElementById("animatedBox1");
    
box1.addEventListener("mouseenter", () => {
    box1.classList.add("animate__bounce");
});
    
box1.addEventListener("mouseleave", () => {
    box1.classList.remove("animate__bounce");
});

const box2 = document.getElementById("animatedBox2");
    
box2.addEventListener("mouseenter", () => {
    box2.classList.add("animate__bounce");
});
    
box2.addEventListener("mouseleave", () => {
    box2.classList.remove("animate__bounce");
});

const box3 = document.getElementById("animatedBox3");
    
box3.addEventListener("mouseenter", () => {
    box3.classList.add("animate__bounce");
});
    
box3.addEventListener("mouseleave", () => {
    box3.classList.remove("animate__bounce");
});