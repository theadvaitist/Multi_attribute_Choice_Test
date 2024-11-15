let user = '';
let exploreCount = 0;
let attributesOrder = [];
let startTime;
const products = {
    A: {
        time: 'Long-lasting (effective for up to 6 months)',
        quantity: '500 ml',
        action: 'High (biodegradable and non-toxic)',
        price: '₹600',
        state: 'Concentrated (requires dilution)'
    },
    B: {
        time: 'Short-lasting (effective for up to 3 months)',
        quantity: '750 ml',
        action: 'Moderate (partially biodegradable)',
        price: '₹450',
        state: 'Ready-to-use'
    },
    C: {
        time: 'Long-lasting (effective for up to 6 months)',
        quantity: '300 ml',
        action: 'Low (minimal environmental benefits)',
        price: '₹500',
        state: 'Ready-to-use'
    }
};

const orders = {
    order1: ['quantity', 'action', 'time', 'state', 'price'],
    order2: ['price', 'quantity', 'action', 'time', 'state'],
    order3: ['state', 'price', 'quantity', 'action', 'time']
};

let currentOrder = orders.order1; // Default order
let orderLabel = 'Order 1';

function login() {
    user = document.getElementById('username').value;
    if (user) {
        alert(`Welcome, ${user}!`);
        startTime = new Date();
    } else {
        alert('Please enter your name.');
    }
}

function exploreProducts() {
    if (!user) {
        alert('Please enter your name and press Enter.');
        return;
    }
    if (exploreCount >= 5) {
        alert('You have reached the maximum number of explores.');
        return;
    }
    exploreCount++;
    const attribute = currentOrder[exploreCount - 1];
    attributesOrder.push(attribute);
    for (let product in products) {
        document.querySelector(`#product${product} .attributes`).innerHTML = `<p>${products[product][attribute]}</p>`;
    }
    if (exploreCount >= 5) {
        document.getElementById('exploreButton').disabled = true;
        document.getElementById('addToCartButton').disabled = false;
    }
}

function addToCart(product) {
    if (!user) {
        alert('Please enter your name and press Enter.');
        return;
    }
    const endTime = new Date();
    const timeTaken = (endTime - startTime) / 1000; // time in seconds
    const data = {
        user,
        exploreCount,
        attributesOrder,
        timeTaken,
        productAdded: product,
        orderLabel
    };
    downloadData(data);
}

function downloadData(data) {
    const csvContent = `data:text/csv;charset=utf-8,${Object.keys(data).join(',')}\n${Object.values(data).join(',')}`;
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `${data.user}_data.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function setOrder(order) {
    currentOrder = orders[order];
    orderLabel = order.charAt(0).toUpperCase() + order.slice(1).replace('order', 'Order ');
    exploreCount = 0;
    attributesOrder = [];
    document.getElementById('exploreButton').disabled = false;
    document.getElementById('addToCartButton').disabled = true;
}
