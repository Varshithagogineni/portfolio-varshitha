# Varshitha Gogineni - Portfolio

A modern, responsive portfolio website showcasing my journey in AI, cybersecurity, and software development.

## 🚀 Live Demo

[View Portfolio](https://varshithagogineni.github.io/portfolio) *(Update with your actual GitHub Pages URL)*

## 📋 About

This portfolio represents my work as a graduate student pursuing M.S. in Information Science at the University of North Texas with a perfect 4.0 GPA. It highlights my projects, hackathon achievements, and technical skills in AI, cybersecurity, and full-stack development. My career goal is to become an Information Security Analyst who leverages AI and machine learning to detect threats, prevent breaches, and build resilient systems.

## ✨ Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Sections**: 
  - Hero section with profile photo
  - About section with personal introduction
  - Skills showcase with categorized technologies
  - Experience timeline
  - Featured projects with live demos
  - Hackathon achievements
  - Education background
  - Contact form with Formspree integration
- **SEO Optimized**: Meta tags, structured data, and performance optimized
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader friendly

## 🛠️ Technologies Used

- **Frontend**: React 18.3.1, TypeScript 5.5.3
- **Styling**: Tailwind CSS 3.4.1
- **Build Tool**: Vite 5.4.2
- **Icons**: Lucide React 0.344.0
- **Form Handling**: Formspree integration
- **Deployment**: GitHub Pages

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── profile-photo.jpg
│   ├── resume.html
│   └── Varshitha_Gogineni_Resume.pdf
├── src/
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Hackathons.tsx
│   │   ├── Education.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Varshithagogineni/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## 📱 Sections Overview

### 🏠 Hero Section
- Professional profile photo
- Name and title: "Information Science Graduate | AI & Cybersecurity Enthusiast"
- Brief introduction about graduate studies and passion for AI/security
- Call-to-action buttons (Contact Me, View Resume)
- Social media links (LinkedIn, GitHub, Email)

### 👋 About
- Personal journey into technology and systems
- Academic excellence with 4.0 GPA
- Career goal: Information Security Analyst specializing in AI-powered threat detection
- Core strengths: Problem solving, team collaboration, continuous learning, clear communication
- Passion areas: AI agents, cybersecurity, anomaly detection, scalable systems

### 🛠️ Skills
- **Programming & Development**: Python, SQL, React, TypeScript, HTML5, Tailwind CSS, REST APIs, Git/GitHub
- **AI & Machine Learning**: Deep Learning, CNNs, RAG, Anomaly Detection, Whisper STT, Computer Vision
- **Software Engineering**: Component-Based Architecture, Agile, CI/CD, Accessibility, Performance Optimization
- **Tools & Platforms**: Supabase, n8n, RapidMiner

### 💼 Experience
- **Teaching Assistant** at University of North Texas (Dec 2024 – Present)
  - Support students with academic and technical queries during class and office hours
  - Manage course technology including software setup, secure access (BitLocker), and troubleshooting
  - Monitor and resolve student support tickets and emails with clear, timely responses
  - Collaborating on a Voice AI project to automate responses to course FAQs, improving accessibility

### 🚀 Projects
- **VoiceFit** (Jul 2025 – Aug 2025): Voice-controlled fitness tracker PWA using React, TypeScript, Tailwind CSS, and Whisper STT with real-time workout logging and offline support
  - Designed accessible UI with real-time workout tracking
  - Automated workflows in n8n for seamless data processing
  - Integrated live dashboards for progress tracking and analytics
- **Deepfake Image Forgery Detection** (Jan 2023 – Mar 2023): CNN-based detection model achieving 92.23% accuracy for detecting tampered and manipulated images under compression
  - Achieved 92.23% accuracy on compressed image datasets
  - Implemented CNN architecture for robust forgery detection
  - Applied computer vision techniques for feature extraction
- **Vehicle Maintenance Tracker** (Mar 2025 – May 2025): Role-based maintenance system with RESTful APIs, alert systems, and real-time monitoring dashboards
  - Built role-based access control for different user types
  - Integrated RESTful APIs for seamless data synchronization
  - Developed real-time alert systems and monitoring dashboards

### 🏆 Hackathons & Events
- **Dallas AI Summit** (Summer 2025): Top 15 Presenter - Selected among the Top 15 projects to present VoiceFit to AI professionals and industry leaders
  - Showcased real-time voice-to-text fitness tracking and automation workflows
  - Presented using OpenAI Whisper + Supabase integration
  - Engaged in professional feedback sessions with AI leaders on deployment and scalability
- **A New Agent Hackathon** (October 2025): Participant & Builder - Building cutting-edge AI agents with a focus on integration, reliability, and real-world applications
  - Developing AI agents with advanced integration capabilities
  - Collaborating with top builders in the AI agent space
  - Focus on creating production-ready, scalable agent systems

### 🎓 Education
- **M.S. in Information Science**, University of North Texas, Denton, TX (GPA: 4.0)
- Expected Graduation: May 2026
- **Relevant Coursework**: Data Modeling, Systems Design, Web Development, Data Visualization
- **Research Interests**: Cybersecurity, Generative AI, Anomaly Detection, AI Agents, Data Visualization

### 📞 Contact
- Email: varshithagogineni007@gmail.com
- LinkedIn: [linkedin.com/in/varshitha-gogineni](https://linkedin.com/in/varshitha-gogineni)
- GitHub: [github.com/Varshithagogineni](https://github.com/Varshithagogineni)

## 🚀 Deployment

### GitHub Pages

1. Build the project:
```bash
npm run build
```

2. Push the `dist/` folder contents to the `gh-pages` branch or configure GitHub Pages to serve from the `dist/` folder.

3. Update the repository settings to enable GitHub Pages.

### Other Hosting Platforms

The built files in the `dist/` folder can be deployed to any static hosting service:
- Vercel
- Netlify
- AWS S3
- Firebase Hosting

## 📝 Customization

To customize this portfolio for your own use:

1. Update personal information in the component files
2. Replace `profile-photo.jpg` with your own photo
3. Update the resume file in the `public/` folder
4. Modify the Formspree form endpoint in `Contact.tsx`
5. Update social media links throughout the components
6. Customize colors and styling in `tailwind.config.js`

## 🤝 Contributing

This is a personal portfolio project, but suggestions and improvements are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests for improvements

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Varshitha Gogineni**
- Email: varshithagogineni007@gmail.com
- LinkedIn: [linkedin.com/in/varshitha-gogineni](https://linkedin.com/in/varshitha-gogineni)
- GitHub: [github.com/Varshithagogineni](https://github.com/Varshithagogineni)

## 🎯 Current Status

- ✅ **Portfolio Complete**: Fully responsive, production-ready website
- ✅ **Projects Showcased**: VoiceFit, Deepfake Detection, Vehicle Maintenance Tracker
- ✅ **Hackathon Achievements**: Dallas AI Summit (Top 15), A New Agent Hackathon
- ✅ **Academic Excellence**: 4.0 GPA in M.S. Information Science program
- ✅ **Professional Experience**: Teaching Assistant at University of North Texas
- ✅ **Ready for Deployment**: GitHub Pages configuration complete

## 🚀 What's Next

- Actively seeking opportunities in Information Security Analysis
- Open to collaborations on AI and cybersecurity projects
- Available for hackathons, internships, and full-time positions
- Continuously building and learning in the AI/security space

---

⭐ If you found this portfolio helpful or inspiring, please give it a star!
