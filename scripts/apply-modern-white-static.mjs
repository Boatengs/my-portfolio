import fs from "node:fs/promises";
import path from "node:path";

const roots = ["docs", "site-static"];
const assetName = "modern-white-20260822.css";
const assetVersion = "6";
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
const thirdPersonCopy = [
  ["I translate complex information", "Sam translates complex information"],
  ["IMPACT / HOW I WORK", "IMPACT / SAM’S APPROACH"],
  ["Impact &amp; How I Work — Sampson Boateng", "Impact &amp; Sam’s Approach — Sampson Boateng"],
  ["My work integrates service", "Sam’s work integrates service"],
  ["My leadership reflects", "Sam’s leadership reflects"],
  ["I connect complex organizational challenges", "Sam connects complex organizational challenges"],
  ["I currently work across finance", "Sam currently works across finance"],
  ["I recently completed my master&#x27;s", "Sam recently completed his master&#x27;s"],
  ["I recently completed my master's", "Sam recently completed his master's"],
  ["My approach emphasizes", "His approach emphasizes"],
  ["tools used across my work", "tools used across Sam’s work"],
  ["I welcome opportunities", "Sam welcomes opportunities"],
  ["Leadership, to me, is practical service: helping people feel welcome, creating ways to participate, and building structures that allow a community to keep growing.", "Sam approaches leadership as practical service: fostering belonging, creating meaningful opportunities to participate, and building structures that allow communities to grow."],
  ["Across universities, student organizations, professional programs, and community initiatives, I have taken on roles that required listening, organizing, communicating, and following through. The titles are different, but the purpose has stayed consistent: make it easier for people to belong and contribute.", "Across universities, student organizations, professional programs, and community initiatives, Sam has taken on roles requiring active listening, thoughtful coordination, clear communication, and dependable follow-through. Across each position, his purpose remains consistent: make it easier for people to belong and contribute."],
  ["Read how I work ↗", "Explore Sam’s approach ↗"],
  ["I have learned that meaningful improvement often begins with ordinary questions: Who is being left out? Where is information getting lost? What makes participation harder than it should be? My approach is to listen, understand the people and process involved, and then help create something clearer, more inclusive, and easier to sustain.", "Sam recognizes that meaningful improvement often begins with practical questions: Who is being left out? Where is information getting lost? What makes participation harder than necessary? His approach centers on listening, understanding the people and processes involved, and developing solutions that are clearer, more inclusive, and easier to sustain."],
  ["Through student leadership, ambassador work, community events, and recreational sports, I have helped create inclusive spaces", "Through student leadership, ambassador work, community events, and recreational sports, Sam has helped create inclusive spaces"],
  ["Community is not built by simply announcing an event. I focus on welcoming people, listening to what they need, communicating clearly, and creating experiences that make continued involvement feel natural.", "Community requires more than simply announcing an event. Sam focuses on welcoming participants, listening to their needs, communicating clearly, and creating experiences that encourage sustained involvement."],
  ["At my current organization, I took on a long-standing challenge in how internal information moved across the workplace. By helping centralize the communication flow, updates are now easier to share, locate, and follow—reducing fragmentation and giving teams a clearer place to stay informed.", "At his current organization, Sam addressed a long-standing challenge in how internal information moved across the workplace. By helping centralize communication, he made updates easier to share, locate, and follow—reducing fragmentation and giving teams a clearer way to stay informed."],
  ["HOW I TRY TO SHOW UP", "SAM’S WORKING PRINCIPLES"],
  ["Leave the process better than I found it.", "Leave every process stronger than before."],
  ["problem matters, what I built, what the result means, and where the approach can be applied.", "problem matters, what Sam developed, what the results demonstrate, and where the approach can be applied."],
  ["How I Work", "Sam’s Approach"],
  ["platforms I use—with project links", "platforms Sam uses—with project links"],
  [">What I built<", ">What Sam developed<"],
  [">How I would move it forward.<", ">How Sam would advance the work.<"],
  ["Working as part of Capstone Team C, I helped", "Working as part of Capstone Team C, Sam helped"],
  [". We built nine executive insight views", ". The team built nine executive insight views"],
  [">I cleaned and explored", ">Sam cleaned and explored"],
  [">I compared Logistic Regression", ">Sam compared Logistic Regression"],
  [">I fine-tuned DistilBERT", ">Sam fine-tuned DistilBERT"],
  [">I divided project-authored", ">Sam divided project-authored"],
  [">I used LoRA and QLoRA", ">Sam used LoRA and QLoRA"],
  [">I adapted EfficientNetB0", ">Sam adapted EfficientNetB0"],
  [">I built a Gradio application", ">Sam built a Gradio application"],
  [">I trained a 31-million-parameter", ">Sam trained a 31-million-parameter"],
  [">I created a 20-question benchmark", ">Sam created a 20-question benchmark"],
  ["Giving time to people and causes that matter keeps me connected to purpose. Volunteering is where empathy becomes action—and where small contributions can strengthen a community.", "Giving time to people and meaningful causes keeps Sam connected to purpose. For him, volunteering turns empathy into action and demonstrates how thoughtful contributions can strengthen a community."],
  ["Cooking is one of my favorite ways to slow down, experiment, and bring people together. It rewards patience, attention to detail, and the courage to try a different combination.", "Cooking gives Sam an opportunity to slow down, experiment, and bring people together. It rewards patience, attention to detail, and the confidence to explore new combinations."],
  ["Travel introduces me to new places, cultures, and ways of thinking. Every journey is a reminder that the same problem can look completely different depending on where you stand.", "Travel introduces Sam to new places, cultures, and perspectives. Every journey reinforces the value of approaching familiar challenges from an entirely different point of view."],
  ["Fitness gives structure to my energy. Showing up consistently—especially when motivation is low—reinforces the discipline, resilience, and steady progress I value in every part of life.", "Fitness brings structure to Sam’s energy and routine. Consistent training reinforces the discipline, resilience, and steady progress he values across every area of life."],
  ["Music helps me reset, focus, and stay connected to emotion. I also enjoy listening to audio because ideas, stories, and conversations can turn ordinary moments into opportunities to reflect and learn.", "Music helps Sam reset, focus, and stay connected to emotion. Audiobooks, ideas, stories, and thoughtful conversations turn ordinary moments into opportunities for reflection and learning."],
  ["Reading lets me step into unfamiliar subjects and perspectives. It is part exploration and part reflection—a quiet habit that keeps my thinking open, curious, and continually growing.", "Reading introduces Sam to unfamiliar subjects and perspectives. Part exploration and part reflection, it keeps his thinking open, curious, and continually evolving."],
  ["There is more to me than", "There is more to Sam than"],
  ["My professional work shows what I can build. The life around it shapes how I show up—with curiosity, discipline, empathy, creativity, and an instinct for bringing people together.", "Sam’s professional work demonstrates what he can build. His life beyond it shapes how he contributes—with curiosity, discipline, empathy, creativity, and an instinct for bringing people together."],
  ["01 / WHAT KEEPS ME GROUNDED", "01 / WHAT KEEPS SAM GROUNDED"],
  ["“It is where I practice the same qualities that define my work: showing up, staying curious, learning from others, and making room for joy.”", "“Beyond professional work, Sam practices the same qualities that define his approach: showing up, staying curious, learning from others, and making room for joy.”"],
  ["02 / HOW I PLAY", "02 / HOW SAM PLAYS"],
  ["Basketball and soccer keep me active, sharpen teamwork, and create an easy way to connect with people beyond job titles and classrooms. Sports are also part of how I build community—one game, one team, and one shared experience at a time.", "Basketball and soccer keep Sam active, strengthen teamwork, and create opportunities to connect beyond job titles and classrooms. Sports also reflect his commitment to community building—one game, one team, and one shared experience at a time."],
  ["I bring both sides of myself to what I do: the analyst who looks closely at evidence and the person who values people, movement, culture, creativity, and community.", "Sam brings both dimensions to his work: an analyst committed to evidence and a person who values people, movement, culture, creativity, and community."],
  ["I build reliable analysis, decision-ready dashboards, and practical machine learning systems across finance, healthcare, and operations.", "Sam develops reliable analysis, decision-ready dashboards, and practical machine learning systems across finance, healthcare, and operations."],
  ["From raw records to an executive-ready narrative, I care about accuracy at every step: cleaning, validation, exploration, modeling, visualization, and documentation.", "From raw records to executive-ready narratives, Sam emphasizes accuracy at every step: cleaning, validation, exploration, modeling, visualization, and documentation."],
];
const protectedNames = [
  "Bosch Techno-Engineering",
  "Scikit-learn",
  "scikit-learn",
  "Grad-CAM",
  "K-Means",
  "TF-IDF",
  "U-Net",
];

function plainVisibleText(html) {
  return html
    .split(/(<script\b[^>]*>[\s\S]*?<\/script>|<style\b[^>]*>[\s\S]*?<\/style>|<[^>]+>)/gi)
    .map((part) => {
      if (part.startsWith("<")) return part;

      let text = part;
      for (const [index, name] of protectedNames.entries()) {
        text = text.replaceAll(name, `\uE000${index}\uE001`);
      }

      text = text
        .replace(/\b(\d{4})\s*[—–-]\s*(PRESENT|\d{4})\b/g, "$1 to $2")
        .replace(/\b(\d{4})\s+to\s+\1\b/g, "$1")
        .replace(/(\d)\s*[—–]\s*(\d)/g, "$1 to $2")
        .replace(/\s*[—–]\s*/g, ", ")
        .replace(/(?<=[\p{L}\p{N}])-(?=[\p{L}\p{N}])/gu, " ");

      for (const [index, name] of protectedNames.entries()) {
        text = text.replaceAll(`\uE000${index}\uE001`, name);
      }

      return text;
    })
    .join("");
}

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
    for (const [before, after] of thirdPersonCopy) {
      html = html.replaceAll(before, after);
    }
    html = html.replaceAll(">What Sam developed<", ">What was developed<");
    html = html.replaceAll(">How Sam would advance the work.<", ">Future advancement<");
    const newLink = `<link rel="stylesheet" href="${assetHref}"/>`;

    const isHome = path.dirname(file) === root;
    const nav = `<nav class="nav shell" aria-label="Primary navigation"><a class="wordmark" href="${isHome ? "#top" : "/my-portfolio/"}">SB<span>.</span></a><div class="nav-links"><a href="${isHome ? "#about" : "/my-portfolio/#about"}">About</a><a href="${isHome ? "#work" : "/my-portfolio/work"}">Projects</a><a href="/my-portfolio/skills">Skills</a><a href="${isHome ? "#experience" : "/my-portfolio/#experience"}">Experience</a><a href="${isHome ? "#leadership" : "/my-portfolio/leadership"}">Leadership</a><a href="/my-portfolio/person">Beyond Work</a><a class="nav-cta" href="/my-portfolio/resume">Résumé <span>↗</span></a></div></nav>`;
    html = html.replace(/<nav\b[^>]*>[\s\S]*?<\/nav>/, nav);
    html = html.replace(new RegExp(`${assetName.replaceAll(".", "\\.")}\\?v=\\d+`, "g"), `${assetName}?v=${assetVersion}`);

    if (isHome && path.basename(file) === "index.html") {
      if (!html.includes('class="hero-actions"')) {
        html = html.replace(
          '<a class="text-link" href="#work">Explore selected work <span>↓</span></a>',
          '<div class="hero-actions"><a class="text-link" href="#work">Explore selected work <span>↓</span></a><a class="hero-resume-link" href="/my-portfolio/resume">View résumé <span>↗</span></a></div>',
        );
      }

      html = html.replace(
        /<div class="hero-proof-strip" aria-label="Professional highlights">[\s\S]*?<\/article><\/div>/g,
        "",
      );

      if (!html.includes('class="profile-overview"')) {
        const profile = '<section class="profile-overview" aria-label="Professional profile"><div class="profile-overview-heading"><span>01 / PROFILE</span><h2>SAMPSON<br/>BOATENG</h2><p>DATA ANALYTICS · APPLIED MACHINE LEARNING</p></div><div class="profile-overview-copy"><p>Sam is a data analytics and applied machine learning professional with graduate training in Applied Machine Intelligence and practical experience across financial operations, donor-data analysis, reporting, data governance, systems improvement, and mission-driven healthcare initiatives.</p><p>He combines Python, SQL, Excel, Power BI, Tableau, statistical modeling, natural language processing, computer vision, and generative AI with clear stakeholder communication—transforming complex information into reliable insights, informed decisions, and measurable organizational impact.</p><div class="profile-overview-credentials"><span>M.S. Applied Machine Intelligence</span><span>B.S. Computer Science</span></div></div></section>';
        html = html.replace(
          /<div class="data-stage" aria-label="Abstract data visualization">[\s\S]*?<\/div><\/section>(?=<section class="section shell" id="work">)/,
          `${profile}</section>`,
        );
      }

      html = html.replaceAll(
        '<div class="practice-interlude shell" aria-label="Areas of practice"><span>DATA, BUILT FOR</span><strong>PEOPLE</strong><i aria-hidden="true">✳</i><strong>DECISIONS</strong><i aria-hidden="true">✳</i><strong>IMPACT</strong></div>',
        "",
      );

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

      if (!html.includes('Peer Tutor')) {
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

    await fs.writeFile(file, plainVisibleText(html));
  }
}

console.log("Applied the modern white design system to every static portfolio page.");
