import type { PersonaFutureNote } from "./types";

export const personaFutureNotes: PersonaFutureNote[] = [
  // Maya Chen
  {
    personaId: "maya-chen",
    futureId: "01",
    note: "She graduates into a market with almost no junior roles left. Her portfolio of AI-assisted class projects reads as generic — every other applicant has the same tools.",
  },
  {
    personaId: "maya-chen",
    futureId: "02",
    note: "She's asked to complete live, proctored coding sessions before any interview counts, since her submitted projects can no longer be trusted as her own.",
  },
  {
    personaId: "maya-chen",
    futureId: "03",
    note: "Her program adds mandatory studio critique and pair-programming apprenticeships, finally rewarding the judgment she's been quietly building all along.",
  },
  {
    personaId: "maya-chen",
    futureId: "04",
    note: "She questions whether a CS degree should still be the default path, and starts exploring open-source and civic tech as a form of purpose beyond employability.",
  },

  // Dev Osei
  {
    personaId: "dev-osei",
    futureId: "01",
    note: "Two years post-graduation, the entry-level roles he's chasing have simply stopped existing — he's applying to jobs that assume experience he was never allowed to earn.",
  },
  {
    personaId: "dev-osei",
    futureId: "02",
    note: "He finally gets a real interview — a supervised, in-person assessment — because employers now trust live problem-solving over any résumé or portfolio.",
  },
  {
    personaId: "dev-osei",
    futureId: "03",
    note: "A city apprenticeship program pairs him with a senior mentor for a year, treating his potential as worth investing in rather than screening out.",
  },
  {
    personaId: "dev-osei",
    futureId: "04",
    note: "With traditional hiring still frozen, he starts building income and purpose through community projects that were never going to appear on a résumé anyway.",
  },

  // Renata Alvarez
  {
    personaId: "renata-alvarez",
    futureId: "01",
    note: "Her operations team shrinks as AI absorbs the coordination work junior staff used to do, leaving her to manage systems instead of people.",
  },
  {
    personaId: "renata-alvarez",
    futureId: "02",
    note: "She's required to document and defend her decisions in real time, since her reports alone no longer prove she made the call herself.",
  },
  {
    personaId: "renata-alvarez",
    futureId: "03",
    note: "Her company finally funds a formal mentorship track, treating her fifteen years of judgment as an asset worth transferring, not just retiring.",
  },
  {
    personaId: "renata-alvarez",
    futureId: "04",
    note: "As automation takes over more of operations, she starts asking what her role is for beyond the paycheck — and finds herself drawn to teaching.",
  },

  // Dr. Erik Lindqvist
  {
    personaId: "professor-lindqvist",
    futureId: "01",
    note: "He redesigns his engineering sequence around simulated internships, since there are no longer enough entry-level jobs for real ones.",
  },
  {
    personaId: "professor-lindqvist",
    futureId: "02",
    note: "He reinstates oral exams and in-class problem sets — the only assessments he still trusts to be a student's own work.",
  },
  {
    personaId: "professor-lindqvist",
    futureId: "03",
    note: "His department elevates studio practice and mentorship to core curriculum, and for once his syllabus feels like it will still be true in five years.",
  },
  {
    personaId: "professor-lindqvist",
    futureId: "04",
    note: "He starts teaching a course on purpose and civic participation alongside engineering — unsure if it belongs in his department, certain his students need it.",
  },

  // Priya Nair
  {
    personaId: "priya-nair",
    futureId: "01",
    note: "She's flooded with applicants who look senior on paper but have never done the entry-level work that used to prove anything.",
  },
  {
    personaId: "priya-nair",
    futureId: "02",
    note: "Her team brings back in-person, supervised interviews as the only hiring signal she still believes.",
  },
  {
    personaId: "priya-nair",
    futureId: "03",
    note: "She starts weighting mentorship references and demonstrated collaboration over polished application materials, and finally trusts her shortlist again.",
  },
  {
    personaId: "priya-nair",
    futureId: "04",
    note: "As fewer roles need filling at all, her job shifts from screening résumés to matching people with contribution opportunities that aren't strictly employment.",
  },

  // Tom Reyes
  {
    personaId: "tom-reyes",
    futureId: "01",
    note: "He can no longer count on new hires arriving trainable — every posting now demands experience his own company used to provide.",
  },
  {
    personaId: "tom-reyes",
    futureId: "02",
    note: "He starts requiring a supervised work trial before any offer, since he no longer trusts a portfolio to prove a candidate can actually do the job.",
  },
  {
    personaId: "tom-reyes",
    futureId: "03",
    note: "His company builds a formal apprenticeship pipeline, betting that mentorship now produces more reliable hires than résumés ever did.",
  },
  {
    personaId: "tom-reyes",
    futureId: "04",
    note: "With automation handling more of the work itself, he starts rethinking what he's actually hiring people to contribute.",
  },
];

export const getNote = (personaId: string, futureId: string) =>
  personaFutureNotes.find(
    (n) => n.personaId === personaId && n.futureId === futureId
  )?.note ?? "";
