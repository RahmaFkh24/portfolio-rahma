/* eslint-disable prettier/prettier */
import adkCertificate from "@/assets/certifications/Build Agents with Agent Development Kit Badge.png";
import careerEssentialsCertificate from "@/assets/certifications/Career Essentials in Cybersecurity.png";
import cybersecurityFoundationsCertificate from "@/assets/certifications/cyber security foundation.png";
import cybersecurityTerminologyCertificate from "@/assets/certifications/cyber security awareness _cyber security terminology.png";
import generativeAiCertificate from "@/assets/certifications/Découvrir l'IA générative.png";
import cipCertificate from "@/assets/certifications/ICIP-OPSWAT.png";
import iotCertificate from "@/assets/certifications/Intro to Iot -Cisco.jpg";
import aiAgentsCertificate from "@/assets/certifications/Introduction to ai agent and agentic ai.png";
import introCybersecurityCertificate from "@/assets/certifications/Introduction to Cybersecurity -Cisco.png";
import promptEngineeringCertificate from "@/assets/certifications/Introduction to Prompt Engineering with GitHub Copilot.png";
import securityCopilotCertificate from "@/assets/certifications/Microsoft Security Copilot.png";
import threatLandscapeCertificate from "@/assets/certifications/The Cybersecurity Threat Landscape.png";
import OOPsinPython from "@/assets/certifications/OOPs in Python.png";
import loyaltyDashboard01 from "@/assets/projects/PowerBIproject/Capture d'écran 2026-02-04 122828.png";
import loyaltyDashboard02 from "@/assets/projects/PowerBIproject/Capture d'écran 2026-02-04 123104.png";
import loyaltyDashboard03 from "@/assets/projects/PowerBIproject/Capture d'écran 2026-02-04 124711.png";
import loyaltyDashboard04 from "@/assets/projects/PowerBIproject/Capture d'écran 2026-02-04 125235.png";
import loyaltyDashboard05 from "@/assets/projects/PowerBIproject/Capture d'écran 2026-02-26 103542.png";
import loyaltyDashboard06 from "@/assets/projects/PowerBIproject/Capture d'écran 2026-02-26 104801.png";
import loyaltyDashboard07 from "@/assets/projects/PowerBIproject/Capture d'écran 2026-03-03 112457.png";
import loyaltyDashboard08 from "@/assets/projects/PowerBIproject/Capture d'écran 2026-03-04 143429.png";
import loyaltyDashboard09 from "@/assets/projects/PowerBIproject/Capture d'écran 2026-03-04 223745.png";
import loyaltyDashboard10 from "@/assets/projects/PowerBIproject/Capture d'écran 2026-03-04 224114.png";
import loyaltyDashboard11 from "@/assets/projects/PowerBIproject/Capture d'écran 2026-03-04 224121.png";
import socialHubAccount from "@/assets/projects/PFEproject/createAccount.png";
import socialHubPosts from "@/assets/projects/PFEproject/CRUDposts.png";
import socialHubDarkMode from "@/assets/projects/PFEproject/Dark_mode.png";
import socialHubScheduling from "@/assets/projects/PFEproject/schedule.png";
import socialHubSignIn from "@/assets/projects/PFEproject/signin.png";
import socialHubAnalytics from "@/assets/projects/PFEproject/analytics.png";
import socialHubAnalytics02 from "@/assets/projects/PFEproject/analytics part.png";
import socialHubAnalytics03 from "@/assets/projects/PFEproject/analytics part2.png";
import socialHubScreenshot from "@/assets/projects/PFEproject/Capture d'écran 2025-05-07 095142.png";
import reactiveMobile01 from "@/assets/projects/FlutterProject/img01.jpg";
import reactiveMobile02 from "@/assets/projects/FlutterProject/img02.jpg";
import reactiveMobile03 from "@/assets/projects/FlutterProject/img03.jpg";
import reactiveMobile04 from "@/assets/projects/FlutterProject/img04.jpg";
import reactiveMobile05 from "@/assets/projects/FlutterProject/img05.jpg";
import reactiveMobile06 from "@/assets/projects/FlutterProject/img06.jpg";
import reactiveMobile07 from "@/assets/projects/FlutterProject/img07.jpg";
import reactiveMobile08 from "@/assets/projects/FlutterProject/img08.jpg";
import ecommerceLanding from "@/assets/projects/wordpress-project/Landingpage.jpg";
import ecommerceScreenshot01 from "@/assets/projects/wordpress-project/Capture3.JPG";
import ecommerceScreenshot02 from "@/assets/projects/wordpress-project/Capture7.JPG";
export const profile = {
  name: "Rahma Fakhfekh",
  short: "Junior AI Engineer · Tunisia",
  lead: ["Software engineering student specializing in applied machine learning, predictive analytics and data-driven applications. I combine ", "model development, data pipelines and full-stack skills", " to build reliable AI solutions that turn into usable products."] as const,
  email: "rahmafekhfekh@gmail.com",
  phone: "+216 20 776 766",
  phoneRaw: "+21620776766",
  city: "Sfax, Tunisia",
  interests: ["Community activities", "Team sports", "Reading"],
  links: [
    { n: "LinkedIn", h: "fakhfekh-rahma", u: "https://www.linkedin.com/in/fakhfekh-rahma-73652018a/" },
    { n: "GitHub", h: "RahmaFkh24", u: "https://github.com/RahmaFkh24" },
    { n: "Portfolio", h: "me-hqhz.vercel.app", u: "https://me-hqhz.vercel.app/" },
  ],
};

export const githubUser = "RahmaFkh24";

export const marquee = ["Machine Learning", "Predictive Analytics", "Data Pipelines", "LLMs & RAG", "Power BI", "MERN Stack", "Flutter", "FastAPI"];

export const projects = [
  {
    slug: "customer-loyalty", title: "Customer Loyalty", role: "Data Science Intern", duration: "2 months", team: "Data team",
    overview: "A predictive analytics workflow that estimates how likely each customer is to stay loyal, helping the business focus retention efforts where they matter most.",
    problem: "Customer data was spread across tables and hard to interpret. The business needed a reliable way to identify loyal and at-risk customers and to understand which behaviours drive loyalty.",
    goals: ["Build a clean, reusable customer dataset from SQL sources", "Train and compare predictive models for loyalty", "Document model performance transparently", "Make results understandable for non-technical stakeholders"],
    process: [
      { t: "Data extraction", d: "Wrote SQL queries to collect customer, transaction and engagement data into one analytical table." },
      { t: "Cleaning & preprocessing", d: "Handled missing values, outliers and inconsistent formats with Pandas; encoded categorical variables." },
      { t: "Feature engineering", d: "Created behavioural features such as purchase frequency, recency and customer tenure to capture loyalty signals." },
      { t: "Modeling", d: "Trained and compared Scikit-learn classifiers, tuning them with cross-validation." },
      { t: "Evaluation", d: "Documented model performance with standard classification metrics and analysed feature importance." },
      { t: "Visualization", d: "Connected predictions to Power BI dashboards so the business could explore segments and drivers." },
    ],
    features: ["Unified customer dataset", "Loyalty probability per customer", "Feature-importance insights", "Interactive Power BI dashboard"],
    outcomes: ["A reproducible end-to-end ML pipeline from SQL to dashboard", "Clear visual insights supporting data-driven decisions", "Documentation enabling future model iterations"],
    learnings: "Feature quality mattered more than model complexity — careful preprocessing and well-designed behavioural features drove most of the predictive power.",
    org: "Data Science Internship", year: "2026", cat: "Machine Learning", icon: "brain" as const, tagline: "Predicting customer loyalty to support data-driven decisions.", tags: ["Python", "Scikit-learn", "SQL", "Power BI"], bg: "linear-gradient(135deg, oklch(0.36 0.11 35), oklch(0.2 0.05 30))", desc: "End-to-end prediction workflow: SQL extraction, Pandas feature engineering, Scikit-learn models and Power BI dashboards to communicate findings."
  },
  {
    slug: "social-hub", repo: "https://github.com/RahmaFkh24/SocialMediaManagementApplication", title: "Social Hub", role: "Software Development Intern", duration: "4 months", team: "DAS HAUS dev team",
    overview: "A MERN-stack web platform to manage several social media accounts in one place: create and schedule posts, collect data and track publication performance.",
    problem: "Managing Facebook and Instagram content across accounts meant switching between tools, with no central view of scheduled posts or their performance.",
    goals: ["Centralise content management across accounts", "Integrate Facebook and Instagram APIs", "Schedule posts ahead of time", "Track publication performance in a dashboard"],
    process: [
      { t: "Requirements", d: "Mapped user needs with the team and defined the core flows: accounts, publications, scheduling and analytics." },
      { t: "Data modeling", d: "Designed MongoDB schemas for users, connected accounts and publications." },
      { t: "Backend API", d: "Built a REST API with Node.js and Express.js, including authentication and publication endpoints." },
      { t: "Meta integration", d: "Integrated the Facebook and Instagram APIs for publishing content and collecting metrics." },
      { t: "Frontend", d: "Developed the React interface: account management, post editor and scheduling calendar." },
      { t: "Dashboard", d: "Built performance dashboards to follow engagement per publication and per account." },
    ],
    features: ["Multi-account management", "Post creation & scheduling", "Facebook & Instagram API integration", "Publication performance dashboard"],
    outcomes: ["One central tool for social media workflows", "Automated post scheduling across accounts", "Visibility on content performance"],
    learnings: "Working with third-party APIs taught me to design around rate limits, token expiry and evolving permissions.",
    org: "DAS HAUS", year: "2025", cat: "Full-stack", icon: "share" as const, tagline: "A MERN platform to manage, schedule and track social media.", tags: ["React", "Node.js", "MongoDB", "Meta APIs"], bg: "linear-gradient(135deg, oklch(0.45 0.18 350), oklch(0.25 0.1 320))", desc: "Facebook & Instagram API integration, user/publication data modeling, performance dashboard and post-scheduling across accounts."
  },
  {
    slug: "reactive-mobile", title: "Reactive Mobile", role: "Mobile Development Intern", duration: "2 months", team: "VISS mobile & backend teams",
    overview: "Development of Flutter mobile application features with live database interactions, push notifications and reactive user interfaces.",
    problem: "The app needed new features that stay in sync with backend data and keep users informed in real time, without compromising smoothness.",
    goals: ["Implement features connected to the database", "Add notifications to keep users informed", "Build reactive, smooth interfaces", "Collaborate tightly with backend developers"],
    process: [
      { t: "Onboarding", d: "Studied the existing Flutter architecture and backend contracts." },
      { t: "Data layer", d: "Implemented database interactions to read and update data from the app." },
      { t: "Reactive UI", d: "Built widgets that update automatically when underlying data changes." },
      { t: "Notifications", d: "Integrated notifications to alert users about relevant events." },
      { t: "Integration", d: "Worked with backend developers to connect and test features end-to-end." },
    ],
    features: ["Database-connected screens", "Notifications", "Reactive state-driven UI", "Backend integration"],
    outcomes: ["New features shipped into the mobile app", "Improved user experience and responsiveness"],
    learnings: "Clear communication with the backend team was as important as the code itself to deliver reliable features.",
    org: "VISS", year: "2024", cat: "Mobile", icon: "phone" as const, tagline: "Flutter features with live data, notifications and reactive UI.", tags: ["Flutter", "Database", "Notifications"], bg: "linear-gradient(135deg, oklch(0.42 0.11 165), oklch(0.2 0.05 170))", desc: "Built Flutter app features with database interactions and notifications, in collaboration with backend developers."
  },
  {
    slug: "e-commerce", title: "E-commerce", role: "Web Development Intern", duration: "1 month", team: "VISS development team",
    overview: "Customisation of a WordPress e-commerce website and integration of project-specific features.",
    problem: "The client's online store needed to match its brand and specific business needs beyond a standard WordPress setup.",
    goals: ["Customise the store's look and structure", "Integrate project-specific features", "Collaborate within the development team"],
    process: [
      { t: "Analysis", d: "Reviewed the client's needs and the existing WordPress setup." },
      { t: "Customisation", d: "Adapted theme, pages and product layouts to the brand." },
      { t: "Features", d: "Integrated the specific features required by the project." },
      { t: "Testing", d: "Tested shopping flows with the team before delivery." },
    ],
    features: ["Custom store design", "Product catalog", "Project-specific features"],
    outcomes: ["A tailored e-commerce website delivered with the team"],
    learnings: "My first professional project — it taught me how real client requirements shape technical choices.",
    org: "VISS", year: "2023", cat: "Web", icon: "shop" as const, tagline: "A customized WordPress online store with project-specific features.", tags: ["WordPress", "E-commerce"], bg: "linear-gradient(135deg, oklch(0.55 0.15 55), oklch(0.3 0.08 40))", desc: "Customized a WordPress e-commerce website and integrated custom features with the development team."
  },
  {
    slug: "demo-rag", repo: "https://github.com/RahmaFkh24/DEMO-RAG", title: "RAG Assistant", role: "AI Engineer", duration: "Personal project", team: "Solo",
    overview: "A demo of retrieval-augmented generation (RAG): documents are indexed, the most relevant passages are retrieved for each question, and an LLM generates an answer grounded in them.",
    problem: "LLMs alone can hallucinate or ignore private knowledge. RAG connects a model to trusted documents so answers stay relevant and verifiable.",
    goals: ["Index a document collection", "Retrieve relevant context per question", "Generate grounded answers with an LLM"],
    process: [
      { t: "Ingestion", d: "Load and split documents into chunks." },
      { t: "Embedding & indexing", d: "Convert chunks into vectors and store them for similarity search." },
      { t: "Retrieval", d: "Find the passages closest to the user's question." },
      { t: "Generation", d: "Pass the retrieved context to an LLM to produce the answer." },
    ],
    features: ["Document ingestion", "Semantic search", "Context-grounded answers"],
    outcomes: ["A working end-to-end RAG pipeline"],
    learnings: "Answer quality depends heavily on how documents are chunked and retrieved.",
    org: "GitHub · Personal", year: "2026", cat: "Machine Learning", icon: "brain" as const, tagline: "Answering questions from documents with retrieval-augmented generation.", tags: ["Python", "LLMs", "RAG"], bg: "linear-gradient(135deg, oklch(0.4 0.15 250), oklch(0.2 0.07 260))", desc: "A retrieval-augmented generation demo that grounds LLM answers in a custom document base."
  },
  {
    slug: "chatbot-nlp", repo: "https://github.com/RahmaFkh24/ChatBotNLP", title: "NLP Chatbot", role: "Developer", duration: "Personal project", team: "Solo",
    overview: "A Python chatbot that processes user messages with NLP, detects their intent and replies with the most appropriate response.",
    problem: "Users expect natural conversations; the bot must understand varied phrasings of the same request.",
    goals: ["Understand user intents", "Handle varied phrasings", "Return relevant responses"],
    process: [
      { t: "Data", d: "Define intents with example phrases and responses." },
      { t: "Preprocessing", d: "Tokenize and normalize text." },
      { t: "Model", d: "Train a classifier to recognise intents." },
      { t: "Dialogue", d: "Map predicted intents to replies." },
    ],
    features: ["Intent detection", "Text preprocessing", "Conversational loop"],
    outcomes: ["A functional NLP chatbot"],
    learnings: "Good training phrases matter as much as the model.",
    org: "GitHub · Personal", year: "2026", cat: "Machine Learning", icon: "brain" as const, tagline: "A conversational assistant powered by natural language processing.", tags: ["Python", "NLP"], bg: "linear-gradient(135deg, oklch(0.45 0.14 200), oklch(0.22 0.06 210))", desc: "A Python chatbot that understands user intents with NLP techniques and responds accordingly."
  },
  {
    slug: "movie-reviews", repo: "https://github.com/RahmaFkh24/movie_Reviews", title: "Movie Reviews AI", role: "Developer", duration: "Personal project", team: "Solo",
    overview: "This project uses AI to analyse movie reviews with NLP and sentiment analysis. It predicts ratings, classifies reviews and aims to generate insightful recommendations.",
    problem: "Reading thousands of reviews manually is impossible; automating their analysis reveals audience sentiment at scale.",
    goals: ["Classify review sentiment", "Predict movie ratings", "Support recommendations"],
    process: [
      { t: "Exploration", d: "Explore the review dataset in Jupyter." },
      { t: "Text processing", d: "Clean and vectorize review text." },
      { t: "Modeling", d: "Train sentiment classification models." },
      { t: "Analysis", d: "Interpret predictions to derive insights." },
    ],
    features: ["Sentiment classification", "Rating prediction", "Exploratory notebooks"],
    outcomes: ["An automated review-analysis workflow"],
    learnings: "Text cleaning choices strongly affect sentiment model results.",
    org: "GitHub · Personal", year: "2024", cat: "Machine Learning", icon: "brain" as const, tagline: "Sentiment analysis that classifies reviews and predicts ratings.", tags: ["Python", "NLP", "Jupyter"], bg: "linear-gradient(135deg, oklch(0.42 0.16 20), oklch(0.22 0.08 10))", desc: "Uses NLP and sentiment analysis to predict movie ratings, classify reviews and generate recommendations."
  },
  {
    slug: "car-management", repo: "https://github.com/RahmaFkh24/Car-Management-System", title: "Car Repair System", role: "Developer", duration: "Personal project", team: "Solo",
    overview: "A distributed Java application built on RMI that lets clients remotely manage cars and repairs through a central server.",
    problem: "A repair shop needs several clients to share the same up-to-date data on cars and repairs.",
    goals: ["Expose remote services with RMI", "Manage cars and repairs", "Support multiple clients"],
    process: [
      { t: "Design", d: "Define remote interfaces for the services." },
      { t: "Server", d: "Implement and register the RMI services." },
      { t: "Client", d: "Build clients calling the remote methods." },
      { t: "Testing", d: "Validate concurrent client access." },
    ],
    features: ["Remote method invocation", "Car & repair management", "Client-server architecture"],
    outcomes: ["A working distributed management system"],
    learnings: "Distributed systems require careful interface design and error handling.",
    org: "GitHub · Personal", year: "2026", cat: "Software", icon: "data" as const, tagline: "A distributed Java application to manage a car repair shop.", tags: ["Java", "RMI", "Distributed"], bg: "linear-gradient(135deg, oklch(0.4 0.03 260), oklch(0.2 0.02 260))", desc: "A distributed Java application based on RMI (Remote Method Invocation) to manage a car repair system."
  },
  {
    slug: "keylogger-analysis", repo: "https://github.com/RahmaFkh24/Cybersecurity-Learning-Labs-keyLoggerAnalysis", title: "Keylogger Analysis", role: "Learner", duration: "Personal project", team: "Solo",
    overview: "A cybersecurity learning lab that studies keylogger behaviour in a controlled environment to understand threats and detection.",
    problem: "Understanding attacker tools is essential to build effective defences.",
    goals: ["Understand keylogger mechanisms", "Analyse behaviour safely", "Identify detection signals"],
    process: [
      { t: "Setup", d: "Prepare an isolated lab environment." },
      { t: "Analysis", d: "Observe and document the behaviour." },
      { t: "Defense", d: "Identify indicators and mitigations." },
    ],
    features: ["Isolated lab", "Behaviour analysis", "Detection notes"],
    outcomes: ["Documented findings for defensive security"],
    learnings: "Security is learned best by understanding the attacker's perspective.",
    org: "GitHub · Cybersecurity lab", year: "2026", cat: "Security", icon: "data" as const, tagline: "A cybersecurity lab analysing how keyloggers work and how to detect them.", tags: ["Cybersecurity", "Analysis"], bg: "linear-gradient(135deg, oklch(0.35 0.08 145), oklch(0.17 0.04 150))", desc: "A hands-on cybersecurity learning lab focused on analysing keylogger behaviour for defensive purposes."
  },
];

export const experience = [
  { year: "2026", date: "Feb – Mar 2026", title: "Data Science Intern", org: "Customer Loyalty Prediction", points: ["Built a customer-loyalty prediction workflow with SQL, Python, Pandas and Scikit-learn.", "Prepared and transformed data through feature engineering and model development.", "Connected results to Power BI visualizations for business interpretation."] },
  { year: "2025", date: "Feb – May 2025", title: "Software Development Intern", org: "DAS HAUS", points: ["Developed a MERN-stack social media management app (React, Node.js, Express, MongoDB).", "Modeled user and publication data; integrated Facebook and Instagram APIs.", "Built a performance dashboard and post-scheduling workflows."] },
  { year: "2024", date: "Jun – Jul 2024", title: "Mobile Development Intern", org: "VISS", points: ["Developed Flutter features with database interactions, notifications and reactive UIs.", "Collaborated with backend developers to improve the user experience."] },
  { year: "2023", date: "Sep 2023", title: "Web Development Intern — E-commerce", org: "VISS", points: ["Customized a WordPress e-commerce website and integrated project-specific features."] },
];

export const education = [
  { t: "Engineering Cycle · Computer Engineering", s: "Institut Supérieur Polytechnique Privé des Sciences Avancées du Sud", y: "2025 – 2028" },
  { t: "Bachelor · Software Engineering & Information Systems", s: "École Supérieure Polytechnique Internationale", y: "2022 – 2025" },
  { t: "Baccalaureate · Experimental Sciences", s: "Lycée 25 Juillet 1957, Sfax", y: "2022" },
];

export const skillGroups = [
  { title: "AI Engineering", items: ["Model evaluation", "API model serving", "FastAPI", "Docker", "LLMs", "RAG"] },
  { title: "Machine Learning & Data Science", items: ["Scikit-learn", "Pandas", "Predictive modeling", "Feature engineering", "Data preprocessing"] },
  { title: "Data & Analytics", items: ["SQL", "MySQL", "MongoDB", "Power BI", "SSIS", "Dashboards", "Data modeling"] },
  { title: "Programming", items: ["Python", "JavaScript", "C++"] },
  { title: "Software Engineering", items: ["React", "Node.js", "Express.js", "Vite", "REST APIs", "Git", "GitHub"] },
  { title: "Web & Mobile", items: ["MERN stack", "Flutter", "WordPress", "Tailwind CSS"] },
];

export const languages = [
  { n: "Arabic", l: "Native", v: 100 },
  { n: "French", l: "Fluent", v: 85 },
  { n: "English", l: "Fluent", v: 85 },
  { n: "German", l: "A2", v: 30 },
];

export type Certification = { t: string; cat: string; o: string; date?: string; id?: string; url?: string; skills?: string[]; desc?: string; expires?: string; requires?: string[]; image?: string; document?: string; future?: string };

export const certSlug = (c: Certification) => c.t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

// Default prerequisites and career paragraph per topic; set `requires` / `future` on a certification to override.
export const certDefaults: Record<string, { requires: string[]; future: string }> = {
  "AI Agents": { requires: ["Python basics", "Familiarity with LLMs and APIs"], future: "I will use agent design skills to build autonomous assistants that combine LLMs, tools and company data, turning repetitive workflows into reliable automated pipelines in my AI engineering projects." },
  AI: { requires: ["Basic computer literacy", "Curiosity about AI tools"], future: "I will apply generative AI and prompt engineering daily to speed up development, prototype AI features faster and design LLM-powered products that stay useful and responsible." },
  Security: { requires: ["Basic IT and networking knowledge"], future: "As an AI engineer, I will build systems with security in mind: protecting data pipelines, model APIs and user data, and recognising threats such as phishing or prompt injection early." },
  IoT: { requires: ["Basic networking knowledge"], future: "I will use this foundation to connect AI models with sensor and device data, enabling predictive maintenance and real-time analytics on IoT platforms." },
  "Machine Learning": { requires: ["Python fundamentals", "Basic statistics"], future: "This is the core of my career: I will keep applying these ML techniques to build, evaluate and deploy predictive models that solve real business problems." },
  Programming: { requires: ["Basic Python syntax"], future: "Clean object-oriented code lets me structure ML pipelines and backend services that are maintainable, testable and ready for production." },
};

// Add a certification here: the tab, cards and Key Facts update automatically.
export const certifications: Certification[] = [
  { t: "Build Agents with Agent Development Kit (ADK)", cat: "AI Agents", o: "Google · DataCamp", date: "Nov 2026", id: "237924143313628365563b43b66e0a2f32e6e4d3", url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/237924143313628365563b43b66e0a2f32e6e4d3", skills: ["Google ADK", "AI Agents"], desc: "Introduces Google's Agent Development Kit for building AI agents, including agent configuration, tool integration and the creation of coordinated, multi-step workflows.", image: adkCertificate },
  { t: "Intro to AI Agents and Agentic AI", cat: "AI Agents", o: "365 Data Science", date: "Nov 2026", id: "CC-D70A7D2A9C", url: "https://learn.365datascience.com/certificates/CC-D70A7D2A9C/", skills: ["Agentic AI"], desc: "Covers AI agent architectures, reasoning, autonomy, tool integration and intelligent workflow automation. Achieved 92% on the final exam.", image: aiAgentsCertificate },
  { t: "Introduction to Prompt Engineering with GitHub Copilot", cat: "AI", o: "Simplilearn", date: "Nov 2026", id: "10983745", skills: ["Prompt Engineering", "Artificial Intelligence"], desc: "Explores how to write clear, effective prompts, refine AI-generated results and apply GitHub Copilot in practical software development workflows.", image: promptEngineeringCertificate },
  { t: "Career Essentials in Cybersecurity", cat: "Security", o: "Microsoft & LinkedIn", date: "Nov 2026", url: "https://www.linkedin.com/learning/certificates/3b91cfc94541f241a24364fb8d1e7811e61ffa8587baee69a0748a58589681a7", skills: ["Threat & Vulnerability Management", "Security Awareness"], desc: "Builds practical cybersecurity foundations across threat and vulnerability management, security operations, risk reduction and protective practices for users and organizations.", image: careerEssentialsCertificate },
  { t: "Cybersecurity Foundations", cat: "Security", o: "LinkedIn", date: "Nov 2026", url: "https://www.linkedin.com/learning/certificates/829588aedddd8368065c8e74297c7d3156d74d00ef35ed6bb2ff8aba3519b49a", skills: ["Cybersecurity"], desc: "Covers cybersecurity risk assessment, frameworks such as NIST and COBIT, common threat techniques, defensive controls, and the lifecycle of incident preparation and response.", image: cybersecurityFoundationsCertificate },
  { t: "Cybersecurity Awareness: Cybersecurity Terminology", cat: "Security", o: "LinkedIn Learning", date: "Oct 2026", id: "90b83cbbd9edfc7fe18269a953c2311ace249c79cad82a65193909b450fe3303", url: "https://www.linkedin.com/learning/certificates/90b83cbbd9edfc7fe18269a953c2311ace249c79cad82a65193909b450fe3303?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B7e0Xw%2FCoTb6a%2BhjDrEh1eg%3D%3D", skills: ["Information Security Engineering", "Security Awareness"], desc: "Introduces core security terminology and practices, including threat actors, red/blue/purple teams, multi-factor authentication and network security controls.", image: cybersecurityTerminologyCertificate },
  { t: "Microsoft Security Copilot", cat: "Security", o: "LinkedIn", date: "Oct 2026", id: "c5d834b96dec0d7198ac983341a163226256967dc6f5d7f4fee3c6f8d664e0d9", url: "https://www.linkedin.com/learning/certificates/c5d834b96dec0d7198ac983341a163226256967dc6f5d7f4fee3c6f8d664e0d9?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B7e0Xw%2FCoTb6a%2BhjDrEh1eg%3D%3D", skills: ["Cyber Threat Intelligence", "Vulnerability Analysis"], desc: "Explores how Security Copilot supports security teams with AI-assisted threat investigation, security data analysis and faster incident response.", image: securityCopilotCertificate },
  { t: "The Cybersecurity Threat Landscape", cat: "Security", o: "LinkedIn Learning", date: "Oct 2026", id: "4e0d2bffe39668ed299d4d5cef39c95e41a93ff8602c9243a9f816b845746182", url: "https://www.linkedin.com/learning/certificates/4e0d2bffe39668ed299d4d5cef39c95e41a93ff8602c9243a9f816b845746182?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B7e0Xw%2FCoTb6a%2BhjDrEh1eg%3D%3D", skills: ["Threat Management", "Cybersecurity"], desc: "Examines current cyber threats—including phishing, ransomware, deepfakes and business email compromise—and the practices used to reduce risk and protect data.", image: threatLandscapeCertificate },
  { t: "Introduction to Critical Infrastructure Protection (CIP)", cat: "Security", o: "OPSWAT Academy", date: "Oct 2026", expires: "Sep 2027", id: "Okzk1TDwLA", url: "https://learn.opswatacademy.com/certificate/Okzk1TDwLA", skills: ["IT Infrastructure", "Cybersecurity"], desc: "Introduces the security of critical infrastructure, with a focus on identifying threats, understanding operational technology risks and applying protection measures.", image: cipCertificate },
  { t: "Discover Generative AI", cat: "AI", o: "LinkedIn Learning", date: "Oct 2025", id: "6aba76d791b1461ecb1037aa33f7ed05660b14fda6c62654c2a6527362a8b892", skills: ["Artificial Intelligence"], desc: "Presents generative AI fundamentals, common tools and practical use cases, and how the technology contributes to digital transformation and productivity.", image: generativeAiCertificate },
  { t: "Introduction to Cybersecurity", cat: "Security", o: "Cisco Networking Academy", date: "Oct 2024", skills: ["Cybersecurity", "Data Protection"], desc: "Cybersecurity fundamentals, common threats and vulnerabilities, personal data protection and how organisations secure their systems.", image: introCybersecurityCertificate },
  { t: "Introduction to IoT", cat: "IoT", o: "Cisco Networking Academy", date: "May 2024", skills: ["IoT", "Networking"], desc: "Impact of IoT and digital transformation on organisations; the role of software, data, automation and AI; intent-based networking concepts.", image: iotCertificate },
  { t: "Object-Oriented Programming in Python", cat: "Programming", o: "Great Learning Academy", desc: "Covers object-oriented programming in Python, including classes, objects, encapsulation and reusable structures for organizing maintainable applications.", image: OOPsinPython },
];

export type Project = (typeof projects)[number];

// Project screenshots, keyed by project slug.
// Projects without images show styled preview frames instead.
export type ProjectImage = { src: string; caption: string };
export const projectImages: Record<string, ProjectImage[]> = {
  "customer-loyalty": [
    { src: loyaltyDashboard01, caption: "Customer loyalty dashboard — view 1" },
    { src: loyaltyDashboard02, caption: "Customer loyalty dashboard — view 2" },
    { src: loyaltyDashboard03, caption: "Customer loyalty dashboard — view 3" },
    { src: loyaltyDashboard04, caption: "Customer loyalty dashboard — view 4" },
    { src: loyaltyDashboard05, caption: "Customer loyalty dashboard — view 5" },
    { src: loyaltyDashboard06, caption: "Customer loyalty dashboard — view 6" },
    { src: loyaltyDashboard07, caption: "Customer loyalty dashboard — view 7" },
    { src: loyaltyDashboard08, caption: "Customer loyalty dashboard — view 8" },
    { src: loyaltyDashboard09, caption: "Customer loyalty dashboard — view 9" },
    { src: loyaltyDashboard10, caption: "Customer loyalty dashboard — view 10" },
    { src: loyaltyDashboard11, caption: "Customer loyalty dashboard — view 11" },
  ],
  "social-hub": [
    { src: socialHubAccount, caption: "Create an account" },
    { src: socialHubSignIn, caption: "Sign in" },
    { src: socialHubPosts, caption: "Create and manage posts" },
    { src: socialHubScheduling, caption: "Schedule publications" },
    { src: socialHubAnalytics, caption: "Social media analytics" },
    { src: socialHubAnalytics02, caption: "Analytics dashboard — view 2" },
    { src: socialHubAnalytics03, caption: "Analytics dashboard — view 3" },
    { src: socialHubDarkMode, caption: "Dark mode" },
    { src: socialHubScreenshot, caption: "Social Hub interface" },
  ],
  "reactive-mobile": [
    { src: reactiveMobile01, caption: "Mobile app screen 1" },
    { src: reactiveMobile02, caption: "Mobile app screen 2" },
    { src: reactiveMobile03, caption: "Mobile app screen 3" },
    { src: reactiveMobile04, caption: "Mobile app screen 4" },
    { src: reactiveMobile05, caption: "Mobile app screen 5" },
    { src: reactiveMobile06, caption: "Mobile app screen 6" },
    { src: reactiveMobile07, caption: "Mobile app screen 7" },
    { src: reactiveMobile08, caption: "Mobile app screen 8" },
  ],
  "e-commerce": [
    { src: ecommerceLanding, caption: "E-commerce landing page" },
    { src: ecommerceScreenshot01, caption: "Online store interface — view 1" },
    { src: ecommerceScreenshot02, caption: "Online store interface — view 2" },
  ],
};

// Computed from the lists above: adding a project, certification or language updates these automatically.
const firstYear = Math.min(...experience.map((e) => Number(e.year)));
export const glance = [
  { n: projects.length, s: "", l: "Projects", d: `${new Set(projects.map((p) => p.cat)).size} domains · ${projects.filter((p) => "repo" in p).length} on GitHub` },
  { n: experience.length, s: "", l: "Internships", d: `Since ${firstYear}` },
  { n: certifications.length, s: "", l: "Certifications", d: Array.from(new Set(certifications.map((c) => c.cat))).slice(0, 4).join(", ") },
  { n: languages.length, s: "", l: "Languages", d: languages.map((l) => l.n).join(", ") },
];
