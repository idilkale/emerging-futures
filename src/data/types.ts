import type { LucideIcon } from "lucide-react";

export interface AxisComparisonRow {
  label: string;
  growth: string;
  collapse: string;
  constraint: string;
  transformation: string;
}

export interface FutureVoice {
  role: string;
  quote: string;
  name: string;
  context: string;
}

export interface IndicatorPoint {
  year: string;
  value: number;
}

export interface Future {
  id: string;
  number: string;
  slug: string;
  codename: string;
  title: string;
  shortTitle: string;
  tagline: string;
  homeQuestion: string;
  statement: string;
  overview: string;
  drivingForce: string;
  education: string;
  employment: string;
  careerMobility: string;
  emergingCareers: string[];
  careerReadiness: string;
  aiLevel: number;
  trustLevel: number;
  accent: string;
  icon: LucideIcon;

  // detail-page content
  heroHeadline: string;
  heroIntro: string;
  heroImage?: string;
  howItStartedTitle: string;
  howItStartedBody: string[];
  whatChangedTitle: string;
  whatChangedBefore: string;
  pullQuote: string;
  whatChangedAfter: string;
  axisSummary: string;
  indicatorTitle: string;
  indicatorSubtitle: string;
  indicatorData: IndicatorPoint[];
  threeVoicesTitle: string;
  voices: FutureVoice[];
  careerHandoffTitle: string;
  careerHandoffBody: string;
  readinessTitle: string;
  closingHeadline: string;
  closingBody: string[];
  closingQuestion: string;
}

export interface Persona {
  id: string;
  name: string;
  archetype: string;
  color: string;
  age: number;
  aiRelationship: string;
  photo: string;
  background: string;
  finances: string;
  worldview: string;
  strengths: string[];
  biggestFear: string;
  successLooksLike: string;
  inTheirShoes: string;
  quote: string;
}

export interface PersonaFutureNote {
  personaId: string;
  futureId: string;
  note: string;
}

export interface Insight {
  id: string;
  index: string;
  title: string;
  description: string;
}

export interface Provocation {
  id: string;
  front: string;
  back: string;
}

export interface Artifact {
  futureId: string;
  archiveNumber: string;
  year: string;
  headline: string;
  deck: string;
  category: string;
}
