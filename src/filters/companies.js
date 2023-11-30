import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupCompanies = (store) => {
  let categories = new Set(store.map((product) => product.company));
  categories = ['all', ...categories];
  const companiesDOM = getElement('.companies');
  companiesDOM.innerHTML = categories
    .map((category) => {
      return `<button class='company-btn'>${category}</button>`;
    })
    .join('');
  companiesDOM.addEventListener('click', (e) => {
    if (e.target.classList.contains('company-btn')) {
      let newStore = [...store];
      if (e.target.textContent === 'all') {
        newStore = [...store];
      } else {
        newStore = store.filter(
          (product) => product.company === e.target.textContent
        );
      }

      display(newStore, getElement('.products-container'), true);
    }
  });
};

export default setupCompanies;
