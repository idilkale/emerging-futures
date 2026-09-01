import { Globe, IdCard, Sparkles, Sprout } from "lucide-react";
import type { Future } from "./types";

export const futures: Future[] = [
  {
    id: "01",
    number: "01",
    slug: "growth",
    codename: "GROWTH",
    title: "The End of the Beginner",
    shortTitle: "End of the Beginner",
    tagline:
      "Entry-level and routine work quietly disappears, at every level, without one single moment of crisis.",
    homeQuestion: "How do you keep climbing a ladder that never stops moving?",
    statement:
      "Never compete with an algorithm for the job that once taught you how to work.",
    overview:
      "AI performs most entry-level work. The traditional first rung of the career ladder begins to disappear. Graduates are expected to demonstrate experience before they have had the opportunity to gain it.",
    drivingForce:
      "High AI capability and widespread automation of junior work across knowledge, service, and technical roles.",
    education:
      "Universities shift from teaching foundational tasks toward simulated experience, mentorship, project-based learning, and evidence of applied judgment rather than completed coursework.",
    employment:
      "Organizations employ fewer entry-level workers while expecting new hires to demonstrate capabilities that were traditionally learned on the job over several years.",
    careerMobility:
      "The gap between education and mid-level employment becomes harder to cross. Without a beginner tier, the ladder loses its first several rungs entirely.",
    emergingCareers: [
      "AI systems auditor",
      "Human-AI workflow designer",
      "Robotics operations manager",
      "Human-robot interaction designer",
      "AI safety supervisor",
      "Verification and compliance officer",
    ],
    careerReadiness:
      "Students need new, credible ways to demonstrate practical experience before they are ever given a traditional entry-level opportunity.",
    aiLevel: 78,
    trustLevel: 38,
    accent: "#ff7f32",
    icon: Sprout,

    heroHeadline: "Nobody noticed the ladder disappear",
    heroIntro:
      "Ask anyone to name the day the old career ladder disappeared and they'll struggle. There wasn't one. That's the story.",
    heroImage: "/future1.png",
    howItStartedTitle: "It started with the work nobody wanted to do",
    howItStartedBody: [
      "By 2026, the entry-level work that once trained people by letting them make small, forgiving mistakes was largely gone from offices and factory floors alike. Nobody would have called it a crisis. It happened too slowly and too evenly for that word to fit — institutions adapted, employers adjusted, and each individual change looked reasonable on its own.",
      "AI didn't take one big visible job. It absorbed the small ones underneath it — the first draft, the first pass, the first attempt — until the rung built from those small attempts simply stopped existing.",
    ],
    whatChangedTitle: "The résumé had a good run",
    whatChangedBefore:
      "Universities didn't get caught flat-footed. They adjusted computer science enrollment early enough that the labor market gave them just enough runway to adjust before the next shift landed. Curriculum moved away from rote problem-solving and toward defended judgment calls, structured around live testing and decision review instead of finished assignments.",
    pullQuote:
      "The ladder didn't get pulled out from under anyone. It got replaced, rung by rung, with something closer to a lattice.",
    whatChangedAfter:
      "People moved sideways into new specialties as often as they moved up, guided by constant reskilling instead of steady promotion. Cohort programs, employer-university partnerships, and portfolio reviews became the familiar ways of proving readiness. For people with the time and money to keep climbing, that's invigorating. For everyone else, it's exhausting.",
    axisSummary:
      "Technology reshapes work without destabilizing the institutions around it. Universities remain trusted arbiters of readiness, adapting their curricula and assessments as the labor market evolves. The result is a system that keeps working — but demands continuous adaptation from the people inside it.",
    indicatorTitle: "Nothing here looks like a crisis",
    indicatorSubtitle: "Entry-level hiring declines steadily as AI and robotics reshape the workforce.",
    indicatorData: [
      { year: "2024", value: 82 },
      { year: "2026", value: 70 },
      { year: "2028", value: 56 },
      { year: "2030", value: 44 },
      { year: "2032", value: 38 },
      { year: "2034", value: 30 },
      { year: "2036", value: 22 },
    ],
    threeVoicesTitle: "Everyone agrees the system changed — there's where the agreement ends",
    voices: [
      {
        role: "Faculty",
        quote:
          "I can tell you if a student is a sharp judge of ambiguous situations after watching them work through live testing and decision making. What I can't tell you anymore is whether they've spent years living with the consequences of a decision. We got faster at measuring judgment. I'm not sure we got better at building it.",
        name: "Dr. Priya Nandakumar",
        context: "twelve years teaching, now co-designing live-assessment curricula",
      },
      {
        role: "Institutional Leader",
        quote:
          "People act like we got lucky. We didn't. We watched computer science enrollment wobble in the mid-2020s and bet the labor market would keep giving us runway if we moved early enough. We won't pretend the model works for a student who can't afford to keep training indefinitely. We built a system that rewards people who can keep adapting. We never solved what happens to everyone else.",
        name: "Dr. Aaron Kessler",
        context: "provost, mid-sized public university",
      },
      {
        role: "Employer",
        quote:
          "Nobody applying here had the pedigree that used to matter, and I've stopped asking for it. What I need is someone who can walk onto a floor where half the routine work is automated and immediately figure out what the humans and the machines each shouldn't do. That's the actual bottleneck now, and it's in shorter supply than the technology is.",
        name: "Annika Ibsen",
        context: "Head of Talent, logistics and robotics operations firm",
      },
    ],
    careerHandoffTitle: "The new jobs live in the handoff",
    careerHandoffBody: "The work between people, AI, and machines is becoming its own specialty.",
    readinessTitle: "Being ready stopped meaning being finished",
    closingHeadline: "The future is flexible. Flexibility isn't free.",
    closingBody: [
      "Staying on the lattice takes something nobody budgeted for: time. Every sideways move, every cohort program, every portfolio review assumes you can step away from earning to get re-credentialed, and then do it again a few years later. Some people can absorb that. They take the unpaid weeks, front the tuition, and treat a plateau as a chance to retrain instead of a threat. Other people are working two jobs and raising kids and don't have six months to spare, no matter how badly they need the new skill.",
      "Nothing about this looks like a crisis from the outside. No one's shut out of the system the way they might have been under the old ladder. They're just quietly outpaced by people who can afford to keep training when they can't.",
    ],
    closingQuestion:
      "If career readiness is no longer a destination you reach at graduation, but a subscription you pay for your entire life, what does a university owe the people who can't afford the updates?",
  },
  {
    id: "02",
    number: "02",
    slug: "collapse",
    codename: "COLLAPSE",
    title: "Prove You're Human",
    shortTitle: "Prove You're Human",
    tagline:
      "Every verification system fails at once, and nothing replaces trust. It just disappears.",
    homeQuestion: "How do you prove you're ready when nothing can vouch for you?",
    statement: "Human authenticity becomes the scarcest credential of all.",
    overview:
      "Synthetic content, AI-generated applications, automated portfolios, and intelligent agents become commonplace. Human authenticity becomes valuable, and people increasingly have to prove which skills, ideas, and work are genuinely theirs.",
    drivingForce:
      "Ubiquitous generative tooling erodes the evidentiary value of any single artifact — a résumé, an essay, a portfolio piece.",
    education:
      "Assessment moves away from artifacts and toward live, observed, and process-based evidence: oral defense, real-time problem solving, documented iteration.",
    employment:
      "Employers build verification into hiring itself — supervised assessments, provenance checks, and live demonstrations replace submitted work samples.",
    careerMobility:
      "People with access to verification infrastructure and reputational networks advance faster than those who only have artifacts to offer.",
    emergingCareers: [
      "Trial-hire program designer",
      "Independent skills auditor",
      "Reputation and reference network coordinator",
      "Apprenticeship-pipeline manager",
      "Credential forensics specialist",
      "Verification and compliance officer",
    ],
    careerReadiness:
      "Nothing external can be counted on to vouch for you anymore — not a degree, not a badge, not a platform score. Readiness becomes something you demonstrate directly and repeatedly, through trial periods that only some people can afford to take.",
    aiLevel: 62,
    trustLevel: 30,
    accent: "#00a3e0",
    icon: IdCard,

    heroHeadline: "The badge that certified nothing",
    heroIntro:
      "By 2036, everyone had some way to prove they were qualified. Degrees, badges, platform scores, certifications. Nobody trusted any of them.",
    heroImage: "/future2.png",
    howItStartedTitle: "It looked like a better way to prove you could do the work",
    howItStartedBody: [
      "Around 2027, entry-level hiring was already thinning and skepticism about degrees was growing. A new generation of AI-assessed credentialing platforms promised something universities couldn't: proof instead of paper. Upload your work, run it through an AI evaluator, and get a certified competency badge in hours instead of a transcript in four years.",
      "Employers liked it. Students liked it faster. And for a while, without anyone noticing, the credentials got worse. The first platforms were rigorous, reviewing work personally through trained evaluators. As the companies expanded quickly, most of them started outsourcing that review and approving more applicants faster, with less friction. By the time anyone thought to guard against it, badge fraud had become fully verified — and everywhere.",
    ],
    whatChangedTitle: "Nobody knew what to trust anymore",
    whatChangedBefore:
      "The platforms lost their credibility within months. Employers didn't just distrust the badges — they stopped trusting portfolios, period. If one verification loop could quietly fail for a year without anyone noticing, no signal felt clean anymore. There was no shared standard to fall back on, and no accreditor had authority over any of the platforms.",
    pullQuote:
      "Distrust in one signal simply pushed weight onto the next. Eventually, every signal took its turn being discredited or ignored.",
    whatChangedAfter:
      "By 2036, readiness isn't something anyone certifies anymore. It's something you spend months proving, one employer at a time, starting from zero every time.",
    axisSummary:
      "Trust in traditional credentials breaks down faster than any new system can replace it. Readiness becomes something employers, networks, and individuals verify for themselves, making education and employment more fragmented, and making personal connections increasingly valuable.",
    indicatorTitle: "Trust keeps moving closer to the employer",
    indicatorSubtitle:
      "More employers are turning to their own apprenticeship programs to develop and assess career readiness, rather than relying on higher education or external credentials.",
    indicatorData: [
      { year: "2024", value: 47 },
      { year: "2026", value: 58 },
      { year: "2028", value: 63 },
      { year: "2030", value: 68 },
      { year: "2032", value: 76 },
      { year: "2034", value: 82 },
      { year: "2036", value: 88 },
    ],
    threeVoicesTitle: "Everyone agrees the signal broke. Nobody agrees what replaces it.",
    voices: [
      {
        role: "Faculty",
        quote:
          "A student's degree used to close the question of whether they could do the work. Now it opens it. Every conversation with an employer starts with them asking how we know what we say we know.",
        name: "Dr. Renata Osei",
        context: "assessment design lead, undergraduate programs",
      },
      {
        role: "Institutional Leader",
        quote:
          "We didn't chase down one bad actor. We chased the fact that our credential meant the same thing whether a student had earned it through four years of real struggle or four well-written prompts. Once that gap went public, the credential lost value for everyone holding it — including the students who did it the hard way.",
        name: "Marcus Whitfield",
        context: "provost, mid-sized public university",
      },
      {
        role: "Employer",
        quote:
          "Everybody still lists what they used to claim on a resume, but nobody here actually believes it until they've watched someone do the job in front of them for real. That's expensive. We'd rather pay for it once than get burned by it every quarter.",
        name: "Priya Ramachandran",
        context: "VP Talent, mid-market consulting firm",
      },
    ],
    careerHandoffTitle: "The new jobs live in the proof",
    careerHandoffBody:
      "When nobody agrees on what counts as evidence, proving that evidence becomes its own industry.",
    readinessTitle: "Being qualified means proving it again (and again)",
    closingHeadline: "The credential couldn't speak for you anymore.",
    closingBody: [
      "The system returned to reputation, references, relationships, and people willing to put their name behind you. That works when the person doing the vouching knows what you're worth — and knows you well enough to say so.",
      "The university's traditional role was to teach, and to vouch. Now that platforms can lose credibility just as fast as people can, nothing can force trust back into a system that no longer trusts itself.",
    ],
    closingQuestion: "If employers become the validators, what is left for universities to validate?",
  },
  {
    id: "03",
    number: "03",
    slug: "constraint",
    codename: "CONSTRAINT",
    title: "The Ground That Won't Stay Still",
    shortTitle: "Constraint",
    tagline: "Climate risk redraws the map of where people can live, learn, and work.",
    homeQuestion: "How do you build a career on ground that won't stay still?",
    statement: "Stability became something you build, not something you're given.",
    overview:
      "Escalating climate risk redraws where people can safely live, learn, and work. Entire regions become unstable for long-term investment, forcing institutions and careers to become mobile by design.",
    drivingForce:
      "Accelerating climate disruption — heat, flooding, wildfire, and displacement — makes geographic stability something fewer people and institutions can count on.",
    education:
      "Universities build distributed, modular campuses and portable credentials designed to follow students through relocation rather than assuming a fixed campus and a four-year residency.",
    employment:
      "Employers build remote-first, relocation-resilient roles as a baseline expectation, and treat an employee's ability to work through disruption as a core qualification.",
    careerMobility:
      "Mobility becomes literal as much as professional — career advancement increasingly depends on the ability to relocate, rebuild, and requalify wherever ground remains stable.",
    emergingCareers: [
      "Vertical hydroponic farming technician",
      "Insurance and financial risk analyst for climate-exposed properties",
      "Climate relocation planner",
      "Infrastructure engineer for fast-growing areas",
      "Solar and wind installation and maintenance",
      "Water management specialist",
    ],
    careerReadiness:
      "Flexibility stops being a soft skill and becomes the baseline requirement, because entire industries and regions can decline within just a few years, often with no established playbook for whatever replaces them. Hands-on, practical experience earns more weight than credentials tied to one place or one stable industry.",
    aiLevel: 38,
    trustLevel: 55,
    accent: "#ffc627",
    icon: Globe,

    heroHeadline: "The slow eviction",
    heroIntro:
      "Climate change arrived as a slow eviction. By 2036, that eviction has a geography you can draw on a map — the places people are being pushed out of, and the places absorbing everyone who leaves.",
    heroImage: "/future3.png",
    howItStartedTitle: "Insurance moved first",
    howItStartedBody: [
      "Rising heat, worsening storms, and water shortages made whole regions too risky to insure — places like the Gulf Coast, the Southwest, and low-lying coastal cities. Once a region became uninsurable, homes couldn't be sold or financed there, so people got stuck. That single fact trapped more people in place than the disasters themselves ever did.",
      "Communities didn't empty out because everyone chose to leave. They emptied out because nobody could stay, while people with money and flexibility could leave early. Agriculture shifted at the same time, as food production tilted toward the Great Lakes and the Upper Midwest. The farmland left behind didn't stay empty for long — most of it filled back in with water.",
    ],
    whatChangedTitle: "The ground beneath our feet",
    whatChangedBefore:
      "The places people were moving to couldn't absorb them fast enough. Schools in growing regions became overcrowded and underfunded trying to keep up with new students, while schools in shrinking regions faced falling enrollment and aging buildings nobody could justify funding repairs for.",
    pullQuote:
      "Jobs meant a means of survival even more so now than ever, as the ground continuously shifts and rumbles by the second.",
    whatChangedAfter:
      "Heat waves, wildfire smoke, and floods hit often enough that remote learning stopped being a backup plan and became the permanent way school worked. Nobody chose unbundled learning as a philosophy — it's just what's left when the building isn't reliably there.",
    axisSummary:
      "Physical and environmental pressures reshape where people can live, learn, and work. Institutions remain important sources of credentialing, but learning becomes more distributed as students and communities adapt to a world where geography is increasingly unstable.",
    indicatorTitle: "Employment follows geography",
    indicatorSubtitle:
      "As climate risk redraws the map, people, jobs, and education all move together — and not always to the same places.",
    indicatorData: [
      { year: "2024", value: 9 },
      { year: "2026", value: 15 },
      { year: "2028", value: 24 },
      { year: "2030", value: 34 },
      { year: "2032", value: 44 },
      { year: "2034", value: 52 },
      { year: "2036", value: 61 },
    ],
    threeVoicesTitle:
      "Success depends less on tradition and more on the ability to adapt to constant change.",
    voices: [
      {
        role: "Faculty",
        quote:
          "Every year I teach fewer students in a building that's falling apart, and every year the students I do have ask me, not unreasonably, whether staying here to finish their degree is a bet they should even be making. I don't have a good answer. I used to be able to tell students their education was portable no matter where they ended up. Now I'm not sure the institution issuing it is going to still exist by the time they need it to vouch for them.",
        name: "Marisol Trejo",
        context: "professor at a shrinking Southwest university",
      },
      {
        role: "Institutional Leader",
        quote:
          "Everyone wants to say we're drowning, but we're busy — those aren't the same thing. For years I closed a building every other cycle and welcomed letters from good teachers leaving. Now I'm hiring. We've opened two schools in the last fall, and we're breaking ground on a third. I finally have enough students to justify the things a shrinking district can only dream of, like a real technical program, an arts department, and multiple languages. And the kids arriving already know how to learn anywhere — half of them have done it online, in a library, in a relative's kitchen, across three schools in five years. That's not a gap I have to close. My job is to welcome these families, not wish there were fewer of them.",
        name: "Dana Rusko",
        context: "superintendent at a Great Lakes school district experiencing rapid growth",
      },
      {
        role: "Employer",
        quote:
          "I don't ask where someone went to school. I ask if they can move somewhere with six weeks' notice and be useful on day one, because that's the job now. The people who struggle aren't the ones who lack technical skill — plenty of people can learn hydroponics. It's the ones who haven't rebuilt a life somewhere unfamiliar before, the ones without flexibility built in. Nobody's teaching that, and I don't think anyone really can. You either can or you can't.",
        name: "Julian Okafor",
        context: "hiring manager specializing in vertical farming operations in the Upper Midwest",
      },
    ],
    careerHandoffTitle: "The new jobs follow the map",
    careerHandoffBody:
      "As climate change redraws where people can live, work, and learn, careers increasingly focus on supporting growing infrastructure, managing limited resources, and helping people relocate.",
    readinessTitle: "You can't prepare for a place that won't stay put",
    closingHeadline: "Who gets to adapt?",
    closingBody: [
      "Climate change didn't arrive everywhere equally. The people with the resources to move left early, and everyone else absorbed the biggest losses staying put.",
      "Schools, infrastructure, and local governments followed the same split. Growing regions expanded to serve new populations, while shrinking regions stretched every service and long-term plan past what was realistic.",
    ],
    closingQuestion:
      "If where you live increasingly determines what opportunities you have, how should education prepare people for a world where they may have to move to find them?",
  },
  {
    id: "04",
    number: "04",
    slug: "transformation",
    codename: "TRANSFORM",
    title: "Chasing Something Other Than Safety",
    shortTitle: "Transformation",
    tagline:
      "Guaranteed income makes education less about survival and more about purpose and choice.",
    homeQuestion: "What do you chase when you no longer have to chase safety?",
    statement: "Safety stopped being the finish line. It became the starting line.",
    overview:
      "A baseline guaranteed income removes the urgency of employment as pure survival. Credentials stop functioning as a safety mechanism and start functioning as something people pursue for its own sake — or not at all.",
    drivingForce:
      "Widespread adoption of guaranteed income programs decouples basic survival from employment, changing what people need credentials and careers for in the first place.",
    education:
      "Institutions shift from credentialing-for-survival toward credentialing-for-purpose, competing less on job placement and more on whether they can help someone build a meaningful, self-directed life.",
    employment:
      "Employment becomes more voluntary and more selective; people take jobs because they want to, not because they must, changing what employers have to offer to attract anyone at all.",
    careerMobility:
      "Mobility is reframed entirely around interest and contribution rather than necessity — with far more people opting out of traditional career tracks altogether.",
    emergingCareers: [
      "Community innovation leader",
      "Public interest researcher",
      "Creative entrepreneur",
      "Corporate training and apprenticeship program designer",
      "Employer-side career coach and pipeline recruiter",
      "Industry-specific apprenticeship coordinator",
    ],
    careerReadiness:
      "Career readiness shifts from employability to adaptability and purpose. Instead of preparing students for one predefined career path, education should help them understand what they want, make informed choices, and embrace lifelong learning. Choosing a path takes more self-direction because there's no single expected route left to default into.",
    aiLevel: 95,
    trustLevel: 68,
    accent: "#78be20",
    icon: Sparkles,

    heroHeadline: "Survival stopped depending on the job",
    heroIntro:
      "Universal Basic Income became more than just a dream. It became a reality that changed what work was for, why people pursued it, and how they proved they could do it.",
    heroImage: "/future4.png",
    howItStartedTitle: "Work became a choice",
    howItStartedBody: [
      "Universal Basic Income wasn't introduced through a single decision. It emerged over years of growing pressure from widening inequality, AI-driven workforce disruption, and a changing public belief about the purpose of work. By the early 2030s, UBI had become permanent, ensuring a baseline level of financial security regardless of employment.",
      "Once survival no longer depended on holding a job, education changed too. Degrees and prestigious credentials stopped being the sole path to financial stability, so people stopped chasing them by default. Instead, learners chose programs, employers, and learning experiences that aligned with their interests, goals, and values, even when those didn't correlate with employability.",
    ],
    whatChangedTitle: "Education stopped being a safety net",
    whatChangedBefore:
      "The shift was about what happened when financial survival was no longer tied to employment. Education shifted from being primarily a gateway to stable work, and toward helping people explore, develop expertise, and continue learning throughout their lives. Success was measured less by job placement and more by personal growth, adaptability, and meaningful contribution.",
    pullQuote: "How does one decide what to pursue when they no longer have to worry about survival?",
    whatChangedAfter:
      "Employment changed alongside education. Employers could no longer rely on financial necessity to attract workers, so they competed through meaningful work, strong culture, and opportunities for growth. Many invested directly in apprenticeships and on-the-job learning to build the talent they needed, placing greater value on demonstrated skill, curiosity, and purpose than traditional credentials alone.",
    axisSummary:
      "When financial survival no longer needs to justify itself primarily through economic return, learning becomes more distributed and purposeful, as universities compete with employers and other providers to help people build expertise, meaning, and civic capacity.",
    indicatorTitle: "Work becomes a choice",
    indicatorSubtitle:
      "As financial security became less dependent on employment, employers had to compete for people's time and commitment rather than simply assume they need it for a paycheck.",
    indicatorData: [
      { year: "2024", value: 76 },
      { year: "2026", value: 68 },
      { year: "2028", value: 57 },
      { year: "2030", value: 46 },
      { year: "2032", value: 37 },
      { year: "2034", value: 29 },
      { year: "2036", value: 22 },
    ],
    threeVoicesTitle: "Nobody needs the same thing from education anymore",
    voices: [
      {
        role: "Faculty",
        quote:
          "My classroom used to consist of twenty-year-olds anxious about their first job. Now I have a mix — a thirty-year-old who has never worked a day in her life and isn't in a hurry to, and a man in his sixties who chose this seminar just to understand why he even chose that path. It's almost impossible to build one curriculum for people who need such different things from the same room.",
        name: "Tomás Reyes",
        context: "Professor who previously had an emphasis on career-and-vocation seminar, now teaching a decade later",
      },
      {
        role: "Institutional Leader",
        quote:
          "We nearly closed twice in the early 2020s due to chasing unsustainable job-placement goals. We couldn't have made it as students if UBI didn't save any by giving our students money. Now we're being asked why we haven't hesitated to choose a career in the arts. We still think about whether we would have made it as a college if the transformation hadn't taken place when it did.",
        name: "Dr. Elaine Braithwaite",
        context: "president of a small liberal arts college",
      },
      {
        role: "Employer",
        quote:
          "I used to assume that if someone was paid well enough, they'd stay and finish the work. What I actually have now is a studio where nobody really needs the paycheck badly enough to tolerate work they don't want to do. A project goes sideways in month three, and I lose people because they decide it's no longer worth their time. I've stopped putting junior workers on anything that takes longer than a month. They get bored, and there's no financial pressure keeping them there. The upside is that people who stay can teach you what they actually want. That's valuable. But someone still has to do the work nobody wants to do, and I'm running out of people willing to be that person.",
        name: "Meera Chandrasekaran",
        context: "founder of a mid-size design studio",
      },
    ],
    careerHandoffTitle: "The new jobs live in the choice",
    careerHandoffBody:
      "As universities stopped being the default gateway into employment, new careers emerged around alternative learning pathways, purpose-driven work, and the growing space between education and employment.",
    readinessTitle: "Preparing for purpose instead of employment",
    closingHeadline: "Education had to justify itself differently",
    closingBody: [
      "With financial security guaranteed, people gained the freedom to choose how they learned and worked. But as employers took on a larger role in career education and training, no single institution remained solely responsible for making sure those opportunities were meaningful, or trustworthy, or translatable.",
    ],
    closingQuestion: "If people no longer need a degree to survive, what should education become?",
  },
];

export const getFutureBySlug = (slug: string) =>
  futures.find((f) => f.slug === slug);
