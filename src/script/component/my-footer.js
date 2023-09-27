class MyFooter extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <div class="container">
        <footer class="py-3 my-4">
          <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-white">Home</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-white">Features</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-white">Pricing</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-white">FAQs</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-white">About</a>
            </li>
          </ul>
          <p class="text-center text-white">&copy; 2023 LayarSantai</p>
        </footer>
      </div>
    `;
  }
}

customElements.define("my-footer", MyFooter);
