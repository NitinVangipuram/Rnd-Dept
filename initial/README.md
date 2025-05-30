Department of Computer Science - IIT Dharwad Website

This is a simple React-based website for the Department of Computer Science at IIT Dharwad, built using Vite. The site features a minimalistic design with a soft white theme, a custom navbar, a dynamic image carousel, and content centered within 60% of the viewport.

Features
- Navbar: A fixed navigation bar with a slight purple hue, featuring the institute logo, search bar, and navigation links (Home, About, Courses, Contact).
- Dynamic Carousel: Automatically cycles through images stored in src/assets/carousel-images/.
- Typography: Uses the "Space Mono" font throughout for a modern, technical aesthetic.
- Responsive Design: Content is constrained to the middle 60% of the page for readability.
- Current Content: Displays "Department of Computer Science, IIT Dharwad" title and a welcome message.

Tech Stack
- React: JavaScript library for building the UI.
- Vite: Fast build tool and development server.
- CSS: Custom styles for layout and design.
- Font: Space Mono from Google Fonts.

Prerequisites
- Node.js (v16 or higher recommended)
- npm (comes with Node.js)

Setup Instructions

1. Clone the Repository
   git clone <repository-url>
   cd soft-white-app

2. Install Dependencies
   npm install

3. Add Images
   - Place your carousel images in src/assets/carousel-images/.
   - Supported formats: .png, .jpg, .jpeg, .gif.

4. Run the Development Server
   npm run dev
   - The site will be available at http://localhost:5173.

5. Build for Production
   npm run build
   - Output will be in the dist/ folder.

Project Structure
soft-white-app/
├── src/
│   ├── assets/
│   │   ├── carousel-images/    # Folder for carousel images
│   │   └── institute-logo.png  # Institute logo
│   ├── components/
│   │   ├── Carousel.jsx        # Carousel component
│   │   ├── Carousel.css        # Carousel styles
│   │   ├── Navbar.jsx         # Navbar component
│   │   └── Navbar.css         # Navbar styles
│   ├── App.jsx                # Main app component
│   ├── App.css                # App styles
│   ├── index.css              # Global styles (including font import)
│   └── main.jsx               # Entry point
├── public/                    # Static assets
├── package.json              # Dependencies and scripts
└── README.md                 # This file