const pillars = [
  { number: "01", title: "Rural Youth Innovation", text: "Bring AI, IoT and Robotics training to rural areas through seminars, workshops, online internships and Innovation Labs. Use Hindi and local languages where appropriate.", goal: "Convert rural youth from technology consumers into technology creators." },
  { number: "02", title: "Urban & Pan-India Youth Innovation", text: "Provide advanced innovation training across India with a focus on Advanced Robotics, AI Product Development, Industry 4.0 and Technology Entrepreneurship.", goal: "Connect practical innovation learning with national opportunities." },
  { number: "03", title: "Farmer Empowerment", text: "Focus on Smart Irrigation, Soil Monitoring, Crop Automation, IoT Agriculture and AI Agriculture.", goal: "Support sustainable and technology-enabled farming." },
  { number: "04", title: "Women Empowerment in Technology", text: "Create pathways for rural and urban women to become Innovators, Technology Trainers, Entrepreneurs and Technology Leaders.", goal: "Build inclusive pathways into technology and innovation." }
];

export function MissionPillars() {
  return <div className="pillar-grid">{pillars.map((pillar) => <article className="pillar-card" key={pillar.number}><span className="pillar-number">{pillar.number}</span><div><span className="eyebrow">MISSION PILLAR</span><h3>{pillar.title}</h3><p>{pillar.text}</p><strong>{pillar.goal}</strong></div></article>)}</div>;
}
