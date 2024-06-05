document.addEventListener('DOMContentLoaded', function() {
console.log("yeyey");
});

const eateries = [
    {
        name: 'cos',
        shops: [
            {
                name: 'Wrapchick',
                description: 'Description for W',
                menu: [
                    {itemName: 'W 1', quantity: 1, price: '₹60'},
                    {itemName: 'W 2', quantity: 2, price: '₹70'},
                ],
                images: ['../photos/wrap.jpg'],
                reviews: ['Review 1', 'Review 2']
            },
            {
                name: 'Sips & Bites',
                description: 'Description for SB',
                menu: [
                    {itemName: 'SB', quantity: 1, price: '₹20'},
                    {itemName: 'BSB', quantity: 2, price: '₹30'},
                ],
                images: ['../photos/sp.jpg'],
                reviews: ['Review 1', 'Review 2']
            },
            {
                name: 'Pizza Nation',
                description: 'Description for PN',
                menu: [
                    {itemName: 'PN1', quantity: 1, price: '₹20'},
                    {itemName: 'PN2', quantity: 2, price: '₹30'},
                ],
                images: ['../photos/pn.jpg'],
                reviews: ['Review 1', 'Review 2']
            },
            {
                name: 'Iqbal Juice Corner',
                description: 'Description for IJC',
                menu: [
                    {itemName: 'IJC1', quantity: 1, price: '₹20'},
                    {itemName: 'IJC2', quantity: 2, price: '₹30'},
                ],
                images: ['../photos/iqbal.jpg'],
                reviews: ['Review 1', 'Review 2']
            },
            {
                name: 'Honey Cafe',
                description: 'Description for HC',
                menu: [
                    {itemName: 'HC1', quantity: 1, price: '₹20'},
                    {itemName: 'HC2', quantity: 2, price: '₹30'},
                ],
                images: ['../photos/honey.jpg'],
                reviews: ['Review 1', 'Review 2']
            },
            {
                name: 'Bombay Munchery',
                description: 'Description for BM',
                menu: [
                    {itemName: 'SB', quantity: 1, price: '₹20'},
                    {itemName: 'BSB', quantity: 2, price: '₹30'},
                ],
                images: ['../photos/bombay.jpg'],
                reviews: ['Review 1', 'Review 2']
            },
        ]
    },
    {
        name: 'jaggi',
        shops: [
            {
                name: 'Coffee',
                description: 'Description for Shop 1',
                menu: [
                    {itemName: 'Item 1', quantity: 1, price: '₹60'},
                    {itemName: 'Item 2', quantity: 2, price: '₹70'},
                ],
                images: ['../photos/cos.jpg'],
                reviews: ['Review 1', 'Review 2']
            },
            {
                name: 'Street Cafe',
                description: 'Description for Shop 1',
                menu: [
                    {itemName: 'AAA', quantity: 1, price: '₹20'},
                    {itemName: 'BBB', quantity: 2, price: '₹30'},
                ],
                images: ['../photos/cos.jpg'],
                reviews: ['Review 1', 'Review 2']
            },
        ]
    },
    {
        name: 'g block',
        shops: [
            {
                name: 'Main Cafeteria',
                description: 'Description for Shop 1',
                menu: [
                    {itemName: 'Item 1', quantity: 1, price: '₹60'},
                    {itemName: 'Item 2', quantity: 2, price: '₹70'},
                ],
                images: ['../photos/cos.jpg'],
                reviews: ['Review 1', 'Review 2']
            },
            {
                name: 'Iqbal Juice Corner',
                description: 'Description for Shop 1',
                menu: [
                    {itemName: 'AAA', quantity: 1, price: '₹20'},
                    {itemName: 'BBB', quantity: 2, price: '₹30'},
                ],
                images: ['../photos/cos.jpg'],
                reviews: ['Review 1', 'Review 2']
            },
        ]
    },
    {
        name: 'lc',
        shops: [
            {
                name: 'Waterbody Cafe',
                description: 'For a quick break from intense library study sessions!',
                menu: [
                    {itemName: 'Cold Coffee', quantity: 1, price: '₹20'},
                    {itemName: 'Veg Burger', quantity: 1, price: '₹30'},
                    {itemName: 'Special Chat', quantity: 1, price: '₹20'},
                    {itemName: 'Cadbury 5 Star', quantity: 1, price: '₹20'},
                    {itemName: 'Maaza', quantity: 1, price: '₹20'},
                    {itemName: 'Cold Drinks', quantity: 1, price: '₹20'},
                    {itemName: 'Chips', quantity: 1, price: '₹20'},
                    {itemName: 'Veg Grilled Sandwich', quantity: 1, price: '₹30'},
                    
                ],
                images: ['../photos/lc.jpg'],
                reviews: ['I had a wonderful experience. Very quick service and good quality food. - Nidhi', 'Delicious food with fast service at minimal cost. The Grilled Veg Sandwich is a must try! - Sarika']
            },

        ]
    },
    {
        name: 'aahar',
        shops: [
            {
                name: 'A 1',
                description: 'Description for Shop 1',
                menu: [
                    {itemName: 'Item 1', quantity: 1, price: '₹60'},
                    {itemName: 'Item 2', quantity: 2, price: '₹70'},
                ],
                images: ['../photos/cos.jpg'],
                reviews: ['Review 1', 'Review 2']
            },
            {
                name: 'A2',
                description: 'Description for Shop 1',
                menu: [
                    {itemName: 'AAA', quantity: 1, price: '₹20'},
                    {itemName: 'BBB', quantity: 2, price: '₹30'},
                ],
                images: ['../photos/cos.jpg'],
                reviews: ['Review 1', 'Review 2']
            },
        ]
    }
];


document.addEventListener('DOMContentLoaded', function() {
function populateEateries() {
    const eateriesList = document.getElementById('eateriesList');
    const se = sessionStorage.getItem('shopName');

    if (eateriesList) {
        eateries.forEach(eatery => {
            if(se && eatery.name == se){
                eatery.shops.forEach(shop => {
                    const shopItem = document.createElement('div');
                    shopItem.classList.add("widget");
                    shopItem.textContent = shop.name;
                    shopItem.addEventListener('click', () => displayShopInfo(eatery, shop));
                    const shopImg = document.createElement('img');
                    shopImg.src = shop.images;
                    shopItem.appendChild(shopImg);
                    eateriesList.appendChild(shopItem);
                });
                return;
            }
        });
        
    }

}

function displayShopInfo(eatery, shop) {
    localStorage.setItem('selectedEatery', JSON.stringify(eatery));
    localStorage.setItem('selectedShop', JSON.stringify(shop));
    window.location.href = 'shopInfo.html';
}


populateEateries();
});