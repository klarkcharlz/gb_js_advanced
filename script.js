const goods = [
  { title: "Shirt", price: 150 },
  { title: "Socks", price: 50 },
  { title: "Jacket", price: 350 },
  { title: "Shoes", price: 250 },
];

/*
function renderGoodsList(list = { title: "Empty", price: 0 }) {
  let goodsList = document.querySelector(".goods-list");
  list.forEach(({ title, price }) => {
    let div = document.createElement("div");
    div.classList.add("goods-item");
    let h3 = document.createElement("h3");
    h3.textContent = title;
    let p = document.createElement("p");
    p.textContent = price;
    div.appendChild(h3);
    div.appendChild(p);
    goodsList.appendChild(div);
  });
}

renderGoodsList(goods);
*/

const renderGoodsItem = ({ title, price }) => {
  return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
};

const renderGoodsList = (list) => {
  let goodsList = list.map((item) => renderGoodsItem(item));
  document.querySelector(".goods-list").innerHTML = goodsList.join(" ");
};

renderGoodsList(goods);
