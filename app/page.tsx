"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaTwitter, FaDownload } from "react-icons/fa";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { bg } from "@/public";

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "SulhateeFoundation",
      description: "Redesigned and rebuilt the entire Donation experience for NGO",
      tech: "HTML, CSS, JavaScript, PHP, MariaDB",
      impact: "45% increase in Donation rates",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "https://example.com/project1",
      github: "https://github.com/example/project1"
    },
    {
      title: "Navy Town Access Management",
      description: "Developed a web application for managing access to Navy Town",
      tech: "HTML, CSS, JavaScript, PHP, MariaDB",
      impact: "Improved security and access management",
      image: "https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "https://example.com/project2",
      github: "https://github.com/example/project2"
    },
    {
      title: "WashPro Monitoring System",
      description: "System to track progress toward SDG 6.1 and 6.2",
      tech: "React.js, Express.js, MongoDB, Docker",
      impact: "Real-time data collection and analysis",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "https://example.com/project3",
      github: "https://github.com/example/project3"
    },
    {
      title: "Lexington Technologies Homepage",
      description: "Redesigned company landing page",
      tech: "Next.js, Docker",
      impact: "50% increase in client acquisition",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "https://example.com/project4",
      github: "https://github.com/example/project4"
    }
  ];

  const testimonials = [
    {
      text: "Ubaidullah transformed our outdated website into a beautiful, functional platform that has significantly increased our online presence.",
      author: "Sadiq Wali",
      position: "CEO of Lexington Technologies",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
      text: "Working with Ubaidullah was a seamless experience. His attention to detail and commitment to quality is outstanding.",
      author: "Jane Smith",
      position: "Product Manager at TechCorp",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const blogPosts = [
    {
      title: "The Future of Web Development",
      excerpt: "Exploring upcoming trends in web development and their impact on businesses.",
      date: "2024-03-15",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Optimizing React Applications",
      excerpt: "Best practices for building performant React applications.",
      date: "2024-03-01",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center parallax-bg bg-gradient-to-r from-blue-900 to-brown-800 text-white py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            {/* image */}
            <Image
              src={bg}
              alt="Ubaidullah Abdullah"
              width={900}
              height={400}
              className="rounded-full shadow-2xl mx-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 text-center md:text-left"
          >
            <h1 className="text-6xl font-bold mb-4">Ubaidullah Abdullah</h1>
            <h2 className="text-2xl mb-8">Web Developer</h2>
            <p className="text-lg mb-8">
              Passionate about creating elegant, user-friendly solutions that help businesses achieve their goals.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="https://github.com/kingkuta080" className="text-3xl hover:text-blue-300 transition-colors">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/kingkuta080" className="text-3xl hover:text-blue-300 transition-colors">
                <FaLinkedin />
              </a>
              <a href="mailto:Alubiadullahi080@gmail.com" className="text-3xl hover:text-blue-300 transition-colors">
                <FaEnvelope />
              </a>
              <a href="/resume.pdf" className="text-3xl hover:text-blue-300 transition-colors">
                <FaDownload />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={ref} className="py-20 px-4 md:px-20 bg-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="section-heading">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                As a passionate web developer with over 5 years of experience, I specialize in creating elegant, 
                user-friendly solutions that help businesses achieve their goals. My technical expertise combined 
                with strong design sensibilities allows me to bridge the gap between functionality and aesthetics.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I believe in clean code, intuitive interfaces, and collaborative problem-solving. When I'm not coding, 
                you can find me hiking local trails or volunteering at tech workshops for underserved communities.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-900">Quick Facts</h3>
              <ul className="space-y-3 text-gray-700">
                <li>🎓 BSc in Computer Science from ABU Zaria</li>
                <li>💼 5+ years of professional experience</li>
                <li>🌍 Based in Nigeria</li>
                <li>🗣️ English (Native), Hausa (Fluent)</li>
                <li>🎯 Specialized in Full-Stack Development</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 md:px-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading">Skills & Tools</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-brown-700">Technical Skills</h3>
              {[
                { name: "Front-End Development", level: 90 },
                { name: "Back-End Development", level: 85 },
                { name: "Database Management", level: 80 },
                { name: "Version Control", level: 85 },
              ].map((skill, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">{skill.name}</span>
                    <span className="text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="skill-progress"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-brown-700">Tools & Technologies</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Frontend</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>React.js</li>
                    <li>Next.js</li>
                    <li>Tailwind CSS</li>
                    <li>TypeScript</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Backend</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>PHP</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden card-hover">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={400}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-blue-800">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="text-sm text-gray-500 mb-2">
                      <strong>Technologies:</strong> {project.tech}
                    </div>
                    <div className="text-sm text-blue-600 mb-4">
                      <strong>Impact:</strong> {project.impact}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.link}
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo →
                      </a>
                      <a
                        href={project.github}
                        className="text-gray-600 hover:text-gray-800 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub →
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 md:px-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading">Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="testimonial-card"
              >
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-4 md:px-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading">Latest Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="blog-card"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  width={800}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-blue-900">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <p className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-20 bg-gradient-to-r from-blue-900 to-brown-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="mailto:Alubiadullahi080@gmail.com" className="flex flex-col items-center gap-2 hover:text-blue-300 transition-colors">
              <FaEnvelope className="text-3xl" />
              <span>Alubiadullahi080@gmail.com</span>
            </a>
            <a href="tel:+2349118140594" className="flex flex-col items-center gap-2 hover:text-blue-300 transition-colors">
              <FaPhone className="text-3xl" />
              <span>(+234) 911-8140-594</span>
            </a>
            <a href="https://twitter.com/yourusername" className="flex flex-col items-center gap-2 hover:text-blue-300 transition-colors">
              <FaTwitter className="text-3xl" />
              <span>@yourusername</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}