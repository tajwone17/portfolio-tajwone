# Portfolio - Tajwone

A modern, responsive portfolio website built with React and Vite, showcasing projects, skills, and services with smooth animations and an elegant dark-themed design.

🌐 **Live Demo:** [https://portfolio-tajwone.vercel.app/](https://portfolio-tajwone.vercel.app/)

## ✨ Features

- 🎨 **Modern UI/UX** - Clean, dark-themed interface with radial gradient backgrounds
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **Fast Performance** - Built with Vite for lightning-fast build times
- 🎬 **Smooth Animations** - Custom scroll reveal and fade-in animations
- 🧩 **Component-Based Architecture** - Modular and reusable components
- 🎯 **Interactive Navigation** - Scroll spy navigation with smooth scrolling
- 📧 **Contact Form** - Easy way for visitors to get in touch
- 🚀 **Optimized Build** - Production-ready with code splitting

## 🛠️ Technologies Used

### Core

- **React** 19.2.0 - Modern UI library
- **Vite** 7.2.4 - Next-generation frontend tooling
- **Tailwind CSS** 4.1.18 - Utility-first CSS framework

### Libraries

- **Lucide React** - Beautiful icon set
- **React Icons** - Additional icon library

### Development Tools

- **ESLint** - Code linting and quality
- **PostCSS** - CSS processing

## 📂 Project Structure

```
my-portfolio/
├── public/              # Static assets
│   ├── images/
│   │   ├── projects/    # Project screenshots
│   │   └── testimonials/ # Testimonial images
│   └── site.webmanifest
├── src/
│   ├── components/
│   │   ├── animations/  # Animation components
│   │   │   ├── FadeIn.jsx
│   │   │   └── ScrollReveal.jsx
│   │   ├── backgrounds/ # Background components
│   │   │   └── RadialGradientBackground.jsx
│   │   ├── layout/      # Layout components
│   │   │   ├── Footer.jsx
│   │   │   └── Navbar.jsx
│   │   ├── sections/    # Page sections
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Skills.jsx
│   │   │   └── Testimonials.jsx
│   │   └── ui/          # UI components
│   │       ├── Card.jsx
│   │       └── ProjectCard.jsx
│   ├── data/            # Data files
│   │   ├── projects.js
│   │   ├── services.js
│   │   ├── skills.js
│   │   └── testimonials.js
│   ├── hooks/           # Custom React hooks
│   │   ├── useScrollReveal.js
│   │   └── useScrollSpy.js
│   ├── utils/           # Utility functions
│   │   └── constants.js
│   ├── App.jsx          # Main App component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── eslint.config.js     # ESLint configuration
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/tajwone/portfolio-tajwone.git
   cd portfolio-tajwone
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🎨 Sections

The portfolio includes the following sections:

1. **Hero** - Eye-catching introduction with call-to-action
2. **About** - Personal information and background
3. **Skills** - Technical skills and proficiencies
4. **Projects** - Showcase of completed projects with live demos
5. **Services** - Services offered (Frontend Development, UI/UX Design, etc.)
6. **Testimonials** - Client feedback and reviews
7. **Contact** - Contact form and information

## 🔧 Customization

### Updating Content

1. **Projects** - Edit `src/data/projects.js`
2. **Skills** - Edit `src/data/skills.js`
3. **Services** - Edit `src/data/services.js`
4. **Testimonials** - Edit `src/data/testimonials.js`

### Styling

The project uses Tailwind CSS for styling. You can customize:

- Colors and themes in your Tailwind configuration
- Component styles in individual component files
- Global styles in `src/index.css`

## 📦 Building for Production

```bash
npm run build
```

The optimized build will be in the `dist` folder, ready for deployment.

## 🌐 Deployment

This portfolio is deployed on [Vercel](https://vercel.com/). To deploy your own:

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect the Vite configuration
4. Deploy!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Tajwone**

- Portfolio: [https://portfolio-tajwone.vercel.app/](https://portfolio-tajwone.vercel.app/)
- GitHub: [@tajwone](https://github.com/tajwone)

## 🙏 Acknowledgments

- Icons from [Lucide React](https://lucide.dev/)
- Built with [React](https://react.dev/)
- Powered by [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

Made with ❤️ by Tajwone
