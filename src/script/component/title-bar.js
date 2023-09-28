class TitleBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="container">
      
       <style>
  header span {
    color: white;
  }

  .custom-nav-link {
    color: white !important;
    text-decoration: none;
    transition: border-bottom-width 0.2s ease-in-out;
    border-bottom: 1px solid transparent;
  }

  .custom-nav-link:hover {
    border-bottom-width: 5px;
    border-bottom-color: #141E46;
  }

  /* Tambahkan CSS responsif di bawah ini */

  @media (max-width: 768px) {
    .container {
      padding: 0;
    }

    header {
      text-align: center;
    }

    .nav {
      flex-direction: column;
    }

    .nav-item {
      margin-bottom: 10px;
    }
  }
</style>
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
            <span class="fs-4">LayarSantai</span>
          </a>

          <ul class="nav nav-pills">
            <li class="nav-item"><a href="#" class="nav-link custom-nav-link" aria-current="page">Home</a></li>
            <li class="nav-item"><a href="#cari" class="nav-link custom-nav-link">Search</a></li>
            <li class="nav-item"><a href="#genre" class="nav-link custom-nav-link">Genre</a></li>
            <li class="nav-item"><a href="#movie" class="nav-link custom-nav-link">Movie</a></li>
          </ul>
        </header>
      </div>
    `;
  }
}

customElements.define("title-bar", TitleBar);
