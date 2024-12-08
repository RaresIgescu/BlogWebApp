# **Web Blog Application**

## **Overview**
This is a simple Web Blog application built with Node.js and Express.js. It allows users to post and manage quotes or text-based posts, providing a streamlined interface for adding, editing, and deleting content. The project demonstrates basic CRUD (Create, Read, Update, Delete) operations, effective use of Express routing, and template rendering using EJS.

---

## **Features**
- **Post Management**: Users can add, view, edit, and delete blog posts.
- **Quote Management**: Users can separately add, view, and delete quotes.
- **Dynamic Routing**: Dynamic paths for editing and deleting posts/quotes ensure user-friendly navigation.
- **Responsive Interface**: Static files (CSS, images, JavaScript) served through Express provide a clean, modern UI.
- **Templating with EJS**: All pages dynamically update based on backend data.

---

## **Routes and Functionalities**

### **Posts**
1. **`GET /posts`**: Displays all blog posts.
2. **`GET /adaugare`**: Renders a form for creating a new post.
3. **`POST /submit`**: Handles form submission to add a new post.
4. **`GET /edit/:id`**: Renders the edit form for a specific post based on its ID.
5. **`POST /edit/:id`**: Updates the specified post with new data.
6. **`GET /sterge/:id`**: Deletes a post based on its ID.

### **Quotes**
1. **`GET /quotes`**: Displays all quotes.
2. **`GET /adaugareCitat`**: Renders a form for adding a new quote.
3. **`POST /submitCitat`**: Handles form submission to add a new quote.
4. **`GET /stergeCitat/:id`**: Deletes a quote based on its ID.

### **Homepage**
1. **`GET /`**: Renders the homepage.

---

## **How to Run the Project**

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/web-blog-app.git
   cd web-blog-app
