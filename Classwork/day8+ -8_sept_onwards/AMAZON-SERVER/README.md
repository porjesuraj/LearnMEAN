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

   

- 1.this is an application which will be amazon clone
  - parts
    1. **User front**
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
      - signup  : done 
      - signin : done 
      - contact us 
      - about us

    2. **admin front/panel**
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
       - update images     : done
       - suspend product  : done 
      - get all products   : done
      - delete product  : done
      - review managment : done 
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

    - **Analytics**
      
    <!-- not professional documentation 
     Product: 
     - GET/product
     - POST/product
      - title : string
      - description : string  -->

       - User activation 
      - sign up 
       - generate unique token
         - by js random function  javascript random()
         - guid - globally unique identifier
         
         - uuid - universally unique identifier (npm install uuid)

       - generate the unique link 
        - http://localhost:3000/user/active/</token>
       - send an email with the activation link with 
       activation token
       - user clicks on the link 
       -within the route (which is going to hndle the activiation)
       - read the activation token from query string 
       - find the user associated with the token
       - activate user (set the active column value to 1)
       - reset the activation token (remove the token from the column)


       _________________________________________________________
       - forgot password
        - email (check if exist)
        - generate otp (random no of 4 digit)
        - send the otp to your email
        - reset the email