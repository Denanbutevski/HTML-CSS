function Product(name, category, hasDiscount, price) {
    this.name = name;
    this.category = category;
    this.hasDiscount = hasDiscount;
    this.price = price;
  }

  let productsArray = [];

  productsArray.push(new Product("Product 1", "Food", true, 30));
  productsArray.push(new Product("aProduct 2", "Food", false, 10));
  productsArray.push(new Product("hProduct 3", "Tech", false, 5));
  productsArray.push(new Product("Product 4", "Books", true, 60));
  productsArray.push(new Product("Product 5", "Food", true, 20));
  productsArray.push(new Product("aProduct 6", "Books", true, 25));
  productsArray.push(new Product("iProduct 7", "Tech", true, 8));
  productsArray.push(new Product("oProduct 8", "Books", false, 9));
  productsArray.push(new Product("Product 9", "Accesories", true, 25));
  productsArray.push(new Product("oProduct 10", "Accesories", false, 30));
  productsArray.push(new Product("Product 11", "Food", false, 10));
  productsArray.push(new Product("aProduct 12", "Tech", true, 60));
  productsArray.push(new Product("Product 13", "Accesories", true, 5));
  productsArray.push(new Product("aProduct 14", "Watch", true, 25));
  productsArray.push(new Product("Product 15", "Watch", true, 2));

  let priceGreaterThan20 = productsArray.filter((product)=>product.price>20);
  console.log("Greater than 20: ", priceGreaterThan20);

  let categoryFoodOnDiscount = productsArray.filter((product)=>product.category==="Food" && product.hasDiscount).map((product)=>product.name);
  console.log("Food products on discount: ", categoryFoodOnDiscount);

  let productsOnDiscount = productsArray.filter((product)=>product.hasDiscount).map((product)=>product.name);
  console.log("List of products on discount: ", productsOnDiscount);

  function startsWithVowel(word){
    let firstChar = word[0];
    if(firstChar === 'a' || firstChar === 'e' || firstChar === 'i' || firstChar === 'o' || firstChar === 'u'){
        return true;
    }

    return false;
  }

  let startingWithVowelWithoutDiscount = productsArray.filter((product) => startsWithVowel(product.name) && !product.hasDiscount).map((product)=>{
    return {
        name: product.name,
        price: product.price
    }
  })

  console.log("Starting with vowel without discount: ",startingWithVowelWithoutDiscount);