# 🎬 Video Editor Portfolio

A modern, responsive video editor portfolio built with Next.js 15, TypeScript, and Tailwind CSS. Showcase your video editing skills with a professional, interactive portfolio that highlights your work across different genres and platforms.

## ✨ Features

### 🎨 **Modern Design**
- **Dark theme** with professional aesthetics
- **Gradient backgrounds** and smooth animations
- **Responsive design** for all devices
- **Glassmorphism effects** with backdrop blur
- **Interactive hover states** and transitions

### 📱 **Interactive Portfolio**
- **Dynamic project filtering** by category
- **Real project links** to Instagram and YouTube
- **Smooth scrolling** navigation
- **Professional contact information**
- **Social media integration**

### 🛠️ **Technical Features**
- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **React hooks** for state management
- **Responsive grid layouts**
- **Optimized performance**

## 🚀 Live Demo

Visit the portfolio: [Your Portfolio URL]

## 📋 Project Structure

```
VideoEditorPortfolio/
├── src/
│   └── app/
│       ├── globals.css          # Global styles and animations
│       ├── layout.tsx           # Root layout component
│       └── page.tsx             # Main portfolio page
├── public/                      # Static assets
├── package.json                 # Dependencies and scripts
├── tailwind.config.js           # Tailwind configuration
└── README.md                    # Project documentation
```

## 🎯 Portfolio Sections

### 🏠 **Hero Section**
- Professional introduction
- Call-to-action buttons
- Project statistics
- Animated background elements

### 🎬 **Services**
- Video Editing
- Motion Graphics
- Post-Production
- Detailed service descriptions

### 📂 **Featured Work**
- Dynamic project filtering
- Real project links
- Project categories:
  - **Showreels** - Professional showcases
  - **Social Media** - Platform-specific content
- Interactive project cards

### 👨‍💼 **About**
- Professional background
- Key skills and expertise
- Years of experience

### 📞 **Contact**
- Email and phone information
- Professional contact cards
- Direct email integration

## 🛠️ Technologies Used

- **Frontend Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons (SVG)
- **Deployment**: Ready for Vercel/Netlify

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SoubhagyaGhoshal/VideoEditorPortfolio.git
   cd VideoEditorPortfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### **Personal Information**
Update your personal details in `src/app/page.tsx`:
- Name and title
- Contact information
- Social media links
- Project descriptions

### **Projects**
Add or modify projects in the `projects` array:
```typescript
const projects = [
  {
    id: 1,
    title: "Your Project Title",
    description: "Project description",
    category: "showreel", // or "social", "commercial"
    tools: ["Premiere Pro", "After Effects"],
    duration: "1min",
    year: "2024",
    link: "https://your-project-link.com",
    color: "blue" // or "purple", "green", "orange"
  }
];
```

### **Styling**
Customize colors and themes in `src/app/globals.css`:
- Color variables
- Animations
- Typography

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (320px - 767px)

## 🚀 Deployment

### **Vercel (Recommended)**
1. Connect your GitHub repository to Vercel
2. Deploy automatically on push
3. Get a live URL instantly

### **Netlify**
1. Build the project: `npm run build`
2. Upload the `out` folder to Netlify
3. Configure build settings

### **Other Platforms**
The project is compatible with any static hosting service.

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized
- **Bundle Size**: Minimal
- **Loading Speed**: Fast

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Soubhagya Ghoshal**
- Email: soubhagyag73@gmail.com
- LinkedIn: [Soubhagya Ghoshal](https://www.linkedin.com/in/soubhagyaghoshal/)
- X (Twitter): [@Sou_bha_gya](https://x.com/Sou_bha_gya)

## 🙏 Acknowledgments

- **Next.js** team for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Heroicons** for the beautiful SVG icons
- **Vercel** for seamless deployment

---

⭐ **Star this repository if you found it helpful!** ⭐

🔗 **Connect with me for video editing projects:**
- **Portfolio**: [Your Portfolio URL]
- **Email**: soubhagyag73@gmail.com
- **Phone**: +91 6295932396
