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
  const usernameInput = document.getElementById('username');
  user = usernameInput.value.trim();
  if (user) {
    alert(`Welcome, ${user}!`);
    startTime = new Date();
    usernameInput.disabled = true;
    document.getElementById('loginButton').disabled = true;
    document.getElementById('exploreButton').disabled = false;
  } else {
    alert('Please enter your name.');
  }
}

function exploreProducts() {
  // Rest of the exploreProducts() function remains the same
}

function addToCart(product) {
  // Rest of the addToCart() function remains the same
}

function downloadData(data) {
  // Rest of the downloadData() function remains the same
}
