// Portfolio Data - Centralized data structure for portfolio content
// This file contains all portfolio-related data for easy maintenance and updates

export interface StateExperience {
  id: string
  title: string
  agencies?: string
  agency?: string
  impact: string
  description: string
  skills: string[]
  metrics: string[]
}

export interface ProjectCaseStudy {
  title: string
  agency: string
  challenge: string
  action: string
  result: string
  cite: string
}

export interface WorkHistory {
  agency: string
  role: string
  focus: string
  projects: string[]
}

export interface DetailedStateExperience {
  agency: string
  role: string
  impact: string
  projects: {
    name: string
    details: string
    result: string
    tech?: string[]
  }[]
  governance?: string
  description?: string
}

export interface ProfessionalPillar {
  id: string
  title: string
  focus: string
  highlights: {
    title: string
    problem?: string
    action: string
    aiPivot?: string
    impact?: string
  }[]
}

export interface PortfolioStructure {
  category: string
  focus: string
  projects: {
    name: string
    tech?: string
    agency?: string
    detail?: string
    details?: string
  }[]
}

export const professionalPillars: ProfessionalPillar[] = [
  {
    id: "pillar-1",
    title: "Innovation & Product Development (Freelance)",
    focus: "AI Integration, Full-Stack Engineering, and Product Management",
    highlights: [
      {
        title: "FlowFactor (UX App Assistant)",
        problem: "Solving complex Human Factors Engineering challenges through digital tools.",
        action:
          "Built a full-stack platform using Next.js and React, integrating accessible UX principles for workplace ergonomics.",
        aiPivot: "Demonstrates the ability to build and manage modern AI-ready SaaS products.",
      },
      {
        title: "NextGenPLR Business Venture",
        action:
          "Established a digital store for code snippets and AI templates, managing the complete product lifecycle from landing pages to lead magnets.",
      },
      {
        title: "NFC Technology Ad Campaign Client Case Study",
        action: "Developed AI-driven creative content and video ads for a secure payment technology startup.",
      },
    ],
  },
  {
    id: "pillar-2",
    title: "Enterprise Systems & Governance (State of California)",
    focus: "Systems Analysis, ADA Policy, and Workflow Automation",
    highlights: [
      {
        title: "High-Impact Governance (CTC)",
        action:
          "Managed agency-wide ADA initiatives, raising compliance from 72% to 93% for 1,000+ assets using Monsido for weekly automated reconciliation. Engineered a DocuSign-integrated HR tool that replaced manual timesheets with automated validation logic.",
        impact: "Authored agency-wide document remediation policies and technical SOPs.",
      },
      {
        title: "UX & Information Architecture (FTB/CalPERS)",
        action:
          "Redesigned the SharePoint intranet IA at FTB to improve content discoverability for 1,000+ employees. Re-engineered the Circular Letter workflow at CalPERS to resolve chronic publication delays through better process mapping.",
        impact: "Improved operational efficiency across enterprise systems.",
      },
    ],
  },
  {
    id: "pillar-3",
    title: "Data Intelligence & ML Foundations (Amazon)",
    focus: "Machine Learning Support and Data Integrity",
    highlights: [
      {
        title: "Data Integrity Specialist",
        action:
          "Performed high-precision data annotation and image classification to train massive machine learning models. Partnered with engineering teams to refine validation scripts, ensuring the reliability of AI-assisted review workflows.",
        aiPivot:
          "This experience provides the technical foundation for auditing AI datasets to ensure they are clean, ethical, and accurate.",
      },
    ],
  },
]

export const workHistory: WorkHistory[] = [
  {
    agency: "Commission on Teacher Credentialing (CTC)",
    role: "IT Specialist I",
    focus: "Accessibility Governance & Automation",
    projects: [
      "Led ADA initiative (72% to 93% compliance) for 1,000+ assets.",
      "Implemented Monsido-driven reconciliation for continuous auditing.",
      "Engineered DocuSign-integrated HR time-tracking tool.",
    ],
  },
  {
    agency: "Franchise Tax Board (FTB)",
    role: "IT Specialist I (Web Developer & UX Designer)",
    focus: "Enterprise UX Design & IA Strategy",
    projects: [
      "Redesigned SharePoint intranet IA to reduce support tickets.",
      "Created wireframes, prototypes, and UX reports in Figma/Miro.",
      "Authored technical SOPs and UX standards for enterprise-wide consistency.",
      "Collaborated in Agile sprints to build accessible front-end components.",
    ],
  },
]

export const stateExperience: StateExperience[] = [
  {
    id: "ctc-ftb-merged",
    title: "Product & Governance Strategist",
    agencies: "CTC & Franchise Tax Board",
    impact: "Achieved 93% accessibility compliance for 1,000+ assets.",
    description:
      "Led agency-wide ADA initiatives and authored document remediation policies. Spearheaded Azure cloud migrations and enterprise UX redesigns.",
    skills: ["AI Governance", "Azure", "UX Strategy", "Accessibility"],
    metrics: ["93% Compliance", "1,000+ Assets", "21% Improvement"],
  },
  {
    id: "amazon-ml",
    title: "Data Integrity Specialist",
    agency: "Amazon",
    impact: "Optimized ML datasets for model training.",
    description:
      "Performed high-precision data annotation and image classification to ensure AI reliability and ground-truth data quality.",
    skills: ["Machine Learning", "Data Integrity", "QA Testing"],
    metrics: ["Large-scale QA", "Model Training", "Data Labeling"],
  },
]

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    title: "Enterprise Governance & AI-Assisted Compliance",
    agency: "California Commission on Teacher Credentialing (CTC) & Franchise Tax Board (FTB)",
    challenge: "Fragmented digital architectures and chronic accessibility gaps across public and internal platforms.",
    action:
      "Led the agency-wide ADA initiative by establishing official document remediation policies and technical SOPs for statewide standards. Implemented Monsido to execute AI-assisted weekly reconciliation reports. These reports tracked updates to the public website, reconciling new content against remediated assets to maintain a stable compliance baseline.",
    result:
      "Successfully raised accessibility compliance from 72% to over 93% while managing a mission-critical Azure cloud migration.",
    cite: "Source: CTC Accessibility Initiative [cite: 2, 3, 4, 35, 36, 37, 38, 40]",
  },
  {
    title: "Digital HR Transformation",
    agency: "CTC",
    challenge: "Fragmented manual timesheet processing.",
    action: "Built a DocuSign-integrated tool with automated validation logic.",
    result: "Eliminated errors and improved audit readiness.",
    cite: "Source: HR Time Tracking Tool [cite: 10, 11, 12, 51]",
  },
]

export const detailedStateExperience: DetailedStateExperience[] = [
  {
    agency: "Commission on Teacher Credentialing (CTC)",
    role: "IT Specialist I",
    impact: "93% Compliance & Workflow Automation",
    description:
      "Led digital transformation initiatives focused on accessibility, automated HR workflows, and human-centered design.",
    projects: [
      {
        name: "ADA Governance Initiative",
        details:
          "Audited 1,000+ digital assets and implemented Monsido for AI-assisted reconciliation to ensure statewide accessibility standards.",
        result: "Increased compliance from 72% to 93% within 12 months.",
        tech: ["Monsido", "AI Auditing", "Section 508"],
      },
      {
        name: "DocuSign HR Automation",
        details: "Engineered an automated HR time-tracking and onboarding tool, replacing legacy manual systems.",
        result: "Significantly improved data accuracy, reduced processing time, and ensured audit readiness.",
        tech: ["DocuSign API", "Workflow Automation"],
      },
      {
        name: "Intranet UX Redesign",
        details:
          "Led a user-centered redesign of the agency intranet, simplifying navigation and structuring content for 200+ internal stakeholders using Agile methodologies.",
        result: "Reduced internal support tickets related to document discovery by 40%.",
        tech: ["UX Research", "Agile", "Information Architecture"],
      },
    ],
    governance:
      "Authored statewide document remediation policies and established scalable processes for inclusive digital content delivery.",
  },
  {
    agency: "Franchise Tax Board (FTB)",
    role: "IT Specialist I",
    impact: "UX Modernization & Information Architecture",
    projects: [
      {
        name: "Intranet UX Redesign",
        details: "Simplified navigation and structured content using Agile methodologies.",
        result: "Reduced internal support tickets and modernized employee tools.",
        tech: ["UX Research", "Agile", "Information Architecture"],
      },
    ],
  },
]

export const portfolioStructure: PortfolioStructure[] = [
  {
    category: "Venture & Innovation",
    focus: "Freelance & Product Management",
    projects: [
      {
        name: "FlowFactor",
        tech: "Next.js, React, Tailwind",
        detail: "UX App Assistant for Human Factors Engineering.",
      },
      { name: "NextGenPLR", tech: "E-commerce & Lead Gen", detail: "PLR store for high-quality code and AI assets." },
      { name: "NFC Ad Campaign", tech: "AI Creative Tools", detail: "Video ad generation for payment tech client." },
    ],
  },
  {
    category: "Enterprise Systems & Governance",
    focus: "State of California Experience",
    projects: [
      {
        name: "ADA Governance Initiative",
        agency: "CTC",
        detail: "Monsido-driven auditing raising compliance to 93%.",
      },
      { name: "HR Process Automation", agency: "CTC", detail: "DocuSign-integrated tool with automated logic." },
      { name: "Intranet IA Redesign", agency: "FTB", detail: "UX Architecture overhaul for 1,000+ users." },
      {
        name: "Workflow Re-engineering",
        agency: "CalPERS",
        detail: "Resolved chronic publication delays via process mapping.",
      },
    ],
  },
  {
    category: "Data Intelligence",
    focus: "Amazon & ML Foundations",
    projects: [
      { name: "ML Data Annotation", details: "Precision labeling for high-scale machine learning models." },
      { name: "Integrity Validation", details: "QA testing for AI-assisted review workflows and datasets." },
    ],
  },
]
