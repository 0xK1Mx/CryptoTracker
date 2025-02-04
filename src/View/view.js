export default class View {
  _data;
  _parentEl;

  render(data) {
    this._data = data;

    const markup = this._generateMarkUp();

    this.clear();
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }

  clear() {
    this._parentEl.innerHTML = "";
  }
}
