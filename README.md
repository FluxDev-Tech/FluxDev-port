# 🚀 FluxDev Portfolio

<div align="center">
  <img src="" alt="FluxDev Banner" width="100%" style="border-radius: 20px; margin-bottom: 20px;" />
  
  **A high-performance, visually stunning portfolio for the modern developer.**
  
  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
  [![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
</div>

---

## ✨ Features

- **🎬 Cinematic Loading Experience**: A high-tech system boot sequence with glitch effects and progress tracking.
- **🌓 Adaptive Theming**: Seamless transition between Light and Dark modes with persistent user preference.
- **📱 Premium Mobile Navigation**: A full-screen sidebar drawer with staggered animations and integrated theme controls.
- **🖼️ Advanced Project Gallery**: Masonry grid layout with a full-screen interactive lightbox and carousel navigation.
- **📄 Interactive Resume**: A built-in, print-optimized resume viewer that pulls data dynamically from your profile.
- **🤖 Intelligent Chatbot**: Integrated AI assistant powered by the Gemini API to answer visitor questions in real-time.
- **⚡ Performance First**: Built on Vite for lightning-fast HMR and optimized production builds.

---

## 🛠️ Tech Stack

- **Frontend**: React 18+, TypeScript
- **Styling**: Tailwind CSS (Utility-first, responsive design)
- **Animations**: Framer Motion (Layout animations, micro-interactions)
- **Icons**: Lucide React
- **AI**: Google Gemini API
- **Build Tool**: Vite

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.0.0 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/fluxdev-portfolio.git
   cd fluxdev-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add your Gemini API key:
   ```env
   VITE_GEMINI_API_KEY=your_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

---

## 📂 Project Structure

```text
src/
├── components/     # Reusable UI components (Modal, Navbar, Resume, etc.)
├── sections/       # Main page sections (Hero, About, Projects, etc.)
├── lib/            # Utility functions and icon mappings
├── types.ts        # TypeScript interfaces and types
├── constants.ts    # Centralized data for projects, skills, and bio
└── index.css       # Global styles and Tailwind configuration
```

---

## 🎨 Customization

To personalize the portfolio with your own data, simply edit the `src/constants.ts` file. You can update:
- **PERSONAL_INFO**: Name, title, bio, and social links.
- **SKILLS**: Your technical arsenal categorized by expertise.
- **PROJECTS**: Detailed case studies with images and tech stacks.
- **EXPERIENCES**: Your professional journey.

---

## 📄 License

Distributed under the **Apache-2.0 License**. See `App.tsx` for more information.

---

<div align="center">
  <p>Built with ❤️ by <b>FluxDev-Tech</b></p>
</div>
