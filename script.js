// Define the attribute order types
const ORDER_TYPES = {
  ORDER_1: 'Quantity, Action, Time, State, Price',
  ORDER_2: 'Price, Quantity, Action, Time, State',
  ORDER_3: 'State, Price, Quantity, Action, Time'
};

let user = '';
let exploreCount = 0;
let attributesOrder = [];
let attributesOrderType = null;
let currentAttributeIndex = 0;
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

const attributes = ['quantity', 'action', 'time', 'state', 'price'];

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

  // Determine the attribute order type
  if (exploreCount === 1) {
    attributesOrderType = ORDER_TYPES.ORDER_1;
  } else if (exploreCount === 2) {
    attributesOrderType = ORDER_TYPES.ORDER_2;
  } else if (exploreCount === 3) {
    attributesOrderType = ORDER_TYPES.ORDER_3;
  }

  // Update the attributesOrder array based on the current order type
  attributesOrder = attributesOrderType.split(', ');

  // Display the current attribute
  for (let product in products) {
    document.querySelector(`#product${product} .attributes`).innerHTML = `<p>${products[product][attributesOrder[currentAttributeIndex]]}</p>`;
  }

  currentAttributeIndex++;

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
    attributesOrderType,
    attributesOrder,
    timeTaken,
    productAdded: product
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
