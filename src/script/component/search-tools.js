class SearchTools extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector("#searchElement").value;
  }

  render() {
    this.innerHTML = `
        <style>
  body {
    background-color: black;
    color: white;
  }

  .search-form {
    display: flex;
    flex-direction: column; /* Ubah arah tata letak menjadi kolom di perangkat kecil */
    align-items: center; /* Pusatkan elemen secara horizontal */
    text-align: center; /* Pusatkan teks */
  }

  .search-form input {
    width: 100%; /* Lebar input mengisi seluruh kontainer */
    margin: 10px 0; /* Beri jarak atas dan bawah antara elemen */
    padding-left: 1rem;
  }

  input[type="search"] {
    background-color: white;
    border: 0;
  }

  input[type="search"]::placeholder {
    font-size: 1rem;
    color: $gray-500;
  }

  .search-form .icon {
    display: none; /* Sembunyikan ikon pada perangkat kecil */
  }
</style>

<div class="row mb-4">
  <div class="col-lg">
    <div class="search-form form-group" id="form">
      <!-- Hapus ikon bi-search -->
      <input
        placeholder="Masukkan Judul Film Yang Ingin Dicari"
        class="form-control me-2"
        id="searchElement"
        type="search"
      />
      <button class="btn btn-dark" id="searchButtonElement" type="button">Search</button>
    </div>
    <br> 
    <div class="col-lg-3 d-flex flex-column align-items-center justify-content-center">
      <h3 class="text-center my-auto">Genre Films</h3>
    </div>
  </div>
</div>
`;

    this.querySelector("#searchButtonElement").addEventListener(
      "click",
      this._clickEvent
    );
  }
}

customElements.define("search-tools", SearchTools);
