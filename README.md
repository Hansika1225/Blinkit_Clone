# Blinkit Clone - Grocery Shopping App

A full-stack React and Node.js application that mimics the core functionality of Blinkit (a grocery delivery app).  
Users can browse grocery categories, view items, add them to their cart, and log in using phone number authentication.

---

## Features

- Browse grocery **categories** and view associated items  
- **Add items** to cart and manage cart contents  
- **User login/signup** using phone number and password  
- Auto-seeding of categories, items, and users into MongoDB on first launch  
- Full CRUD operations for categories and items via backend APIs  

---

## Tech Stack

- **Frontend:** React, React Router  
- **Backend:** Node.js, Express  
- **Database:** MongoDB (local or Atlas)  
- **Others:** CORS, Fetch API  

---

## Installation

1. **Clone the repo:**

```bash
git clone https://github.com/yourusername/blinkit-clone.git
cd blinkit-clone
Setup Backend:
cd backend
npm install

Setup Frontend:
cd ../frontend
npm install

Running the Project:

Backend
cd backend
npm start
The backend server runs on http://localhost:5000

On first start, it auto-seeds categories, items, and users if not present in MongoDB

Frontend
cd frontend
npm start
The frontend runs on http://localhost:3000

Use the Login button to open login popup

Login with seeded users or create new accounts via phone and password


Usage
Browse categories on the homepage
Click a category to view items in that category
Add items to the cart
View and manage cart items
Login using phone number and password (existing users) or create new users by logging in with a new phone number






