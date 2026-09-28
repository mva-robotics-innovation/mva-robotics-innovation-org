const projects = [
  ["PRALAYA-X", "Disaster & resilience technology initiative", "Information available through MVA project records.", "—", "Project profile"],
  ["RAKSHAK-AI TRINITY", "AI / safety innovation", "Project information will be published as approved.", "—", "Project profile"],
  ["SATQUERY AI", "AI / remote-sensing related initiative", "Project information will be published as approved.", "—", "Project profile"],
  ["BIOREVIVE 360°", "Innovation initiative", "Project information will be published as approved.", "—", "Project profile"],
  ["PRIYA AI", "Artificial intelligence initiative", "Project information will be published as approved.", "—", "Project profile"],
  ["CHRONOAI", "Artificial intelligence initiative", "Project information will be published as approved.", "—", "Project profile"],
  ["NYAYA BUILDER", "Technology / innovation initiative", "Project information will be published as approved.", "—", "Project profile"]
];
export const metadata={title:"Projects"};
export default function Projects(){return <><section className="page-hero"><div className="container"><span className="eyebrow">PROJECT SHOWCASE</span><h1>Ideas becoming technology.</h1><p>Explore projects and innovation initiatives developed within the MVA ecosystem.</p></div></section><section className="section section-light"><div className="container"><div className="grid grid-3">{projects.map(([title,category,desc,tech,status],i)=><article className="card" key={title}><div className="project-image-placeholder"><span>PROJECT {String(i+1).padStart(2,"0")}</span></div><span className="badge">{category}</span><h3>{title}</h3><p className="muted">{desc}</p><div className="project-meta"><span><b>Technology</b>{tech}</span><span><b>Status</b>{status}</span></div><a className="text-link dark-link" href="/contact">View project →</a></article>)}</div></div></section></>}
