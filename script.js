function createHeart(isMoving) {
    let heart = document.createElement("div");
    heart.innerHTML = "❤";
    heart.classList.add("heart");
    document.body.appendChild(heart);
    
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let size = Math.random() * 30 + 30;
    let colors = ["#ff0000", "#e60000", "#cc0000", "#ff4d4d", "#ff4081", "#f06292", "#ec407a", "#e91e63", "#2196F3", "#64B5F6", "#1976D2"];
    let color = colors[Math.floor(Math.random() * colors.length)];
    
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    heart.style.fontSize = `${size}px`;
    heart.style.color = color;
    
    if (isMoving) {
        let speed = Math.random() * 2 + 1.5;
        function move() {
            y -= speed;
            if (y < -50) {
                y = window.innerHeight + 50;
                x = Math.random() * window.innerWidth;
            }
            heart.style.top = `${y}px`;
            heart.style.left = `${x}px`;
            requestAnimationFrame(move);
        }
        move();
    }
}

for (let i = 0; i < 30; i++) {
    createHeart(i % 2 === 0);
}