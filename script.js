const colorBtn = document.querySelector('#colorBtn')
const head = document.querySelector('#head')
const rgbValue = document.querySelector('#rgb')

colorBtn.addEventListener('click', (e) => {
  const i = Math.floor(Math.random() * 255);
  const j = Math.floor(Math.random() * 255);
  const k = Math.floor(Math.random() * 255);
  document.body.style.backgroundColor = `rgb(${i},${j},${k}`;

  rgbValue.classList.remove('displayToggle')
  rgbValue.innerText = `rgb (${i}, ${j}, ${k})`

  console.log(i, j, k);
})