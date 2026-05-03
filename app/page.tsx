"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Code,
  Database,
  Cloud,
  Cpu,
  Brain,
  Zap,
  ArrowRight,
  Download,
  User,
  ChevronDown,
} from "lucide-react"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "projects", "skills", "education", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const downloadResume = () => {
    const resumeContent = `
      <html>
      <body>
        <h1>SUMANTH REDDY MAJJIGA</h1>
        <p>Software Engineer specializing in backend systems and AI-driven solutions. Working on RAN anomaly detection and intelligent automation workflows.</p>
      </body>
      </html>
    `

    const blob = new Blob([resumeContent], { type: "text/html" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "Sumanth_Reddy_Majjiga_Resume.html"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const skills = [
    { name: "Java", level: 90, icon: Code },
    { name: "Python", level: 85, icon: Code },
    { name: "JavaScript", level: 88, icon: Code },
    { name: "Spring Boot", level: 92, icon: Zap },
    { name: "Angular", level: 80, icon: Code },
    { name: "MySQL", level: 85, icon: Database },
    { name: "Docker", level: 75, icon: Cloud },
    { name: "AWS", level: 70, icon: Cloud },
    { name: "AI/ML", level: 70, icon: Brain },
  ]

  const projects = [
    {
      title: "AI-based RAN Anomaly Detection System",
      description:
        "Worked on AI-driven system to detect anomalies in telecom RAN networks, improving reliability and fault detection.",
      tech: ["Python", "AI/ML", "Data Processing"],
      features: ["Anomaly Detection", "Pattern Analysis", "Real-time Monitoring"],
    },
    {
      title: "CRM Portal for Visitor Management",
      description:
        "Full-stack CRM portal with role-based access control, real-time updates, and seamless communication flow.",
      tech: ["Spring Boot", "Angular", "MySQL", "REST APIs"],
      features: ["Role-based Security", "Real-time Updates", "Ticket Assignment"],
    },
    {
      title: "Real-time Vehicle Collision Detection",
      description:
        "System using bounding box methodology to detect and alert potential vehicle collisions.",
      tech: ["Python", "Computer Vision", "Machine Learning"],
      features: ["Bounding Box Detection", "Real-time Alerts", "Collision Prediction"],
    },
    {
      title: "AWS VPC Endpoint & FlowLogs Implementation",
      description:
        "Improved cloud security and visibility using VPC endpoints and FlowLogs.",
      tech: ["AWS", "CloudWatch", "Networking"],
      features: ["Traffic Monitoring", "Security Enhancement", "Logging"],
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <section id="hero" className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold">
            <span>SUMANTH</span><br />
            <span>REDDY</span>
          </h1>
          <p className="text-xl mt-4">
            Software Engineer focused on backend systems and AI-driven solutions. Building scalable applications with Spring Boot and working on real-world AI systems.
          </p>
        </div>
      </section>

      <section id="about" className="py-20">
        <h2 className="text-4xl text-center mb-10">About Me</h2>
        <div className="max-w-3xl mx-auto text-lg">
          <p>
            I'm a Software Engineer working on backend systems and AI-driven solutions. My work involves building scalable applications and contributing to AI-based systems such as RAN anomaly detection.
          </p>
          <br />
          <p>
            I focus on writing clean, efficient code and solving real-world problems. Alongside my technical work, I am preparing for an MBA to strengthen my business and strategic thinking.
          </p>
        </div>
      </section>

      <section id="experience" className="py-20">
        <h2 className="text-4xl text-center mb-10">Experience</h2>
        <div className="text-center">
          <h3 className="text-2xl">Software Engineer</h3>
          <p>Wipro • 2025 – Present</p>
          <p className="mt-4">
            Working on backend systems and AI-driven solutions, including RAN anomaly detection. Building scalable services using Spring Boot and microservices architecture.
          </p>
        </div>
      </section>

      <section id="projects" className="py-20">
        <h2 className="text-4xl text-center mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6 px-10">
          {projects.map((p, i) => (
            <div key={i} className="border p-4 rounded-lg">
              <h3 className="text-xl font-bold">{p.title}</h3>
              <p className="mt-2">{p.description}</p>
              <div className="mt-2">
                <strong>Tech:</strong> {p.tech.join(", ")}
              </div>
              <div>
                <strong>Features:</strong> {p.features.join(", ")}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
