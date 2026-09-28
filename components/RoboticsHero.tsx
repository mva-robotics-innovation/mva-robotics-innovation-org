import Image from "next/image";

export default function RoboticsHero() {
  return (
    <div className="hero-art">
      <Image
        src="/images/robotics-lab-hero.png"
        alt="Professional humanoid robot in a robotics research laboratory"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
        className="hero-robot-image"
      />
    </div>
  );
}