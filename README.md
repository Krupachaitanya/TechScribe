# TechScribe

TechScribe is a modern, interactive, and professional-grade educational platform and compiler application. It provides comprehensive, structured learning paths for various technology stacks, alongside an integrated compiler for hands-on practice.

## 🚀 Features

- **Interactive Curriculum Engine:** Dynamic rendering of educational content, syntax examples, and advanced concepts for multiple tech stacks.
- **Integrated Code Compiler:** Hands-on practice environment built directly into the platform.
- **Dynamic References:** Context-aware YouTube video integrations and official documentation links (W3Schools, GeeksforGeeks, MDN) for every topic.
- **Persistent Progress Tracking:** Keep track of your learning journey with local storage-based progress saving.
- **User Feedback System:** Built-in CRUD capabilities for managing user feedback and continuous platform improvement.
- **Premium Glassmorphic UI:** A visually stunning, modern interface featuring 3D ambient backgrounds, custom scrollbars, and edge-to-edge wave footer designs.
- **Mobile Responsive:** Seamless learning experience across all devices.

## 📚 Supported Curricula

TechScribe offers detailed learning paths for:
- **Frontend Core:** HTML5, CSS3, JavaScript (ES6+)
- **Frontend Frameworks:** React, Redux, Tailwind CSS
- **Backend & Full Stack:** MERN Stack, MEAN Stack, Python Full Stack (Flask/Django), .NET, Java
- **Databases:** PostgreSQL, MySQL, MongoDB

## 🛠️ Technology Stack

- **Frontend:** React 19, Vite
- **Routing:** React Router v7
- **Styling:** Vanilla CSS (Custom Design System, Glassmorphism)
- **Icons:** Lucide React, React Icons
- **Deployment:** Vercel (Configured for SPA routing)

## 📁 Project Structure

```text
src/
├── assets/         # Static assets and images
├── components/     # Reusable UI components (Navbar, Footer, Feedback, etc.)
├── contexts/       # React Context providers for global state
├── data/           # Curriculum data and structural content
├── hooks/          # Custom React hooks (e.g., useLocalStorage)
├── pages/          # Main application views (Home, CourseView, CompilerPage)
├── services/       # External API and compilation services
├── styles/         # Global styles and design tokens
└── utils/          # Helper functions and utilities
```

## 💻 Getting Started

Follow these steps to set up the project locally:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd TechScribe
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 🌐 Deployment

This application is optimized for deployment on Vercel. A `vercel.json` configuration file is included to handle Single Page Application (SPA) routing fallback correctly.

---
*Designed with a focus on modern web aesthetics and interactive learning.*
