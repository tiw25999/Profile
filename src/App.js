import React, { useState } from 'react';
import './App.css';
import resumePDF from './assets/file/Resume.pdf';
import profileImage from './assets/images/profile.jpg';

function App() {
  // สร้าง state สำหรับจัดการ modal
  const [modalOpen, setModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  // ข้อมูลติดต่อ
  const contactInfo = {
    phone: "0980314473", // แทนที่ด้วยหมายเลขโทรศัพท์จริงของคุณ
    email: "suntonrapot.khunchit@gmail.com" // แทนที่ด้วยอีเมลจริงของคุณ
  };

  // ข้อมูลโปรเจค
  const projects = [
    {
      id: 1,
      title: "License plate detection",
      status: "(work in progress)",
      tech: "",
      desc: "ระบบตรวจจับและอ่านป้ายทะเบียนรถยนต์โดยใช้เทคโนโลยี AI และ Computer Vision",
      fullDesc: "โปรเจคนี้เป็นระบบที่ใช้เทคโนโลยี Computer Vision และ Deep Learning ในการตรวจจับและอ่านป้ายทะเบียนรถยนต์จากภาพหรือวิดีโอ โดยมีขั้นตอนการทำงาน ได้แก่ การตรวจจับตำแหน่งป้ายทะเบียน, การแยกตัวอักษรและตัวเลข, และการแปลงเป็นข้อความ ซึ่งสามารถนำไปประยุกต์ใช้ในระบบลานจอดรถอัจฉริยะ, ระบบรักษาความปลอดภัย, หรือระบบตรวจสอบการจราจร",
      details: [
        { 
          title: "Backend", 
          value: "Python, OpenCV, TensorFlow, Flask",
          link: "https://github.com/tiw25999/license-plate-system",
          linkText: "GitHub Backend Repository"
        },
        { 
          title: "Frontend", 
          value: "React, Material-UI",
          link: "https://github.com/tiw25999/license-plate-web",
          linkText: "GitHub Frontend Repository"
        },
        { 
          title: "Demo-Deploy", 
          value: "(working)",
          link: "https://license-plate-web-production.up.railway.app/",
          linkText: "Live Demo (In Development)"
        }
      ]
    },
    {
      id: 2,
      title: "Weather Mobile App",
      status: "",
      tech: "by Flutter",
      desc: "แอปพลิเคชันพยากรณ์อากาศสำหรับมือถือ พัฒนาด้วย Flutter",
      fullDesc: "แอปพลิเคชันพยากรณ์อากาศสำหรับสมาร์ทโฟนทั้งระบบ iOS และ Android พัฒนาด้วย Framework Flutter และภาษา Dart เชื่อมต่อกับ Weather API เพื่อแสดงข้อมูลสภาพอากาศปัจจุบัน, การพยากรณ์ล่วงหน้า, อุณหภูมิ, ความชื้น, ความเร็วลม และสภาพอากาศทั่วไป ผู้ใช้สามารถค้นหาเมืองต่างๆ และบันทึกสถานที่โปรด",
      details: [
        { 
          title: "Technology", 
          value: "Flutter, Dart, OpenWeather API",
          link: "https://github.com/chin000ooo/FinalProject99-", // ถ้ามี GitHub repository
          linkText: "GitHub Repository"
        },
        { 
          title: "Features", 
          value: "Current weather, Forecasts, City search"
        },
        { 
          title: "Status", 
          value: "In development",
          // ไม่มีลิงก์เพราะยังไม่ได้ deploy
        }
      ]
    },
    {
      id: 3,
      title: "Web",
      status: "",
      tech: "",
      desc: "โปรเจคเว็บ พัฒนาด้วย html,css,javascript",
      fullDesc: "เว็บไซต์ส่วนตัวและโปรเจคเว็บต่างๆ พัฒนาด้วย HTML, CSS และ JavaScript",
      details: [
        { 
          title: "Frontend", 
          value: "HTML, CSS, JavaScript, React",
          link: "https://github.com/hashkunz/Scrum_09",
          linkText: "GitHub Repository"
        },
        { 
          title: "Demo-Deploy", 
          value: "Not deployed yet"
        }
      ]
    },
    {
      id: 4,
      title: "Practice Machine learning",
      status: "",
      tech: "",
      desc: "การฝึกฝนและเรียนรู้ด้าน Machine Learning",
      fullDesc: "โปรเจคสำหรับการเรียนรู้และฝึกฝนด้าน Machine Learning ผ่านการทำโจทย์และการทดลองต่างๆ เพื่อพัฒนาทักษะและความเข้าใจในการสร้างโมเดล AI",
      details: [
        { 
          title: "Technology", 
          value: "Python, TensorFlow, Scikit-learn",
          link: "https://github.com/tiw25999/Practice-ML",
          linkText: "GitHub Repository"
        },
        { 
          title: "Topics", 
          value: "Classification, Regression, Neural Networks"
        }
      ]
    },
    {
      id: 5,
      title: "Practice Java",
      status: "",
      tech: "",
      desc: "การฝึกฝนการเขียนโปรแกรมด้วยภาษา Java",
      fullDesc: "โปรเจคสำหรับการฝึกฝนและพัฒนาทักษะการเขียนโปรแกรมด้วยภาษา Java ผ่านการทำแบบฝึกหัด",
      details: [
        { 
          title: "Technology", 
          value: "Java, Spring Boot, Maven",
          link: "https://github.com/tiw25999/Practice-Java/tree/main",
          linkText: "GitHub Repository"
        },
        { 
          title: "Topics", 
          value: "logic of Java, OOP, loop, array, method, class"
        }
      ]
    }
    
  ];

  // ฟังก์ชันเปิด modal
  const openModal = (project) => {
    setActiveProject(project);
    setModalOpen(true);
  };

  // ฟังก์ชันปิด modal
  const closeModal = () => {
    setModalOpen(false);
    setActiveProject(null);
  };

  // ฟังก์ชันเปิด contact modal
  const openContactModal = () => {
    setContactModalOpen(true);
  };

  // ฟังก์ชันปิด contact modal
  const closeContactModal = () => {
    setContactModalOpen(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={profileImage} className="App-logo" alt="profile" />
        <h1>Suntonrapot Khunchit</h1>
      </header>
      
      <div className="content-section">
        {/* Resume, GitHub, และ Contact เป็นกล่อง 3 คอลัมน์ */}
        <div className="links-container">
          <a href={resumePDF} target="_blank" rel="noopener noreferrer" className="link-box">
            Resume
          </a>
          
          <a href="https://github.com/tiw25999" target="_blank" rel="noopener noreferrer" className="link-box">
            GitHub Profile
          </a>
          
          <button onClick={openContactModal} className="link-box contact-btn">
            Contact
          </button>
        </div>
        
        {/* โปรเจคแบ่งเป็น 3 คอลัมน์ */}
        <div className="projects-container">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-column" 
              onClick={() => openModal(project)}
            >
              <h3>{project.title}</h3>
              {project.status && <p className="project-status">{project.status}</p>}
              {project.tech && <p className="project-tech">{project.tech}</p>}
              <p className="project-desc">{project.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal สำหรับแสดงรายละเอียดโปรเจค */}
      {modalOpen && activeProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{activeProject.title}</h2>
              <button className="close-button" onClick={closeModal}>&times;</button>
            </div>
            <div className="modal-body">
              {activeProject.status && <p className="project-status modal-status">{activeProject.status}</p>}
              {activeProject.tech && <p className="project-tech modal-tech">{activeProject.tech}</p>}
              <p className="modal-full-desc">{activeProject.fullDesc}</p>
              
              {/* ตารางรายละเอียดเพิ่มเติม */}
              <div className="project-details-table">
                <table>
                  <tbody>
                    {activeProject.details.map((detail, index) => (
                      <tr key={index}>
                        <td className="detail-title">{detail.title}</td>
                        <td className="detail-value">
                          {detail.link ? (
                            <a 
                              href={detail.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="detail-link"
                            >
                              {detail.linkText || detail.value}
                              {detail.title === "Demo-Deploy" && detail.value === "(working)" && (
                                <span className="working-status"> (working)</span>
                              )}
                            </a>
                          ) : (
                            <>
                              {detail.value}
                              {detail.title === "Demo-Deploy" && detail.value === "(working)" && (
                                <span className="working-status">{detail.value}</span>
                              )}
                            </>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal สำหรับแสดงข้อมูลติดต่อ */}
      {contactModalOpen && (
        <div className="modal-overlay" onClick={closeContactModal}>
          <div className="modal-content contact-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Contact Information</h2>
              <button className="close-button" onClick={closeContactModal}>&times;</button>
            </div>
            <div className="modal-body">
              <div className="contact-item">
                <div className="contact-icon phone-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <a href={`tel:${contactInfo.phone}`} className="contact-text">{contactInfo.phone}</a>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon email-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <a href={`mailto:${contactInfo.email}`} className="contact-text">{contactInfo.email}</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;