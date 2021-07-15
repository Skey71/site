"use strict";
class Products {
    constructor(id, image, title, text, price) {
        this._id = id;
        this._image = image;
        this._title = title;
        this._text = text;
        this._price = price;
    }
    getPrice() {
        return this._price;
    }
    render() {
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
}


class ProductList {
    constructor(products, container) {
        this._products = products;
        this._$productMarkupContainer = container
    }

    showCategory = (list = products) => {
        let productMarkup = list.map(
            item => getProductMarkup(item)
        ).join('');

        productsDiv.insertAdjacentHTML('beforeend', productMarkup);
    }
}

const list = new ProductList([
    new Products(1,
        "images/featured/0.jpg",
        "1ELLERY X M'O CAPSULE",
        "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "52.39"),
    new Products(2,
        "images/featured/1.jpg",
        "2ELLERY X M'O CAPSULE",
        "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "76.95"),
    new Products(3,
        "images/featured/2.jpg",
        "3ELLERY X M'O CAPSULE",
        "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "24.68"),
    new Products(4,
        "images/featured/3.jpg",
        "4ELLERY X M'O CAPSULE",
        "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "59.37"),
    new Products(5,
        "images/featured/4.jpg",
        "5ELLERY X M'O CAPSULE",
        "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "24.12"),
    new Products(6,
        "images/featured/5.jpg",
        "6ELLERY X M'O CAPSULE",
        "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "41.33"),
]); document.querySelector(".ProductList");


showCategory();