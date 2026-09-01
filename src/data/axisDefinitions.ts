export interface AxisDefinitionOption {
  label: string;
  description: string;
}

export interface AxisDefinition {
  number: string;
  label: string;
  question: string;
  options: [AxisDefinitionOption, AxisDefinitionOption];
}

export const axisDefinitions: AxisDefinition[] = [
  {
    number: "1",
    label: "Primary driver",
    question: "What force is shaping the future?",
    options: [
      {
        label: "Technological",
        description:
          "AI, automation, robotics, and other technologies are the primary forces reshaping work and education.",
      },
      {
        label: "Epistemic",
        description:
          "Trust, knowledge, and the ability to determine what is true, credible, or valuable become the primary forces reshaping the system.",
      },
    ],
  },
  {
    number: "2",
    label: "Credentialing authority",
    question: 'Who gets to say someone is "ready"?',
    options: [
      {
        label: "Institutions validate",
        description:
          "Degrees, transcripts, faculty judgment, and institutional credentials remain trusted signals of readiness.",
      },
      {
        label: "Countless entities validate",
        description:
          "Employers, platforms, AI assessments, portfolios, reputation systems, and other providers become competing sources of proof.",
      },
    ],
  },
  {
    number: "3",
    label: "Pace of labor change",
    question: "How does the world of work move?",
    options: [
      {
        label: "Gradual evolution",
        description:
          "Roles change over time, giving workers and institutions enough visibility to adapt and plan.",
      },
      {
        label: "Volatile disruption",
        description:
          "Roles appear, disappear, or change faster than institutions and workers can reliably prepare for them.",
      },
    ],
  },
  {
    number: "4",
    label: "Human-AI division",
    question: "What are humans and AI each valuable at?",
    options: [
      {
        label: "AI empowers humans",
        description:
          "AI handles more execution while human judgment, relationships, creativity, and responsibility remain valuable.",
      },
      {
        label: "AI replaces humans",
        description:
          "AI absorbs broad areas of cognitive and interpersonal work, shrinking the space where human labor provides unique economic value.",
      },
    ],
  },
  {
    number: "5",
    label: "Locus of formation",
    question: "Where does learning and becoming actually happen?",
    options: [
      {
        label: "Bounded and institution-centric",
        description:
          "Formation happens primarily within defined institutions, programs, places, and cohorts.",
      },
      {
        label: "Anywhere, anytime",
        description:
          "Learning is continuous and distributed across work, life, employers, platforms, communities, and other providers.",
      },
    ],
  },
  {
    number: "6",
    label: "Purpose of higher education",
    question: "What is higher education ultimately for?",
    options: [
      {
        label: "Prepare people for work",
        description:
          "Career preparation, employability, and economic return are the dominant measures of value.",
      },
      {
        label: "Prepare thoughtful citizens",
        description:
          "Meaning-making, judgment, citizenship, personal development, and contribution to society are central purposes.",
      },
    ],
  },
  {
    number: "7",
    label: "Who bears risk",
    question: "Who carries the risk when the bet on readiness doesn't pay off?",
    options: [
      {
        label: "Absorbed by public and institutions",
        description:
          "Government, institutions, and the broader system absorb more of the financial and career risk through subsidies, funding, and shared responsibility.",
      },
      {
        label: "Absorbed by individuals and employers",
        description:
          "Learners and employers carry more of the downside through tuition, lost income, employer-funded training, and other market-based arrangements.",
      },
    ],
  },
];
