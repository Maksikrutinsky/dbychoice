"use client";

import { useState, useEffect, useRef } from "react";

interface Step {
  num: number;
  title: string;
  shortDesc: string;
  duration?: string;
  investment?: string;
  what: string[];
  receives: string[];
}

const STEPS: Step[] = [
  {
    num: 1, title: "Discovery Consultation", shortDesc: "First conversation — goals & budget",
    duration: "15–20 min", investment: "Complimentary",
    what: ["A conversation about your project — goals, timeline, and budget.", "Opportunity to ask questions and determine if we're the right fit for each other."],
    receives: ["Professional assessment of project readiness", "Honest feedback on what's realistic within your budget", "Clear next steps if we move forward"],
  },
  {
    num: 2, title: "Site Assessment", shortDesc: "Walk the space together",
    duration: "60–90 min", investment: "$100–150 (credited toward project)",
    what: ["We meet at your property (or connect virtually) to walk through the space, take measurements, and understand how you use the environment."],
    receives: ["Comprehensive property evaluation", "Identification of design opportunities & constraints", "Initial recommendations on layout, flow, and aesthetic direction"],
  },
  {
    num: 3, title: "Proposal & Agreement", shortDesc: "Scope, timeline & pricing defined",
    what: ["A detailed proposal outlines every service, deliverable, timeline, and price.", "Work begins only after both parties have signed the agreement."],
    receives: ["Scope of Work: every service clearly defined", "Realistic project timeline with milestones", "Pricing structure (flat fee, hourly, or percentage)", "Payment terms & exclusions in writing"],
  },
  {
    num: 4, title: "Measurements & Documentation", shortDesc: "Precision survey of the property",
    what: ["Precise measurements are taken. The property is documented — walls, mechanical systems, electrical panels, HOA restrictions."],
    receives: ["Accurate as-built drawings (if needed)", "Photographic documentation of existing conditions", "Early identification of potential challenges", "Coordination with structural professionals if required"],
  },
  {
    num: 5, title: "Concept Development", shortDesc: "Vision starts to take shape",
    what: ["The design direction develops based on your preferences and how you live. Material choices account for Arizona's climate and durability alongside aesthetic goals."],
    receives: ["Concept boards showing the proposed aesthetic direction", "Full color palette", "Preliminary material selections (flooring, tile, countertops, cabinetry)", "Lighting concepts", "Optional 3D renderings"],
  },
  {
    num: 6, title: "Space Planning", shortDesc: "Detailed floor plans & layouts",
    what: ["Detailed floor plans show exactly where furniture, fixtures, and architectural elements will be placed — with 2–3 layout options to choose from."],
    receives: ["Scaled floor plans with precise furniture & fixture placement", "Multiple layout options when applicable", "Clear understanding of how the space will function daily"],
  },
  {
    num: 7, title: "Construction Documents", shortDesc: "Technical drawings for your contractor",
    what: ["Technical drawings and specifications are prepared — the instruction manual your contractor uses to build exactly what's been designed."],
    receives: ["Complete set of professional construction documents", "Electrical, plumbing, demolition, tile & millwork drawings", "Finish schedules (every material, every room)", "Permit-ready drawings if needed"],
  },
  {
    num: 8, title: "Material Selection & Procurement", shortDesc: "Every finish, fixture & piece selected",
    what: ["Every finish, fixture, and piece of furniture is selected — flooring, tile, cabinetry, countertops, lighting, furniture, rugs, window treatments, art. Everything."],
    receives: ["Physical sample boards you can see and touch", "Product specifications with links & catalogs", "Transparent pricing for every item", "Lead-time info to keep the schedule on track"],
  },
  {
    num: 9, title: "Contractor Bidding", shortDesc: "Documents go out, bids come in",
    what: ["Construction documents are sent to contractors for bidding. Bids are reviewed, clarifications provided, and value engineering explored if needed."],
    receives: ["Professional drawings contractors can bid from accurately", "Review & comparison of submitted proposals", "Expert guidance on whether bids are reasonable", "Value engineering solutions if budget adjustments are needed"],
  },
  {
    num: 10, title: "Construction Administration", shortDesc: "On-site oversight during building",
    what: ["Regular site visits ensure work is executed according to plan. Contractor questions are answered in real time. Samples are reviewed and substitutions approved."],
    receives: ["Regular on-site visits at key milestones", "Real-time response to contractor questions (RFIs)", "Review & approval of material samples and mock-ups", "Design issues identified and resolved as they arise"],
  },
  {
    num: 11, title: "Installation & Final Styling", shortDesc: "Every piece placed, every detail right",
    what: ["Furniture is delivered. Lighting installed. Every piece is placed, every surface styled, every detail adjusted until the space reflects exactly what was envisioned."],
    receives: ["Professional furniture placement & arrangement", "Installation of lighting, artwork & accessories", "Styling of all surfaces and decorative elements", "Final walkthrough together", "Punch list of any remaining minor items"],
  },
  {
    num: 12, title: "Project Closeout", shortDesc: "Complete handover & documentation",
    what: ["Final walkthrough conducted together. All warranties, care instructions, and vendor contacts are handed over. Complete project documentation provided."],
    receives: ["Final project documentation & records", "Warranty information for materials & furnishings", "Vendor contact list for future needs", "Care & maintenance instructions", "Paint colors & finish specs for future touch-ups"],
  },
];

// Board layout: Row1 L→R [0-3], Row2 R→L [7,6,5,4], Row3 L→R [8-11]
const ROWS = [
  { indices: [0, 1, 2, 3], dir: "ltr" as const },
  { indices: [7, 6, 5, 4], dir: "rtl" as const },
  { indices: [8, 9, 10, 11], dir: "ltr" as const },
];

// Pac-Man order: 0→1→2→3→4→5→6→7→8→9→10→11
const PAC_ORDER = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

export default function DesignProcess() {
  const [openStep, setOpenStep] = useState<number | null>(null);
  const [pacIdx, setPacIdx] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Animate Pac-Man along the path
  useEffect(() => {
    const timer = setInterval(() => {
      setPacIdx((p) => (p + 1) % 12);
    }, 1600);
    return () => clearInterval(timer);
  }, []);

  // Scroll reveal
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) el.classList.add("dp-visible"); },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const toggle = (idx: number) =>
    setOpenStep((o) => (o === idx ? null : idx));

  const activePacStepIdx = PAC_ORDER[pacIdx];

  return (
    <section ref={sectionRef} className="dp-section">
      <div className="dp-inner">

        {/* Header */}
        <div className="dp-header">
          <span className="dp-eyebrow">The Studio · How We Work</span>
          <h2 className="dp-heading">The Design Process</h2>
          <p className="dp-subheading">
            A clear, collaborative approach from first conversation to final reveal.
            Every project follows a structured process designed to eliminate surprises and deliver results.
          </p>
          <div className="dp-rule" />
        </div>

        {/* Board */}
        <div className="dp-board" role="list">
          {ROWS.map((row, rowIdx) => (
            <div key={rowIdx} className="dp-row-wrap">

              {/* Step row */}
              <div className={`dp-row dp-row-${row.dir}`}>
                {row.indices.map((stepIdx, colIdx) => {
                  const step = STEPS[stepIdx];
                  const isPac = activePacStepIdx === stepIdx;
                  const isOpen = openStep === stepIdx;
                  return (
                    <div key={stepIdx} className={`dp-node${isOpen ? " dp-node-open" : ""}`} role="listitem">

                      {/* Arrow between nodes */}
                      {colIdx < 3 && (
                        <div className={`dp-arrow dp-arrow-${row.dir}`}>
                          <span className="dp-arrow-line" />
                          <span className="dp-arrow-head" />
                        </div>
                      )}

                      {/* Step circle */}
                      <button
                        className="dp-circle"
                        onClick={() => toggle(stepIdx)}
                        aria-expanded={isOpen}
                        title={step.title}
                      >
                        {isPac && <span className="dp-pac" />}
                        <span className="dp-num">{step.num < 10 ? `0${step.num}` : step.num}</span>
                      </button>

                      {/* Step label */}
                      <div className="dp-label">
                        <strong>{step.title}</strong>
                        <span>{step.shortDesc}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Vertical connector between rows */}
              {rowIdx < 2 && (
                <div className={`dp-v-connector dp-v-${row.dir === "ltr" ? "right" : "left"}`}>
                  <span className="dp-v-line" />
                  <span className="dp-v-arrow" />
                </div>
              )}

              {/* Detail panels for steps in this row (opens inline below) */}
              {row.indices.map((stepIdx) => {
                if (openStep !== stepIdx) return null;
                const step = STEPS[stepIdx];
                return (
                  <div key={`detail-${stepIdx}`} className="dp-detail">
                    <button className="dp-detail-close" onClick={() => setOpenStep(null)} aria-label="Close">✕</button>
                    <div className="dp-detail-num">Step {step.num}</div>
                    <h3 className="dp-detail-title">{step.title}</h3>
                    {(step.duration || step.investment) && (
                      <div className="dp-detail-meta">
                        {step.duration && <span>⏱ {step.duration}</span>}
                        {step.investment && <span>💛 {step.investment}</span>}
                      </div>
                    )}
                    <div className="dp-detail-body">
                      <div className="dp-detail-col">
                        <h4>What happens</h4>
                        {step.what.map((w, i) => (
                          <p key={i}>{w}</p>
                        ))}
                      </div>
                      <div className="dp-detail-col">
                        <h4>What you receive</h4>
                        <ul>
                          {step.receives.map((r, i) => (
                            <li key={i}>{r}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}

            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="dp-footer-note">
          <p>Click any step to see what happens — and what you receive.</p>
        </div>

      </div>
    </section>
  );
}
