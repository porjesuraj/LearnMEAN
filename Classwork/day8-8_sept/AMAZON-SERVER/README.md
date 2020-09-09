- projects
  - server.js        ---------   express app
  - utils.js         --------- utility functions(like create REsult)
  - db.js db         --------- connection 
  - config.js        --------- application configuration
  - routes           --------- (dir) will hold all routess
  - <router\>.js     --------- router to add required routes

- modules 
   - express         ---------   for web server
   - mysql2          ---------    mysql connectivity
   - jsonwebtoken    ---------    jwt auth token
   - morgan          ---------    server logging
   - crypto-js       ---------    for encryption

   - nodemailer      ---------    for sending email
    - multer         ---------    file uploading
   - swagger         ---------    for API documentation 
   - cors            ---------    for cross origin resource sharing 
   - mongojs         ---------    for mongodb connectivity
   - mongoose        ---------    ORM (Object Relational Mapping)for mongo  


   1.this is an application which will look like amazon
  - parts
    1. user front
    - Product management
       - search the product
       - list the product
       - review a product
       - share a product
    - Wishlist
       - add product to wishlist
       - remove product from wishlist 
    - Cart management
       - add a product in cart  
       - change quantity in the cart
       - delete a product from create
    - Order management
       - place an order
       - cancel an order
       - update an order
       - list orders
         - track an order
       - list order history
    - Profile management
       - get the profile
       - update profile
       - Address management
         - add address
         - update address
         - delete address 
       - change password
       - forget password
       - logout
       - delete an account
      - signup
      - signin
      - contact us 
      - about us

    2. admin front/panel
    - Category management
      - add category       : done 
      - update category   : done 
      - get category   : done 
      - delete category   : done 
    - Brand management  
      - add brand      : done 
      - update brand  : done 
      - get brand  : done 
      - delete brand  : done 
    - Product management
      - add product         : done
      - update product : done
       - update attributes : done
       - update images     : ------ tommorow
       - suspend product
      - get all products   : done
      - delete product  : done
      - review managment
    - User management
      - get all users
      - update user
        - suspend/block user
        - unblock user
      - delete user
    - Order management
      - list all orders
      - update order
        - update delivery status
        - update prodcuts
        - delete orders  
    - Offer management
      - create an offer
      - update an offer
      - delete an offer
      - get all offers
    - Signup : done
    - Signin : done 

    - Analytics
      
       