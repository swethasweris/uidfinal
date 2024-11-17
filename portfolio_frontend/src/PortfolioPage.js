import React, { useState } from 'react';
import axios from 'axios';

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '1900px',
    margin: '0 auto',
    padding: '20px',
    color:'white',
    backgroundImage: 'url("/images/b.jpg")', // Correct relative path
    backgroundSize: 'cover', // Ensures the image covers the section
    backgroundPosition: 'center', // Center aligns the image
    backgroundRepeat: 'no-repeat', // Prevents tiling
    borderRadius: '10px',
  },
  navbar: {
    position: 'fixed',
    top: '0',
    width: '1450px',
    backgroundColor: '#1a1a1a', // Darker color for a clean look
    color: '#fff',
    padding: '10px 20px', // Padding for better spacing
    display: 'flex',
    justifyContent: 'space-between', // Space out links evenly
    alignItems: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
    zIndex: '1000',
  },
  navbarBrand: {
    fontSize: '1.5em', // Larger size for the brand name
    fontWeight: 'bold',
    color: '#f39c12', // Highlight color for the brand
    textDecoration: 'none',
  },
  navLinks: {
    display: 'flex',
    gap: '20px', // Space between links
    listStyle: 'none', // Removes bullet points
    margin: '0',
    padding: '0',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1em',
    fontWeight: '500',
    transition: 'color 0.3s', // Smooth transition effect
  },
  linkHover: {
    color: 'green', // Highlight link on hover
  },
  section: {
    marginBottom: '40px',
    paddingTop: '60px',
  },
  projectsContainer: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  card: {
    width: '200px',
    height: '300px',
    perspective: '500px',
    backgroundColor:'black',
    cursor: 'pointer',
    color:'black',
  },
  cardInner: {
    width: '100%',
    height: '100%',
    position: 'relative',
    transition: 'transform 0.5s',
    transformStyle: 'preserve-3d',
  },
  cardFlipped: {
    transform: 'rotateY(180deg)',
  },
  cardFront: {
    width: '100%',
    height: '100%',
    backgroundColor: 'lightblue',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backfaceVisibility: 'hidden',
    position: 'absolute',
    top: '0',
    left: '0',
  },
  cardBack: {
    width: '100%',
    height: '100%',
    backgroundColor: 'pink',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    position: 'absolute',
    top: '0',
    left: '0',
    backfaceVisibility: 'hidden',
    transform: 'rotateY(180deg)',
  },
  
    // Existing styles ...
  
    // Contact Section
    contactSection: {
      marginTop: '40px',
      padding: '20px',
      backgroundColor:'purple',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },
    input: {
      padding: '10px',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      outline: 'none',
      transition: 'border-color 0.3s',
    },
    textarea: {
      padding: '10px',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      outline: 'none',
      resize: 'none',
      minHeight: '100px',
      transition: 'border-color 0.3s',
    },
    button: {
      padding: '12px',
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#fff',
      backgroundColor: '#007BFF',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
    status: {
      marginTop: '10px',
      fontSize: '14px',
      color: 'green',
      fontStyle: 'italic',
    },
    cardImage: {
      width: '100%',
      height: '90px',
      marginBottom: '1rem',
      borderRadius: '8px',
    },
  
  
  resumeButton: {
    marginTop: '20px',
    padding: '12px 24px',
    fontSize: '18px',
    backgroundColor: 'pink',
    color: 'black',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
  },
};



export default function PortfolioPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [flippedCards, setFlippedCards] = useState([false, false, false]);
  const [status, setStatus] = useState('');

  const handleCardHover = (index) => {
    setFlippedCards((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      setStatus('Message sent successfully!');
    } catch (error) {
      setStatus('Error sending message. Please try again later.');
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        <span style={styles.link} onClick={() => scrollToSection('about')}>About</span>
        <span style={styles.link} onClick={() => scrollToSection('projects')}>Projects</span>
        <span style={styles.link} onClick={() => scrollToSection('achievements')}>Achievements</span>
        <span style={styles.link} onClick={() => scrollToSection('contact')}>Contact</span>
      </nav>

      <header style={styles.header}>
      <h1>Welcome to My Portfolio</h1>
    <p>
      Hi there! we are SSR TEAM a passionate developer specializing in creating innovative solutions. 
      Whether it's crafting dynamic web applications, building efficient algorithms, or diving into 
      exciting machine learning projects, I thrive on solving problems and bringing ideas to life.
    </p>
    <p>
      Explore my portfolio to discover some of the exciting projects I've worked on, showcasing my expertise in 
      full-stack development, Java programming, and cutting-edge technologies. Each project is a testament to my commitment 
      to learning, creativity, and excellence.
    </p>
    <p>
      I'm always eager to collaborate, so feel free to reach out through the contact section. Let's create something amazing together!
    </p>
      </header>

      <section id="about" style={styles.section}>
        <h2>About Me</h2>
        <p>About Me
Hello there! 👋 I'm a Full-Stack Developer with a passion for crafting seamless, user-friendly web experiences from concept to deployment. With expertise in both front-end and back-end technologies, I specialize in building scalable, efficient, and visually stunning applications.

💻 What I Bring to the Table:

Front-End Mastery: Skilled in React, Angular, and Vue, I create responsive and intuitive user interfaces that captivate users.
Back-End Expertise: Proficient in Node.js, Express, and Python/Django, I design robust server-side architectures and APIs.
Database Management: Experienced with MongoDB, PostgreSQL, and MySQL for secure and efficient data handling.
DevOps Know-How: Comfortable with Docker, Kubernetes, and CI/CD pipelines to streamline deployment and maintenance.
🎯 My Mission: I aim to bridge the gap between complex technologies and real-world applications, delivering solutions that empower users and drive business growth. Whether it's solving challenging coding problems or brainstorming innovative features, I thrive on turning ideas into reality.

🌱 Always Evolving: The tech world never stands still, and neither do I. I’m constantly exploring new frameworks, tools, and best practices to stay ahead of the curve.

🌟 Beyond Code: When I'm not debugging or pushing commits, you'll find me exploring open-source projects, contributing to the dev community, or sharing knowledge through blogs and tutorials.

🚀 Let’s create something amazing together. Drop me a message, and let’s build the future</p>
      </section>

      <section id="projects" style={styles.section}>
  <h2>Projects</h2>
  <div style={styles.projectsContainer}>
    {[
      {
        name: 'CALCULATOR',
        image: '/images/calci.webp',
        description: 'A simple calculator app for basic arithmetic operations.',
        details: 'This calculator allows users to perform addition, subtraction, multiplication, and division. Built using HTML, CSS, and JavaScript with an interactive UI.',
      },
      {
        name: 'ML SNAKE GAME',
        image: '/images/snake.png',
        description: 'An AI-powered version of the classic Snake game.',
        details: 'This project uses machine learning algorithms to train the snake to optimize its movements and avoid collisions. Developed using Python and PyGame.',
      },
      {
        name: 'FULL STACK',
        image: '/images/contact.webp',
        description: 'A full-stack web application for managing contacts.',
        details: 'Built with React.js for the frontend and Node.js with Express.js for the backend. It includes CRUD operations, user authentication, and a responsive design.',
      },
      {
        name: 'JAVA PROJECTS',
        image: '/images/Java-Projects.png',
        description: 'A collection of Java projects demonstrating core Java concepts.',
        details: 'This includes mini-projects like a library management system, a banking application, and more, showcasing the use of OOP, collections, and multithreading.',
      },
    ].map((project, index) => (
      <div
        key={index}
        style={styles.card}
        onMouseEnter={() => handleCardHover(index)}
        onMouseLeave={() => handleCardHover(index)}
      >
        <div
          style={{
            ...styles.cardInner,
            ...(flippedCards[index] ? styles.cardFlipped : {}),
          }}
        >
          {/* Front Side */}
          <div style={styles.cardFront}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
          
          {/* Back Side */}
          <div style={styles.cardBack}>
            <h4>{project.name}</h4>
            <img
              src={project.image}
              alt={`Image of ${project.name}`}
              style={styles.cardImage}
            />
            <p>{project.details}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>




      <section id="achievements" style={styles.section}>
        <h2>Achievements</h2>
        <ul>
          <li>Achieved 1st place in Hackathon SIH </li>
          <li>Completed Full-Stack Web Development Course</li>
          <li>Contributed to Open Source Project ABC</li>
        </ul>
      </section>

      <section id="contact" style={styles.contactSection}>
  <h2>Contact</h2>
  <form onSubmit={handleSubmit} style={styles.form}>
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      value={formData.name}
      onChange={handleChange}
      required
      style={styles.input}
    />
    <input
      type="email"
      name="email"
      placeholder="Your Email"
      value={formData.email}
      onChange={handleChange}
      required
      style={styles.input}
    />
    <input
      type="text"
      name="subject"
      placeholder="Subject"
      value={formData.subject}
      onChange={handleChange}
      required
      style={styles.input}
    />
    <textarea
      name="message"
      placeholder="Your Message"
      value={formData.message}
      onChange={handleChange}
      required
      style={styles.textarea}
    />
    <button
      type="submit"
      style={styles.button}
      onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
      onMouseLeave={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
    >
      Send Message
    </button>
  </form>
  <p style={styles.status}>{status}</p>


         {/* Download Resume Button */}
         <a
          href="/path-to-your-resume.pdf" // Replace with the actual path to your resume file
          style={styles.resumeButton}
          download
        >
          Download Resume
        </a>
      </section>
    </div>
  );
}
