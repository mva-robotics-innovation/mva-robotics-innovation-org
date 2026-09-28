"use client";

import dynamic from "next/dynamic";

const RobotScene = dynamic(
  () => import("./RobotScene"),
  {
    ssr: false,
    loading: () => (
      <div
        style={{
          minHeight: 560,
          display: "grid",
          placeItems: "center",
          color: "#aebbd1",
        }}
      >
        Initializing robotics visualization...
      </div>
    ),
  }
);

export default function RoboticsHero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "calc(100vh - 80px)",
        display: "grid",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 75% 45%, rgba(25,118,210,.18), transparent 32%), radial-gradient(circle at 15% 70%, rgba(244,123,32,.08), transparent 25%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="mva-container"
        style={{
          position: "relative",
          zIndex: 2,
          display: "grid",
          gridTemplateColumns:
            "minmax(0, .9fr) minmax(480px, 1.1fr)",
          gap: 30,
          alignItems: "center",
        }}
      >
        <div>
          <div className="mva-eyebrow">
            RURAL INITIATIVE • TECH INDIA MISSION
          </div>

          <h1 className="mva-section-title">
            Robotics.
            <br />
            <span style={{ color: "#f47b20" }}>Artificial Intelligence.</span>
            <br />
            Research for Bharat.
          </h1>

          <p
            className="mva-section-text"
            style={{ maxWidth: 650 }}
          >
            MVA Robotics Innovation Organization develops practical
            technology across robotics, artificial intelligence, IoT,
            scientific research and technology education — with a focus
            on expanding innovation opportunities from Jharkhand to
            communities across Bharat.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              marginTop: 30,
            }}
          >
            <a
              href="/projects"
              className="mva-button mva-button-primary"
            >
              Explore Innovation
            </a>

            <a
              href="/programs"
              className="mva-button mva-button-secondary"
            >
              Explore Programs
            </a>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 25,
              marginTop: 42,
              color: "#aebbd1",
              fontSize: 14,
            }}
          >
            <span>AI & Robotics</span>
            <span>Research</span>
            <span>IoT & Automation</span>
            <span>Rural Technology</span>
          </div>
        </div>

        <div
          className="mva-card"
          style={{
            minHeight: 600,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 20,
              left: 22,
              zIndex: 5,
              fontSize: 11,
              letterSpacing: ".15em",
              color: "#aebbd1",
            }}
          >
            MVA ROBOTICS LAB • AI SYSTEM ONLINE
          </div>

          <RobotScene />
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 25,
          left: 0,
          right: 0,
          textAlign: "center",
          color: "#60708a",
          fontSize: 12,
          letterSpacing: ".12em",
        }}
      >
        WE START FROM JHARKHAND • WE SCALE FOR BHARAT
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .mva-container {
            grid-template-columns: 1fr !important;
          }

          .mva-card {
            min-height: 500px !important;
          }
        }
      `}</style>
    </section>
  );
}
