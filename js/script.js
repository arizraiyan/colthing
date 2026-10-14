// navbar animation---------------

const navbarSection = document.getElementById("Navbar");
const topBar = document.getElementById("TopBar");

window.addEventListener("scroll", function () {
    const topBarHeight = topBar ? topBar.offsetHeight : 0;

    if (window.scrollY > topBarHeight) {
        navbarSection.classList.add("navbar-fixed");
    } else {
        navbarSection.classList.remove("navbar-fixed");
    }
});

// -----------------------------------------------hero section-===== pate           st===============================================================
// -------------silk silder
$('.muneHero').slick({
  dots: false,
  infinite: true,
  speed: 100,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
   arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});

const handercilck1=()=>{
    console.log('click hoece')
}








// =========================================hero section pate end==============================================------------------

// -------------------------item butoon ----------


document.querySelectorAll(".allPocuct").forEach((section) => {
    const products = section.querySelectorAll(".AllPocuctCrad");
    const button = section.querySelector(".buttonsirt button");

    let visibleCount = 3;

    function updateProducts() {
        products.forEach((product, index) => {
            product.classList.toggle(
                "hide-product",
                index >= visibleCount
            );
        });

        // সব প্রোডাক্ট দেখানো শেষ হলে বাটন গায়েব হবে
        if (button) {
            button.style.display =
                visibleCount >= products.length ? "none" : "inline-block";
        }
    }

    // প্রথমে ৩টি প্রোডাক্ট দেখাবে
    updateProducts();

    // ক্লিক করলে আরও ৩টি প্রোডাক্ট দেখাবে
    if (button) {
        button.addEventListener("click", () => {
            visibleCount += 3;
            updateProducts();
        });
    }
});
// --------------------button-load----------------------------
// =============================
// CATEGORY FILTER
// =============================

const categoryButtons = document.querySelectorAll(
    ".item_ul button[data-category]"
);

const categoryContents = document.querySelectorAll(
    ".category-content[data-content]"
);

categoryButtons.forEach((button) => {
    button.addEventListener("click", function () {

        const selectedCategory = this.dataset.category;

        // Remove active class from all buttons
        categoryButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        // Add active class to clicked button
        this.classList.add("active");

        // Show only selected category
        categoryContents.forEach((content) => {
            content.hidden =
                content.dataset.content !== selectedCategory;
        });
    });
});
// =============================
// SHIRTS LOAD MORE
// =============================

const shirtsSection = document.querySelector(
    '[data-content="Shirts"]'
);

if (shirtsSection) {
    const products = shirtsSection.querySelectorAll(".AllPocuctCrad");
    const loadMoreButton = shirtsSection.querySelector(".Load");

    const initialProducts = 6;
    const productsPerClick = 4;

    let visibleCount = initialProducts;

    function updateProducts() {
        products.forEach((product, index) => {
            product.classList.toggle(
                "hide-product",
                index >= visibleCount
            );
        });

        // Hide Load More when all products are visible
        if (loadMoreButton) {
            loadMoreButton.style.display =
                visibleCount >= products.length ? "none" : "block";
        }
    }

    updateProducts();

    if (loadMoreButton) {
        loadMoreButton.addEventListener("click", function () {
            visibleCount = Math.min(
                visibleCount + productsPerClick,
                products.length
            );

            updateProducts();
        });
    }
}
// ------------------button------------------------------


