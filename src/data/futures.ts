import { CollapseIcon, ConstraintIcon, GrowthIcon, TransformationIcon } from "./futureIcons";
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
    careerReadiness: [
      "Judgment, adaptability, and the ability to work across human and machine teams matter more now than any single technical specialty, because the specialty itself has a short shelf life. Success depends less on what someone already knows and more on how fast they can learn the next thing. Time and financial slack become part of what it takes to stay competitive, even in a future where nothing looks broken.",
    ],
    aiLevel: 78,
    trustLevel: 38,
    accent: "#ff7f32",
    icon: GrowthIcon,

    heroHeadline: "Nobody noticed the ladder disappear",
    heroIntro:
      "Ask anyone to name the day the old career ladder disappeared and they'll struggle. There wasn't one. That's the story.",
    heroImage: "/futures/future1.png",
    howItStartedTitle: "It started with the work nobody wanted to do",
    howItStartedBody: [
      "By 2036, the entry level work that trained you by giving you small, forgiving mistakes to make is largely gone, in offices and on factory floors alike. Nobody would call this a crisis. It happened too slowly and too evenly for that word to stick, because institutions and employers adapted right along with it.",
      "The breakthroughs arrived more or less on schedule: reliable multimodal AI by the late 2020s, with capable robotics not far behind. Neither was really a surprise. What people underestimated was how completely organizations would lean into both at once.",
      "They didn't just automate routine cognitive work like reports, analysis, scheduling, and first drafts. They automated routine physical work on the same timeline, in the same buildings. A hospital that automated its documentation in 2028 was piloting surgical assist and mobility robots by 2031. The two trends everyone expected to unfold separately, AI on screens and robots on floors, ended up braiding together faster than either would have alone.",
      "Entry level roles absorbed the first wave, the way they always do. Then, more quietly, so did a real slice of mid career work — the parts that were routine even if they weren't junior. It wasn't only the bottom of the ladder that thinned. Routine work thinned out at every level.",
    ],
    whatChangedTitle: "The resume had a good run",
    whatChangedBefore: [
      "Universities didn't get caught flat footed. They'd watched computer science enrollment wobble years earlier, and the labor market gave them just enough runway to adjust before the next shift landed. Curricula moved away from anything easy to test or memorize and toward what AI couldn't fake: live problem solving, defended judgment calls, working through messy real problems with other people.",
      "But the skills survived more easily than the structures that once housed them. Some traditional departments and majors shrank or disappeared, while judgment, communication, and problem solving moved into professional programs, capstones, simulations, and general education. Hiring followed the same shift, with simulations and live assessments becoming more trusted than resumes.",
      "Live assessment was expensive to build and maintain. Employers increasingly helped fund it because they needed a better way to find people who could actually do the work. The university didn't hand this off. It stayed the place that ran the simulations and awarded the credential, even as its own departments and majors reshuffled underneath that role. The credential didn't move. What sat inside the building holding it did.",
    ],
    pullQuote:
      "The ladder didn't get pulled out from under anyone. It got replaced rung by rung with something closer to a lattice.",
    whatChangedImage: "/futures/future1photo.png",
    whatChangedAfter: [
      "People moved sideways into new specialties as often as they moved up, guided by constant reskilling instead of steady promotion. Cohort programs, employer-university partnerships, and portfolio reviews became familiar ways of proving readiness. The career ladder didn't disappear so much as change shape.",
      "It's the cost of a ladder that never stops moving. You're never finished training, never done proving your judgment, never more than one plateau away from having to learn something again. For people with the time and money to keep climbing, that's invigorating. For everyone else, it's exhausting.",
    ],
    axisSummary:
      "Technology reshapes work without destabilizing the institutions around it. Universities remain trusted arbiters of readiness, adapting their curricula and assessments as the labor market evolves. The result is a system that keeps working — but demands continuous adaptation from the people inside it.",
    indicatorTitle: "Nothing here looks like a crisis",
    indicatorSubtitle: "Entry level hiring declines steadily as AI and robotics reshape the workforce.",
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
          "People act like we got lucky. We didn't. We watched computer science enrollment wobble in the mid-2020s and bet the labor market would keep giving us runway if we moved early enough. But I won't pretend the model works for a student who can't afford to keep training indefinitely. We built a system that rewards people who can keep adapting. We never solved what happened to everyone else.",
        name: "Dr. Aaron Kessler",
        context: "provost, mid-sized public university",
      },
      {
        role: "Employer",
        quote:
          "Nobody applying here has the pedigree that used to matter, and I've stopped asking for it. That's partly because we don't need it anymore. Half the routine work on this floor is automated. What I need is someone who can walk onto it and immediately figure out what the humans and the machines each shouldn't be doing. It's the actual bottleneck now, and it's in shorter supply than the technology is.",
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
    careerReadiness: [
      "Nothing external can be counted on to vouch for you anymore. Not a degree, not a badge, not a platform score.",
      "Readiness becomes something you demonstrate directly and repeatedly, often through extended trial periods that only some people can afford. Experience becomes valuable not just because of what you learned, but because someone with credibility was there to watch you use it.",
      "The advantage tips toward people who already have networks willing to vouch for them personally. The students with the fewest connections going in are the ones who struggle the most.",
    ],
    aiLevel: 62,
    trustLevel: 30,
    accent: "#00a3e0",
    icon: CollapseIcon,

    heroHeadline: "The badge that certified nothing",
    heroIntro:
      "By 2036, everyone had some way to prove they were qualified. Degrees, badges, platform scores, certifications. Nobody trusted any of them.",
    heroImage: "/futures/future2.png",
    howItStartedTitle: "It looked like a better way to prove you could do the work",
    howItStartedBody: [
      "Around 2027, entry level hiring was already thinning and skepticism about degrees was growing. A new generation of AI assessed credentialing platforms promised something universities couldn't: proof instead of paper. Upload your work, run it through an AI evaluator, and get a verified competency badge in hours instead of a transcript in four years.",
      "Employers liked it. Students liked it even more. It was fast, it was cheap, and for a while, it worked. The first platforms were rigorous. Small teams reviewed the assessments, humans monitored the evaluators, and the credentials meant something partly because so few people had them. But rigor doesn't scale as easily as convenience does.",
      "By 2029, there were dozens of competing verification services, each with its own standard, its own AI grader, and its own claim to being the trusted one. Employers couldn't easily evaluate the evaluators, so they started accepting whichever badges showed up most often. The badge issuers, competing for that trust, started approving more applicants faster and with less friction. Nobody set out to build a race to the bottom. It became one anyway.",
      "The break came from an angle nobody had thought to guard because nobody thought they needed to. A mid sized verification platform used heavily in early career tech and design hiring turned out to have trained its evaluator on portfolios that were themselves AI generated. AI made the work. AI graded the work. No human had checked either end in more than a year. It wasn't fraud exactly. It was a system doing what it had been built to do, at a scale nobody had stress tested.",
      "The badge had certified real competency for real people, right up until it certified none of it. And there was no way from the outside to tell which was which.",
    ],
    whatChangedTitle: "Nobody knew what to trust anymore",
    whatChangedBefore: [
      "The platform lost its contracts within a month. Employers didn't just distrust that badge. They stopped trusting badges, period. If one verification loop could quietly fail for a year without anyone noticing, none of the others could be assumed clean. There was no shared standard to fall back on. No accreditor had authority over the platforms. No single body could point to one credential and say: this one is trustworthy. The degree had already been hollowed out as a signal years earlier. Now its replacement was gone too. For the first time in decades, nobody had a default trusted signal.",
      "Large employers responded by building their own. Extended trial periods, in house assessment centers, and apprenticeship style programs that ran for six months before an actual offer became normal. It worked for them because they had the money and infrastructure to absorb the cost of evaluating people themselves. Small and mid sized employers didn't have that margin. They fell back on the oldest signal there is: who do we already know, and who vouches for whom? Hiring became more relational and less legible almost overnight. The people with the thinnest networks absorbed nearly all of the cost. First generation students. Career changers. People moving between industries. Anyone without an insider already in the room had to spend longer proving they belonged there.",
      "There was no single fix because there was no one with the standing to make one stick. Accreditation moved slow. Employers couldn't agree on a shared standard. The platforms had every incentive to keep competing rather than consolidate around one.",
    ],
    pullQuote:
      "Distrust in one signal simply pushed weight onto the next. Eventually, every signal took its turn being discredited or ignored.",
    whatChangedImage: "/futures/future2photo.png",
    whatChangedAfter: [
      "By 2036, readiness isn't something anyone certifies anymore. It's something you spend months proving, one employer at a time, starting from zero every time.",
    ],
    axisSummary:
      "Trust in traditional credentials breaks down faster than any new system can replace it. Readiness becomes something employers, networks, and individuals have to establish for themselves, making education and employment more fragmented, and making personal connections increasingly valuable.",
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
          "I used to believe a degree meant something because it had survived four years of scrutiny nobody could fake in aggregate. I watched us trade that for a badge that took an afternoon. I'm not just angry that it broke. I'm disappointed by the culture it created. I look at my incoming students now and they view the coursework as a hurdle to bypass. They want the credential without any interest in the craft. That's why I'm finally walking away.",
        name: "Dr. Renata Osei",
        context: "twenty-two years teaching design, now running trial-hire assessments for a mid-sized firm",
      },
      {
        role: "Institutional Leader",
        quote:
          "We didn't have a choice. Enrollment was cratering, the degree wasn't landing jobs on its own anymore, and here was a system employers said they trusted more than us. Partnering with the verification platforms wasn't a betrayal of our mission. It was the only version of our mission that still had a budget. I'll defend that decision. I won't pretend it didn't cost us something we haven't gotten back.",
        name: "Marcus Whitfield",
        context: "provost, mid-tier regional university",
      },
      {
        role: "Employer",
        quote:
          "Everybody's still fighting about whose stamp should be on the paper. I stopped caring whose stamp it is three years ago. I don't need a verifier. I need six months of watching someone actually do the job before I commit to them permanently. Neither the schools nor the badge companies saw that coming. The answer wasn't a better signal. It was skipping the signal entirely.",
        name: "Deja Marchetti",
        context: "VP of Talent, logistics and manufacturing conglomerate",
      },
    ],
    careerHandoffTitle: "The new jobs live in the proof",
    careerHandoffBody:
      "When nobody agrees on what counts as evidence, proving that evidence becomes its own industry.",
    readinessTitle: "Being qualified means proving it again (and again)",
    closingHeadline: "The credential couldn't speak for you anymore.",
    closingBody: [
      "The system returned to reputation, references, relationships, and people willing to put their name behind you. That can work when the person doing the vouching knows you. It works less well when you're the person nobody knows yet.",
      "The university's traditional role was never just to teach. It was to stand behind what you learned. Accreditation can move too slowly. Employers can disagree. Platforms can lose credibility. None can force trust back into a system that no longer has a shared authority.",
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
      "Vertical/hydroponic farming technician",
      "Insurance and financial risk analyst for climate-exposed properties",
      "Climate relocation planner",
      "Infrastructure engineer for fast-growing areas",
      "Solar and wind installation and maintenance",
      "Water management specialist",
    ],
    careerReadiness: [
      "Flexibility stops being a soft skill and becomes the new baseline requirement, because entire industries and regions can decline within just a few years, often with no established playbook for whatever replaces them. Hands-on, practical experience carries more weight now than credentials tied to one fixed place or one stable industry.",
    ],
    aiLevel: 38,
    trustLevel: 55,
    accent: "#ffc627",
    icon: ConstraintIcon,

    heroHeadline: "The slow eviction",
    heroIntro:
      "Climate change arrived as a slow eviction. By 2036, that eviction has a geography you can draw on a map: the places people are being pushed out of, and the places absorbing everyone who leaves.",
    heroImage: "/futures/future3.jpg",
    howItStartedTitle: "Insurance moved first",
    howItStartedBody: [
      "Rising heat, worsening storms, and water shortages made whole regions, like the Gulf Coast, the Southwest, and low-lying coastal cities, too risky to insure.",
      "Once a region's uninsurable, homes can't be sold or financed there, so people get stuck. That single fact trapped more people in place than the disasters themselves ever did.",
      "Communities didn't empty out because everyone chose to leave. They emptied out because people with money and flexibility could leave early, while everyone else was left holding property nobody would insure.",
      "Agriculture was collapsing at the same time, so food production shifted toward vertical farms and hydroponics clustered near the regions absorbing all the new arrivals, especially the Great Lakes and the Upper Midwest. The farmland left behind didn't stay empty for long. Most of it filled in with solar.",
    ],
    whatChangedTitle: "The ground beneath our feet",
    whatChangedBefore: [
      "The places people were moving couldn't absorb them fast enough. Schools in growing regions became overcrowded and underfunded as they struggled to keep up with new students, while schools in shrinking regions faced falling enrollment and aging buildings with little funding for repairs.",
      "Heat waves, wildfire smoke, and floods hit often enough that hybrid learning stopped being a backup plan and became the permanent way school worked. Nobody chose unbundled learning as a philosophy. It's just what's left when the building isn't reliably there.",
      "The burden of climate risk also shifted onto the market and onto individuals. No large-scale relocation insurance or government program helped people move, so only those who could afford to leave early could do so. Everyone else remains trapped in uninsurable regions, carrying the financial and personal risks on their own.",
    ],
    pullQuote:
      "Jobs meant a means of survival even more so now than ever as the ground continuously shifts and rumbles by the second.",
    whatChangedImage: "/futures/future3photo.png",
    whatChangedAfter: [
      "Employment also changed with geography. Jobs grew in vertical farming, renewable energy, and disaster relocation, while traditional farming, coastal tourism, and insurance declined. Employers increasingly cared less about pedigree and more about a blunt question: can this person relocate, adapt, and solve problems with no playbook?",
    ],
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
          "Everyone wants me to say we're drowning, but we're busy. Those aren't the same thing. For years I closed a building every other cycle and wrote severance letters to good teachers. Now I'm hiring. We opened two schools last fall and we're breaking ground on a third. I finally have enough students to justify the things a shrinking district can only wish for, like a real technical program, an arts department, and three languages. And the kids arriving here already know how to learn anywhere: half of them have done it online, in a library, in a relative's kitchen, across three schools in five years. That's not a gap I have to close. My job is to welcome these families, not to wish there were fewer of them.",
        name: "Dana Rusko",
        context: "superintendent at a Great Lakes school district experiencing rapid growth",
      },
      {
        role: "Employer",
        quote:
          "I don't ask where someone went to school. I ask if they can move somewhere with six weeks' notice and be useful on day one, because that's the job now. The people who struggle most aren't the ones who lack technical skill. Plenty of people can learn hydroponics. It's the ones who've never had to rebuild a life somewhere unfamiliar before, the ones without flexibility for change. Nobody's teaching that, and I don't think anyone really can. You either can or you can't.",
        name: "Julian Okafor",
        context: "hiring manager specializing in vertical farming operations in the Upper Midwest",
      },
    ],
    careerHandoffTitle: "The new jobs follow the map",
    careerHandoffBody:
      "As climate change reshaped where people could live, work shifted to meet new demands. Emerging careers focus on supporting growing communities, adapting critical infrastructure, managing limited resources, and helping people relocate.",
    readinessTitle: "You can't prepare for a place that won't stay put",
    closingHeadline: "Who gets to adapt?",
    closingBody: [
      "Climate change didn't affect everyone equally. The people with the resources to move left early, while everyone else stayed behind in places losing insurance, jobs, and public investment.",
      "Schools, infrastructure, and local governments followed the same divide. Growing regions expanded to serve new populations, while shrinking communities struggled to maintain basic services. Political priorities shifted every election cycle, making long-term planning nearly impossible.",
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
    careerReadiness: [
      "Career readiness shifts from employability to adaptability and purpose. Instead of preparing students for one predefined career path, education has to help them understand what they want, make informed choices, and embrace lifelong learning.",
      "Choosing a path takes more self direction because there's no single expected route left to fall into.",
    ],
    aiLevel: 95,
    trustLevel: 68,
    accent: "#78be20",
    icon: TransformationIcon,

    heroHeadline: "Survival stopped depending on the job",
    heroIntro:
      "Universal Basic Income became more than just a dream. It became a reality that changed what work was for, why people pursued it, and how they proved what they could do.",
    heroImage: "/futures/future4.png",
    howItStartedTitle: "Work became a choice",
    howItStartedBody: [
      "Universal Basic Income (UBI) wasn't introduced through a single decision. It emerged over years of growing pressure from widening inequality, AI driven workforce disruption, and a changing public belief about the purpose of work. By the early 2030s, UBI had become permanent, ensuring a basic level of financial security regardless of employment.",
      "Once survival was no longer tied to holding a job, education changed too. Degrees and prestigious credentials no longer served as the safest path to financial stability, so people stopped chasing them by default. Instead, learners chose programs, employers, and learning experiences that aligned with their interests, goals, and values, even when those paths were unconventional.",
      "Universities didn't lose credibility. They simply lost their monopoly on proving someone's worth. When a credential stopped being insurance against poverty, people became freer to pursue what they actually wanted to learn.",
    ],
    whatChangedTitle: "Education stopped being a safety net",
    whatChangedBefore: [
      "The shift was about what happened when financial survival was no longer tied to employment.",
      "Education shifted away from being primarily a gateway to stable work and toward helping people explore purpose, develop expertise, and continue learning throughout their lives. Success was measured less by job placement and more by personal growth, adaptability, and meaningful contribution.",
      "The role of credentials changed as well. Trust in degrees didn't disappear. They simply became less urgent. With a basic financial floor underneath them, learners could pursue apprenticeships, employer-led training, online programs, and other alternative pathways without risking their livelihood. Universities remained valuable, but they were no longer the default or only route into a career.",
    ],
    pullQuote: "How does one decide what to pursue when they no longer have to worry about survival?",
    whatChangedImage: "/futures/future4photo.png",
    whatChangedAfter: [
      "Employment changed alongside education. Employers could no longer rely on financial necessity to attract workers, so they competed through meaningful work, strong cultures, and opportunities for growth. Many invested directly in apprenticeships and on-the-job learning to build the talent they needed, placing greater value on demonstrated skills, curiosity, and purpose than traditional credentials alone.",
    ],
    axisSummary:
      "When financial survival is no longer tied to employment, education no longer has to justify itself primarily through economic return. Learning becomes more distributed and purposeful, while universities compete with employers and other providers to help people build expertise, meaning, and civic capacity.",
    indicatorTitle: "Work becomes a choice",
    indicatorSubtitle:
      "As financial security became less dependent on employment, employers had to compete for people's time and commitment rather than simply their need for a paycheck.",
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
          "My classroom used to consist of twenty year olds anxious about their first job. Now it's a nurse in her forties starting over, a nineteen year old who has never worked a day in her life and isn't in a hurry to, a guy who spent six years as an accountant and wants to understand why he even chose that path to begin with. This form of teaching makes me feel alive. I get to help people find meaning and purpose for life and for their careers. It's also nearly impossible to build a standard curriculum for, because none of them need the same thing from me anymore.",
        name: "Tomás Reyes",
        context:
          "professor who previously had an emphasis on career services, now teaching a purpose-and-vocation seminar that didn't exist a decade ago",
      },
      {
        role: "Institutional Leader",
        quote:
          "We nearly closed twice in the early 2020s due to chasing unreasonable job placement goals we couldn't help our students meet. UBI didn't save us by giving our students money. It saved us by taking away the reason they were hesitant to choose a career in liberal arts. We rebuilt the entire enrollment model around meaning rather than return on investment. I occasionally think about whether we would have made it as a college if the transformation hadn't taken place when it did.",
        name: "Dr. Elaine Brathwaite",
        context: "president of a small liberal arts college",
      },
      {
        role: "Employer",
        quote:
          "I used to assume that if someone was paid well enough, they'd stay and finish the work. What I actually have now is a studio where nobody needs the paycheck badly enough to tolerate work they don't want to do. A project goes sideways in month three, and I lose two people because they decide it's no longer worth their time. I've stopped putting junior workers on anything that takes longer than a month. They get bored. They leave. And there's no financial pressure keeping them there. The universities can celebrate teaching people to know what they want. That's valuable. But someone still has to do the work nobody wants to do. I'm running out of people who see that person being them.",
        name: "Meera Chandrasekaran",
        context: "founder of a mid-size design studio",
      },
    ],
    careerHandoffTitle: "The new jobs live in the choice",
    careerHandoffBody:
      "As universities stopped being the default gateway into employment, new careers emerged around alternative learning pathways, purpose driven work, and the growing space between education and employment.",
    readinessTitle: "Preparing for purpose instead of employment",
    closingHeadline: "Education had to justify itself differently",
    closingBody: [
      "With financial security guaranteed, people gained the freedom to choose how they learned and worked. But as employers took on a larger role in education and training, no single institution remained responsible for making sure those opportunities were meaningful, trustworthy, or transferable.",
    ],
    closingQuestion: "If people no longer need a degree to survive, what should education help them become?",
  },
];

export const getFutureBySlug = (slug: string) =>
  futures.find((f) => f.slug === slug);
