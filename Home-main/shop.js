

document.addEventListener('DOMContentLoaded', function() {
    const selectedEatery = JSON.parse(localStorage.getItem('selectedEatery'));
    const selectedShop = JSON.parse(localStorage.getItem('selectedShop'));

    if (selectedEatery && selectedShop) {
        const shopInfo = document.getElementById('shopInfo');
        shopInfo.innerHTML = '';

        const revInfo = document.getElementById('RevInfo');
        revInfo.innerHTML = '';

        const shopDiv = document.createElement('div');
        shopDiv.classList.add('shop-div');

        const shopTitle = document.createElement('h2');
        shopTitle.textContent = selectedShop.name;
        shopDiv.appendChild(shopTitle);

        const shopDescription = document.createElement('p');
        shopDescription.textContent = selectedShop.description;
        shopDiv.appendChild(shopDescription);

        const revDiv = document.createElement('div');
        revDiv.classList.add('rev-div');

        const  shopReview = document.createElement('div');
        shopReview.classList.add('reviews-div');
        const rheading = document.createElement('h3');
        rheading.textContent = "Reviews";
        shopReview.appendChild(rheading);

        selectedShop.reviews.forEach(review=>{
            const sr = document.createElement('p');
            sr.textContent = review;
            sr.classList.add('reviews');
            shopReview.appendChild(sr);
        });
        revDiv.appendChild(shopReview);

        shopInfo.appendChild(shopDiv);
        revInfo.appendChild(revDiv);

        const menuCont = document.getElementById("menu");
        const mitems = document.createElement('div');
        mitems.classList.add('menu-items');
        menuCont.appendChild(mitems);

        const heading = document.createElement('h1');
        heading.textContent = "Menu";
        mitems.appendChild(heading);

        selectedShop.menu.forEach(menuItem=>{
            const menuItemDiv = document.createElement('div');
            menuItemDiv.classList.add('menu-item');

            const itemName = document.createElement('h2');
            itemName.textContent = menuItem.itemName;
            menuItemDiv.appendChild(itemName);

            const itemDetails = document.createElement('p');
            itemDetails.textContent = `Quantity: ${menuItem.quantity}   Price: ${menuItem.price}`;
            menuItemDiv.appendChild(itemDetails);
    
            mitems.appendChild(menuItemDiv);

        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const addReviewButton = document.getElementById('addReviewBtn');
    const reviewPopup = document.getElementById('reviewPopup');
    const overlay = document.getElementById('overlay');

    addReviewButton.addEventListener('click', function(event) {
        event.preventDefault();
        reviewPopup.style.display = 'block';
        overlay.style.display = 'block';
    });

    const reviewFormSubmit = document.getElementById('reviewForm');
    const userReviewInput = document.getElementById('userReview');
    const submitReviewBtn = document.getElementById('submitReviewBtn');

    submitReviewBtn.addEventListener('click', function(event) {
        event.preventDefault();
        const reviewText = userReviewInput.value;

        // Get the selected shop
        const selectedShop = JSON.parse(localStorage.getItem('selectedShop'));
        if (selectedShop) {
            selectedShop.reviews.push(reviewText);
            localStorage.setItem('selectedShop', JSON.stringify(selectedShop));
        }

        reviewPopup.style.display = 'none';
        window.location.href = 'shopInfo.html'; // Redirect back to shop info
    });
});

