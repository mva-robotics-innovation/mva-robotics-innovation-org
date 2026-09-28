const courses = [
  ["AI & Machine Learning", "Foundations, machine learning workflows, model thinking and practical AI projects.", "Foundation → Advanced"],
  ["Robotics & Embedded Systems", "Robotics, microcontrollers, Arduino, Raspberry Pi, ESP32 and embedded prototyping.", "Beginner → Advanced"],
  ["IoT & Automation", "Connected devices, sensors, automation and practical Internet of Things systems.", "Beginner → Intermediate"],
  ["Computer Vision", "Image understanding, visual AI concepts and robotics vision applications.", "Intermediate"],
  ["Programming", "Programming foundations for learners building technology and automation projects.", "Beginner → Intermediate"],
  ["Research Methodology", "Research questions, literature review, experimentation, documentation and presentation.", "All levels"],
  ["Smart Agriculture", "Soil monitoring, smart irrigation, IoT agriculture and AI-enabled farming concepts.", "Beginner → Applied"],
  ["Innovation & Entrepreneurship", "Idea development, prototyping, product thinking and technology entrepreneurship.", "All levels"]
];
export const metadata = { title: "Courses" };
export default function CoursesPage() {
  return <><section className="page-hero"><div className="container"><span className="eyebrow">LEARNING PROGRAMS</span><h1>Build skills that become real-world capability.</h1><p>Practical learning across AI, robotics, embedded systems, IoT, research, smart agriculture and innovation.</p></div></section><section className="section section-light"><div className="container"><div className="grid grid-4">{courses.map(([title, text, level], i) => <article className="card" key={title}><span className="badge">PROGRAM {String(i+1).padStart(2,"0")}</span><h3>{title}</h3><p className="muted">{text}</p><p><strong>Level:</strong> {level}</p><a className="text-link dark-link" href="/admissions">Learn more →</a></article>)}</div></div></section></>;
}
