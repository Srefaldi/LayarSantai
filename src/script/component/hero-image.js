import slide1 from "../../assets/home1.jpg";
import slide2 from "../../assets/home2.jpg";
import slide3 from "../../assets/home3.jpg";
import back from "../../assets/back.jpg";

import slidee1 from "../../assets/slide1.jpg";
import slidee2 from "../../assets/slide2.jpeg";
import slidee3 from "../../assets/slide3.jpg";

import logo from "../../assets/logo.png";

class HeroImage extends HTMLElement {
  constructor() {
    super();
    this.logo = [logo];
    this.back = [back];
    this.slidee = [slidee2, slidee1, slidee3];
    this.images = [slide1, slide2, slide3];
    this.currentIndex = 0;
    this.interval = 3000;

    this.render();
    this.startSlideShow();
  }

  connectedCallback() {
    this.addEventListener("click", this.handleImageClick);
  }

  disconnectedCallback() {
    this.removeEventListener("click", this.handleImageClick);
  }

  render() {
    this.innerHTML = `
      <style>
        /* Styling untuk HeroImage */
.hero-image {
  width: 500px;
  height: 250px;
  object-fit: cover;
}

.hero-image1 {
  width: 100%;
  height: 660px;
  object-fit: cover;
  filter: blur(2px);
}

.hero-container {

  display: flex;
  flex-direction: row-reverse; /* Membalik arah flex (foto di sebelah kanan) */
  position: relative;
}



.prev-button {
  left: 10px;
}

.next-button {
  right: 10px;
}

.hero-text {
  flex: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  font-size: 24px;
  padding: 8px;
  white-space: nowrap; /* Mencegah teks untuk wrap (memanjang) */
}


/* Styling untuk elemen di sampingnya */
.hero-content {
  flex: 1; /* Memberi elemen di sampingnya fleksibilitas untuk mengisi sisa ruang */
  padding: 20px;
  text-align: left;
  color: #252b48;
  font-size: 1.2rem;
  line-height: 1.7rem;
}
.hero-content h1, p{
  color:white;
  text-align: justify;
}

.hero-logo{
  widht: 100%;
  height: 50px;
}



// Styke Article


      }
      </style>
      
  
  <div class="hero-container">
    <img src="${
      this.back
    }" class="img-fluid rounded-4 mx-auto d-block mb-4 hero-image1" alt="hero">
    <div class="hero-text">
       <h1 class="title">"Santai dan Saksikan Dunia di Layar Santai!"</h1>
     
    </div>
  </div>
  
  <br>
  <br>
  <br>
  <br>
<div class="hero-container">
    
    <img src="${
      this.images[this.currentIndex]
    }" class="img-fluid rounded-4 mx-auto d-block mb-4 hero-image" alt="hero">
  <div class="hero-content">
        <h1 class="title">Apa Itu Layar Santai?</h1>
        <p>
       Layar Santai adalah destinasi digital yang didedikasikan untuk pecinta film dan penggemar hiburan. Di sini,
        kami menghadirkan koleksi rekomendasi film yang handal, disesuaikan dengan berbagai selera dan preferensi. 
        Temukan pengalaman menonton yang tak terlupakan khususnya untuk membantu Anda menemukan tawa, tangis, 
        dan keseruan dalam dunia perfilman.




      </p>
    </div>
  </div>

<br>
<br>
<br>
<br>

<div class="hero-container">
    <div class="hero-content">
        <h1 class="title">Cek Film Paling Update</h1>
        <p>
       Jadilah yang pertama menikmati film-film terkini dengan rekomendasi kami yang selalu up-to-date. Dalam dunia perfilman, 
       kecepatan adalah kunci, dan kami berkomitmen untuk memberikan pengalaman terbaik kepada Anda. 
       Jadi, tetaplah bersama kami dan nikmati akses eksklusif ke film-film terbaru!
      </p>
    </div>
  
    <img src="${
      this.slidee[this.currentIndex]
    }" class="img-fluid rounded-4 mx-auto d-block mb-4 hero-image" alt="hero">

  
  </div>
<br>
<br>
  
  `;
  }

  startSlideShow() {
    setInterval(() => {
      this.moveToNextImage();
    }, this.interval);
  }

  moveToNextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.render();
  }

  moveToPrevImage() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.render();
  }

  handleImageClick = (event) => {
    const target = event.target;
    if (target.classList.contains("prev-button")) {
      this.moveToPrevImage();
    } else if (target.classList.contains("next-button")) {
      this.moveToNextImage();
    }
  };
}

customElements.define("hero-image", HeroImage);
