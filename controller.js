const PRODUCT_DATA = [
    {
        name: "Blue Plaid Flannel Oversized Shirt",
        price: 1250,
        frontImg: "images\\Blue-Plaid-Flannel-Oversized-Shirt_crop_center.webp",
        backImg: "images\\Blue-Plaid-Flannel-Oversized-Shirt_crop_center-1.webp"
    },

    {
        name: "Toki Doki Crop",
        price: 899,
        frontImg: "images\\Bonkers-Toki-Doki_crop_center.webp",
        backImg: "images\\Bonkers-Toki-Doki_crop_center-1.webp"
    },

    {
        name: "Brown Fox Hoodie",
        price: 1199,
        frontImg: "images\\Bonkerscorner_brown_fox_hoodie06_crop_center.webp",
        backImg: "images\\Bonkerscorner_Brown_fox_hoodie_03_crop_center-1.webp"
    },

    {
        name: "Moon Child Sweatshirt",
        price: 1399,
        frontImg: "images\\bonkerscorner_moon_child_sweatshirt02_crop_center.webp",
        backImg: "images\\bonkerscorner_moon_child_sweatshirt07_crop_center-1.webp"
    }
];

const productGrid = document.querySelector(".product-grid");//parent element for each product.
const menuBtn = document.querySelector('.main-navigation__menu-btn');//hamburger icon
const sideDrawer = document.querySelector('.side-drawer');//side drawer
const closeDrawerBtn = document.getElementById('close-drawer-btn');//closing button of side drawer

const modal = document.querySelector('.modal');//add to cart modal
const closeModal = document.querySelector('.close-modal');//button to close the modal


//////////////////////////////
//SIDE DRAWER LOGIC
const openDrawer = () => {
    sideDrawer.classList.add('open');
}

const closeDrawer = () => {
    sideDrawer.classList.remove('open');
}

menuBtn.addEventListener('click', () => {
    openDrawer();
});

closeDrawerBtn.addEventListener('click', () => {
    closeDrawer();
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && sideDrawer.classList.contains('open')) {
        closeDrawer();
    }
});

////////////////////////
//CREATING PRODUCT CARD

const createProductCard = (product) => {

    const markup = `<div class="product">
        <div class="image-container">
          <img
            src=${product.frontImg}
            alt="Product "
            class="product-image front-image"
          />
          <img
            src=${product.backImg}
            alt="Product 1 Hover"
            class="product-image back-image"
          />
          <button class="add-to-cart">Add to Cart</button>
        </div>
        <h2>${product.name}</h2>
        <p>₹${product.price}</p>
      </div>
        `;
    productGrid.insertAdjacentHTML('beforeend', markup);//adding markup at the end for each product but not outside parent element.
};

PRODUCT_DATA.map(product => { createProductCard(product) }); //card is created for each product in our dummy data


//////////////////
//ADD TO CART MODAL

const showModal = () => {
    modal.style.visibility = 'visible' // Show the modal
    setTimeout(() => {
        modal.style.visibility = 'hidden'; // Auto hide modal after 2 seconds
    }, 2000);
};

const hideModal = () => {
    modal.style.visibility = 'hidden'
};
productGrid.addEventListener('click', (event) => {
    if (event.target.classList.contains('add-to-cart')) {
        showModal(); // Show modal when Add to Cart button is clicked
    }
});

closeModal.addEventListener('click', hideModal);

//PAGE NAVIGATION

document.querySelector(".nav__links").addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.classList.contains("nav__link")) {
        const id = e.target.getAttribute("href");
        document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
});

document.querySelector(".shop-now").addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector("#shop").scrollIntoView({ behavior: "smooth" });
})
