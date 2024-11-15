<!DOCTYPE html>
<html>
<head>
  <title>Product Exploration</title>
  <link rel="stylesheet" href="updated.css">
</head>
<body>
  <h1>Product Exploration</h1>
  <label for="username">Enter your name:</label>
  <input type="text" id="username" />
  <button onclick="login()">Enter</button>

  <div id="products">
    <div id="productA" class="product">
      <h2>Product A</h2>
      <div class="attributes"></div>
    </div>
    <div id="productB" class="product">
      <h2>Product B</h2>
      <div class="attributes"></div>
    </div>
    <div id="productC" class="product">
      <h2>Product C</h2>
      <div class="attributes"></div>
    </div>
  </div>

  <button id="exploreButton" onclick="exploreProducts()">Explore Products</button>
  <button id="addToCartButton" disabled onclick="addToCart('A')">Add Product A to Cart</button>
  <button id="addToCartButton" disabled onclick="addToCart('B')">Add Product B to Cart</button>
  <button id="addToCartButton" disabled onclick="addToCart('C')">Add Product C to Cart</button>

  <script src="updated.js"></script>
</body>
</html>
