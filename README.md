# Project Directory Structure

```plaintext
src/
│
├── assets/                # For images, icons, fonts, etc.
│
├── components/            # Reusable UI components
│   ├── Navbar/            # Sidebar (vertical navbar)
│   │   └── Navbar.jsx
│   ├── Topbar/            # Topbar
│   │   └── Topbar.jsx
│   └── Layout.jsx         # Common layout with navbar & topbar
│
├── pages/                 # Different pages for routing
│   ├── Home.jsx
│   ├── People.jsx               
│
├── routes/                # All route configs
│   └── AppRoutes.jsx
│
├── App.jsx                # Entry component
└── main.jsx               # Vite main entry point
```
