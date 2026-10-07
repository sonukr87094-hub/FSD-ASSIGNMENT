Node.js URL Module
Points
Created a simple Node.js server using the http module.
Used new URL(req.url, 'http://localhost') to read the URL.
Used url.pathname to get the pathname.
Used url.searchParams.get('category') to get the category.
Used url.searchParams.get('sort') to get the sorting option.
Example URL: /products?category=books&sort=price.
category=books can be used to filter products.
sort=price can be used to sort products by price.
The server displays the extracted values in the terminal.
Run
node app.js
Then open:

http://localhost:3000/products?category=books&sort=price
Output
Page: /products
Category: books
Sorting: price