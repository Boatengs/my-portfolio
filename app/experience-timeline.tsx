"use client";

import { useState } from "react";

type Role = {
  period: string;
  place: string;
  title: string;
  org: string;
  duties: string[];
};

const roles: Role[] = [
  {
    period: "2025 to PRESENT",
    place: "New York",
    title: "Finance, Development & IT Administration Support Analyst",
    org: "Village Health Works",
    duties: [
      "Analyze financial and donor data, investigate discrepancies, prepare forecasts and management reporting, and establish data quality standards that improve trust in organizational records.",
      "Traced a systematic error in an expatriate health insurance billing extract to annual rates being calculated as monthly ones, then documented the correction.",
      "Provision access and onboard users to internal platforms, Google Workspace and Microsoft 365, and document system processes so technical and nontechnical colleagues can use them with confidence.",
    ],
  },
  {
    period: "2024 to 2025",
    place: "Portland, Maine",
    title: "Student Ambassador",
    org: "Northeastern University · The Roux Institute",
    duties: [
      "Represented the student experience through campus programs and community events, welcomed prospective and incoming students, provided peer guidance, and helped strengthen engagement and connections across the Roux community.",
      "Partnered with university staff and fellow ambassadors to coordinate logistics, answer questions and deliver an inclusive experience for students and visitors.",
      "Gathered questions and feedback from prospective students and visitors, and worked with staff to improve how information was shared.",
    ],
  },
  {
    period: "2022",
    place: "Saratov, Russia",
    title: "Software Engineer Intern",
    org: "Bosch Techno-Engineering Ltd",
    duties: [
      "Supported development and QA cycles, diagnosed defects, and helped improve system stability by 20% through systematic debugging and performance tuning.",
      "Wrote test cases, validated functionality and documented results, then worked with engineers on defect resolution.",
      "Built an internal encryption and decryption testing utility to verify data integrity and strengthen security practices.",
    ],
  },
  {
    period: "2019 to 2023",
    place: "Saratov, Russia",
    title: "Peer Tutor, English Language",
    org: "Independent Academic & Language Support",
    duties: [
      "Provided personalized English language instruction to Russian learners, strengthening conversational fluency, reading comprehension, and practical communication for academic study, international travel, tourism, and everyday situations.",
      "Adapted lessons to individual goals, proficiency levels and confidence, helping students use English effectively in academic, professional and social settings.",
    ],
  },
];

export function ExperienceTimeline() {
  const [open, setOpen] = useState<Set<number>>(() => new Set([0]));
  const allOpen = open.size === roles.length;

  const toggle = (index: number) =>
    setOpen((current) => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });

  return (
    <>
      <div className="timeline-controls">
        <span>
          {roles.length} roles · select a role to see its responsibilities
        </span>
        <button
          type="button"
          onClick={() =>
            setOpen(allOpen ? new Set() : new Set(roles.map((_, i) => i)))
          }
        >
          {allOpen ? "Collapse all" : "Expand all"}
        </button>
      </div>
      <div className="timeline timeline-accordion">
        {roles.map((role, index) => {
          const isOpen = open.has(index);
          const panelId = `role-duties-${index}`;
          const buttonId = `role-toggle-${index}`;
          return (
            <article key={role.title} className={isOpen ? "is-open" : undefined}>
              <div className="timeline-meta">
                <b>{role.period}</b>
                <span>{role.place}</span>
              </div>
              <div>
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    className="role-toggle"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(index)}
                  >
                    <span className="role-title">{role.title}</span>
                    <span className="role-arrow" aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="18" height="18">
                        <path
                          d="M6 9l6 6 6-6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                </h3>
                <h4>{role.org}</h4>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  aria-hidden={!isOpen}
                  className="role-panel"
                >
                  <div>
                    <ul>
                      {role.duties.map((duty) => (
                        <li key={duty}>{duty}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
