'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"

import { Moon, Sun, Briefcase, Code, Mail, Menu, Github, Linkedin, FileText, ChevronRight, Home, ChevronDown, ChevronUp, Globe, GraduationCap, Twitter } from 'lucide-react'


export function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [selectedTech, setSelectedTech] = useState('all')
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null)
  const [activeSection, setActiveSection] = useState('')

  const technologies = [
    { name: 'Java Script', count: 2 },
    { name: 'Python', count: 1 }, 
    { name: 'Tailwind', count: 2 },
    { name: 'React', count: 2 },
    { name: 'Machine Learning', count: 1 },
    { name: 'Pandas', count: 1 },
    { name: 'MongoDB', count: 1 },

  ]

  const projects = [
 
    {
      title: "Food Delivery App",
      description: "Built with React, Tailwind CSS, and a backend powered by Node.js. It enables users to browse menus, place orders, and make secure digital payments",
      image: "https://i.pinimg.com/736x/c6/23/d3/c623d3b4c0bb584037029fa33c9bcb24.jpg",
      tech: ["React","Java Script","Tailwind","MongoDB"],
      github: "https://github.com/mdasif29/Food-Order-MERN-Website",
      website: "https://food-order-mern-website-u2x8.vercel.app/"
    },
    {
      title: "Real-Estate-Website",
      description: "A responsive real estate website built with React and Tailwind CSS for easy property browsing and smooth navigation",
      image: "https://i.pinimg.com/736x/aa/45/59/aa45596ec9a1ab62c13b3fc4961d5d25.jpg",
      tech: ["Tailwind", "React","Java Script"],
      github: "https://github.com/mdasif29/Build-And-Deploy-Real-Estate-Website-Using-React-and-Tailwind-CSS-React-JS-Project",
      website: "https://real-estate-tailwind-react.vercel.app/"
    } ,
      {
      title: "Early-Stage Detection of ASD",
      description: "Machine Learning Framework for Early-Stage Detection of Autism Spectrum Disorders done through Python ",
      image: "https://i.pinimg.com/736x/b4/75/cc/b475cc5e06d21686e610e19af0c03946.jpg",
      tech: ["Python", "Machine Learning","Pandas"],
      github: "https://github.com/mdasif29/Early-Stage-Detection-of-ASD",
      website: "https://github.com/mdasif29/Early-Stage-Detection-of-ASD"
    },
  ]

  const experiences = [
    {
      title: "MERN Stack Developer Intern",
      company: "Codegnan.com",
      period: "May - August 2023",
      type: "Internship | Office",
      details: [
             " Created a full-stack web site allowing users to order food from online,user-friendly components for menu display, cart management, and order placement with digital payment and collab with team "
    ]
  },
    {
      title: "IOT Systems Internship",
      company: "Bist Technologies Private Limited ",
      period: "February - April 2024",
      type: "Internship | On-site",
      details: "Explored and implemented IoT hardware solutions and embedded systems., integrated IoT devices with cloud platforms, and optimized system performance and various communication protocols for connected devices."
}
  ]

  const education = [
    {
      degree: "Andhra Loyola Institute of Engineering and Technology",
      institution: "Electronics and Communication Engineering",
      period: "Jan 2020 - May 2024",
      details: "Throughout my academic journey, I have gained valuable knowledge and developed new skills that have shaped my perspective. My time in college has been both valuable and memorable, providing me with not only academic growth but also personal and professional experiences"
    },

  ]

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  const filteredProjects = selectedTech === 'all' 
    ? projects 
    : projects.filter(project => project.tech.includes(selectedTech))

  const toggleExperience = (index: number) => {
    setExpandedExperience(expandedExperience === index ? null : index)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'education', 'experience', 'projects', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="flex">
        {/* Sidebar - Desktop */}
        <aside className="hidden lg:flex flex-col fixed h-screen w-16 bg-primary/10 dark:bg-primary/20 items-center py-8 gap-8">
          <div className="w-10 h-10">
            <Image  src="/images/logo.svg" alt="Logo" width={40} height={40} className="rounded-full" />
          </div>
          <nav className="flex flex-col gap-4">
            <Button 
              variant={activeSection === 'home' ? 'default' : 'ghost'} 
              size="icon" 
              onClick={() => scrollToSection('home')}
            >
              <Home className="h-5 w-5" />
            </Button>
            <Button 
              variant={activeSection === 'education' ? 'default' : 'ghost'} 
              size="icon" 
              onClick={() => scrollToSection('education')}
            >
              <GraduationCap className="h-5 w-5" />
            </Button>
            <Button 
              variant={activeSection === 'experience' ? 'default' : 'ghost'} 
              size="icon" 
              onClick={() => scrollToSection('experience')}
            >
              <Briefcase className="h-5 w-5" />
            </Button>
            <Button 
              variant={activeSection === 'projects' ? 'default' : 'ghost'} 
              size="icon" 
              onClick={() => scrollToSection('projects')}
            >
              <Code className="h-5 w-5" />
            </Button>
            <Button 
              variant={activeSection === 'contact' ? 'default' : 'ghost'} 
              size="icon" 
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="h-5 w-5" />
            </Button>
          </nav>
          <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="mt-auto">
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </aside>

        {/* Mobile Header */}
        <header className="lg:hidden fixed w-full bg-background z-50 border-b">
          <div className="flex items-center justify-between p-4">
            <Image  src="/images/logo.svg" alt="Logo" width={32} height={32} className="rounded-full" />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col gap-4 mt-8">
                  <Button variant="ghost" className="justify-start" onClick={() => scrollToSection('home')}>
                    <Home className="h-5 w-5 mr-2" /> Home
                  </Button>
                  <Button variant="ghost" className="justify-start" onClick={() => scrollToSection('education')}>
                    <GraduationCap className="h-5 w-5 mr-2" /> Education
                  </Button>
                  <Button variant="ghost" className="justify-start" onClick={() => scrollToSection('experience')}>
                    <Briefcase className="h-5 w-5 mr-2" /> Experience
                  </Button>
                  <Button variant="ghost" className="justify-start" onClick={() => scrollToSection('projects')}>
                    <Code className="h-5 w-5 mr-2" /> Projects
                  </Button>
                  <Button variant="ghost" className="justify-start" onClick={() => scrollToSection('contact')}>
                    <Mail className="h-5 w-5 mr-2" /> Contact
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 lg:ml-16 p-4 lg:p-8">
          <section id="home" className="max-w-4xl mx-auto mb-16 pt-16 lg:pt-8">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              <Image src="/images/profile.png" alt="Profile Picture" width={200} height={200} className="rounded-full" />
              <div>
                <h1 className="text-4xl font-bold mb-4">Greetings! I'm Mohammad Asif Shareif</h1>
                <p className="text-xl text-muted-foreground mb-4">
                  Full Stack Developer (Learning) • Electronics and Communication Engineering
                </p>
                <p className="text-muted-foreground mb-6">Andhra Pradesh, India</p>
                <div className="flex gap-4">
                  <Button variant="ghost" size="icon" asChild>
                    <Link href="https://github.com/mdasif29" target="blank"><Github className="h-5 w-5" /></Link>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <Link href="https://www.linkedin.com/in/md-asif-shareif-54bb3a335/"  target="blank" ><Linkedin className="h-5 w-5" /></Link>
                  </Button>
                  
                  <Button variant="ghost" size="icon" asChild>
                  <Link href="https://x.com/xceo420"  target="blank"><Twitter className="h-5 w-5" /></Link>
                  </Button> 
             
                  <Button className="gap-3" asChild>
                    <a href="https://drive.google.com/file/d/1Hi8a6Hnava4ReOErva9pO9Fe81FaznmT/view?usp=sharing" target='_blank' >
                      <FileText className="h-4 w-4" />Resume
                    </a> 
                  </Button>
                  
                       

                  
                </div>
              </div>
            </div>
        
                      </section>

          <Separator className="my-8" />

          <section id="education" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-bold mb-8">Education</h2>
            {education.map((edu, index) => (
              <Card key={index} className="mb-4">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                  <p className="text-muted-foreground mb-2">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mb-4">{edu.period}</p>
                  <p className="text-sm">{edu.details}</p>
                </CardContent>
              </Card>
            ))}
          </section>

          <Separator className="my-8" />

          <section id="experience" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-bold mb-8">Experience</h2>
            <div className="relative border-l border-gray-200 dark:border-gray-700 ml-3">
              {experiences.map((exp, index) => (
                <div key={index} className="mb-8 ml-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <Briefcase className="w-3 h-3 text-blue-800 dark:text-blue-300" />
                  </span>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <p className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        {exp.company}
                      </p>
                      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        {exp.type}
                      </p>
                      <Button
                        variant="link"
                        className="p-0 flex items-center"
                        onClick={() => toggleExperience(index)}
                      >
                        {expandedExperience === index ? (
                          <>
                            Hide Details
                            <ChevronUp className="ml-2 h-4 w-4" />
                          </>
                        ) : (
                          <>
                            Show Details
                            <ChevronDown className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                      {expandedExperience === index && (
                        <p className="mt-4 mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                          {exp.details}
                        </p>
                      )}
                    </div>
                    <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      {exp.period}
                    </time>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <Separator className="my-8" />

          <section id="projects" className="max-w-4xl mx-auto mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Projects</h2>
              <Link href="#projects" className="text-primary hover:underline flex items-center gap-1">
                View All <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-8">
              <Badge  
                variant={selectedTech === 'all' ? 'default' : 'secondary'}
                className="cursor-pointer"
                onClick={() => setSelectedTech('all')}
              >
                All
              </Badge>
              {technologies.map((tech) => (
                <Badge 
                  key={tech.name}
                  variant={selectedTech === tech.name ? 'default' : 'secondary'}
                  className="cursor-pointer"
                  onClick={() => setSelectedTech(tech.name)}
                >
                  {tech.name} ({tech.count})
                </Badge>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {filteredProjects.map((project) => (
                <Card key={project.title}>
                  <CardHeader className="p-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={200}
                      className="object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t) => (
                        <Badge key={t} variant="outline">{t}</Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between p-4 pt-0">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Github className="h-4 w-4" /> GitHub
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Globe className="h-4 w-4" /> Website
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>

          <Separator className="my-8" />

          <section id="contact" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-bold mb-8">Contact</h2>
            <p className="text-muted-foreground mb-6" id='sizee' >
            Reach out anytime! I’ll respond as soon as I finish explaining to my code why it's not working... again
            </p>
            <div className="flex flex-wrap gap-4">
            <Button className="gap-2" asChild id='contactss'>
                <a href="mailto:skasifshareif@gmai.com">
                  <Mail className="h-4 w-4" /> Skasifshareif@gmail.com
                </a>
              </Button>
              {/* <Button   variant="outline"     className="gap-2" >
              <Link href="https://github.com/mdasif29" target="blank"><Github className="h-5 w-5" /></Link>
                GitHub
              </Button>
              
              <Button variant="outline" className="gap-2">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </Button>
              <Button variant="outline" className="gap-2">
                <Twitter className="h-4 w-4" /> Twitter
              </Button> */}
            </div>
          </section>

          <Separator className="my-8" />

          <footer className="max-w-4xl mx-auto text-center text-sm text-muted-foreground">
            Crafted with <strong>Next.js</strong> and <strong>TypeScript</strong>
          </footer>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
       
        </main>
      </div>
    </div>
  )
}