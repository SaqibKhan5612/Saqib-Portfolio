import {
    Award,
    BookOpen,
    BriefcaseBusiness,
    GitBranch,
    Globe2,
    Mail,
    MapPin,
    MessageCircle,
    Trophy,
    Users,
} from "lucide-react";

export const profile = {
    name: "Muhammad Saqib",
    logo: "Khan",
    role: "Software Engineer",
    roles: ["Full Stack Developer", "Agentic AI Developer"],
    tagline:
        "Full-stack developer building fast interfaces, reliable backend systems, and practical AI-powered automation workflows.",
    email: "saqibinzergi@gmail.com",
    phone: "+92 3487330959",
    location: "Islamabad, Pakistan",
    github: "https://github.com/SaqibKhan5612",
    githubHandle: "SaqibKhan5612",
    linkedin: "https://linkedin.com/in/saqib-khan-9406ab3a6",
    linkedinHandle: "saqib-khan-9406ab3a6",
    whatsapp: "https://wa.me/923487330959",
};

export const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Skills", path: "/skills" },
    { label: "Projects", path: "/projects" },
    { label: "Experience", path: "/experience" },
    { label: "Contact", path: "/contact" },
] as const;

export const skills = [
    {
        title: "Full Stack Development",
        items: [
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Tailwind CSS",
        ],
    },
    {
        title: "Agentic AI",
        items: ["n8n", "CrewAI", "LangChain", "LangGraph"],
    },
    {
        title: "Other Tools & Technologies",
        items: [
            "Python",
            "Git",
            "GitHub",
            "Docker",
            "AWS",
            "Jira",
            "REST APIs",
            "PostgreSQL",
            "Supabase",
        ],
    },
];

export const n8nProjects = {
    count: "20+",
    featured: {
        title: "Trading Agent",
        description:
            "An automated trading workflow that fetches real-time cryptocurrency prices through APIs, analyzes market conditions to generate BUY, SELL, or HOLD signals, records results in Google Sheets, and sends email notifications.",
        tech: ["n8n", "APIs", "Google Sheets", "Email"],
    },
    others: [
        "Lead Enrichment Pipeline",
        "Invoice Processing Bot",
        "Slack Notification Engine",
        "RSS Content Aggregator",
        "CRM Sync Workflow",
        "Email Campaign Scheduler",
        "Data Backup Automator",
        "Social Media Poster",
        "Webhook Event Handler",
        "Customer Feedback Collector",
        "PDF Report Generator",
        "Inventory Alert System",
        "Calendar Event Sync",
        "Form Submission Router",
        "API Health Monitor",
        "File Conversion Pipeline",
        "Support Ticket Classifier",
        "Newsletter Automator",
        "Database Cleanup Job",
    ],
};

export const crewaiProjects = {
    count: "10+",
    items: [
        {
            title: "AI Research & Blog Writer",
            description: "Multi-agent research and content generation system.",
        },
        {
            title: "AI Customer Support",
            description:
                "Multi-agent support and QA workflow using CrewAI and Ollama.",
        },
        {
            title: "AI Outreach Automation",
            description:
                "AI-powered customer outreach automation using agents and tools.",
        },
        { title: "AI Code Reviewer", description: "Automated code review and quality analysis agent." },
        { title: "AI Meeting Summarizer", description: "Agent-based meeting transcription and summary generator." },
        { title: "AI Resume Screener", description: "Multi-agent resume parsing and candidate ranking system." },
        { title: "AI Market Analyst", description: "Financial data analysis and market trend reporting agents." },
        { title: "AI Content Moderator", description: "Automated content review and moderation pipeline." },
        { title: "AI Task Planner", description: "Intelligent task breakdown and project planning agents." },
        { title: "AI Data Extractor", description: "Multi-agent web scraping and structured data extraction." },
    ],
};

export const fullstackProjects = {
    count: "20+",
    featured: {
        title: "Edu Stream",
        description:
            "An AI-assisted learning platform designed for students and mentors, featuring course progress tracking, protected video streaming, administrative verification, and multilingual AI assistance.",
        tech: ["React", "Node.js", "MongoDB", "Express.js"],
    },
    others: [
        "Task Flow Manager",
        "Realtime Chat App",
        "Job Board Platform",
        "E-Commerce Dashboard",
        "Blog CMS",
        "Social Feed App",
        "Expense Tracker",
        "Recipe Sharing Platform",
        "Fitness Tracker",
        "Polling & Survey Tool",
        "Event Booking System",
        "Portfolio Generator",
        "Notes App",
        "URL Shortener",
        "Quiz Platform",
        "Inventory Management",
        "Real Estate Listings",
        "Weather Dashboard",
        "Music Player App",
    ],
};

export const timeline = [
    {
        icon: BriefcaseBusiness,
        type: "Experience",
        title: "Software Development",
        org: "3 Years Experience",
        date: "2023 – Present",
        description:
            "Experienced in software development, programming, full-stack development, and AI/automation development. Building practical solutions with modern web technologies and agentic AI workflows.",
    },
    {
        icon: Trophy,
        type: "Internship",
        title: "Software Development Intern",
        org: "Kaizen Hive",
        date: "3 Months",
        description:
            "Contributed to software development projects, collaborating with teams on full-stack applications and gaining hands-on experience with modern development workflows.",
    },
    {
        icon: Users,
        type: "Community",
        title: "Tech Volunteer — GDSC",
        org: "Google Developer Student Club",
        date: "2026 – Present",
        description:
            "Organize workshops, support coding events, and mentor junior students on web development fundamentals.",
    },
    {
        icon: Award,
        type: "Certificate",
        title: "Meta Front-End Developer",
        org: "Coursera / Meta",
        date: "2025",
        description:
            "Covered React, version control, advanced JavaScript, UI principles, and modern frontend workflows.",
    },
];

export const contactLinks = [
    {
        icon: GitBranch,
        label: "GitHub",
        value: profile.githubHandle,
        href: profile.github,
        external: true,
    },
    {
        icon: Globe2,
        label: "LinkedIn",
        value: profile.linkedinHandle,
        href: profile.linkedin,
        external: true,
    },
    {
        icon: MessageCircle,
        label: "WhatsApp",
        value: profile.phone,
        href: profile.whatsapp,
        external: true,
    },
    {
        icon: Mail,
        label: "Email",
        value: profile.email,
        href: `mailto:${profile.email}`,
        external: false,
    },
    {
        icon: MapPin,
        label: "Location",
        value: profile.location,
        href: "#",
        external: false,
    },
];
