import fs from "node:fs/promises";
import path from "node:path";

const roots = ["docs", "site-static"];
const assetName = "modern-white-20260822.css";
const assetVersion = "4";
const assetHref = `/my-portfolio/assets/${assetName}?v=${assetVersion}`;
const stylesheet = await fs.readFile("app/modern-white.css", "utf8");
const evidenceByTitle = new Map([
  ["Price Elasticity Modeling", ["9", "Executive insight areas"]],
  ["Water Quality Analysis", ["3", "Analytical methods"]],
  ["Healthcare Resource Modeling", ["3", "Classifiers compared"]],
  ["Sentiment Analyzer", ["91.19%", "Test accuracy"]],
  ["Sports Q&A Chatbot", ["10", "Source documents"]],
  ["Medical Q&A Model", ["0.6573", "Final validation loss"]],
  ["Skin Disease Classifier", ["74.15%", "Test accuracy"]],
  ["Open-Vocabulary Object Detector", ["80 → open", "Vocabulary expanded"]],
  ["Skin Lesion Segmentation", ["0.9115", "Test Dice score"]],
  ["LLM Evaluation Framework", ["+17.8%", "Average ROUGE gain"]],
]);
const professionalCopy = [
  ["Sampson Boateng — Data Analyst", "Sampson Boateng — Data Analytics &amp; Applied Machine Learning"],
  ["Data analyst and machine learning practitioner turning complex data into clear direction.", "Data analytics and applied machine learning professional transforming data into insight, strategy, and impact."],
  ["DATA ANALYST · ML PRACTITIONER · DATA GOVERNANCE · INTELLIGENT SYSTEMS", "DATA ANALYTICS · APPLIED MACHINE LEARNING · DATA GOVERNANCE · INTELLIGENT SYSTEMS"],
  ["Turning complex data into <em>clear direction.</em>", "Transforming data into <em>insight, strategy, and impact.</em>"],
  ["I build reliable analysis, decision-ready dashboards, and practical machine learning systems—working across Finance and Development to bring rigorous data and technical insight to mission-driven work.", "I translate complex information into actionable intelligence, decision-ready reporting, and practical machine learning solutions—supporting finance, development, and mission-driven organizations with rigorous analytical and technical expertise."],
  ["Projects that solve<br/><em>human problems.</em>", "Applied solutions to<br/><em>real-world challenges.</em>"],
  ["Each case study explains why the problem mattered, what I built, what the result means, and where the idea can be used.", "Each case study outlines why the challenge matters, the analytical approach, measurable outcomes, and broader real-world applications."],
  ["Analysis grounded<br/>in <em>real operations.</em>", "Expertise shaped by<br/><em>real-world practice.</em>"],
  ["Service that becomes<br/><em>stronger systems.</em>", "Service that drives<br/><em>stronger systems.</em>"],
  ["My work is grounded in service and community building—from creating inclusive spaces to improving how information moves through an organization.", "My work integrates service, community engagement, and operational improvement—strengthening inclusion, communication, and the systems organizations rely on to deliver their missions."],
  ["Leadership built<br/>around <em>belonging.</em>", "Leadership grounded<br/>in <em>service and inclusion.</em>"],
  ["My leadership experience is rooted in service: creating welcoming communities, strengthening participation, and using initiative to help people connect.", "My leadership reflects a sustained commitment to inclusive communities, meaningful engagement, and initiatives that create lasting institutional and social impact."],
  ["I connect the full path from a complicated question to a decision people can trust—combining analysis, modeling, visualization, and dependable systems.", "I connect complex organizational challenges with informed, defensible decisions through analytical rigor, statistical modeling, effective visualization, and reliable systems."],
  ["I currently work across Finance and Development, bringing data and technical insight to financial and donor analysis, reconciliation, reporting, data quality, systems improvement, and AI-enabled healthcare grant projects.", "I currently work across finance and development, applying analytical and technical expertise to financial and donor data, reconciliation, management reporting, data quality, organizational systems, and AI-enabled healthcare grant initiatives."],
  ["I recently completed my master's in Analytics and Applied Machine Intelligence at Northeastern University. I care about accuracy at every step—from cleaning and validation to modeling, visualization, and an executive-ready narrative.", "I recently completed my master's in Analytics and Applied Machine Intelligence at Northeastern University. My approach emphasizes accuracy and accountability across the full analytical lifecycle—from data validation and modeling to visualization and executive-ready communication."],
  ["I recently completed my master&#x27;s in Analytics and Applied Machine Intelligence at Northeastern University. I care about accuracy at every step—from cleaning and validation to modeling, visualization, and an executive-ready narrative.", "I recently completed my master&#x27;s in Analytics and Applied Machine Intelligence at Northeastern University. My approach emphasizes accuracy and accountability across the full analytical lifecycle—from data validation and modeling to visualization and executive-ready communication."],
  ["Questions I'm<br/><em>building toward.</em>", "Research advancing<br/><em>responsible innovation.</em>"],
  ["Questions I&#x27;m<br/><em>building toward.</em>", "Research advancing<br/><em>responsible innovation.</em>"],
  ["Applied research directions where better data systems can improve trust, detection, and access.", "Applied research priorities focused on trustworthy intelligent systems, responsible detection, and equitable access."],
  ["Ready to contribute<br/>where <em>data matters.</em>", "Advancing organizations<br/>through <em>data and intelligence.</em>"],
  ["I'm interested in roles that combine rigorous analysis, thoughtful modeling, and clear communication.", "I welcome opportunities that integrate rigorous analytics, applied machine learning, strategic communication, and measurable organizational impact."],
  ["I&#x27;m interested in roles that combine rigorous analysis, thoughtful modeling, and clear communication.", "I welcome opportunities that integrate rigorous analytics, applied machine learning, strategic communication, and measurable organizational impact."],
  ["Have a data problem<br/>worth <em>solving?</em>", "Have a strategic challenge<br/>worth <em>solving together?</em>"],
];

async function walk(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(entryPath)));
    else if (entry.name.endsWith(".html")) files.push(entryPath);
  }

  return files;
}

for (const root of roots) {
  await fs.writeFile(path.join(root, "assets", assetName), stylesheet);

  for (const file of await walk(root)) {
    let html = await fs.readFile(file, "utf8");
    for (const [before, after] of professionalCopy) {
      html = html.replaceAll(before, after);
    }
    const newLink = `<link rel="stylesheet" href="${assetHref}"/>`;

    const isHome = path.dirname(file) === root;
    const nav = `<nav class="nav shell" aria-label="Primary navigation"><a class="wordmark" href="${isHome ? "#top" : "/my-portfolio/"}">SB<span>.</span></a><div class="nav-links"><a href="${isHome ? "#about" : "/my-portfolio/#about"}">About</a><a href="${isHome ? "#work" : "/my-portfolio/work"}">Projects</a><a href="${isHome ? "#experience" : "/my-portfolio/#experience"}">Experience</a><a href="${isHome ? "#leadership" : "/my-portfolio/leadership"}">Leadership</a><a href="/my-portfolio/person">Beyond Work</a><a class="nav-cta" href="/my-portfolio/resume">Résumé <span>↗</span></a></div></nav>`;
    html = html.replace(/<nav\b[^>]*>[\s\S]*?<\/nav>/, nav);
    html = html.replace(new RegExp(`${assetName.replaceAll(".", "\\.")}\\?v=\\d+`, "g"), `${assetName}?v=${assetVersion}`);

    if (isHome && path.basename(file) === "index.html") {
      if (!html.includes('class="hero-actions"')) {
        html = html.replace(
          '<a class="text-link" href="#work">Explore selected work <span>↓</span></a>',
          '<div class="hero-actions"><a class="text-link" href="#work">Explore selected work <span>↓</span></a><a class="hero-resume-link" href="/my-portfolio/resume">View résumé <span>↗</span></a></div>',
        );
      }

      if (!html.includes('class="hero-proof-strip"')) {
        html = html.replace(
          '<div class="data-stage" aria-label="Abstract data visualization">',
          '<div class="hero-proof-strip" aria-label="Professional highlights"><article><strong>10</strong><span>Evidence-backed case studies</span></article><article><strong>M.S.</strong><span>Applied Machine Intelligence</span></article><article><strong>1ST</strong><span>Climate resiliency hackathon</span></article></div><div class="data-stage" aria-label="Abstract data visualization">',
        );
      }

      if (!html.includes('class="stage-topline"')) {
        html = html.replace(
          '<div class="data-stage" aria-label="Abstract data visualization">',
          '<div class="data-stage" aria-label="Abstract data visualization"><div class="stage-topline" aria-hidden="true"><span>INTELLIGENCE, APPLIED.</span><span>OPEN TO WORK · BUILDING WHAT MATTERS</span></div>',
        );
      }

      if (!html.includes('class="stage-constellation"')) {
        html = html.replace(
          '<div class="orb orb-two"></div>',
          '<div class="orb orb-two"></div><div class="stage-constellation" aria-hidden="true"><span></span><span></span><span></span><span></span></div>',
        );
      }

      if (!html.includes('class="practice-interlude"')) {
        html = html.replace(
          '<section class="section shell" id="work">',
          '<div class="practice-interlude shell" aria-label="Areas of practice"><span>DATA, BUILT FOR</span><strong>PEOPLE</strong><i aria-hidden="true">✳</i><strong>DECISIONS</strong><i aria-hidden="true">✳</i><strong>IMPACT</strong></div><section class="section shell" id="work">',
        );
      }

      html = html.replace(
        '<div class="timeline-meta"><b>2025 — PRESENT</b></div>',
        '<div class="timeline-meta"><b>2025 — PRESENT</b><span>New York</span></div>',
      );
      html = html.replace(
        '<div class="timeline-meta"><b>2024 — 2025</b></div>',
        '<div class="timeline-meta"><b>2024 — 2025</b><span>Portland, Maine</span></div>',
      );
      html = html.replace(
        '<div class="timeline-meta"><b>2021 — 2023</b></div>',
        '<div class="timeline-meta"><b>2022 — 2022</b><span>Saratov, Russia</span></div>',
      );

      if (!html.includes('Peer Tutor — English Language')) {
        const tutor = '<article><div class="timeline-meta"><b>2019 — 2023</b><span>Saratov, Russia</span></div><div><h3>Peer Tutor — English Language</h3><h4>Independent Academic &amp; Language Support</h4><p>Provided personalized English-language instruction to Russian learners, strengthening conversational fluency, reading comprehension, and practical communication for academic study, international travel, tourism, and everyday situations. Adapted lessons to individual goals and confidence levels, helping students use English effectively in real-world settings.</p></div></article>';
        html = html.replace(
          '</div></section><section class="impact-preview" id="impact">',
          `${tutor}</div></section><section class="impact-preview" id="impact">`,
        );
      }
    }

    html = html.replace(/<div class="project-info">([\s\S]*?)<\/div>/g, (match, contents) => {
      if (contents.includes('class="project-proof"')) return match;

      const title = (contents.match(/<h3>([\s\S]*?)<i\b/)?.[1] || "")
        .replace(/<[^>]*>/g, "")
        .replace(/&amp;/g, "&")
        .trim();
      const evidence = evidenceByTitle.get(title);
      if (!evidence) return match;

      return `<div class="project-info">${contents}<div class="project-proof"><strong>${evidence[0]}</strong><span>${evidence[1]}</span></div></div>`;
    });

    if (!html.includes(assetName)) {
      html = html.replace("</head>", `${newLink}</head>`);
    }

    await fs.writeFile(file, html);
  }
}

console.log("Applied the modern white design system to every static portfolio page.");
