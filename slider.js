class ImageSlider {
  constructor(images) {
    this.images = images;
    this.currentSlide = 0;
    this.totalImages = this.images.length;
  }

  setImages = (image) => {
    this.images.push(image);
  }

  getImages = () => {
    return this.images;
  }

  resetSlide = () => {
    this.getImages().forEach(image => {
      image.classList.remove("active");
    });
    this.getImages()[this.currentSlide].classList.add("active");
  }

  nextSlide = () => {
    this.currentSlide++;
    if(this.currentSlide === this.totalImages) {
      this.currentSlide = 0;
    }
    this.resetSlide()
  }

  prevSlide = () =>{
    if(this.currentSlide === 0) {
      this.currentSlide = this.totalImages - 1;
    } else {
      this.currentSlide--;
    }
    this.resetSlide()
  }
}

const domEl = () => {
  return {
    $preBtn: document.querySelector('.left-arrow'),
    $nextBtn: document.querySelector('.right-arrow'),
    $images: Array.from(document.querySelector("ul").children),
  }
}

const slider = new ImageSlider(domEl().$images);

domEl().$preBtn.addEventListener('click', () => {
  slider.prevSlide();
})

domEl().$nextBtn.addEventListener('click', () => {
  slider.nextSlide();
})

setInterval(() => {
  slider.nextSlide();
}, 7000);