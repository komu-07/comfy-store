import { getStorageItem, setStorageItem } from './utils.js';
let store = getStorageItem('store');
const setupStore = (products) => {
  store = products.map((product) => {
    const { id, fields } = product;
    const { company, price, name, image: img, featured, colors } = fields;
    const { url: image } = img[0].thumbnails.large;
    return { id, company, price, name, image, featured, colors };
  });
  setStorageItem('store', store);
};
// console.log(store);

const findProduct = (id) => {
  let product = store.find((product) => product.id === id);
  return product;
};
export { store, setupStore, findProduct };
