const pillars = [
  {
    number: "01",
    title: "Rural Youth Innovation",
    text: "Bringing AI, IoT and Robotics training to rural areas through seminars, workshops, online internships and Innovation Labs. We teach in Hindi and local languages to help rural youth become technology creators."
  },
  {
    number: "02",
    title: "Urban & Pan-India Youth Innovation",
    text: "Advanced Robotics, AI product development and Industry 4.0 skills for youth across India, connecting practical innovation learning with national opportunities."
  },
  {
    number: "03",
    title: "Farmer Empowerment",
    text: "Developing low-cost IoT and AI solutions for Smart Irrigation, Soil Monitoring and Crop Automation to support sustainable and profitable farming."
  },
  {
    number: "04",
    title: "Women Empowerment in Tech",
    text: "Dedicated pathways for rural and urban women to become technology innovators, trainers and entrepreneurs — creating women technology leaders from Jharkhand."
  }
];

export function MissionPillars() {
  return (
    <div className="pillar-grid">
      {pillars.map((pillar) => (
        <article className="glass-card pillar-card" key={pillar.number}>
          <span className="pillar-number">{pillar.number}</span>
          <h3>{pillar.title}</h3>
          <p>{pillar.text}</p>
        </article>
      ))}
    </div>
  );
}
