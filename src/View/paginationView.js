import View from "./view.js";

class PaginationView extends View {
  _parentEl = document.querySelector(".pagination");

  paginationHandler(handler) {
    this._parentEl.addEventListener("click", function (e) {
      const btn = e.target.closest(".btns-pagination");

      const gotoPage = +btn.dataset.goto;
      handler(gotoPage);
    });
  }

  _generateMarkUp() {
    const curPage = this._data.page;
    //calculate how many page we will have base on the number of data we have per page.
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    console.log(curPage, numPages);

    if (curPage === 1 && numPages > 1) {
      return `<button class="btns-pagination btn-next" data-goto="${
        curPage + 1
      }">Next</button>

      
        `;
    }
    if (curPage === numPages && numPages > 1) {
      return `<button class="btns-pagination btn-prev " data-goto="${
        curPage - 1
      }">Previous</button>
      <span>page ${curPage}</span>
      `;
    }

    if (curPage < numPages) {
      return ` 
      <button class="btns-pagination btn-prev " data-goto="${
        curPage - 1
      }">Previous</button>
      <span>page ${curPage}</span>
      <button class="btns-pagination btn-next" data-goto="${
        curPage + 1
      }">Next</button>
      `;

      return;
    }
  }
}

export default new PaginationView();
