class ModalView {
  parentEl = document.querySelector(".crypto-modal");
  constructor() {
    this.element = document.querySelector(".crypto-project");
    this.modal = document.querySelector(".modal-container");
    this.bindEvents();
  }

  bindEvents() {
    this.modal.addEventListener("click", (event) => {
      if (event.target === this.modal) {
        this.modal.classList.add("hidden");
      }
    });
  }
  attachModalEvents() {
    const elements = document.querySelectorAll(".crypto-project");
    elements.forEach((element) => {
      element.addEventListener("click", (e) => {
        if (e.target.closest(".crypto-project")) {
          const cryptoId = e.target.closest(".crypto-project").dataset.crypto;
          console.log(`Clicked crypto project with ID: ${cryptoId}`);
        }
        this.modal.classList.remove("hidden");
      });
    });
  }
}

export default new ModalView();
