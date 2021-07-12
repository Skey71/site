"use strict";
const products = [
    {
        id: 1,
        image: "images/featured/0.jpg",
        title: "1ELLERY X M'O CAPSULE",
        text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: "52.39",
    },
    {
        id: 2,
        image: "images/featured/1.jpg",
        title: "2ELLERY X M'O CAPSULE",
        text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: "76.95",
    },
    {
        id: 3,
        image: "images/featured/2.jpg",
        title: "3ELLERY X M'O CAPSULE",
        text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: "24.68",
    },
    {
        id: 4,
        image: "images/featured/3.jpg",
        title: "4ELLERY X M'O CAPSULE",
        text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: "59.37",
    },
    {
        id: 5,
        image: "images/featured/4.jpg",
        title: "5ELLERY X M'O CAPSULE",
        text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: "24.12",
    },
    {
        id: 6,
        image: "images/featured/5.jpg",
        title: "6ELLERY X M'O CAPSULE",
        text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: "41.33",
    },
];

const productsDiv = document.querySelector('.featuredItems');

const getProductMarkup = ({ id, image, title, text, price }) => {
    return `<div class="featuredItem">
                <div class="featuredImgWrap">
                    <img src="${image}" alt="${title}">
                    <div class="featuredImgDark">
                        <button  data-product-id="${id}">
                            <img src="images/cart.svg" alt="basket">
                            Add to Cart
                        </button>
                    </div>
                </div>
                <div class="featuredData">
                    <div class="featuredName">
                        ${title}
                    </div>
                    <div class="featuredText">
                        ${text}
                    </div>
                    <div class="featuredPrice">
                        $${price}
                    </div>
                </div>
            </div>`;
}

const showCategory = (list = products) => {
    let productMarkup = list.map(
        item => getProductMarkup(item)
    ).join('');

    productsDiv.insertAdjacentHTML('beforeend', productMarkup);
}


showCategory();