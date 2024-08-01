# URL Shortener Project

This is a URL Shortener web application built with Node.js, Express, MongoDB, and EJS. It allows users to shorten long URLs and provides analytics on the number of clicks and visit history for each shortened URL.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/url-shortener.git
   cd url-shortener
2. **Install dependencies:**
     ```sh
   npm install 
3. **Set up MongoDB:**
Make sure you have MongoDB installed and running. You can use the default MongoDB connection string or specify your own in the connectToMongoDB function.
5. **Start the server:**
     ```sh
   node index
6. **Open your browser and navigate to:**
     ```sh
   http://localhost:8000
 # Usage
# 1. Shorten a URL:

- Go to the home page.
- Enter the original URL you want to shorten.
- Click the "Generate" button.
- The shortened URL will be displayed, and you can copy it to your clipboard.
# 1. View Analytics:

- Navigate to the Analytics page to see a list of all shortened URLs, their original URLs, short IDs, and the number of clicks.
- Click the "Copy URL" button to copy the shortened URL to your clipboard.
# Features
- Shorten long URLs.
- Redirect to the original URL using the shortened URL.
- Track the number of clicks for each shortened URL.
- View visit history (timestamps) for each shortened URL.
- User-friendly interface with animations and modern design using Tailwind CSS.


   
