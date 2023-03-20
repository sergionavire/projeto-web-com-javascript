const banner = document.querySelector('#banner-image');
const images = [
  './images/banner/banner-01.jpg',
  './images/banner/banner-02.jpg',
  './images/banner/banner-03.jpg',
  './images/banner/banner-04.jpg',
  './images/banner/banner-05.jpg',
];
if (images.length >= 0) {
  const image = document.createElement('img');
  let index = 0;
  const lastIndex = images.length - 1;

  image.src = images[index];
  banner.appendChild(image);

  const bannerBall = document.querySelector('#banner-ball');

  for (let i = 0; i < images.length; i++) {
    const button = document.createElement('button');
    button.id = 'banner-ball-' + i;
    button.value = i;
    if (i === 0) {
      button.classList.add('selected')
    }
    button.onclick = () => {
      index = i;
      image.src = images[index]
      removeSelected();
      button.classList.add('selected');
    };
    bannerBall.appendChild(button);

  }

  function removeSelected() {
    const buttons = document.querySelectorAll('#banner-ball button');
    for (const button of buttons) {
      button.classList.remove('selected');
    }
  }

  setInterval(() => {
    if (index === lastIndex) {
      index = 0;
    } else {
      index++;
    }
    image.src = images[index];
    removeSelected();
    const buttonNew = document.querySelector('#banner-ball-' + index);
    buttonNew.classList.add('selected')
  }, 5000);

}



