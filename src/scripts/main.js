class Stars {
  constructor(quantityStars) {
    this.quantityStars = quantityStars;
  }

  positionX;
  positionY;
  size;
  blur;
  durationAnime;
  delayAnime

  createStras() {
    for(let count = 1; count < this.quantityStars; count++) {

      //cfg animation Stars
      this.durationAnime = Math.random() * 10
      this.delayAnime = Math.random() * 4

      //size and blur style Stars
      this.size = Math.floor(Math.random() * (30 - 5 + 1)) + 5;
      this.blur = Math.floor(Math.random() * (5 - 3 + 1)) + 3;
      
      //position X and Y Stars
      this.positionX = Math.floor(Math.random() * window.innerWidth);
      this.positionY = Math.floor(Math.random() * window.innerHeight);

      //create Stars
      const containerStar = document.createElement("div");
      const stars = document.createElement("p");
      const star2 = document.createElement("p");
      const star3 = document.createElement("p");
      const star4 = document.createElement("p");

      //add class to Stars
      containerStar.classList.add("containerStar")
      stars.classList.add("star")
      star2.classList.add("star2")
      star3.classList.add("star3")
      star4.classList.add("star4")

      stars.style.width = `${this.size / 10 }px`
      stars.style.height = `${this.size}px`
      stars.style.filter = `${this.blur}px`
      stars.style.filter = `blur(${this.blur}px)`

      star2.style.width = `${this.size}px`
      star2.style.height = `${this.size / 10 }px`
      star2.style.filter = `${this.blur}px`
      star2.style.filter = `blur(${this.blur}px)`

      star3.style.width = `${this.size / 2}px`
      star3.style.height = `${this.size / 10 }px`
      star3.style.filter = `blur(${this.blur}px)`

      star4.style.width = `${this.size / 2}px`
      star4.style.height = `${this.size / 10 }px`
      star4.style.filter = `blur(${this.blur}px)`

      containerStar.style.left = `${this.positionX - this.size}px`
      containerStar.style.top = `${this.positionY - this.size}px`

      this.animateCfg(containerStar, this.durationAnime, this.delayAnime);

      containerStar.append(stars, star2, star3, star4)
      console.log(stars)
      document.querySelector("body").append(containerStar)
    }
  }
  animateCfg(startAnime, durationAnime, delayAnime){
    startAnime.style.animationDuration = `${durationAnime}s`
    startAnime.style.delayAnimation = `${delayAnime}s`
  }
  
}


const estrelas = new Stars(100);
estrelas.createStras()
