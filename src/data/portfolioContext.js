export const portfolioContext = {
  profile: {
    name: "Mohamed Mafas Salman Faris",
    role: "DevOps & CloudOps Engineer, FinOps Practitioner",
    bio: "Software Engineer (Ops) passionate about building scalable systems, automating workflows, and ensuring reliable infrastructure.",
    philosophy: "Engineering should be robust, scalable, and memorable.",
    website: "https://mmsalmanfaris.engineer",
    linkedin: "https://linkedin.com/in/mmsalmanfaris",
    github: "https://github.com/mmsalmanfaris"
  },

  skills: [
    "Linux", "Docker", "Kubernetes","Azure", "AWS", "Terraform", "Git", 
    "Ansible", "Jenkins", "Python", "Node.js", "Prometheus", "Grafana"
  ],

  certifications: [
    {
      title: "FinOps Certified Practitioner",
      institution: "FinOps Foundation",
      year: "2025 - 2027"
    },
    {
      title: "Introduction to Linux",
      institution: "The Linux Foundation",
      year: "2025"
    },
    {
      title: "Microsoft Azure Fundamentals",
      institution: "Microsoft",
      year: "2025"
    },
    {
      title: "Github Foundation",
      institution: "Github",
      year: "2024"
    },
    {
      title: "Google Cyber Security Foundation",
      institution: "Google",
      year: "2023"
    }
  ],

  experience: [
    {
      title: "Intern DevOps Engineer",
      company: "QuickMan",
      period: "Oct 2025 – Present"
    },
    {
      title: "Freelance Developer",
      company: "Digital Partner UAE",
      period: "Aug 2022 – Aug 2025"
    },
    {
      title: "Digital Marketing Executive",
      company: "Alpha Health Group",
      period: "May 2021 – Jun 2022"
    }
  ],

  education: [
    {
      title: "BEng in Software Engineering",
      institution: "London Metropolitan University",
      year: "2023 Jan - 2025 Aug"
    },
    {
      title: "Bachelor of Arts",
      institution: "South Eastern University of Sri Lanka",
      year: "Oct 2022 - Drop Out"
    }
  ],

  projects: [
    {
      name: "DevSecOps CI/CD Pipeline",
      description: "An automated pipeline that reduced deployment errors, accelerated release cycles, and enforced security checks.",
      tech: ["GitHub Actions", "Docker", "AWS", "ArgoCD"],
      github: "https://github.com/mmsalmanfaris/DevSecOps-GitHubAction-Pipeline"
    },
    {
      name: "E-Commerce Deployment",
      description: "Deployed a telemetry project with 12 microservices, Kubernetes, Ingress, and AWS Route 53 custom domain setup.",
      tech: ["K8s", "ArgoCD", "Terraform", "Docker", "AWS", "GitHub Action", "Route53"],
      github: "https://github.com/mmsalmanfaris/devops-ecommerce-deployment"
    },
    {
      name: "Automated Parking System",
      description: "An intelligent parking solution enabling real-time detection and automated control, reducing congestion, improving efficiency.",
      tech: ["FastAPI", "ESP32", "ReactJS", "Firebase", "C++", "Sensor", "Servo", "OpenCV"],
      github: "https://github.com/mmsalmanfaris/Smart-Parking-System"
    },
    {
      name: "Linux Resource Monitor",
      description: "A full-stack system monitoring tool with a streamlined one-command setup, enabling real-time visualization of system metrics.",
      tech: ["FastAPI", "React", "Tailwind CSS", "Psutil", "Scripting"],
      github: "https://github.com/mmsalmanfaris/Linux-Resource-Monitor"
    },
    {
      name: "Phone Cloud",
      description: "Turned an Android phone into a file-sharing cloud server with Ubuntu, Tailscale, and GitHub automation.",
      tech: ["Proot", "Tailscale", "Termux", "SSH", "bash"],
      github: "https://github.com/mmsalmanfaris/Phone-Cloud"
    },
    {
      name: "Gas Distribution System",
      description: "Designed and implemented a workflow management system to deliver a seamless experience across the users",
      tech: ["Bootstrap", "PHP", "Firebase", "MySQL", "SMS", "QR Code", "React Native"],
      github: "https://github.com/mmsalmanfaris/Gas-Distribution-Management"
    }
  ],

  events: [
    {
      title: "Cloud Computing & Developer Tools",
      role: "Workshop",
      date: "Sep 2025"
    },
    {
      title: "Azure & GitHub (DevOps)",
      role: "Workshop",
      date: "June 2025"
    },
    {
      title: "Azure Services and Business Models",
      role: "Workshop",
      date: "March 2025"
    },
    {
      title: "How to become a MLSA",
      role: "Hands-on Lab",
      date: "December 2024"
    },
    {
      title: "Git, GitHub and Azure Static App",
      role: "Hands-on Lab",
      date: "August 2024"
    },
    {
      title: "Global Azure Sri Lanka",
      role: "Workshop",
      date: "May 2024"
    },
    {
      title: "MLSA Introduction and Journey",
      role: "Tech Talk",
      date: "November 2023"
    }
  ]
};

// Generate system prompt for the AI model
export function generateSystemPrompt() {
  return `You are a helpful AI assistant for Salman Faris's professional portfolio website.

ABOUT SALMAN:
- Name: ${portfolioContext.profile.name}
- Role: ${portfolioContext.profile.role}
- Bio: ${portfolioContext.profile.bio}
- Philosophy: "${portfolioContext.profile.philosophy}"
- Website: ${portfolioContext.profile.website}

SKILLS: ${portfolioContext.skills.join(", ")}

CERTIFICATIONS:
${portfolioContext.certifications.map((cert, i) => 
  `${i + 1}. ${cert.title} (${cert.institution}, ${cert.year})`
).join("\n")}

EXPERIENCE:
${portfolioContext.experience.map((exp, i) => 
  `${i + 1}. ${exp.title} at ${exp.company} (${exp.period})`
).join("\n")}

EDUCATION:
${portfolioContext.education.map((edu, i) => 
  `${i + 1}. ${edu.title} from ${edu.institution} (${edu.year})`
).join("\n")}

FEATURED PROJECTS:
${portfolioContext.projects.map((proj, i) => 
  `${i + 1}. ${proj.name}: ${proj.description}
   Tech: ${proj.tech.join(", ")}
   GitHub: ${proj.github}`
).join("\n\n")}

EVENTS CONDUCTED:
${portfolioContext.events.map((event, i) => 
  `${i + 1}. ${event.title} (${event.role}, ${event.date})`
).join("\n")}

INSTRUCTIONS:
- Answer questions about Salman's background, skills, projects, experience, and certifications ONLY
- Be concise (2-4 sentences maximum per response)
- If asked about unrelated topics, politely redirect: "I'm here to help with questions about Salman's professional background. Feel free to ask about his skills, projects, or experience!"
- Provide GitHub links when relevant
- Be friendly and professional
- If you don't know something, say "I don't have that information in my knowledge base"
- Always answer short and sweetly unless they ask explanation.`;
}
