import { useState, useEffect } from "react"import { Button } from "@/components/ui/button"import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"import { Badge } from "@/components/ui/badge"import { Progress } from "@/components/ui/progress"import {Mail,Phone,MapPin,Github,Linkedin,Code,Database,Cloud,Cpu,Brain,Zap,ArrowRight,Download,User,ChevronDown,} from "lucide-react"

export default function Portfolio() {const [isVisible, setIsVisible] = useState(false)const [activeSection, setActiveSection] = useState("hero")const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

useEffect(() => {setIsVisible(true)

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

const handleMouseMove = (e: MouseEvent) => {
  setMousePosition({ x: e.clientX, y: e.clientY })
}

window.addEventListener("scroll", handleScroll)
window.addEventListener("mousemove", handleMouseMove)
return () => {
  window.removeEventListener("scroll", handleScroll)
  window.removeEventListener("mousemove", handleMouseMove)
}

}, [])

const scrollToAbout = () => {const aboutSection = document.getElementById("about")if (aboutSection) {aboutSection.scrollIntoView({ behavior: "smooth" })}}

const downloadResume = () => {const resumeContent = `Sumanth Reddy Majjiga - Resumebody {font-family: Arial, sans-serif;line-height: 1.6;color: #333;max-width: 800px;margin: 0 auto;padding: 20px;background: white;}.header {text-align: center;border-bottom: 2px solid #2563eb;padding-bottom: 20px;margin-bottom: 30px;}.header h1 {font-size: 28px;margin: 0;color: #1e40af;font-weight: bold;}.contact-info {margin-top: 10px;font-size: 14px;color: #666;}.section {margin-bottom: 25px;}.section h2 {font-size: 18px;color: #1e40af;border-bottom: 1px solid #e5e7eb;padding-bottom: 5px;margin-bottom: 15px;font-weight: bold;}.section h3 {font-size: 16px;color: #374151;margin-bottom: 8px;font-weight: bold;}.education-item, .project {margin-bottom: 15px;}.job-title, .company {font-weight: bold;}.date {float: right;color: #666;}.gpa {color: #2563eb;font-weight: bold;}ul {margin: 8px 0;padding-left: 20px;}li {margin-bottom: 4px;}.skills-grid {display: grid;grid-template-columns: 1fr 1fr;gap: 15px;margin-bottom: 15px;}.skills-grid > div {margin-bottom: 10px;}strong {color: #1e40af;}SUMANTH REDDY MAJJIGAChittoor, Andhra Pradesh, India | +91-9515685601sumanthmajjiga8348@gmail.com | linkedin.com/in/majjiga-sumanth-reddy8348

    <div class="section">
      <h2>SUMMARY</h2>
      <p>Software Engineer with hands-on experience in Java, Python, and JavaScript, specializing in back-end development using Spring Boot and Microservices. Skilled in building scalable, high-performance applications with clean, maintainable code. Proficient in modern tools and frameworks including Angular, Docker, and Git. Passionate about leveraging technology to solve real-world problems and exploring emerging fields like AI and Machine Learning. Currently preparing for an MBA to complement technical expertise with business acumen, aiming to contribute to innovative, impact-driven projects.</p>
    </div>

    <div class="section">
      <h2>EDUCATION</h2>
      <div class="education-item">
        <strong>Sathyabama Institute of Science and Technology</strong>, Chennai, India<br>
        <em>B.E in Computer Science and Engineering</em> <span class="date">2020 – 2024</span><br>
        <span class="gpa">GPA: 7.96/10.0</span>
      </div>
      <div class="education-item">
        <strong>Narayana Junior College</strong>, Vijayawada, India<br>
        <em>M.P.C</em> <span class="date">2018 – 2020</span><br>
        <span class="gpa">Percentage: 91%</span>
      </div>
      <div class="education-item">
        <strong>Narayana E.M School</strong>, Vijayawada, India<br>
        <em>Secondary School Certificate</em> <span class="date">2017 – 2018</span><br>
        <span class="gpa">GPA: 9.8/10.0</span>
      </div>
    </div>

    <div class="section">
      <h2>WORK EXPERIENCE</h2>
      <div>
        <span class="job-title">Programmer Analyst Trainee</span><br>
        <span class="company">Cognizant Technology Solutions</span>, Chennai, India <span class="date">Sep 2024 – Feb 2025</span>
      </div>
    </div>

    <div class="section">
      <h2>PROJECTS</h2>
      <div class="project">
        <h3>CRM Portal for Visitor Management</h3>
        <ul>
          <li>Designed and implemented a full-stack CRM portal to manage Visitors</li>
          <li>Developed RESTful APIs using Spring Boot and integrated frontend with Angular</li>
          <li>Implemented role-based access control for Security Admin, Employees</li>
          <li>Focused on real-time updates, ticket assignment, and seamless communication flow between users</li>
        </ul>
      </div>
      <div class="project">
        <h3>Real-time Vehicle Collision Detection Using Bounding Box Methodology</h3>
        <ul>
          <li>Developed a system to detect real-time vehicle collisions using bounding boxes</li>
          <li>Focused on identifying and alerting about potential collisions on the road</li>
        </ul>
      </div>
      <div class="project">
        <h3>VPC Endpoint and VPC Flowlogs Implementation</h3>
        <ul>
          <li>Enhanced cloud infrastructure security and visibility in AWS by implementing VPC endpoints and FlowLogs</li>
          <li>Improved operational monitoring and traffic analysis within the virtual private cloud</li>
        </ul>
      </div>
    </div>

    <div class="section">
      <h2>SKILLS</h2>
      <div class="skills-grid">
        <div>
          <strong>Programming Languages:</strong><br>
          Java, JavaScript, Python, SQL
        </div>
        <div>
          <strong>Frameworks & Technologies:</strong><br>
          Spring, Spring Boot, Spring MVC, Spring Data JPA, RESTful APIs, Angular, Bootstrap, Prompt Engineering, Blockchain
        </div>
        <div>
          <strong>Databases:</strong><br>
          MySQL, PostgreSQL
        </div>
        <div>
          <strong>DevOps & Tools:</strong><br>
          Docker, Git, Swagger
        </div>
      </div>
      <p><strong>Core Competencies:</strong> Agile Methodologies, Software Development Life Cycle (SDLC), Debugging, Performance Optimization</p>
    </div>

    <div class="section">
      <h2>CERTIFICATIONS</h2>
      <ul>
        <li>Cloud Computing – NPTEL</li>
        <li>Data Science – EXECLR</li>
        <li>Blockchain – Udemy</li>
        <li>Prompt Engineering – Deeplearning.ai</li>
      </ul>
    </div>
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

const skills = [{ name: "Java", level: 90, icon: Code },{ name: "Python", level: 85, icon: Code },{ name: "JavaScript", level: 88, icon: Code },{ name: "Spring Boot", level: 92, icon: Zap },{ name: "Angular", level: 80, icon: Code },{ name: "MySQL", level: 85, icon: Database },{ name: "Docker", level: 75, icon: Cloud },{ name: "AWS", level: 70, icon: Cloud },{ name: "AI/ML", level: 65, icon: Brain },]

const projects = [{title: "CRM Portal for Visitor Management",description:"Full-stack CRM portal with role-based access control, real-time updates, and seamless communication flow.",tech: ["Spring Boot", "Angular", "MySQL", "RESTful APIs"],features: ["Role-based Security", "Real-time Updates", "Ticket Assignment"],},{title: "Real-time Vehicle Collision Detection",description:"Advanced system using bounding box methodology to detect and alert about potential vehicle collisions.",tech: ["Python", "Computer Vision", "Machine Learning", "Real-time Processing"],features: ["Bounding Box Detection", "Real-time Alerts", "Collision Prediction"],},{title: "VPC Endpoint & FlowLogs Implementation",description:"Enhanced AWS cloud infrastructure security and visibility through VPC endpoints and comprehensive logging.",tech: ["AWS", "VPC", "CloudWatch", "Security"],features: ["Enhanced Security", "Traffic Analysis", "Operational Monitoring"],},]

const certifications = [{ name: "Cloud Computing", provider: "NPTEL", icon: Cloud },{ name: "Data Science", provider: "EXECLR", icon: Brain },{ name: "Blockchain", provider: "Udemy", icon: Cpu },{ name: "Prompt Engineering", provider: "Deeplearning.ai", icon: Brain },]

return (<divclassName="absolute w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-subtle"style={{left: mousePosition.x - 192,top: mousePosition.y - 192,transition: "left 0.3s ease, top 0.3s ease",}}/>

  <nav className="fixed top-0 w-full z-50 glass-effect">
    <div className="container mx-auto px-6 py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <User className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-primary">Portfolio</span>
        </div>
        <div className="hidden md:flex space-x-8">
          {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`transition-all duration-300 hover:text-primary hover:scale-105 ${
                activeSection === item.toLowerCase() ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  </nav>

  <section id="hero" className="min-h-screen flex items-center justify-center relative">
    <div className="container mx-auto px-6 text-center relative z-10">
      <div className={`transition-all duration-1000 ${isVisible ? "animate-slide-in-up" : "opacity-0"}`}>
        <div className="mb-8 animate-fade-in-scale">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center animate-glow overflow-hidden">
            <img
              src="/software-engineer-headshot.png"
              alt="Sumanth Reddy Majjiga"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-balance">
          <span className="text-primary animate-slide-in-left">SUMANTH</span>
          <br />
          <span className="text-accent animate-slide-in-right">REDDY</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty animate-fade-in-scale">
          Software Engineer specializing in Java, Python, and JavaScript. Building scalable applications with Spring
          Boot and exploring the frontiers of AI/ML.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground animate-glow hover-lift group"
            onClick={() => window.open("mailto:sumanthmajjiga8348@gmail.com", "_blank")}
          >
            <Mail className="mr-2 h-5 w-5 group-hover:animate-pulse" />
            Get In Touch
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground hover-lift group"
            onClick={downloadResume}
          >
            <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
            Download Resume
          </Button>
        </div>
      </div>
    </div>
    <div
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float cursor-pointer hover:scale-110 transition-transform"
      onClick={scrollToAbout}
    >
      <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center hover:border-accent transition-colors">
        <ChevronDown className="w-4 h-4 text-primary mt-2 animate-bounce" />
      </div>
    </div>
  </section>

  <section id="about" className="py-20 relative">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-16 text-primary animate-fade-in-scale">About Me</h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-slide-in-left">
          <Card className="glass-effect hover-lift">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-pretty mb-4">
                I'm a passionate Software Engineer with hands-on experience in building scalable, high-performance
                applications. Currently working as a Programmer Analyst Trainee at Cognizant Technology Solutions, I
                specialize in back-end development using Spring Boot and Microservices architecture.
              </p>
              <p className="text-lg leading-relaxed text-pretty">
                I'm passionate about leveraging technology to solve real-world problems and exploring emerging
                fields like AI and Machine Learning. Currently preparing for an MBA to complement my technical
                expertise with business acumen.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-6 animate-slide-in-right">
          <div className="flex items-center space-x-4 hover-lift p-4 rounded-lg transition-all duration-300">
            <MapPin className="h-6 w-6 text-primary animate-pulse-subtle" />
            <span>Chittoor, Andhra Pradesh, India</span>
          </div>
          <div className="flex items-center space-x-4 hover-lift p-4 rounded-lg transition-all duration-300">
            <Phone className="h-6 w-6 text-primary animate-pulse-subtle" />
            <a href="tel:+919515685601" className="hover:text-primary transition-colors">
              +91-9515685601
            </a>
          </div>
          <div className="flex items-center space-x-4 hover-lift p-4 rounded-lg transition-all duration-300">
            <Mail className="h-6 w-6 text-primary animate-pulse-subtle" />
            <a
              href="mailto:sumanthmajjiga8348@gmail.com"
              className="hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              sumanthmajjiga8348@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-4 hover-lift p-4 rounded-lg transition-all duration-300">
            <Linkedin className="h-6 w-6 text-primary animate-pulse-subtle" />
            <a
              href="https://linkedin.com/in/majjiga-sumanth-reddy8348"
              className="hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="experience" className="py-20 bg-muted/30">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-16 text-primary animate-fade-in-scale">Experience</h2>
      <div className="max-w-4xl mx-auto">
        <Card className="glass-effect animate-fade-in-scale">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Programmer Analyst Trainee</CardTitle>
            <CardDescription className="text-lg">
              Cognizant Technology Solutions • Chennai, India • Sep 2024 – Feb 2025
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed text-pretty">
              Working on enterprise-level software solutions, focusing on back-end development with Spring Boot and
              microservices architecture. Collaborating with cross-functional teams to deliver scalable applications
              and implementing best practices in software development lifecycle.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>

  <section id="projects" className="py-20">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-16 text-primary animate-fade-in-scale">Featured Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="glass-effect hover:scale-105 transition-all duration-300 animate-fade-in-scale"
          >
            <CardHeader>
              <CardTitle className="text-xl text-primary text-balance">{project.title}</CardTitle>
              <CardDescription className="text-pretty">{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="text-sm space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>

  <section id="skills" className="py-20 bg-muted/30">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-16 text-primary animate-fade-in-scale">Technical Skills</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => {
          const Icon = skill.icon
          return (
            <Card key={index} className="glass-effect animate-fade-in-scale">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Icon className="h-8 w-8 text-primary mr-3" />
                  <span className="text-lg font-semibold">{skill.name}</span>
                </div>
                <Progress value={skill.level} className="h-3" />
                <span className="text-sm text-muted-foreground mt-2 block">{skill.level}% Proficiency</span>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  </section>

  <section id="education" className="py-20">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-16 text-primary animate-fade-in-scale">
        Education & Certifications
      </h2>
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-8 text-accent">Education</h3>
          <div className="space-y-6">
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle>B.E in Computer Science and Engineering</CardTitle>
                <CardDescription>Sathyabama Institute of Science and Technology • 2020 – 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary">GPA: 7.96/10.0</Badge>
              </CardContent>
            </Card>
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle>M.P.C (Intermediate)</CardTitle>
                <CardDescription>Narayana Junior College • 2018 – 2020</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary">91%</Badge>
              </CardContent>
            </Card>
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle>Secondary School Certificate</CardTitle>
                <CardDescription>Narayana E.M School • 2017 – 2018</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary">GPA: 9.8/10.0</Badge>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-accent">Certifications</h3>
          <div className="grid gap-4">
            {certifications.map((cert, index) => {
              const Icon = cert.icon
              return (
                <Card key={index} className="glass-effect">
                  <CardContent className="p-4">
                    <div className="flex items-center">
                      <Icon className="h-6 w-6 text-primary mr-3" />
                      <div>
                        <h4 className="font-semibold">{cert.name}</h4>
                        <p className="text-sm text-muted-foreground">{cert.provider}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="contact" className="py-20 bg-muted/30 relative">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-16 text-primary animate-fade-in-scale">Let's Connect</h2>
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-lg mb-8 text-pretty animate-slide-in-up">
          I'm always interested in discussing new opportunities, innovative projects, or just connecting with fellow
          tech enthusiasts.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground animate-glow hover-lift group"
            onClick={() => window.open("mailto:sumanthmajjiga8348@gmail.com", "_blank")}
          >
            <Mail className="mr-2 h-5 w-5 group-hover:animate-pulse" />
            Email Me
          </Button>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground animate-glow hover-lift group"
            onClick={() => window.open("https://linkedin.com/in/majjiga-sumanth-reddy8348", "_blank")}
          >
            <Linkedin className="mr-2 h-5 w-5 group-hover:animate-pulse" />
            LinkedIn
          </Button>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground animate-glow hover-lift group"
            onClick={() => window.open("https://github.com/sumanthreddy-m", "_blank")}
          >
            <Github className="mr-2 h-5 w-5 group-hover:animate-pulse" />
            GitHub
          </Button>
        </div>
      </div>
    </div>
  </section>

  <footer className="py-8 border-t border-border relative">
    <div className="container mx-auto px-6 text-center">
      <p className="text-muted-foreground animate-fade-in-scale">
        © 2024 Sumanth Reddy Majjiga. Built with Next.js and Tailwind CSS.
      </p>
    </div>
  </footer>
</div>

)}
