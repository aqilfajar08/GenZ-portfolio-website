const contentIdentity = document.getElementById('content_identity');
const items = Array.from(contentIdentity.children);
const speed = 0.3; // Kecepatan animasi, semakin besar semakin cepat

let scrollAmount = 0;

function animate() {
  scrollAmount += speed;
  
  if (scrollAmount >= items[0].offsetWidth) {
    contentIdentity.appendChild(items[0]); // Pindahkan elemen pertama ke akhir
    scrollAmount = 0; // Reset scroll amount
  }
  
  contentIdentity.style.transform = `translateX(-${scrollAmount}px)`;
  requestAnimationFrame(animate);
}

animate();
