/* Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
}

.logo {
    width: 150px;
    height: auto;
    margin-left: 20px;
}

header {
    background-color: bisque;
    padding: 20px;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav ul {
    list-style: none;
    display: flex;
    gap: 20px;
}

nav ul li {
    margin-right: 20px;
}

nav a {
    text-decoration: none;
    color: #000000;
}

.btn-order {
    background-color: #e74c3c;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
}

/*Hero Section */
#hero {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 40px;
    background-color: #fafafa;
}

.hero-image {
    width: 100%;
    max-width: 600px;
    height: auto;
    border-radius: 10px;
}

.hero-conten {
    max-width: 600px;
}

.hero-conten h1 {
    font-size: 2.5rem;
}

.btn-primary {
    background-color: #3498db;
    color: white;
    display: inline-block;
    margin-top: 20px;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
}

/* Products Section */
#products h2 {
    padding: 40px 0 0 40px;
}

.product-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 40px 0;
}

.product {
    text-align: center;
    max-width: 300px;
    margin: 20px;
}

.product img {
    width: auto;
    height: 400px;
    border-radius: 10px;
}

/* Testimonial Section */
#testimonials {
    background-color: #f0f0f0;
    padding: 40px;
    text-align: center;
}

.testimonials {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.testimonial {
    margin: 20px;
    max-width: 300px;
}

.testimonial img {
    width: 100px;
    height: auto;
    border-radius: 50%;
}

/* Contact Section */
#contact {
    padding: 40px;
    text-align: center;
}

form input,
form textarea {
    width: 100%;
    max-width: 700px;
    display: block;
    margin: 0 auto;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
}

button {
    padding: 10px 20px;
    background-color: #3498db;
    color: white;
    border: none;
    cursor: pointer;
}

/* Footer */
footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 20px;
}

footer p {
    margin: 10px 0;
}

.social-icons {
    margin-bottom: 10px;
}

.social-icons a img {
    width: 30px;
    margin: 0 10px;
}

/* Media Queries for Responsiveness */
@media (max-width: 768px) {
    nav ul {
        display: none;
    }

    nav {
        flex-direction: column;
    }
