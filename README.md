# Shopping Website (MERN Stack)

## Overview
This project is a full-stack shopping website built with the MERN stack (MongoDB, Express, React, and Node.js). The site provides users with a seamless shopping experience
## Features
- **Product Management**: Browse and view detailed information for each product.
- **Shopping Cart**: Add products to the cart and update quantities.
- **Checkout**: Complete the purchase with order details stored in the database.

## Tech Stack
- **Frontend**: React, CSS, Bootstrap
- **Backend**: Node.js, Express
- **Database**: MongoDB

## Screenshots

### Home Page
![Screenshot (754)](https://github.com/user-attachments/assets/f0da2b03-8a02-488b-aa73-efff11fdb3f9)


### Product Details Page
![Screenshot (756)](https://github.com/user-attachments/assets/9c6b1a57-9f51-47f3-b207-873750ff43ec)
![Screenshot (757)](https://github.com/user-attachments/assets/59658c79-6229-41fb-aafb-45a57757533a)
### Information Form
![Screenshot (758)](https://github.com/user-attachments/assets/7ed9e3f7-7428-46f2-bab5-46a9e3838f71)

### Order details for admin
![Screenshot (759)](https://github.com/user-attachments/assets/6fb6682f-2f51-4f00-b07f-65a777667bcf)




## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/shopping-website-mern.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd shopping-website-mern
    ```

3. **Install dependencies for both frontend and backend**:
    ```bash
    cd backend
    npm install
    cd ../frontend
    npm install
    ```

4. **Set up environment variables**:
   - Create a `.env` file in the `backend` directory with the following keys:
      ```plaintext
      MONGO_URI=your_mongodb_connection_string
      JWT_SECRET=your_jwt_secret
      ```

5. **Start the application**:
   - In one terminal, run the backend server:
      ```bash
      cd backend
      npm start
      ```
   - In another terminal, run the frontend:
      ```bash
      cd frontend
      npm start
      ```

## Usage

1. **Browse products** on the home page.
2. **Add products to the cart** and adjust quantities.
3. **Proceed to checkout** and complete the order.
4. **Admin access** to manage products and view orders (admin-only feature).

## Future Enhancements
- **Wishlist**: Allow users to save items for later.
- **Product Reviews**: Enable users to review and rate products.
- **Payment Gateway**: Integrate with a third-party payment provider.









