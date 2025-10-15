const PersonalResume = () => {
  const resumeData = {
    name: "Jeffrey Buencamino",
    title: "Software Engineer / Web Developer",
    location: "Anza, CA",
    email: "Jangeloinvests@gmail.com",
    phone: "(442) 275-4757",
    website: "yourwebsite.com",
    linkedin: "linkedin.com/in/you",
    github: "github.com/you",
    summary:
      "Aspiring web developer skilled in building responsive web apps with React, Bootstrap 5, and Node.js.",
    experience: [
      {
        company: "Chevron Gas Station",
        role: "Customer Service Representative (CSR)",
        from: "2024",
        to: "2025",
        bullets: [
          "Deliver exceptional customer service by efficiently processing transactions and assisting with fuel and retail purchases..",
          "Ensure a clean, safe, and organized store environment in compliance with Chevron standards.",
          "Support daily operations by restocking merchandise, monitoring inventory, and maintaining accurate cash handling procedures."
        ],
      },
      {
        company: "FedEx",
        role: "Package Handler",
        from: "2023",
        to: "2024",
        bullets: [
          "Sort, scan, and load packages with accuracy and efficiency to meet strict delivery deadlines.",
          "Collaborate with team members to optimize workflow and ensure timely dispatch of shipments.",
          "Maintain high productivity in a fast-paced environments while minimizing errors and damages."
        ],
      },
      {
        company: "Cozy Home Estates, LLC",
        role: "Founder",
        from: "2019",
        to: "2023",
        bullets: [
          "Built a real estate wholesaling company from ground zero.",
          "Directed acquisitions and conducted in-depth property valuations.",
          "Negotiated deals and maintained client relationships."
        ]
      }
    ],
    education: [
      {
        school: "Poway Adult School",
        degree: "General Educational Development (GED) Diploma",
        year: "2018",
      },
    ],
    skills: ["React", "Node.js", "MongoDB", "Express", "Bootstrap 5", "HTML", "CSS", "JavaScript", "Python", "LangGraph", "Flask", "Github Copilot", "Prompt Engineering", "Effective Listening"],
    projects: [
      {
        name: "Node.js Backend Server",
        description: "Backend server for handling React routes for blog. Personal website showcasing projects and skills.",
        link: "https://github.com/jeffreybuencamino/testing-backendNode.js-v1",
      },
      {
        name: "Real Estate CRM (Node.js, React, MongoDB)",
        description: "Custom real estate CRM CRUD application that manages leads, sends to live MongoDB database, utilizes Node.js backend, etc. ",
        link: "https://github.com/jeffreybuencamino/rei-crm-frontend",
      },
      {
        name: "AI Voice Assistant (Retell AI, Flask, HTTP Requests)",
        description: "Custom Voice Assistant meant to answer prospective employer phone calls for prospective employers highlighting skills, experience, etc. Utilizes Retell AI, HTTP requests, and Flask.",
        link: "https://github.com/jeffreybuencamino/retell-ai-voice-assistant"
      }
    ],
  };

  return (
    <div className="content">
      <h1>{resumeData.name}</h1>
      <h3>{resumeData.title}</h3>
      <p>{resumeData.location}</p>
      <p>
        <a href={`mailto:${resumeData.email}`}>{resumeData.email}</a> | {resumeData.phone}
      </p>
      {/* <p>
        <a href={`https://${resumeData.website}`} target="_blank" rel="noreferrer">
          {resumeData.website}
        </a>
      </p> */}
<br />
      <section>
        <h2>Summary</h2>
        <p>{resumeData.summary}</p>
      </section>
      <br />
      <section>
        <h2>Skills</h2>
        <ul>
          {resumeData.skills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </section>
<br />
      <section>
        <h2>Experience</h2>
        {resumeData.experience.map((job, index) => (
          <div key={index} className="blog-preview">
            <h2>{job.role}</h2>
            <p><strong>{job.company}</strong></p>
            <p>{job.from} - {job.to}</p><br />
            <ul>
              {job.bullets.map((bullet, i) => (
                <li key={i}>{bullet}<br/><br/></li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section>
        <h2>Education</h2>
        {resumeData.education.map((edu, i) => (
          <div key={i}>
            <p>{edu.school}</p>
            <p>{edu.degree} • {edu.year}</p>
          </div>
        ))}
      </section>

<br /><br />
      <section>
        <h2>Projects</h2><br />
        {resumeData.projects.map((proj, i) => (
          <div className="m-2 blog-preview" key={i}>
            <h3>{proj.name}</h3>
            <p>{proj.description}</p>
            <a href={proj.link} target="_blank" rel="noreferrer">View Project</a>


              {/* ADDS XTRA </a> TAG FOR 2ND TO LAST PROJECT  */}
            {i === resumeData.projects.length - 2 && (
               <a 
                href="https://github.com/jeffreybuencamino/rei-crm-backend" 
                target="_blank" 
                rel="noreferrer" 
                className="ms-3"
                // style={{ marginLeft: '10px', color: 'blue' }}
              >
                View Project Backend
              </a>
            )}

            {/* ADDS XTRA </a> TAG FOR LAST PROJECT */}
            {i === resumeData.projects.length - 1 && (
              <a 
                href="https://example.com/extra-link" 
                target="_blank" 
                rel="noreferrer" 
                className="ms-3"
                // style={{ marginLeft: '10px', color: 'blue' }}
              >
                Test my voice assistant
              </a>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default PersonalResume;
