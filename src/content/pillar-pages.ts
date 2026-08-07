export type WhyUsCard = {
  title?: string;
  description: string;
  variant: "solid" | "light";
};

export type Objection = {
  quote: string;
  answer?: string;
};

export type ExperienceItem = {
  name: string;
  description: string;
  metric?: string;
};

export type IncludedColumn = {
  heading?: string;
  items: string[];
  summary?: string;
};

export type PillarPageContent = {
  number: number;
  subheading: string;
  paragraphs: string[];
  /**
   * Right-column meta panel. "pillar" is always the pillar's own name.
   * "worksBestWith" and "typicalEngagement" are each omitted individually
   * where no approved source value exists — never fabricated.
   */
  meta?: {
    pillar: string;
    worksBestWith?: string;
    typicalEngagement?: string;
  };
  /** Hero image band. Omitted where no dedicated photograph exists in the asset pack yet. */
  heroImage?: string;
  whyUs: {
    heading: string;
    paragraph: string;
    cards: WhyUsCard[];
    caption?: string;
  };
  objections: {
    intro: string[];
    items: Objection[];
  };
  experience: {
    heading: string;
    intro?: string;
    items: ExperienceItem[];
  };
  included: {
    heading: string;
    intro?: string;
    columns: IncludedColumn[];
  };
  difference: {
    text: string;
  };
  cta: {
    heading: string;
    paragraph: string;
  };
};

/**
 * Objections-section intro is shared, approved copy from the Strategy & Advisory
 * mockup that does not reference the pillar by name — reused as template-level
 * boilerplate across all five pillars rather than invented per pillar.
 */
const sharedObjectionsIntro = [
  "We've had some version of these conversations dozens of times across industries, organisation sizes, and transformation stages. The specifics change but the underlying challenge rarely does.",
  "And because we've navigated each of these before, we know exactly where to start.",
];

/**
 * Verbatim from `knowledge/01_company.md` ("Who We Work With") — company-wide
 * fact, not specific to any one pillar, so it's a shared constant rather than
 * duplicated per pillar entry.
 */
export const sharedWhoWeWorkWith =
  "We partner with ambitious organizations that view technology as a strategic business capability.";

export const pillarPages: Record<string, PillarPageContent> = {
  "strategy-advisory": {
    number: 1,
    subheading: "Strategy that moves to execution.",
    paragraphs: [
      "Most organisations don't lack ideas or ambition. What they lack is the bridge between a plan and the moment it becomes real.",
      "Pixelocracy brings together business thinking and technical depth to help leaders make clearer decisions, define smarter roadmaps, and turn strategy into deliverables.",
    ],
    meta: {
      pillar: "Strategy & Advisory",
      worksBestWith: "Data & AI · Engineering · Digital Products",
      typicalEngagement: "3–12 months",
    },
    heroImage: "/about/strategy-advisory-hero.jpg",
    whyUs: {
      heading: "Strategy rooted in delivery",
      paragraph:
        "Our approach to strategy is shaped by having actually delivered it. We've led national-scale transformations, built mission-critical platforms, and operated in environments where a wrong decision costs millions and a slow one costs more. That experience changes how you think about a roadmap.",
      cards: [
        {
          title: "From insight to execution",
          description:
            "We don't produce consultant decks. We build roadmaps that become operations — and we stay until they do. The strategy is only done when it's running.",
          variant: "solid",
        },
        {
          title: "Business-first thinking",
          description:
            "We start with the KPI, not the solution. What does success look like? Then we work backwards — aligning the roadmap to the outcome, not the other way around.",
          variant: "light",
        },
        {
          title: "Cross-sector credibility",
          description:
            "eGovernance, Mobility, Energy, Health, Telco, Finance, FMCG. We've operated across sectors — which means we bring pattern recognition most single-sector advisors can't.",
          variant: "solid",
        },
      ],
      caption: "What sets our approach apart",
    },
    objections: {
      intro: sharedObjectionsIntro,
      items: [
        { quote: "We spent €100K on consultants. The deck is beautiful. Nothing changed." },
        {
          quote:
            "Our transformation plan exists in 47 different PowerPoints. We don't know which one is real.",
        },
        {
          quote:
            "Time-to-market is sensitive. We won't be ready to execute in time and we need more velocity.",
        },
        {
          quote:
            "We don't know if we need a vendor, a partner, an in-house team or all three. Nobody is helping us think that through.",
          answer:
            "That question is exactly where we start. We help you map the decision before we talk about the solution — including whether you need us at all, or someone else entirely.",
        },
      ],
    },
    experience: {
      heading: "Work that went all the way",
      intro:
        "A selection of strategy engagements where the roadmap didn't end in a presentation, it ended in a running operation.",
      items: [
        {
          name: "eGovernance",
          description:
            "Designed the national digital transformation solution for a government platform now used by millions of citizens across the country.",
          metric: "2nd strongest brand in Greece · €400M yearly savings",
        },
        {
          name: "Mobility",
          description:
            "Transformed the national motorway experience into a self-care digital journey, from strategy through to platform launch and operations.",
          metric: "Millions of transactions supported annually",
        },
        {
          name: "Tobacco / FMCG",
          description:
            "Led large-scale business transformation support for a traditional sales organisation transitioning to a digital-first commercial model.",
          metric: "Full commercial model redesign · multi-year engagement",
        },
      ],
    },
    included: {
      heading: "What a strategy engagement looks like",
      intro:
        "If you're trying to understand exactly what a strategy engagement looks like in practice, this is it. Depending on where you are and what you need, we draw from any combination of the below, from a focused two-week diagnostic to a multi-month embedded roadmap programme.",
      columns: [
        {
          heading: "Discovery & Diagnosis",
          items: [
            "Audits, fitness assessments & diagnostics",
            "Business case development & financial modelling",
            "Research, go-to-market & positioning strategy",
            "Competitive landscape & market analysis",
            "Organisational readiness assessment",
          ],
          summary: "Everything you do to understand where you are before you decide where to go.",
        },
        {
          heading: "Planning, Execution & Governance",
          items: [
            "Journeys, roadmaps, solutions mapping & sequencing",
            "Prioritisation frameworks & investment sequencing",
            "Stakeholder alignment & change leadership",
            "RFP management & vendor selection",
            "Delivery oversight & programme governance",
            "Risk management & mitigation planning",
          ],
          summary: "Everything you do to move and keep moving once the direction is clear.",
        },
      ],
    },
    difference: {
      text: "We don't hand off. We embed with your team, own the transformation roadmap through launch, and measure success the same way you do — by whether it worked, not whether it was delivered.",
    },
    cta: {
      heading: "Ready to move from roadmap to reality?",
      paragraph:
        "Tell us where you are and what's not moving. We'll tell you honestly whether and how we can help.",
    },
  },

  "data-ai-automation": {
    number: 2,
    subheading: "Turn data into decisions. Turn AI into action.",
    paragraphs: [
      "Every organization generates data. We help organizations build practical AI solutions, automate repetitive processes and create data-driven operations that deliver measurable business value.",
      "We connect systems, automate workflows and apply AI where it creates real value.",
    ],
    meta: {
      pillar: "Data, AI & Automation",
      worksBestWith: "Strategy & Advisory · Engineering & Security",
    },
    whyUs: {
      heading: "Decision intelligence, not just analytics",
      paragraph:
        "We help organizations turn data and AI into practical advantage. Not experiments for the sake of it. Not dashboards nobody uses. We design data flows, AI solutions and automations that solve real business problems. Our focus is simple: enabling better, data-driven decisions, faster operations, and tools that teams can trust in everyday work.",
      cards: [
        {
          title: "AI Native by design",
          description:
            "Not a bolt-on feature. It's woven into the architecture from day one. Your people get more empowered.",
          variant: "solid",
        },
        {
          title: "From data chaos to operating clarity",
          description: "You have 3 data sources that don't talk. We build the single source of truth.",
          variant: "light",
        },
        {
          title: "Sovereign, secure, auditable",
          description: "Your data stays yours. Every decision is explainable. Compliance is baked in.",
          variant: "light",
        },
      ],
    },
    objections: {
      intro: sharedObjectionsIntro,
      items: [
        { quote: "We collected data for 2 years. We still don't know if it's accurate or what it means." },
        {
          quote:
            "Every analyst runs their own models. Every dashboard tells a different story. How do we trust it?",
        },
        {
          quote:
            "AI vendors promise magic. We're afraid of black boxes. We need our people to understand and control it.",
        },
        {
          quote:
            "We have many fragmented datasets. Still no way to combine them and extract insights in a sustainable manner.",
        },
        {
          quote:
            "We are highly dependent on a single AI model, tool, or provider. If their price changes, our operating model collapses. We need a resilient AI strategy.",
        },
      ],
    },
    experience: {
      heading: "Proof Points",
      items: [
        {
          name: "Energy company",
          description: "Built real-time consumption forecasting and billing automation.",
          metric: "60% reduction in operation costs",
        },
        {
          name: "Retail network",
          description: "Automated inventory optimization across the network.",
          metric: "8% improvement in stock turns · 5% reduction in waste",
        },
        {
          name: "Mobility organization",
          description:
            "Automated data extracting and transformation from multiple sources, reducing capability reporting from 1 month to daily reports.",
        },
      ],
    },
    included: {
      heading: "What's included",
      columns: [
        {
          items: [
            "Data Strategy & Architecture",
            "Business Intelligence & Analytics",
            "AI Solutions & LLM Integration",
            "Workflow & Process Automation",
          ],
        },
        {
          items: [
            "Data Integration & Pipelines",
            "Predictive Analytics",
            "AI Governance & Security",
            "Continuous Optimization & Support",
          ],
        },
      ],
    },
    difference: {
      text: "Decision intelligence, not just analytics. We don't just show you the data. We automate what the data tells you to do.",
    },
    cta: {
      heading: "Ready to make better use of your data?",
      paragraph: "Let's unlock the value in your data.",
    },
  },

  "engineering-security": {
    number: 3,
    subheading: "Building secure, scalable technology that stands the test of time.",
    paragraphs: [
      "Modern businesses depend on technology that is reliable, secure and built for growth. We help organizations design, build and modernize digital platforms that perform today and evolve with tomorrow's challenges.",
      "From cloud architecture and software engineering to DevOps and security, we build modern technology foundations that support long-term growth.",
    ],
    meta: {
      pillar: "Engineering & Security",
      worksBestWith: "Data, AI & Automation · Digital Products",
    },
    whyUs: {
      heading: "Security is a speed multiplier, not a friction point",
      paragraph:
        "Our engineering excellence is proven in the real world. We've built mission-critical systems, serving millions of users securely. We thrive under pressure, adapt to your workflows, and deliver clean, maintainable solutions that withstand operational complexity and growing adoption. Pixelocracy combines software engineering, cloud-native system design, and security thinking from the start. We move fast, but not carelessly.",
      cards: [
        {
          description: "Bespoke approach with the turnkey experience.",
          variant: "solid",
        },
        {
          title: "Security and compliance are considered from the start",
          description: "We don't add security at the end. It's in every decision.",
          variant: "light",
        },
        {
          description:
            "Support it better by linking it to CI/CD, automated testing, deployment processes, environments, monitoring, and clear release workflows.",
          variant: "light",
        },
        {
          title: "Your people own it",
          description: "We build your internal capability so you operate independently.",
          variant: "light",
        },
      ],
    },
    objections: {
      intro: sharedObjectionsIntro,
      items: [
        {
          quote:
            "We have an amazing internal team to develop and evolve our product. But we lack production readiness and need to make sure we'll scale without burning through our annual infrastructure budget in two months, or that we will have observable infrastructure and engineering ops processes in place to resolve incidents in minutes, not days.",
        },
        { quote: "We need to launch in four months. We don't have the internal team to do it." },
        {
          quote:
            "We've been in discovery for six months. Every vendor gives us a different answer on what to build.",
        },
        {
          quote:
            "We don't know if we should build it ourselves, buy a product, or find a hybrid. Nobody's helping us think that through.",
        },
        {
          quote:
            "We need something custom. Every SaaS tool we've tried gets us 70% of the way there and then stops.",
        },
        {
          quote:
            "We're a non-tech company entering a digital product space. We need a partner who builds with us, not just for us.",
        },
      ],
    },
    experience: {
      heading: "Proof Points",
      items: [
        {
          name: "Telco",
          description: "Consolidated infrastructure, software performance and testing operations into one solution.",
          metric: "3x faster releases · no downtime",
        },
        {
          name: "eGovernance",
          description: "Zero-trust security architecture for mission critical infrastructure.",
          metric: "80% fewer manual security checks · 0 breaches in 2 years",
        },
      ],
    },
    included: {
      heading: "What's included",
      columns: [
        {
          items: [
            "Cloud Architecture & Infrastructure",
            "Software Engineering & System Integration",
            "Legacy Modernization & Migrations",
            "DevOps & CI/CD",
          ],
        },
        {
          items: [
            "Security by Design",
            "Performance & Reliability Optimization",
            "Monitoring & Observability",
            "Technical Advisory & Team Enablement",
          ],
        },
      ],
    },
    difference: {
      text: "Security is a speed multiplier, not a friction point. Your team ships faster because the foundations are solid.",
    },
    cta: {
      heading: "Building your next platform?",
      paragraph: "Let's build technology that's secure, scalable and ready for what's next.",
    },
  },

  "digital-products": {
    number: 4,
    subheading: "We build digital products people want to use.",
    paragraphs: [
      "Great digital products are the result of strategy, thoughtful design and solid engineering working together from day one.",
      "We work with organizations throughout the entire product lifecycle — from the first idea to continuous improvement after launch.",
    ],
    meta: {
      pillar: "Digital Products",
      worksBestWith: "Engineering & Security · Capability Building",
    },
    whyUs: {
      heading: "Complexity made simple",
      paragraph:
        "We create digital products people understand, use and value. Good design is not decoration. It is how a product works, how it feels and how clearly it serves a business goal. Pixelocracy connects product strategy, UX, UI and full-stack development in one team. This means fewer gaps, faster decisions and better digital experiences from day one.",
      cards: [
        {
          description: "Products shaped by real users, not assumptions.",
          variant: "solid",
        },
        {
          title: "Design & engineering speak the same language",
          description: "No design-dev handoff friction. No technical debt disguised as compromise.",
          variant: "light",
        },
        {
          title: "Products people enjoy using",
          description: "Higher adoption. Lower support costs. Better business outcomes. People recommend it.",
          variant: "light",
        },
        {
          title: "Great products become competitive advantages",
          description: "In crowded markets, experience makes the difference.",
          variant: "light",
        },
      ],
    },
    objections: {
      intro: sharedObjectionsIntro,
      items: [
        { quote: "We need people who become part of the team, not another disconnected expert." },
        { quote: "We built it technically sound. No one uses it. Support tickets are through the roof." },
        {
          quote:
            "Our product feels dated. Competitors moved on. We can't recruit talent because the stack looks old.",
        },
        {
          quote:
            'We redesign every year. Nothing sticks. Design and engineering have different ideas of "done."',
        },
      ],
    },
    experience: {
      heading: "Proof Points",
      items: [
        {
          name: "Gov.gr citizen portal",
          description:
            "9M users, 2,000+ services consolidated. €400M in yearly savings. The second strongest brand in Greece.",
        },
        {
          name: "Health Group",
          description: "Employee workflow platform.",
          metric:
            "Adopted by 95% of users in the first month (typically 20–30%) · 1M+ transactions · 50% effort decrease",
        },
      ],
    },
    included: {
      heading: "What's included",
      columns: [
        {
          items: [
            "Product Strategy & Discovery",
            "User Research & UX/UI Design",
            "Design Systems & Prototyping",
            "Digital Product Development",
          ],
        },
        {
          items: [
            "Customer Portals & Internal Platforms",
            "Product Optimization & A/B Testing",
            "SaaS Products & Operations",
            "Product Support & Continuous Improvement",
          ],
        },
      ],
    },
    difference: {
      text: "Complexity made simple. World-class engineering under the hood. Team that delivers from concept to ROI tracking.",
    },
    cta: {
      heading: "Ready to build your next digital product?",
      paragraph: "Let's build something people actually want to use.",
    },
  },

  "capability-building-operations": {
    number: 5,
    subheading: "Building stronger teams, not long-term dependencies.",
    paragraphs: [
      "Successful transformation succeeds when your people have the knowledge, confidence and processes to keep improving long after delivery.",
      "We improve the way teams operate, collaborate and deliver through training, governance and operational support.",
    ],
    meta: {
      pillar: "Capability Building",
      worksBestWith: "Digital Products · Strategy & Advisory",
    },
    whyUs: {
      heading: "We succeed when you don't need us anymore",
      paragraph:
        "We help teams become stronger throughout our partnership. That is the standard. Pixelocracy supports organizations with training, recruiting, team extensions, operating models and hands-on enablement. We do not create dependency. We enhance confidence and internal capability, so teams can run, improve and scale their work with more control.",
      cards: [
        {
          title: "Your team is the asset",
          description:
            "We're building your capability, not creating dependency. When we leave, you're not lost.",
          variant: "solid",
        },
        {
          title: "Transformation that outlasts the project",
          description: "Too many transformations die when vendors leave. Ours don't.",
          variant: "light",
        },
        {
          title: "Your people feel equipped, not buried",
          description: "Training that sticks. Processes that make sense. Tools that empower.",
          variant: "light",
        },
      ],
    },
    objections: {
      intro: sharedObjectionsIntro,
      items: [
        {
          quote:
            "Digitization of a manual process had a real business impact. Six months later, we needed to adapt our processes but the technology was too rigid and not customizable — we are facing either going back to filling the gaps with manual processes again, or a huge consultant bill for relatively foreseeable changes.",
        },
        { quote: "The transformation was great. Then the consultants left and everything slowed down." },
        {
          quote: "We hired a team but they don't know how to operate the systems. We're back to manual processes.",
        },
        { quote: "Change happens but it's fragile. One key person quits and everything breaks." },
        {
          quote:
            "We want to bring all activities in-house but we need to accelerate hiring, structure and team management.",
        },
      ],
    },
    experience: {
      heading: "Proof Points",
      items: [
        {
          name: "Mobility company",
          description: "Trained internal IT team.",
          metric: "Team now owns infrastructure · 0 escalations per year",
        },
        {
          name: "Energy utility",
          description: "Operationalized AI forecasting with a 15-person team.",
          metric: "Running autonomously 2 years post-engagement",
        },
      ],
    },
    included: {
      heading: "What's included",
      columns: [
        {
          items: [
            "Team Training & Enablement",
            "Knowledge Transfer & Documentation",
            "Operations & Process Optimization",
            "Organizational Design",
          ],
        },
        {
          items: [
            "Hiring & Team Growth",
            "PMO & Delivery Management",
            "Change Management",
            "Ongoing Operational Support",
          ],
        },
      ],
    },
    difference: {
      text: "We succeed when you don't need us anymore. Our KPI is your independence, not our billable hours.",
    },
    cta: {
      heading: "Looking to strengthen your team?",
      paragraph: "Let's build lasting capability together.",
    },
  },
};
