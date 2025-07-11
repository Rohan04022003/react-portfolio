# Rohan Kumar Mahto — Portfolio

A modern, fully responsive portfolio website built with **React**, **TypeScript**, and **Tailwind CSS**.  
Showcasing my projects, blogs, skills, a custom AI-powered chatbot, and contact information with a focus on clean UI, performance, and accessibility.

---

## 🚀 Features

- **Animated Hero Section**: Modern intro with typing animation and download CV button.
- **About Section**: Detailed bio, education, skills, and featured projects.
- **Essential Tools**: Visual grid of all tech/tools used.
- **Projects Gallery**: Dynamic, filterable project cards (data fetched from GitHub).
- **Blog Section**: Ready for technical blogs and learning stories.
- **AI Chatbot (Robohan, powered by Gemini)**: Integrated chatbot UI for interactive conversations, built with custom logic and animation, leveraging Google's Gemini AI model.
- **Contact Page**: Contact form, direct links, map, and social media.
- **Responsive Design**: Mobile-first, works on all devices.
- **Colour Theme**: Theme and border radius customizable via context.
- **Reusable Components**: Modular structure for easy extension.
- **SEO Optimized**: Meta tags for social sharing and search engines.
- **Vercel Ready**: SPA routing handled via `vercel.json`.

---

## ✨ Animations & UI Effects

- **Framer Motion**: Smooth entrance, hover, and tap animations across all major sections and buttons.
- **Typing Animation**: Dynamic keyword typing in the hero section.
- **Animated Navigation**: Navbar and buttons feature tap/hover effects.
- **Chatbot UI**: Animated message bubbles and typing indicators for a real chat experience.
- **Section Transitions**: Fade, slide, and scale effects for a polished, modern feel.

---

## 🛠️ Tech Stack & Tools

**Languages:**  
TypeScript

**Frameworks/Libraries:**  
React.js, Tailwind CSS, Framer Motion

**Dev Tools:**  
VS Code, Vite

**Other:**  
API Integration, Responsive Design

**Tools Used (from Essential Tools section):**
- TypeScript (Typed JS)
- React.js (Frontend Framework)
- Tailwind CSS (Utility-first CSS)
- Framer Motion (Animation)
- Git (Version Control)
- GitHub (Code Hosting)
- VS Code (Code Editor)
- Vite (Build Tool)
- API Integration (Real-time Data)
- Responsive Design (Mobile Friendly)

---

## 📁 Folder Structure

```
src/
  assets/         # Images and icons
  components/     # Reusable UI components (Navbar, Hero, Footer, ChatbotUI, etc.)
  context/        # React Context for global state (AppSettings, Blog, Project)
  data/           # Static data (tools, blogs)
  hooks/          # (Reserved for custom hooks)
  lib/            # Helper libraries (e.g., geminiHandler)
  pages/          # Main pages (Home, About, Projects, Blog, Contact)
  Prompts/        # Developer prompt templates
  theme/          # Theme and style config
  types/          # TypeScript types
  utils/          # Utility functions
  index.css       # Global styles
  main.tsx        # App entry point
```

---

## 🖥️ Local Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Rohan04022003/react-portfolio.git
   cd your-portfolio-repo
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173) (or as shown in your terminal).

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## 🌐 Deployment (Vercel)

- This project is ready for Vercel deployment.
- SPA routing is handled via `vercel.json`:
  ```json
  {
    "rewrites": [
      { "source": "/(.*)", "destination": "/index.html" }
    ]
  }
  ```
- Just push to your GitHub and import the repo in [Vercel](https://vercel.com/).

---

## 📦 Data & Dynamic Content

- **Projects**: Fetched from a remote GitHub JSON ([see context/projectContext.tsx](src/context/projectContext.tsx)).
- **Blogs**: Ready for dynamic blog data (see [src/data/blogs.ts](src/data/blogs.ts)).
- **Tools**: Defined in [src/data/toolsData.ts](src/data/toolsData.ts).

---

## 📚 Main Components & Pages

- **Navbar**: Animated, responsive navigation with route highlighting.
- **Hero**: Animated intro, typing effect, download CV.
- **AboutIntro/About**: Bio, education, skills, featured projects.
- **EssentialTools**: Tech stack grid.
- **ProjectCard/Projects**: Dynamic, filterable project gallery.
- **BlogCard/Blog**: Blog listing and details.
- **ChatbotUI (Robohan, powered by Gemini)**: AI-powered chatbot with animated UI, typing indicator, and Gemini AI integration.
- **ContactForm/Contact**: Form, direct links, map, and social.
- **Footer**: Social links, copyright.

---

## 📬 Contact

- **Email**: rohankumar993985@gmail.com
- **Phone**: +91 8404973614
- **Location**: Sector 3, Pushp Vihar, Delhi - 110017
- **GitHub**: [Rohan04022003](https://github.com/Rohan04022003)
- **LinkedIn**: [rohan-mahto-5521aa253](https://www.linkedin.com/in/rohan-mahto-5521aa253/)
- **Twitter**: [@Rohankumar0402](https://x.com/@Rohankumar0402)
- **Instagram**: [rohankumarmahto01](https://www.instagram.com/rohankumarmahto01/)
- **Old Portfolio**: [rohan04022003.github.io/myPortfolio/](https://rohan04022003.github.io/myPortfolio/)

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

**Made with ❤️ by Rohan Kumar Mahto**
