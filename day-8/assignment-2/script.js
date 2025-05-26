const animation = [
  { transform: 'rotate(0deg) scale(1)' },
  { transform: 'rotate(360deg) scale(1.5)' },
  { transform: 'rotate(0deg) scale(1)' }
];

const animationConfig = {
  duration: 3000,
  iterations: 1,
  fill:'forward',
};

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");

async function animateImages() {
  await img1.animate(animation, animationConfig).finished;
  await img2.animate(animation, animationConfig).finished;
  await img3.animate(animation, animationConfig).finished;
}

animateImages();
