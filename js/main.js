const API =
  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

const app = new Vue({
  el: "#app",
  data: {
    catalogUrl: "/catalogData.json",
    products: [],
    filtered: [],
    imgCatalog: "https://via.placeholder.com/200x150",
    userSearch: "",
    show: false,
  },
  methods: {
    filter(event) {
      value = event.target[0].value;
      const regexp = new RegExp(value, "i");
      this.filtered = this.products.filter((product) =>
        regexp.test(product.product_name)
      );
      this.products.forEach((el) => {
        const block = document.querySelector(
          `.product-item[data-id="${el.id_product}"]`
        );
        if (!this.filtered.includes(el)) {
          block.classList.add("invisible");
        } else {
          block.classList.remove("invisible");
        }
      });
    },
    getJson(url) {
      return fetch(url)
        .then((result) => result.json())
        .catch((error) => {
          console.log(error);
        });
    },
    addProduct(product) {
      console.log(product.id_product);
    },
  },
  mounted() {
    this.getJson(`${API + this.catalogUrl}`).then((data) => {
      for (let el of data) {
        this.products.push(el);
      }
    });
    this.getJson(`getProducts.json`).then((data) => {
      for (let el of data) {
        this.products.push(el);
      }
    });
  },
});
