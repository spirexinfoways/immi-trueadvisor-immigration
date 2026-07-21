export const COMPANY = 'Immi True Advisors Immigration'
export const PHONE = '+1 (555) 010-2040'
export const EMAIL = 'info@immitrueadvisors.example'
export const ADDRESS = '100 Advisor Way, Suite 500, Toronto, ON'


// Main navigation: recursive tree of { label, slug, children? }
export const nav = [
  {
    label: 'About Us', slug: '/about',
  },
  {
    label: 'Immigration', slug: '/immigration/express-entry', children: [
      {
        label: 'Express Entry', slug: '/immigration/express-entry', children: [
          { label: 'Canadian Experience Class', slug: '/immigration/express-entry/canadian-experience-class' },
          { label: 'Federal Skilled Worker', slug: '/immigration/express-entry/federal-skilled-worker' },
          { label: 'Federal Skilled Trades', slug: '/immigration/express-entry/federal-skilled-trades' },
          { label: 'Bridging Open Work Permit', slug: '/immigration/express-entry/bridging-open-work-permit' },
        ],
      },
      {
        label: 'Ontario PNP', slug: '/immigration/ontario-pnp', children: [
          {
            label: 'Job Offer Streams', slug: '/immigration/ontario-pnp/job-offer-streams', children: [
              { label: 'Foreign Worker Stream', slug: '/immigration/ontario-pnp/job-offer-streams/foreign-worker' },
              { label: 'International Student Stream', slug: '/immigration/ontario-pnp/job-offer-streams/international-student' },
              { label: 'In-Demand Skills Stream', slug: '/immigration/ontario-pnp/job-offer-streams/in-demand-skills' },
            ],
          },
          {
            label: 'Express Entry Streams', slug: '/immigration/ontario-pnp/express-entry-streams', children: [
              { label: 'Human Capital Priorities Stream', slug: '/immigration/ontario-pnp/express-entry-streams/human-capital-priorities' },
              { label: 'Skilled Trades Stream', slug: '/immigration/ontario-pnp/express-entry-streams/skilled-trades' },
              { label: 'French-Speaking Skilled Worker', slug: '/immigration/ontario-pnp/express-entry-streams/french-speaking-skilled-worker' },
            ],
          },
          {
            label: 'Post-Graduate Streams', slug: '/immigration/ontario-pnp/post-graduate-streams', children: [
              { label: 'Masters Graduate Stream', slug: '/immigration/ontario-pnp/post-graduate-streams/masters-graduate' },
              { label: 'PhD Graduate Stream', slug: '/immigration/ontario-pnp/post-graduate-streams/phd-graduate' },
            ],
          },
        ],
      },
      { label: 'Start-Up Visa', slug: '/immigration/start-up-visa' },
      {
        label: 'Other Programs', slug: '/immigration/other-programs', children: [
          { label: 'Other Provincial Nominee Programs', slug: '/immigration/other-programs/provincial-nominee-programs' },
          { label: 'Self-Employed Program', slug: '/immigration/other-programs/self-employed' },
          { label: 'Programs for Caregivers', slug: '/immigration/other-programs/caregivers' },
          { label: 'Agri-Food Pilot', slug: '/immigration/other-programs/agri-food-pilot' },
          { label: 'Rural & Northern Immigration Pilot', slug: '/immigration/other-programs/rural-northern-pilot' },
          { label: 'Atlantic Immigration Program', slug: '/immigration/other-programs/atlantic-immigration' },
          { label: 'PR Pathways for Hong Kong Residents', slug: '/immigration/other-programs/hong-kong-residents' },
        ],
      },
    ],
  },
  {
    label: 'Family Class', slug: '/family/spouse-partner', children: [
      {
        label: 'Spouse / Partner / Fiancé(e)', slug: '/family/spouse-partner', children: [
          { label: 'Sponsorship Program (PR)', slug: '/family/spouse-partner/sponsorship' },
          { label: 'Open Work Permit', slug: '/family/spouse-partner/open-work-permit' },
          { label: 'Visitor Visa', slug: '/family/spouse-partner/visitor-visa' },
          { label: 'Compare All Programs', slug: '/family/spouse-partner/compare-programs' },
        ],
      },
      {
        label: 'Parents & Grandparents', slug: '/family/parents-grandparents', children: [
          { label: 'Sponsorship Program (PR)', slug: '/family/parents-grandparents/sponsorship' },
          { label: 'Super Visa', slug: '/family/parents-grandparents/super-visa' },
          { label: 'Visitor Visa', slug: '/family/parents-grandparents/visitor-visa' },
          { label: 'Compare All Programs', slug: '/family/parents-grandparents/compare-programs' },
        ],
      },
      { label: 'Biological / Adopted Children', slug: '/family/children' },
      { label: 'Lonely Canadian Program', slug: '/family/lonely-canadian' },
      { label: 'Orphaned Relative', slug: '/family/orphaned-relative' },
    ],
  },
  {
    label: 'Study', slug: '/study/enrol', children: [
      {
        label: 'Enrol in a Program', slug: '/study/enrol', children: [
          { label: '7 Reasons to Study in Canada', slug: '/study/enrol/reasons-to-study-in-canada' },
        ],
      },
      {
        label: 'Apply for a Study Permit', slug: '/study/study-visa', children: [
          { label: 'Bring Your Family to Canada', slug: '/study/study-visa/bring-your-family' },
          { label: 'Extend Your Study Permit', slug: '/study/study-visa/extend-study-permit' },
          { label: 'Change School or Program', slug: '/study/study-visa/change-school-or-program' },
          { label: 'Study in Canada as a Minor', slug: '/study/study-visa/study-as-a-minor' },
        ],
      },
      { label: 'Work During & After Studies', slug: '/study/work-during-after' },
      { label: 'From Study to Immigration', slug: '/study/study-to-immigration' },
    ],
  },
  {
    label: 'Work', slug: '/work/hire-foreign-worker', children: [
      {
        label: 'LMIA Process', slug: '/work/lmia-process', children: [
          { label: 'Skilled', slug: '/work/lmia-process/skilled' },
          { label: 'Unskilled', slug: '/work/lmia-process/unskilled' },
        ],
      },
      { label: 'Hire a Foreign Worker', slug: '/work/hire-foreign-worker' },
      {
        label: 'Closed Work Permits', slug: '/work/closed-work-permit', children: [
          { label: 'Labour Market Impact Assessment (LMIA)', slug: '/work/closed-work-permit/lmia' },
          { label: 'Global Talent Stream', slug: '/work/closed-work-permit/global-talent-stream' },
        ],
      },
      {
        label: 'Open Work Permits', slug: '/work/open-work-permits', children: [
          {
            label: 'International Mobility Program (IMP)', slug: '/work/open-work-permits/international-mobility-program', children: [
              { label: 'Intra-Company Transfer (ICT)', slug: '/work/open-work-permits/international-mobility-program/intra-company-transfer' },
            ],
          },
          {
            label: 'International Experience Canada (IEC)', slug: '/work/open-work-permits/international-experience-canada', children: [
              { label: 'Working Holiday Program', slug: '/work/open-work-permits/international-experience-canada/working-holiday' },
            ],
          },
          { label: 'Post-Graduation Work Permit', slug: '/work/open-work-permits/post-graduation-work-permit' },
          { label: 'Spousal Open Work Permit', slug: '/work/open-work-permits/spousal-open-work-permit' },
          { label: 'Bridging Open Work Permit', slug: '/immigration/express-entry/bridging-open-work-permit' },
        ],
      },
      {
        label: 'Special Groups', slug: '/work/special-groups', children: [
          { label: 'Caregivers', slug: '/work/special-groups/caregivers' },
          { label: 'Religious Workers', slug: '/work/special-groups/religious-workers' },
          { label: 'Athletes & Staff', slug: '/work/special-groups/athletes-staff' },
          { label: 'Agricultural Workers', slug: '/work/special-groups/agricultural-workers' },
          { label: 'TV & Film Production Workers', slug: '/work/special-groups/tv-film-workers' },
          { label: 'Ukrainian Nationals', slug: '/work/special-groups/ukrainian-nationals' },
          { label: 'Hong Kong Graduates', slug: '/work/special-groups/hong-kong-graduates' },
          { label: 'Vulnerable Foreign Workers', slug: '/work/special-groups/vulnerable-workers' },
        ],
      },
      { label: 'Work Permit Extension', slug: '/work/extension' },
    ],
  },
  {
    label: 'Other', slug: '/other/citizenship', children: [
      {
        label: 'Citizenship Application', slug: '/other/citizenship', children: [
          { label: 'Proof of Citizenship (Certificate)', slug: '/other/citizenship/proof-of-citizenship' },
          { label: 'Citizenship by Descent', slug: '/other/citizenship/citizenship-by-descent' },
          { label: 'Minors Born Outside Canada', slug: '/other/citizenship/minors-born-outside-canada' },
        ],
      },
      {
        label: 'Status Extension', slug: '/other/status-extension', children: [
          { label: 'Status Restoration', slug: '/other/status-extension/restoration' },
          { label: 'Change of Status', slug: '/other/status-extension/change-of-status' },
          { label: 'Document Replacement', slug: '/other/status-extension/document-replacement' },
          { label: 'PR Card Renewal', slug: '/other/status-extension/pr-card-renewal' },
        ],
      },
      {
        label: 'Other Services', slug: '/other/services', children: [
          { label: 'Visitor (Tourist) Visa', slug: '/other/services/visitor-visa' },
          { label: 'Status Verification', slug: '/other/services/status-verification' },
          { label: 'ATIP (GCMS) Notes', slug: '/other/services/atip-notes' },
          { label: 'Travel Document (PRTD)', slug: '/other/services/travel-document' },
          { label: 'Commissioner of Oath', slug: '/other/services/commissioner-of-oath' },
        ],
      },
    ],
  },
  { label: 'Our Fees', slug: '/fees' },
]

// Related links for a page: its nav children if it has any, otherwise its siblings.
export function getRelated(pathname) {
  let found = null
  const walk = (items, parent) => {
    for (const item of items) {
      if (!found && item.slug === pathname) found = { item, parent }
      if (item.children) walk(item.children, item)
    }
  }
  walk(nav, null)
  if (!found) return []
  const links = found.item.children?.length
    ? found.item.children
    : (found.parent?.children || []).filter((c) => c.slug !== pathname)
  return links.filter((c) => pages[c.slug])
}

export function getBreadcrumbs(pathname) {
  let foundPath = null;
  const walk = (items, currentPath) => {
    for (const item of items) {
      if (foundPath) return;
      const newPath = [...currentPath, { label: item.label, slug: item.slug }];
      // Exact match or active page
      if (item.slug === pathname || pathname.replace(/\/$/, '') === item.slug) {
        foundPath = newPath;
        return;
      }
      if (item.children) {
        walk(item.children, newPath);
      }
    }
  };
  walk(nav, []);
  return foundPath || [];
}

export const footerLinks = [
  ['Privacy Policy', '/privacy'],
  ['Pricing Terms', '/pricing-terms'],
  ['Terms of Use', '/terms'],
  ['Partnership', '/partnership'],
  ['Careers', '/careers'],
  ['Sitemap', '/sitemap'],
]

// Every content page: slug -> { title, tag, body[], points[], pointsTitle }
export const pages = {
  '/about': {
    title: `About ${COMPANY}`, tag: 'Who we are',
    body: [
      `${COMPANY} is a Canadian immigration consulting firm dedicated to guiding individuals, families, students, workers, and employers through every stage of the Canadian immigration process. Our regulated consultants combine deep knowledge of federal and provincial programs with a personal, transparent approach.`,
      'We believe every immigration journey is unique. From your first consultation to the day your application is approved, we build a strategy around your goals, your timeline, and your circumstances — and we keep you informed at every step.',
    ],
    pointsTitle: 'Why clients choose us',
    points: [
      'Regulated Canadian immigration consultants (RCIC)',
      'Transparent flat-fee pricing with no hidden costs',
      'Personalized strategy for every applicant',
      'Full representation before IRCC from start to finish',
      'Multilingual team serving clients worldwide',
    ],
  },
  '/about/service-areas': {
    title: 'Our Service Areas', tag: 'Serving clients across Canada and worldwide',
    body: [
      `${COMPANY} is headquartered in Toronto, but our clients are everywhere. Whether you are applying from inside Canada or from abroad, our team manages your file remotely with secure document handling and virtual consultations in the language you are most comfortable with.`,
    ],
    sections: [
      {
        heading: 'Ontario',
        paras: [
          'From our Toronto office we serve more than 40 cities and municipalities across Ontario, in person and online.',
        ],
        list: [
          'Toronto, North York, Scarborough, and Etobicoke',
          'Mississauga, Brampton, Vaughan, Markham, and Richmond Hill',
          'Ottawa, Hamilton, London, Kitchener-Waterloo, and Windsor',
          'Barrie, Oshawa, Ajax, Pickering, and Whitby',
          'Kingston, Belleville, Guelph, Cambridge, and Woodstock',
        ],
      },
      {
        heading: 'Across Canada',
        paras: [
          'Provincial programs differ, but our practice covers every province and territory.',
        ],
        list: [
          'Alberta — Calgary, Edmonton, and surrounding communities',
          'British Columbia — Vancouver, Victoria, and the Lower Mainland',
          'Manitoba and Saskatchewan',
          'Atlantic Canada — Nova Scotia, New Brunswick, PEI, and Newfoundland and Labrador',
          'Northern territories — Yukon, Northwest Territories, and Nunavut',
        ],
      },
      {
        heading: 'International coverage',
        paras: [
          'We represent applicants from more than 160 countries. Wherever you are applying from, consultations run by video or phone and documents move through our secure client portal.',
        ],
        list: [
          'North America & Caribbean — United States, Mexico, Jamaica, Trinidad and Tobago, Dominican Republic',
          'Central & South America — Brazil, Colombia, Argentina, Peru, Venezuela',
          'Asia & Middle East — India, Philippines, Pakistan, China, Hong Kong, UAE, and more',
          'Europe — United Kingdom, France, Germany, Poland, Ireland, and all EU states',
          'Africa — over 50 nations from North Africa through sub-Saharan countries',
          'Oceania — Australia, New Zealand, Fiji',
        ],
      },
      {
        heading: 'Every practice area, everywhere',
        list: [
          'Express Entry and federal economic programs',
          'Provincial Nominee Programs, including Ontario (OINP)',
          'Family class sponsorship',
          'Study permits and student pathways',
          'Work permits for employees and employers',
          'Citizenship, status extensions, and travel documents',
        ],
      },
    ],
  },
  '/about/team': {
    title: `${COMPANY} Team`, tag: `The people behind ${COMPANY}`,
    body: [
      'Our team brings together licensed immigration consultants, operations specialists, and case processing professionals who have helped applicants from more than 160 countries begin new lives in Canada.',
      'Every file is handled by a regulated consultant supported by a dedicated case processing team, so you always know who is working on your application and how it is progressing.',
    ],
    team: [
      { name: 'Maria Petrosyan', role: 'Founder & Senior Immigration Consultant', blurb: 'RCIC licensed and in good standing with the College of Immigration and Citizenship Consultants. Maria founded the firm in 2016 and personally oversees complex files.' },
      { name: 'Sophie Chen', role: 'Immigration Consultant', blurb: 'RCIC specializing in Express Entry, provincial nominations, and study-to-immigration pathways.' },
      { name: 'Arjun Mehta', role: 'Immigration Consultant', blurb: 'RCIC focused on family sponsorship, spousal files, and work permits.' },
      { name: 'Giulia Moretti', role: 'Immigration Consultant', blurb: 'RCIC handling employer services, LMIA files, and business immigration.' },
      { name: 'David Osei', role: 'Director of Operations', blurb: 'Keeps every file moving — deadlines tracked, documents verified, clients informed.' },
      { name: 'Elena Vardanyan', role: 'Account Executive', blurb: 'Your first point of contact for consultations, retainers, and service questions.' },
      { name: 'Nora Kim', role: 'Operations & Technology Manager', blurb: 'Runs the secure client portal and the systems behind our document handling.' },
      { name: 'Priya Sharma', role: 'Marketing Manager', blurb: 'Publishes our program guides and keeps our resources current with IRCC changes.' },
      { name: 'Lucas Ferreira', role: 'Case Processing Assistant' },
      { name: 'Amara Diallo', role: 'Case Processing Assistant' },
      { name: 'Tomás Alvarez', role: 'Case Processing Assistant' },
      { name: 'Hana Yusuf', role: 'Case Processing Assistant' },
    ],
    sections: [
      {
        heading: 'What defines our team',
        list: [
          'Licensed and in good standing with the College of Immigration and Citizenship Consultants',
          'Years of combined experience across all major programs',
          'Responsive communication in multiple languages',
          'Continuing education on the latest IRCC policy changes',
        ],
      },
    ],
  },
  '/book-consultation': {
    title: 'Book a Consultation', tag: 'Start your journey today',
    body: [
      'A consultation is the first step in your immigration journey. In a one-on-one session, a regulated consultant reviews your background, answers your questions, and recommends the strongest pathway for your goals.',
      'Consultation fees begin at $50 or $75 depending on the program and consultation type — and if you retain us afterwards, your consultation fee is fully applied as credit toward our Full or Do It Yourself packages.',
    ],
    sections: [
      {
        heading: 'How you can meet with us',
        list: [
          'Online — video consultations with screen sharing, so we can review documents together',
          'Phone — a dedicated bridge line that family members can join from anywhere',
          'In office — meet your consultant in person at our Toronto office',
        ],
      },
      {
        heading: 'Consultation types',
        paras: [
          'Choose the session that fits where you are in the process.',
        ],
        list: [
          'Initial Consultation — a focused eligibility assessment to identify your options',
          'All-Purpose Consultation — in-depth case assessment, case-specific questions, document review, and application guidance',
          'Peace of Mind — a full review of your prepared application before the one-hour feedback session, plus a 15-minute follow-up',
        ],
      },
      {
        heading: 'How booking works',
        steps: [
          'Select your country and immigration program',
          'Tell us about your application details and questions',
          'Choose a time and date that works for you',
          'Receive confirmation and meeting details by email',
        ],
      },
      {
        heading: 'What your consultation includes',
        list: [
          'A full assessment of your eligibility across programs',
          'A recommended strategy with realistic timelines',
          'A personalized document checklist',
          'A clear quote for professional fees and government fees',
          'Answers to all of your questions — no obligation to proceed',
        ],
      },
    ],
    faq: [
      { q: 'Can I send my questions in advance?', a: 'Yes — questions submitted at least 24 hours before your appointment are welcome. They are reviewed and addressed during the booked session itself, so nothing is missed.' },
      { q: 'Is the consultation fee refundable?', a: 'The fee is applied in full as credit toward our Full or Do It Yourself service packages if you retain us. Rescheduling is free with 24 hours notice.' },
      { q: 'What languages are available?', a: 'Our multilingual team offers consultations in several languages — let us know your preference when booking.' },
    ],
  },
  '/immigration/express-entry': {
    title: 'Express Entry', tag: 'Strategic management of Canada’s primary economic immigration system.',
    body: [
      'Express Entry is not an immigration program itself; it is the electronic system used by Immigration, Refugees and Citizenship Canada (IRCC) to manage applications for three federal economic programs: the Canadian Experience Class (CEC), the Federal Skilled Worker Program (FSWP), and the Federal Skilled Trades Program (FSTP).',
      'Entry into the pool is only the first hurdle. Candidates are ranked using the Comprehensive Ranking System (CRS). Only those with highly competitive CRS scores receive an Invitation to Apply (ITA) during periodic draws. Following an ITA, the applicant has exactly 60 days to submit a flawless Electronic Application for Permanent Residence (e-APR).',
      'Under section 11.2 of the Immigration and Refugee Protection Act (IRPA), your qualifications must hold true from the time you receive the ITA until a final decision is made on your permanent residence. A single discrepancy between your profile and your final application can result in summary refusal or a devastating 5-year ban for misrepresentation.'
    ],
    sections: [
      {
        heading: 'The Comprehensive Ranking System (CRS)',
        paras: [
          'The CRS is a dynamic 1,200-point matrix that scores candidates based on human capital, spouse factors, skill transferability, and additional factors.'
        ],
        list: [
          'Core Human Capital (Max 460/500): Age, level of education, official language proficiency (English and French), and Canadian work experience.',
          'Spouse/Partner Factors (Max 40): If applying with a spouse, their education, language ability, and Canadian experience impact the total score.',
          'Skill Transferability (Max 100): Combinations of education, foreign work experience, and high language proficiency.',
          'Additional Points (Max 600): Provincial Nomination (600 points), valid job offer supported by a Labour Market Impact Assessment (50-200 points), Canadian education credentials (15-30 points), and strong French proficiency (up to 50 points).'
        ],
      },
      {
        heading: 'Category-Based Selection Draws',
        paras: [
          'IRCC now conducts targeted draws bypassing the standard CRS ranking to select candidates with specific skills that meet Canada’s economic goals.'
        ],
        list: [
          'French-language proficiency (NCLC 7 or higher).',
          'Healthcare occupations (nurses, physicians, etc.).',
          'Science, Technology, Engineering, and Math (STEM) occupations.',
          'Trade occupations (carpenters, plumbers, electricians).',
          'Transport and Agriculture occupations.'
        ],
      },
      {
        heading: 'The e-APR: Evidentiary Strictness',
        paras: [
          'Once an ITA is issued, IRCC requires exhaustive documentation. Incomplete applications are rejected outright without the officer requesting missing documents.'
        ],
        list: [
          'Employment Reference Letters: Must conform exactly to IRCC’s rigid requirements—including salary, hours, dates, and a detailed list of duties matching the National Occupational Classification (NOC) code.',
          'Police Clearances: Required for every country you have lived in for 6 months or more in a row since age 18. Specific country-by-country instructions must be followed.',
          'Proof of Funds: Official bank letters showing the 6-month average balance, proving you have unencumbered funds to settle in Canada (if applicable).'
        ],
      }
    ],
    faq: [
      { q: 'What happens if my birthday passes after receiving an ITA?', a: 'Under the A11.2 lock-in provision, if you lose CRS points due to age after receiving an ITA, your application will not be refused solely for that reason, provided your score does not drop below the lowest score in that specific draw.' },
      { q: 'Is misrepresentation a real risk?', a: 'Yes. Section 40 of IRPA strictly penalizes misrepresentation—even if accidental (e.g., claiming a degree is complete before graduation, or exaggerating job duties). The penalty is a refusal and a 5-year ban from entering Canada.' }
    ],
  },
  '/immigration/express-entry/canadian-experience-class': {
    title: 'Canadian Experience Class (CEC)', tag: 'The definitive pathway for temporary workers and graduates in Canada.',
    body: [
      'The Canadian Experience Class (CEC) is the premier immigration stream for candidates who have successfully integrated into the Canadian labour market. It requires no proof of settlement funds and is often heavily prioritized in Express Entry draws.',
      'However, not all work in Canada qualifies. Strict legal definitions exclude self-employment and work performed while engaged in full-time studies. Proving that your experience falls within a skilled National Occupational Classification (NOC TEER 0, 1, 2, or 3) and that it was obtained while holding valid authorization requires precision.'
    ],
    sections: [
      {
        heading: 'Statutory Eligibility Requirements',
        list: [
          'Work Experience: You must have at least 12 months of full-time (or an equal amount in part-time) skilled work experience in Canada within the three years before you apply.',
          'Valid Authorization: The work must have been performed while you held a valid work permit and temporary resident status.',
          'Language Proficiency: For TEER 0 or 1 occupations, you must achieve CLB 7 (e.g., IELTS 6.0 in all bands). For TEER 2 or 3 occupations, CLB 5 is required.',
          'Quebec Exclusion: You must intend to reside in a province or territory other than Quebec.'
        ],
      },
      {
        heading: 'Excluded Work Experience',
        paras: [
          'A common cause for CEC refusal is claiming work experience that is statutorily excluded by the Immigration and Refugee Protection Regulations (IRPR).'
        ],
        list: [
          'Self-Employment: Any work performed as an independent contractor or business owner does not count toward the 12-month CEC requirement. Determining employee vs. independent contractor status relies on Canadian common law principles (control, ownership of tools, risk of profit/loss).',
          'Student Work: Work performed while you were a full-time student (e.g., on-campus, off-campus, or co-op work) is entirely excluded from the CEC calculation.'
        ],
      }
    ],
    faq: [
      { q: 'Does my 12 months of work experience need to be continuous?', a: 'No. For the Canadian Experience Class, the 12 months of work experience can be accumulated in non-continuous periods within the three-year window prior to your application.' }
    ],
  },
  '/immigration/express-entry/federal-skilled-worker': {
    title: 'Federal Skilled Worker Program (FSWP)', tag: 'Permanent residence for elite global professionals.',
    body: [
      'The Federal Skilled Worker Program (FSWP) is designed for foreign professionals with high human capital who have never worked in Canada. It operates on a dual-gated system: you must first score at least 67 points on the FSW Selection Grid just to enter the Express Entry pool, and then you must have a high enough CRS score to receive an ITA.',
      'Our legal representation ensures that your foreign work experience is perfectly aligned with Canadian NOC standards, and that your educational and financial documentation meets strict federal mandates.'
    ],
    sections: [
      {
        heading: 'The 67-Point Selection Grid',
        paras: [
          'Before CRS is even considered, you must pass the FSW 100-point grid. Points are awarded for:'
        ],
        list: [
          'Language Skills (Max 28): CLB 7 is the absolute minimum requirement.',
          'Education (Max 25): Assessed via an Educational Credential Assessment (ECA) to determine Canadian equivalency.',
          'Work Experience (Max 15): At least one year of continuous, paid, full-time work in a single TEER 0, 1, 2, or 3 occupation within the last 10 years.',
          'Age (Max 12): Maximum points are awarded between ages 18-35.',
          'Arranged Employment (Max 10): An LMIA-backed job offer in Canada.',
          'Adaptability (Max 10): Previous work/study in Canada, or family members in Canada.'
        ],
      },
      {
        heading: 'The Continuous Experience Requirement',
        paras: [
          'Unlike the CEC, the FSWP requires that your first year of qualifying work experience be absolutely continuous (no gaps in employment), in the same NOC code, and paid. Once the first continuous year is established, subsequent years can be fragmented.'
        ],
      },
      {
        heading: 'Proof of Settlement Funds',
        paras: [
          'Unless you are currently authorized to work in Canada and have a valid job offer, you must prove you have sufficient unencumbered funds to support yourself and your family. IRCC rigidly updates these figures annually based on the Low Income Cut-Off (LICO). Letters must show a 6-month average balance.'
        ],
      }
    ],
  },
  '/immigration/express-entry/federal-skilled-trades': {
    title: 'Federal Skilled Trades Program (FSTP)', tag: 'Fast-track immigration for qualified international tradespeople.',
    body: [
      'The Federal Skilled Trades Program (FSTP) is tailored to candidates in specific industrial, construction, electrical, and culinary trades. Because trades heavily influence Canada’s infrastructure, IRCC occasionally holds FSTP-specific draws with significantly lower CRS score requirements.',
      'To mitigate the risk of refusal, we rigorously assess whether your specific trade duties align with Canadian NOC standards and assist in obtaining the requisite provincial certification or LMIA-backed job offers.'
    ],
    sections: [
      {
        heading: 'Mandatory Eligibility Criteria',
        list: [
          'Experience: At least 2 years of full-time work experience in an eligible skilled trade within the 5 years before applying.',
          'Language: A lower language threshold of CLB 5 for speaking and listening, and CLB 4 for reading and writing.',
          'Employment or Certification: You must have EITHER a valid full-time job offer for a total period of at least 1 year in Canada OR a certificate of qualification in that skilled trade issued by a Canadian provincial, territorial, or federal authority.',
          'NOC Matching: You must demonstrate that you have performed all the essential duties set out in the lead statement of the NOC description.'
        ],
      }
    ],
  },
  '/immigration/express-entry/bridging-open-work-permit': {
    title: 'Bridging Open Work Permit (BOWP)', tag: 'Maintain your legal right to work during PR processing.',
    body: [
      'A Bridging Open Work Permit (BOWP) is a vital legal tool that allows foreign nationals currently in Canada to extend their work authorization while they await a final decision on their permanent residence application.',
      'Submitting a BOWP application requires impeccable timing. Applying too early (before receiving the required Acknowledgment of Receipt) or too late (after status has expired) will result in refusal and the loss of the legal right to work.'
    ],
    sections: [
      {
        heading: 'Strict Eligibility Requirements',
        list: [
          'You must be physically present in Canada.',
          'You must currently hold a valid work permit, or have applied to renew your work permit and be on maintained status, or be eligible to restore your temporary resident status.',
          'You must be the principal applicant on an active PR application (under Express Entry, PNP, or other specific classes).',
          'You must have passed the R10 completeness check (indicated by an Acknowledgment of Receipt / AOR).'
        ],
      },
      {
        heading: 'Maintained Status (Implied Status)',
        paras: [
          'Under section 186(u) of the IRPR, if you file a BOWP application before your current work permit expires, you benefit from "maintained status." You are legally authorized to continue working in Canada under the exact same conditions as your original permit until a decision is made on the BOWP application.'
        ],
      }
    ],
  },
  '/immigration/ontario-pnp': {
    title: 'Ontario Immigrant Nominee Program (OINP)', tag: 'Strategic provincial pathways to secure your permanent residence.',
    body: [
      'The Ontario Immigrant Nominee Program (OINP) is the province’s economic immigration program. Administered in partnership with the federal government under the IRPA, the OINP nominates foreign workers, international students, and entrepreneurs who possess the requisite skills and capital to fulfill Ontario’s pressing economic needs.',
      'Securing an OINP nomination is transformative. For Express Entry-aligned streams, a nomination awards a commanding 600 additional Comprehensive Ranking System (CRS) points, effectively guaranteeing an Invitation to Apply (ITA). For non-Express Entry streams, a nomination constitutes the fundamental legal basis for a permanent residence application directly to IRCC.',
      'Because OINP operates on periodic Expression of Interest (EOI) draws and stringent quota limits, flawless documentation and instantaneous responsiveness are imperative. Our legal practice handles corporate compliance for employers and meticulous statutory interpretation for applicants.'
    ],
    sections: [
      {
        heading: 'OINP Operational Architecture',
        paras: [
          'The OINP uses an Expression of Interest (EOI) ranking matrix. This means you do not apply directly; you register your interest and await an Invitation to Apply (ITA) or Notification of Interest (NOI) based on a competitive score.'
        ],
        list: [
          'Employer Job Offer Streams: Requires a robust, qualifying job offer from an eligible Ontario business.',
          'Human Capital Streams: Targets specific skills, education, and language proficiencies (tied to Express Entry and Post-Graduate degrees).',
          'Business Streams: Designed exclusively for international entrepreneurs seeking to acquire or establish a business in Ontario.'
        ],
      }
    ],
  },
  '/immigration/ontario-pnp/job-offer-streams': {
    title: 'OINP Job Offer Streams', tag: 'Permanent residence through a verified Ontario employer.',
    body: [
      'The OINP Employer Job Offer category is designed for foreign nationals who have secured a permanent, full-time job offer in an eligible occupation in Ontario. This category bypasses the federal Express Entry system entirely, offering a direct provincial nomination route.',
      'A successful application requires dual eligibility: the foreign national must meet rigorous occupational and language requirements, and the Ontario employer must pass stringent corporate revenue, staffing, and operational presence tests. We orchestrate both sides of the application to ensure absolute compliance with provincial mandates.'
    ],
    sections: [
      {
        heading: 'The Three Streams',
        paras: [
          'The Employer Job Offer category is bifurcated into three distinct streams, each targeting a specific demographic of the labour market:'
        ],
        list: [
          'Foreign Worker Stream: For highly skilled workers (TEER 0, 1, 2, or 3) globally.',
          'International Student Stream: Specifically for recent graduates of eligible Canadian Designated Learning Institutions (DLIs).',
          'In-Demand Skills Stream: For workers in high-demand sectors such as agriculture, construction, trucking, and personal support work (TEER 4 or 5).'
        ],
      },
      {
        heading: 'Employer Obligations',
        paras: [
          'The burden of proof on the employer is substantial. Employers must provide extensive corporate tax records, attest to job creation efforts, and demonstrate that the offered wage meets or exceeds the prevailing regional median.'
        ],
      }
    ],
  },
  '/immigration/ontario-pnp/express-entry-streams': {
    title: 'OINP Express Entry Streams', tag: 'Acquire 600 CRS points through provincial nomination.',
    body: [
      'Ontario’s Express Entry streams allow the province to passively search the federal Express Entry pool and proactively issue Notifications of Interest (NOIs) to candidates whose skills match provincial labour shortages. If nominated, the candidate receives 600 CRS points, guaranteeing an ITA in the subsequent federal draw.',
      'Candidates cannot apply for these streams independently; they must wait to be targeted. Our firm ensures that your federal Express Entry profile is optimized and legally accurate to trigger OINP algorithms.'
    ],
    sections: [
      {
        heading: 'The Three Express Entry Streams',
        list: [
          'Human Capital Priorities (HCP): Targets specific high-skilled occupations (often in tech, healthcare, and finance). The required CRS score is determined on a draw-by-draw basis.',
          'Skilled Trades Stream: Targets candidates with ongoing or recent work experience in Ontario in eligible trade occupations.',
          'French-Speaking Skilled Worker Stream: Targets highly skilled, bilingual candidates with advanced French proficiency (NCLC 7 or higher) and adequate English (CLB 6).'
        ],
      },
      {
        heading: 'Post-NOI Legal Deadlines',
        paras: [
          'Upon receiving an NOI, applicants are placed on an uncompromising 45-day statutory deadline to submit a complete provincial application. Failure to provide exhaustive documentation verifying all claims made in the Express Entry profile will result in refusal and forfeiture of the nomination.'
        ],
      }
    ],
  },
  '/immigration/ontario-pnp/post-graduate-streams': {
    title: 'OINP Post-Graduate Streams', tag: 'Fast-track nomination for Masters and PhD graduates in Ontario.',
    body: [
      'Ontario highly values the intellectual capital developed within its academic institutions. The Masters Graduate and PhD Graduate streams offer a direct pathway to permanent residence without the need for a job offer or an Express Entry profile.',
      'Because these streams operate on highly competitive, unpredictable Expression of Interest (EOI) draws, early preparation of civil documents, language tests, and residency proofs is critical.'
    ],
    sections: [
      {
        heading: 'The Two Post-Graduate Streams',
        list: [
          'Masters Graduate Stream: Requires graduation from an eligible Masters program (at least one academic year full-time) at an Ontario university, language proficiency (CLB 7), and proof of residency in Ontario.',
          'PhD Graduate Stream: Requires the completion of the requirements for a PhD at an eligible Ontario university, with a significantly lower threshold for residency and no mandatory language test.'
        ],
      },
      {
        heading: 'Eligibility Window',
        paras: [
          'Applications under these streams must be submitted within precisely two years of the date the degree was granted. Missing this statutory window irrevocably bars the applicant from the stream.'
        ],
      }
    ],
  },
  '/immigration/start-up-visa': {
    title: 'Start-Up Visa', tag: 'Permanent residence for innovative entrepreneurs',
    body: [
      'The Start-Up Visa program grants permanent residence to entrepreneurs whose innovative business idea is backed by a designated Canadian organization — a venture capital fund, angel investor group, or business incubator.',
      'We guide you through securing a letter of support, structuring the founding team, and preparing the PR application, and can advise on temporary work permits while the business launches.',
    ],
    pointsTitle: 'Core requirements',
    points: [
      'A qualifying business with up to five essential founders',
      'A letter of support from a designated organization',
      'Language ability of CLB 5 or higher',
      'Sufficient settlement funds for you and your family',
    ],
  },
  '/immigration/other-programs': {
    title: 'Other Immigration Programs', tag: 'More pathways to permanent residence',
    body: [
      'Beyond Express Entry and the OINP, Canada operates many specialized permanent residence programs. The right one for you depends on your occupation, destination, and background — and we help you find it.',
    ],
    pointsTitle: 'Programs we handle',
    points: [
      'Provincial Nominee Programs across all provinces and territories',
      'Self-Employed Persons Program for cultural and athletic professionals',
      'Caregiver pathways to permanent residence',
      'Agri-Food Pilot for agricultural workers',
      'Rural and Northern Immigration Pilot communities',
      'Atlantic Immigration Program for Atlantic Canada employers',
      'Hong Kong residents pathway',
    ],
  },
  '/family/spouse-partner': {
    title: 'Spouse, Partner & Fiancé(e) Sponsorship', tag: 'Reunite with your loved ones in Canada through comprehensive family class sponsorship.',
    body: [
      'The Family Class sponsorship program is a cornerstone of Canada’s immigration policy, designed to reunite Canadian citizens and permanent residents with their spouses, common-law partners, and conjugal partners. This pathway grants permanent resident status, allowing your loved one to live, work, and study anywhere in Canada.',
      'Navigating a spousal sponsorship application requires meticulous preparation. Immigration, Refugees and Citizenship Canada (IRCC) heavily scrutinizes applications to ensure the genuineness of the relationship. Whether you are applying via the Inland (Spouse or Common-Law Partner in Canada Class) or Outland (Family Class) route, our legal team ensures that your evidentiary record is robust, persuasive, and strictly compliant with IRCC regulations.',
      'We recognize that every relationship is unique. From addressing complex immigration histories to securing open work permits for inland applicants, we provide end-to-end legal representation to mitigate the risk of procedural fairness letters, interviews, or refusals.'
    ],
    sections: [
      {
        heading: 'Legal Definitions of Eligible Partnerships',
        list: [
          'Spouse: You are legally married, and the marriage is valid under the laws of the jurisdiction where it occurred and under Canadian law.',
          'Common-Law Partner: You have cohabited in a conjugal relationship for a continuous period of at least 12 months. Temporary separations are permitted only if strictly temporary and short.',
          'Conjugal Partner: You have maintained a conjugal relationship for at least 12 months, but significant legal or immigration barriers (e.g., lack of same-sex marriage rights, insurmountable visa restrictions) prevent you from living together or marrying.'
        ],
      },
      {
        heading: 'Inland vs. Outland Sponsorship: Strategic Considerations',
        paras: [
          'Choosing the correct sponsorship class is a critical strategic decision that affects the applicant\'s rights, right of appeal, and ability to work during processing.'
        ],
        list: [
          'Inland Sponsorship: Requires the applicant to be physically present in Canada. A key benefit is the eligibility for a Spousal Open Work Permit (SOWP), allowing the applicant to work while the PR application is processed. However, there is no statutory right of appeal to the Immigration Appeal Division (IAD) if refused.',
          'Outland Sponsorship: The applicant may reside outside Canada. This route typically preserves the statutory right of appeal to the IAD under section 63(1) of the Immigration and Refugee Protection Act (IRPA) in the event of a refusal.'
        ],
      },
      {
        heading: 'The Financial Undertaking (Sponsor\'s Obligations)',
        list: [
          'As a sponsor, you must sign a binding legal contract with the Minister of Citizenship and Immigration.',
          'You are financially responsible for the basic requirements of your sponsored partner (food, shelter, clothing, health needs not covered by public health) for a period of 3 years from the day they become a permanent resident.',
          'This undertaking remains legally enforceable even in the event of divorce, separation, relationship breakdown, or financial hardship.',
          'Except in very specific circumstances (e.g., if the sponsored person has a dependent child who also has dependent children), there is no Minimum Necessary Income (MNI) or Low Income Cut-Off (LICO) requirement for spousal sponsorship.'
        ],
      },
      {
        heading: 'Evidentiary Requirements for Genuineness',
        paras: [
          'To satisfy section 4 of the Immigration and Refugee Protection Regulations (IRPR), you must prove that the relationship is genuine and was not entered into primarily for the purpose of acquiring an immigration status or privilege.'
        ],
        list: [
          'Cohabitation evidence: Joint residential leases, property ownership, joint utility accounts, and shared addresses on official documents.',
          'Financial interdependence: Joint bank accounts, shared credit cards, life insurance beneficiary designations, and joint tax filings.',
          'Social recognition: Letters of support from friends and family, photographs over time, and proof of public relationship recognition.',
          'Communication records: Exhaustive chat logs, call records, and travel itineraries showing visits during periods of separation.'
        ],
      },
    ],
    faq: [
      { q: 'What happens if our relationship breaks down during processing?', a: 'If the relationship ends before the applicant becomes a permanent resident, the sponsorship must be withdrawn immediately. If permanent residence has already been granted, the sponsor remains bound by the 3-year financial undertaking, but the sponsored person\'s PR status is generally not revoked unless misrepresentation is proven.' },
      { q: 'Can I sponsor my partner if I am living outside Canada?', a: 'Canadian citizens can sponsor a partner while residing exclusively outside Canada, provided they can demonstrate a clear, concrete intent to re-establish residence in Canada once the partner becomes a permanent resident. Permanent residents are statutorily barred from sponsoring while residing abroad.' },
      { q: 'Can I sponsor my fiancé(e)?', a: 'Canada does not have a specific "fiancé(e) visa" category. You must either marry first, establish a common-law relationship by cohabiting for 12 months, or, in rare restrictive circumstances, qualify as conjugal partners.' },
      { q: 'What protections exist for victims of family violence?', a: 'Victims of family violence may be eligible for fee exemptions, expedited Temporary Resident Permits (TRP), open work permits, and humanitarian and compassionate (H&C) considerations to protect them from the consequences of a sponsorship breakdown.' }
    ],
  },
  '/family/parents-grandparents': {
    title: 'Parents & Grandparents Sponsorship (PGP)', tag: 'Authoritative representation for reuniting generations in Canada.',
    body: [
      'The Parents and Grandparents Program (PGP) allows eligible Canadian citizens and permanent residents to sponsor their parents and grandparents for permanent residence. Given the immense popularity of the program and the limited annual intake caps, IRCC currently utilizes an invitation-based lottery system.',
      'Preparation and timing are paramount. Sponsors must meticulously document their financial eligibility over a three-year preceding period, ensuring absolute compliance with the Low Income Cut-Off (LICO) + 30% requirements. Our firm provides precise income assessments, guides you through the expression of interest (EOI) process, and executes the final PR application flawlessly upon receiving an Invitation to Apply (ITA).',
      'For families seeking immediate reunification or those who do not receive an ITA, we offer comprehensive strategic planning for the Super Visa, an excellent alternative that allows parents and grandparents to visit for up to five consecutive years per entry.'
    ],
    sections: [
      {
        heading: 'Sponsor Eligibility & The Financial Undertaking',
        paras: [
          'Sponsoring parents or grandparents carries one of the most stringent financial obligations under the Immigration and Refugee Protection Act (IRPA).'
        ],
        list: [
          'Minimum Necessary Income (MNI): The sponsor (and co-signer, if applicable) must prove they meet the MNI, which is LICO plus 30%, for each of the three consecutive taxation years immediately preceding the date of the application.',
          'Proof of Income: Only official Canada Revenue Agency (CRA) Notices of Assessment (NOA) are accepted as proof of income.',
          'The Undertaking: Sponsors must sign a binding agreement to financially support the sponsored parents or grandparents for a period of 20 years from the date they become permanent residents (or 10 years if residing in Quebec).',
          'Co-Signer Eligibility: A spouse or common-law partner can co-sign the undertaking to combine their income with the sponsor’s to meet the MNI requirement.'
        ],
      },
      {
        heading: 'The Super Visa: A Strategic Alternative',
        paras: [
          'Because the PGP is a lottery system, the Super Visa is the most reliable mechanism for long-term family reunification.'
        ],
        list: [
          'Allows multiple entries for up to 10 years, with stays of up to 5 years per entry.',
          'The financial requirement is lower: the sponsor only needs to meet the standard LICO for one year (the +30% is not required).',
          'Requires proof of valid Canadian medical insurance for at least one year with a minimum coverage of $100,000.',
          'Processing times are significantly faster, typically concluding in a matter of months rather than years.'
        ],
      },
      {
        heading: 'Application Process and Timeline',
        steps: [
          'Financial Assessment: We rigorously calculate your family size and verify your CRA NOAs against IRCC\'s historical LICO tables.',
          'Interest to Sponsor: Submitting the initial EOI profile during IRCC’s brief intake windows.',
          'Invitation to Apply (ITA): Awaiting selection in the randomized lottery draws.',
          'Application Submission: Assembling the voluminous PR application, medicals, police clearances, and undertaking forms within the strict 60-day deadline post-ITA.',
          'Processing & Landing: Navigating IRCC processing, which historically ranges from 24 to 36 months for PGP files.'
        ],
      }
    ],
    faq: [
      { q: 'What happens if my income dropped during the pandemic?', a: 'For the 2020 and 2021 tax years, IRCC temporarily lowered the income requirement to the standard LICO (waiving the +30% markup) and allowed the inclusion of certain pandemic-related benefits (like CERB) in the income calculation.' },
      { q: 'Can I sponsor my parents if I am living outside Canada?', a: 'No. Unlike spousal sponsorship, a sponsor for the Parents and Grandparents Program must reside in Canada at the time the application is submitted and must continue to reside in Canada until a decision is made and the parents are granted permanent residence.' }
    ],
  },
  '/family/children': {
    title: 'Dependent Child Sponsorship', tag: 'Legally sound pathways to bring your children to Canada.',
    body: [
      'Canadian citizens and permanent residents possess the statutory right to sponsor their dependent children—whether biological or adopted—for permanent residence in Canada. This category is critical for ensuring family unity and protecting the best interests of the child.',
      'IRCC enforces a rigid legal definition of a "dependent child." Standard cases involve minor children, but complex scenarios often arise involving custody disputes, non-accompanying parent consent, over-age dependents with medical conditions, and intricate international adoptions.',
      'Our legal experts navigate international family law intersections, ensuring that custody documentation (such as sole custody orders or notarized consent letters) aligns with Canadian immigration standards to prevent allegations of child abduction or procedural refusals.'
    ],
    sections: [
      {
        heading: 'Legal Definition of a Dependent Child',
        paras: [
          'Under section 2 of the Immigration and Refugee Protection Regulations (IRPR), a child qualifies as a dependent if they meet the following criteria:'
        ],
        list: [
          'They are under 22 years of age.',
          'They are not married or in a common-law relationship.',
          'Exception (Over 22): Children 22 years of age or older may still qualify if they have depended substantially on the financial support of the parent since before the age of 22 and are unable to be financially self-supporting due to a physical or mental condition.'
        ],
      },
      {
        heading: 'Custody and Consent Requirements',
        paras: [
          'When only one parent is sponsoring a minor child, IRCC requires unequivocal proof that removing the child from their home country does not violate any custody orders or the rights of the non-accompanying parent.'
        ],
        list: [
          'Form IMM 5604 (Declaration from Non-Accompanying Parent/Guardian for Minors Immigrating to Canada) must be signed and accompanied by the non-accompanying parent\'s photo ID.',
          'If the other parent is deceased, an official death certificate is required.',
          'If sole custody was granted, a court order granting full legal and physical custody—and explicitly permitting the child to reside in Canada—must be provided. Shared custody arrangements require detailed legal analysis.'
        ],
      },
      {
        heading: 'International Adoptions',
        paras: [
          'Sponsoring an adopted child is significantly more complex than biological sponsorship. It involves dual jurisdictions: the child’s home country and the Canadian province of destination.'
        ],
        list: [
          'The adoption must be legally finalized in the child’s home country and recognized by the provincial/territorial child welfare authority in Canada.',
          'The Hague Convention on Protection of Children and Co-operation in Respect of Intercountry Adoption strictly governs many adoptions, requiring a Notice of Agreement from the provincial authority before IRCC can issue a visa.',
          'The adoption must establish a genuine parent-child relationship and must not have been entered into primarily for the purpose of acquiring an immigration status.'
        ],
      }
    ],
    faq: [
      { q: 'Is there an income requirement to sponsor a dependent child?', a: 'Generally, no. Sponsors of dependent children do not need to meet the Minimum Necessary Income (MNI) requirement unless the dependent child being sponsored has a dependent child of their own.' },
      { q: 'How long is the financial undertaking for a dependent child?', a: 'For a child under 22, the undertaking lasts for 10 years or until the child reaches age 25, whichever comes first. For a child 22 or older (due to medical condition), the undertaking lasts for 3 years.' }
    ],
  },
  '/family/lonely-canadian': {
    title: 'The "Lonely Canadian" Provision', tag: 'A specialized legal exception for relatives of isolated Canadians.',
    body: [
      'The "Lonely Canadian" provision—formally located under section 117(1)(h) of the Immigration and Refugee Protection Regulations (IRPR)—is an exceptional legal mechanism. It allows an isolated Canadian citizen or permanent resident to sponsor one relative of any age, related by blood or adoption, regardless of standard family class definitions.',
      'Because this provision bypasses standard eligibility categories, IRCC officers apply the familial isolation test with extreme strictness. Even one minor misunderstanding of the family tree can result in summary refusal. Our firm specializes in the evidentiary burden required to prove absolute statutory isolation.',
      'We construct comprehensive family tree affidavits, obtain civil death records, and provide exhaustive legal submissions to demonstrate that you meet the uncompromising conditions of this narrow regulation.'
    ],
    sections: [
      {
        heading: 'The Statutory Test of Isolation',
        paras: [
          'To utilize this provision, the sponsor must satisfy a two-part negative test. You may only sponsor under 117(1)(h) if you do NOT have:'
        ],
        list: [
          'A living spouse, common-law partner, or conjugal partner.',
          'A living son or daughter (child).',
          'A living parent or grandparent.',
          'An orphaned brother, sister, nephew, niece, or grandchild who is under 18 and unmarried.',
          'AND you do not have any relative from the above list who is a Canadian citizen, registered Indian, or permanent resident.'
        ],
      },
      {
        heading: 'Sponsor Eligibility and Obligations',
        list: [
          'The sponsor must be at least 18 years of age and a Canadian citizen or permanent resident.',
          'Unlike spousal sponsorship, the sponsor MUST meet the Minimum Necessary Income (LICO) for their family size, including the person being sponsored and their dependents.',
          'The sponsor must sign a financial undertaking, typically for 10 years for an adult relative.'
        ],
      },
      {
        heading: 'Strategic Considerations',
        paras: [
          'This category is often the only hope for single Canadians to bring a sibling, aunt, or adult niece/nephew to Canada. However, if the sponsor marries or adopts a child while the application is in processing, their "lonely" status is legally extinguished, and the application will be refused.'
        ],
      }
    ],
    faq: [
      { q: 'Can I sponsor a cousin under this rule?', a: 'Yes, if you meet the strict isolation test, the sponsored relative can be of any age and any relationship by blood or adoption, including a sibling, aunt, uncle, or cousin.' },
      { q: 'Can the relative bring their spouse and children?', a: 'Yes. If you qualify to sponsor one relative under this provision, that relative can include their dependent spouse and dependent children on the application.' }
    ],
  },
  '/family/orphaned-relative': {
    title: 'Orphaned Relative Sponsorship', tag: 'Legal advocacy for vulnerable orphaned family members.',
    body: [
      'Canadian immigration law provides a specific pathway for citizens and permanent residents to sponsor vulnerable, orphaned minor relatives. Governed by section 117(1)(f) of the IRPR, this category covers brothers, sisters, nephews, nieces, and grandchildren.',
      'This category is rigidly defined in law. IRCC does not permit sponsorship under this class for children whose parents are simply missing, incarcerated, or have abandoned them. It strictly requires proof of death for both parents. Our legal team approaches these highly sensitive cases with both compassion and rigorous administrative precision, ensuring that foreign death certificates and guardianship orders meet Canadian evidentiary standards.'
    ],
    sections: [
      {
        heading: 'Strict Statutory Eligibility Requirements',
        paras: [
          'For the child to be eligible for sponsorship under this class, all of the following conditions must be met concurrently:'
        ],
        list: [
          'Relationship: The child must be a brother, sister, nephew, niece, or grandchild of the sponsor, related by blood or adoption.',
          'Age and Status: The child must be under 18 years of age and not married or in a common-law relationship.',
          'Orphaned Status: Both parents must be deceased. IRCC requires official death certificates. A child is legally NOT an orphan if one parent is alive, even if that parent has abandoned the child or lost custody.'
        ],
      },
      {
        heading: 'Financial and Guardianship Requirements',
        list: [
          'Income Requirement: The sponsor must meet the Minimum Necessary Income (LICO) requirements. Unlike dependent children, orphaned relatives require proof of financial capacity.',
          'Undertaking: The sponsor must sign a 10-year financial undertaking.',
          'Guardianship and Consent: If the child has a legally appointed guardian in their home country, formal consent allowing the child to immigrate to Canada must be obtained and legally authenticated.'
        ],
      },
      {
        heading: 'Humanitarian & Compassionate (H&C) Alternatives',
        paras: [
          'In cases where a child acts as an orphan (e.g., severe abandonment) but one parent is technically alive, they do not qualify under 117(1)(f). In such instances, our firm drafts compelling Humanitarian and Compassionate (H&C) applications under section 25 of the IRPA to request an exemption from the strict regulatory requirements based on the best interests of the child (BIOC).'
        ],
      }
    ],
    faq: [
      { q: 'What if we cannot find the death certificate of one parent?', a: 'Without official proof of death or a court order declaring the parent legally dead (presumption of death), the application will be refused under the orphaned relative class. An H&C application is typically the required alternative.' }
    ],
  },
  '/study/enrol': {
    title: 'Enrol in an Educational Program', tag: 'Strategic institutional selection for long-term immigration success.',
    body: [
      'Your journey to Canadian permanent residence often begins with a single, critical decision: choosing the right educational institution and program. IRCC’s regulations heavily restrict which programs afford students the right to work during their studies and which lead to a Post-Graduation Work Permit (PGWP).',
      'Not all schools are created equal under Canadian immigration law. Enrolling in a private college or an ineligible program at a Designated Learning Institution (DLI) can permanently foreclose your ability to remain in Canada after graduation.',
      'Our legal advisors integrate educational planning with long-term immigration strategy, ensuring that the letter of acceptance (LOA) you receive serves as a viable foundation for a future permanent residence application.'
    ],
    sections: [
      {
        heading: 'The Importance of DLI Status and PGWP Eligibility',
        paras: [
          'To apply for a study permit, you must have an LOA from a Designated Learning Institution (DLI). However, mere DLI status is insufficient if your goal is permanent residence.'
        ],
        list: [
          'PGWP-Eligible Programs: Only specific programs (typically at public universities and colleges, or degree-granting private institutions) make you eligible for a Post-Graduation Work Permit. We verify the PGWP eligibility of your chosen program before you commit to tuition fees.',
          'Provincial Attestation Letters (PAL): Due to recent federal caps on international students, most undergraduate and college-level applicants now require a PAL from the province or territory where they intend to study. We manage the acquisition of this mandatory documentation.'
        ],
      }
    ],
  },
  '/study/study-visa': {
    title: 'Apply for a Canadian Study Permit', tag: 'Navigating the strict legal thresholds for international students.',
    body: [
      'A study permit is not a right; it is a highly discretionary temporary resident document. IRCC officers assess study permit applications with intense scrutiny, particularly regarding the applicant’s "dual intent" and their financial capacity to support themselves in Canada.',
      'The most common reason for study permit refusal is section 216(1)(b) of the IRPR—the officer is not satisfied that the applicant will leave Canada at the end of their authorized stay. Overcoming this requires a meticulously drafted Study Plan that logically connects the Canadian program to career progression in the home country.',
      'We construct robust, front-end loaded applications that pre-emptively address officer concerns regarding family ties, economic establishment, and the logical progression of your studies.'
    ],
    sections: [
      {
        heading: 'Evidentiary Requirements',
        list: [
          'Proof of Financial Support: You must irrevocably prove that you have sufficient unencumbered funds to pay for your first year of tuition PLUS the federally mandated cost-of-living requirement (currently $20,635 CAD for a single student), plus travel costs.',
          'The Study Plan (Statement of Purpose): A compelling legal narrative explaining why you chose Canada, why this specific program is necessary, how it builds on your past education/work, and your concrete career plans upon returning home.',
          'Ties to Home Country: Documentary evidence of property ownership, family obligations, or guaranteed employment awaiting you after graduation to satisfy section 216(1)(b).'
        ],
      },
      {
        heading: 'The Student Direct Stream (SDS)',
        paras: [
          'If you are a legal resident of specific countries (e.g., India, China, Philippines), you may qualify for expedited processing under the SDS. This requires an upfront payment of the first year’s tuition, the purchase of a Guaranteed Investment Certificate (GIC), and strict upfront language test results.'
        ],
      }
    ],
  },
  '/study/work-during-after': {
    title: 'Work During & After Your Studies', tag: 'Legal work authorization for international students.',
    body: [
      'Canadian immigration law provides generous provisions for international students to integrate into the labour market, but violating the strict conditions of your study permit—even by a single hour of unauthorized work—can result in an exclusion order and a ban from Canada.',
      'Understanding the precise legal boundaries of off-campus work, co-op work permits, and the transition to a Post-Graduation Work Permit (PGWP) is essential to protecting your status.'
    ],
    sections: [
      {
        heading: 'Working While Studying',
        list: [
          'Off-Campus Work: Most full-time students in qualifying academic, vocational, or professional training programs of at least 6 months can work off-campus without a separate work permit. However, IRCC strictly caps these hours during regular academic sessions (historically 20 hours/week, recently adjusted). Full-time work is only permitted during scheduled academic breaks (e.g., summer holidays).',
          'Co-Op Work Permits: If an internship or work placement is a mandatory component of your academic program, you must apply for a separate Co-Op Work Permit. You cannot use your standard off-campus work authorization for mandatory academic placements.'
        ],
      },
      {
        heading: 'The Post-Graduation Work Permit (PGWP)',
        paras: [
          'The PGWP is an open work permit issued once in a lifetime. Its duration is directly tied to the length of your study program:'
        ],
        list: [
          'Programs under 8 months: Not eligible for a PGWP.',
          'Programs between 8 months and 2 years: The PGWP will be valid for the exact duration of the program.',
          'Programs of 2 years or more (or eligible Master’s degrees): The PGWP may be issued for up to 3 years.',
          'Continuous Study Requirement: With few exceptions (like an authorized leave), you must maintain full-time student status during every academic semester to remain eligible for the PGWP.'
        ],
      }
    ],
  },
  '/study/study-to-immigration': {
    title: 'From Study to Immigration', tag: 'Translating Canadian education into permanent residence.',
    body: [
      'The Canadian immigration system is explicitly engineered to retain international students. Possessing Canadian educational credentials and subsequent Canadian work experience provides massive structural advantages in the Express Entry system and Provincial Nominee Programs (PNPs).',
      'However, the transition is not automatic. The work experience gained on a PGWP must be highly skilled (TEER 0, 1, 2, or 3) to qualify for the Canadian Experience Class (CEC), and timing is critical as PGWPs cannot generally be extended.'
    ],
    sections: [
      {
        heading: 'Strategic Pathways to PR',
        list: [
          'Canadian Experience Class (CEC): After completing 12 months of full-time, skilled work on your PGWP, you become eligible for the CEC under Express Entry. Student work experience (e.g., co-ops) does NOT count toward this requirement.',
          'Express Entry CRS Advantages: Completing a 1- or 2-year diploma adds 15 CRS points. A 3-year degree, Master’s, or PhD adds 30 CRS points.',
          'OINP Masters and PhD Streams: Graduates of eligible Ontario post-graduate programs can bypass the job offer and Express Entry requirements entirely by applying directly for provincial nomination.',
          'OINP International Student Stream: Graduates with a qualifying job offer in Ontario can seek provincial nomination without any prior work experience.'
        ],
      }
    ],
  },
  '/work/hire-foreign-worker': {
    title: 'Hire a Foreign Worker (LMIA)', tag: 'Corporate immigration compliance and LMIA strategy.',
    body: [
      `Hiring internationally opens your business to a world of talent, but it imposes severe regulatory compliance obligations under the Immigration and Refugee Protection Act (IRPA). ${COMPANY} guides Canadian employers through the intricate frameworks of the Temporary Foreign Worker Program (TFWP) and the International Mobility Program (IMP).`,
      'The cornerstone of the TFWP is the Labour Market Impact Assessment (LMIA). An LMIA is a rigorous audit conducted by Employment and Social Development Canada (ESDC). The employer must prove that hiring a foreign national will have a positive or neutral effect on the Canadian labour market, and that no Canadian citizen or permanent resident is available for the role.',
      'A failed LMIA application wastes months of recruitment effort and incurs non-refundable government fees. We manage the entire statutory recruitment process, draft the LMIA application, and act as your legal representative before ESDC.'
    ],
    sections: [
      {
        heading: 'LMIA Streams and Requirements',
        list: [
          'High-Wage Stream: For positions offering a wage at or above the provincial median. Employers must provide a detailed Transition Plan demonstrating how they will reduce reliance on foreign labour over time.',
          'Low-Wage Stream: For positions below the provincial median. Employers are subject to strict caps (typically 20% of the workforce at that location) and must pay for the worker’s round-trip transportation, housing, and private health insurance.',
          'Global Talent Stream (GTS): A fast-tracked 2-week processing stream for highly specialized tech roles (Category A) or occupations on the Global Talent Occupations List (Category B). Requires a Labour Market Benefits Plan (LMBP).'
        ],
      },
      {
        heading: 'Employer Compliance and Inspections',
        paras: [
          'Under the IRPR, employers who utilize the TFWP or IMP are subject to random, unannounced government inspections for up to 6 years after the work permit is issued. Penalties for non-compliance include administrative monetary penalties (AMPs) of up to $1 million, bans from hiring foreign workers, and publication on a public blacklist. Our firm conducts proactive compliance audits to ensure your business remains unimpeachable.'
        ],
      }
    ],
  },
  '/work/closed-work-permit': {
    title: 'Closed Work Permits', tag: 'Employer-specific work authorization.',
    body: [
      'A closed (employer-specific) work permit strictly legally binds a foreign national to one specific employer, in one specific position, at one specific location. The worker may not undertake any other employment in Canada without first obtaining a new work permit.',
      'Most closed work permits are underpinned by a positive Labour Market Impact Assessment (LMIA). Once the employer secures the LMIA, the worker must apply to IRCC for the work permit, proving they possess the requisite education and experience outlined in the LMIA.',
      'Our legal team handles the transition from LMIA approval to work permit issuance, ensuring that consular or port-of-entry applications are flawlessly executed.'
    ],
    sections: [
      {
        heading: 'Vulnerable Worker Open Work Permit (VWOWP)',
        paras: [
          'If you are in Canada on a closed work permit and are experiencing abuse (physical, psychological, sexual, or financial) in the context of your employment, you have legal recourse. You can apply for a VWOWP to escape the abusive employer without losing your status in Canada. We handle these highly sensitive applications with the utmost urgency and confidentiality.'
        ],
      },
      {
        heading: 'Changing Employers',
        paras: [
          'If you hold a closed work permit and wish to change jobs, your new employer must obtain a new LMIA (or qualify for an LMIA exemption). Under a special public policy, you may be eligible to begin working for the new employer while the new work permit application is in processing.'
        ],
      }
    ],
  },
  '/work/open-work-permits': {
    title: 'Open Work Permits', tag: 'Unrestricted work authorization in Canada.',
    body: [
      'An open work permit is a highly coveted immigration document. It allows a foreign national to work for almost any employer in Canada, in any location, without the need for a Labour Market Impact Assessment (LMIA) or a specific job offer.',
      'Eligibility for an open work permit is strictly confined to specific regulatory categories. Our firm identifies the appropriate legal mechanism for your situation and constructs a compelling application to secure your unrestricted work rights.'
    ],
    sections: [
      {
        heading: 'Common Legal Categories for Open Work Permits',
        list: [
          'Spousal Open Work Permit (SOWP): Available to spouses and common-law partners of skilled temporary foreign workers (TEER 0, 1, 2, or 3), spouses of full-time international students in eligible programs, and applicants under the Inland Spousal Sponsorship class.',
          'Post-Graduation Work Permit (PGWP): An open permit of up to 3 years for graduates of eligible Canadian DLIs.',
          'Bridging Open Work Permit (BOWP): For foreign nationals in Canada who have submitted a permanent residence application and need to maintain their work authorization.',
          'International Experience Canada (IEC): Includes the Working Holiday visa for youth from countries with bilateral agreements with Canada.',
          'Humanitarian and Compassionate: Open work permits for refugee claimants or individuals under unenforceable removal orders.'
        ],
      }
    ],
  },
  '/work/special-groups': {
    title: 'Work Permits for Special Groups', tag: 'Targeted legal pathways under the International Mobility Program.',
    body: [
      'The International Mobility Program (IMP) permits Canadian employers to hire foreign workers without an LMIA if the employment advances Canada’s broad economic, cultural, or competitive interests, or aligns with international treaties.',
      'These LMIA-exempt categories are legally complex. We construct arguments demonstrating how your employment fits within the narrow confines of these regulatory exemptions.'
    ],
    sections: [
      {
        heading: 'Key LMIA-Exempt Categories',
        list: [
          'CUSMA/USMCA Professionals: Citizens of the US and Mexico working in designated professions (e.g., engineers, accountants, management consultants) can obtain work permits at the Port of Entry.',
          'Intra-Company Transferees (ICT): Executives, senior managers, or specialized knowledge workers transferring to a Canadian branch, subsidiary, or affiliate of a multinational corporation.',
          'Francophone Mobility: For bilingual candidates (French/English) destined for skilled positions (TEER 0, 1, 2, 3, 4, or 5) anywhere in Canada outside of Quebec.',
          'Significant Benefit (C10): For individuals whose work will create substantial economic, social, or cultural benefits for Canada (often used for highly acclaimed artists, athletes, or unique entrepreneurs).'
        ],
      }
    ],
  },
  '/work/extension': {
    title: 'Work Permit Extension', tag: 'Legal continuity of your Canadian work authorization.',
    body: [
      'A work permit is a temporary resident document with a strict expiry date. Continuing to work in Canada after a permit expires without filing an extension constitutes an offense under the IRPA, leading to removal orders and bans.',
      'Filing a timely and complete extension application is critical to protecting your legal right to work and your pathway to permanent residence.'
    ],
    sections: [
      {
        heading: 'Maintained Status (Section 186(u))',
        paras: [
          'If a complete application to extend your work permit is received by IRCC before your current permit expires, you benefit from "maintained status" (formerly implied status). This legal provision authorizes you to continue working under the exact same conditions as your original permit until a decision is rendered on your extension application. If your permit was employer-specific, you must stay with that employer.'
        ],
      },
      {
        heading: 'Restoration of Status',
        paras: [
          'If your permit expires before you apply, you lose your legal status immediately and must cease working. You have a strict 90-day window to apply for Restoration of Status, accompanied by a new work permit application. Restoration is highly discretionary, and you cannot work while it is processing.'
        ],
      }
    ],
  },
  '/other/citizenship': {
    title: 'Canadian Citizenship Application', tag: 'The ultimate culmination of your immigration journey.',
    body: [
      'The acquisition of Canadian citizenship is a highly regulated statutory process governed by the Citizenship Act. While it marks the end of your immigration journey, the application itself requires meticulous documentation of your physical presence, tax compliance, and legal history over the preceding five years.',
      'A miscalculation of physical presence days or a failure to disclose a border crossing can result in allegations of misrepresentation, delaying your citizenship by years or leading to the revocation of your permanent resident status.',
      'Our legal team audits your travel history, prepares your physical presence calculator with exacting precision, and acts as your counsel throughout the entire process, including responses to any Residence Questionnaires (RQ).'
    ],
    sections: [
      {
        heading: 'Statutory Eligibility Requirements',
        list: [
          'Physical Presence: You must have been physically present in Canada for at least 1,095 days (3 years) out of the 5 years immediately preceding your application. Time spent as a temporary resident (worker/student) before becoming a PR counts as half-days, up to a maximum of 365 days.',
          'Tax Compliance: You must have met your personal income tax filing obligations under the Income Tax Act for at least 3 taxation years that fall fully or partially within the 5-year qualifying period.',
          'Language Proficiency: If you are between 18 and 54 years of age on the day you sign your application, you must provide proof of adequate knowledge of English or French (minimum CLB 4).',
          'Knowledge of Canada: Applicants aged 18 to 54 must pass the official Canadian Citizenship Test.'
        ],
      },
      {
        heading: 'Citizenship by Descent',
        paras: [
          'Under the first-generation limit to citizenship by descent, individuals born outside Canada to a Canadian parent may be citizens. Due to recent and pending legislative changes regarding the "substantial connection" test, citizenship by descent cases require complex historical legal analysis. We assist with applications for Proof of Citizenship.'
        ],
      }
    ],
  },
  '/other/status-extension': {
    title: 'Status Extension & Restoration', tag: 'Preserving your lawful status in Canada.',
    body: [
      'Maintaining legal status is the most fundamental obligation of any temporary resident in Canada. Failing to extend your status before it expires renders you out of status, stripping you of your right to work or study and exposing you to enforcement action under the IRPA.',
      'Our firm specializes in status preservation strategies, ensuring that extension applications are filed prior to expiry to leverage "maintained status" provisions, and executing complex Restoration of Status applications when deadlines have been missed.'
    ],
    sections: [
      {
        heading: 'Maintained Status (Section 183(5))',
        paras: [
          'If a temporary resident applies to extend their status before it expires, they legally retain their status while the application is in processing. This allows them to remain in Canada under the same conditions (e.g., as a visitor). We track expiry dates meticulously to ensure extension applications are filed in time to trigger this legal protection.'
        ],
      },
      {
        heading: 'Restoration of Status',
        list: [
          'If your temporary resident status expires, you have exactly 90 days from the date of expiry to apply for Restoration of Status.',
          'During this 90-day period, you are in Canada illegally and must immediately cease working or studying.',
          'Restoration is highly discretionary. You must convince an officer that your failure to comply was temporary, explain the circumstances surrounding the loss of status, and demonstrate that you now meet all requirements of the class to which you are applying to be restored.'
        ],
      }
    ],
  },
  '/other/services': {
    title: 'Other Legal Services', tag: 'Comprehensive ancillary immigration representation.',
    body: [
      `Immigration strategies often require highly specialized ancillary services to resolve unexpected legal hurdles. ${COMPANY} provides a full suite of supplementary legal and administrative services to support your primary applications and ensure total compliance.`
    ],
    sections: [
      {
        heading: 'Specialized Practice Areas',
        list: [
          'Temporary Resident Visas (TRV) & Super Visas: Strategic applications for visitors, including the 5-year Super Visa for parents and grandparents requiring specialized medical insurance documentation.',
          'Criminal Rehabilitation: Legal applications to overcome criminal inadmissibility under section 36 of the IRPA for offenses committed outside Canada (e.g., DUIs).',
          'Access to Information and Privacy (ATIP): We formally request the Global Case Management System (GCMS) notes from IRCC to uncover the exact reasons for a previous refusal, allowing us to build a precise counter-strategy.',
          'PR Card Renewals & PR Travel Documents: Managing the retention of PR status on humanitarian grounds for permanent residents who have failed to meet the residency obligation (730 days in a 5-year period).'
        ],
      }
    ],
  },
  '/fees': {
    title: 'Our Fees', tag: 'The price you see is the price you pay',
    body: [
      `${COMPANY} offers four service packages for every program, so you pay only for the level of help you need. All professional fees are flat, agreed in writing before work begins, and exclude taxes and IRCC government fees, which are always listed separately.`,
      'Your consultation fee is fully credited toward the Full or Do It Yourself package if you retain us, and payment plans are available for most services.',
    ],
    sections: [
      {
        heading: 'The four packages',
        list: [
          'Full — end-to-end representation: we prepare, submit, and manage everything as your authorized representative',
          'Do It Yourself — guided application: you drive, we review, advise, and support you for a year after submission',
          'Peace of Mind — you prepare the application, we review it in depth before you submit, with a one-hour feedback session and a 15-minute follow-up',
          'Consultation — a one-time session (15 minutes to 1 hour) with an eligibility assessment and personalized document checklist',
        ],
      },
      {
        heading: 'Express Entry (profile)',
        table: {
          columns: ['Package', 'Fee (CAD)', 'Add-ons'],
          rows: [
            ['Full', '$1,250', 'Spouse +$250 · Child free · Status services +$500'],
            ['Do It Yourself', '$750', 'Spouse +$150 · Child free · Status services +$300'],
            ['Peace of Mind', '$425', 'Spouse +$125 · Child free · Status services +$100'],
            ['Consultation', '$85–$200', 'By session length'],
          ],
        },
      },
      {
        heading: 'Canadian Experience Class',
        table: {
          columns: ['Package', 'Fee (CAD)', 'Add-ons'],
          rows: [
            ['Full', '$2,250', 'Spouse +$1,000 · Child +$500'],
            ['Do It Yourself', '$1,350', 'Spouse +$600 · Child +$300'],
            ['Peace of Mind', '$650', 'Spouse +$200 · Child +$100'],
            ['Consultation', '$85–$200', 'By session length'],
          ],
        },
      },
      {
        heading: 'Federal Skilled Worker',
        table: {
          columns: ['Package', 'Fee (CAD)', 'Notes'],
          rows: [
            ['Full', '$2,500', '$250 discount when combined with Express Entry'],
            ['Do It Yourself', '$1,500', 'Same discount available'],
            ['Peace of Mind', '$650', ''],
            ['Consultation', '$85–$200', 'By session length'],
          ],
        },
      },
      {
        heading: 'OINP — Express Entry streams',
        table: {
          columns: ['Package', 'Fee (CAD)', 'Notes'],
          rows: [
            ['Full', '$2,500', 'Payment installment options available'],
            ['Do It Yourself', '$1,500', ''],
            ['Peace of Mind', '$650', ''],
            ['Consultation', '$85–$200', 'By session length'],
          ],
        },
      },
      {
        heading: 'What every package includes',
        list: [
          'Authorized representation by a regulated consultant (Full and DIY)',
          'Access to our secure online client portal',
          'Personalized document checklists',
          'Full post-submission support',
          'Government fees always charged at cost — no markup',
        ],
      },
    ],
    faq: [
      { q: 'Are IRCC government fees included?', a: 'No — professional fees exclude taxes and IRCC fees. Government fees, biometrics, translations, and third-party costs are always listed separately at cost, so you know exactly what you are paying for.' },
      { q: 'Do you offer payment plans?', a: 'Yes, payment installment options are available for most Full packages.' },
      { q: 'What if my program is not listed here?', a: 'These are our most-requested programs. Contact us for a written quote for family sponsorship, study, work, citizenship, and every other service we offer.' },
    ],
  },
  '/privacy': {
    title: 'Privacy Policy', tag: 'How we protect your information',
    body: [
      `${COMPANY} collects personal information only for the purpose of assessing your eligibility and representing you before Canadian immigration authorities. We comply with applicable Canadian privacy legislation, including PIPEDA.`,
      'Your documents are stored securely, shared only with the government bodies processing your application, and never sold or disclosed to third parties without your consent. You may request access to, correction of, or deletion of your personal information at any time by contacting our office.',
    ],
  },
  '/pricing-terms': {
    title: 'Pricing Terms', tag: 'How our fees work',
    body: [
      'All professional fees are set out in a written retainer agreement before any work begins. Fees are payable according to the schedule in your agreement, and government fees are always charged at cost.',
      'Professional fees cover the services described in your retainer. Additional work outside the original scope — such as responding to unusual requests from IRCC — is quoted separately before it is undertaken. Refunds are governed by the terms of your retainer agreement and the regulations of the College of Immigration and Citizenship Consultants.',
    ],
  },
  '/terms': {
    title: 'Terms of Use', tag: 'Using this website',
    body: [
      'The content on this website is provided for general information only and does not constitute legal or immigration advice. Immigration programs change frequently; always confirm current requirements before acting.',
      `No consultant-client relationship is created by using this site. A relationship with ${COMPANY} begins only when a written retainer agreement is signed. We make reasonable efforts to keep content accurate but accept no liability for decisions made in reliance on it.`,
    ],
  },
  '/partnership': {
    title: 'Partnership', tag: 'Work with us',
    body: [
      `${COMPANY} partners with educational agents, recruiters, employers, and community organizations around the world. Our partners refer clients with confidence, knowing every file is handled by regulated consultants to the highest professional standard.`,
      'If you would like to explore a referral or institutional partnership, contact our partnerships team and we will arrange an introductory call.',
    ],
    pointsTitle: 'Partnership opportunities',
    points: [
      'Education agent referral programs',
      'Employer and recruiter collaborations',
      'Community organization alliances',
    ],
  },
  '/careers': {
    title: 'Careers', tag: `Join the ${COMPANY} team`,
    body: [
      'We are always interested in meeting talented consultants, case managers, and client-care professionals who share our commitment to honest, meticulous immigration work.',
      'Send your resume and a short cover note to our hiring team. When positions open, we reach out to promising candidates first.',
    ],
    pointsTitle: 'What we look for',
    points: [
      'RCIC licence or progress toward one (consultant roles)',
      'Meticulous attention to documentary detail',
      'Empathy and clear communication with clients',
      'Additional languages are always an asset',
    ],
  },

  // ---- OINP Job Offer Streams ----
  '/immigration/ontario-pnp/job-offer-streams/foreign-worker': {
    title: 'OINP Foreign Worker Stream', tag: 'Direct provincial nomination for highly skilled foreign workers.',
    body: [
      'The OINP Foreign Worker stream is a highly sought-after pathway that permits skilled workers—whether residing abroad or already in Canada—to apply for provincial nomination, provided they possess a qualifying job offer from an eligible Ontario employer.',
      'Unlike the Express Entry system, this stream operates independently of the Comprehensive Ranking System (CRS). Instead, it relies on an Expression of Interest (EOI) points matrix that heavily weighs the location, wage, and NOC code of the job offer, along with the applicant’s human capital.',
      'Our legal practice meticulously evaluates both the applicant’s work history and the employer’s corporate viability to ensure the dual-eligibility threshold is met without fail.'
    ],
    sections: [
      {
        heading: 'Applicant Eligibility Requirements',
        list: [
          'Work Experience: A minimum of two years of cumulative, paid, full-time work experience (or part-time equivalent) in the exact same NOC code as the job offer within the five years prior to submitting the EOI.',
          'Occupational Skill Level: The job offer must be for a position classified under TEER category 0, 1, 2, or 3 of the National Occupational Classification (NOC).',
          'Licensing: If the occupation requires a mandatory license in Ontario (e.g., nursing, engineering), the applicant must possess the valid license or certification at the time of application.'
        ],
      },
      {
        heading: 'Employer Legal Obligations',
        list: [
          'Revenue Requirements: For businesses inside the GTA, gross annual revenue must exceed $1,000,000 CAD. Outside the GTA, the threshold is $500,000 CAD.',
          'Staffing Requirements: Employers inside the GTA must have at least five full-time Canadian citizen or PR employees. Outside the GTA, they must have at least three.',
          'Prevailing Wage: The employer must offer a wage that is equal to or greater than the median wage for that specific occupation in the specific geographic region of Ontario where the applicant will work.'
        ],
      }
    ],
    faq: [
      { q: 'Is a Labour Market Impact Assessment (LMIA) required?', a: 'No. The OINP Employer Job Offer streams do not strictly require the employer to obtain an LMIA. However, the employer must still demonstrate recruitment efforts and meet strict provincial business requirements.' }
    ],
  },
  '/immigration/ontario-pnp/job-offer-streams/international-student': {
    title: 'OINP International Student Stream', tag: 'A dedicated pathway for graduates of Canadian institutions.',
    body: [
      'Designed specifically for recent international graduates, this stream allows eligible alumni from Canadian Designated Learning Institutions (DLIs) who hold a job offer in Ontario to apply for permanent residence without the rigid prior work experience requirements found in the Foreign Worker stream.',
      'Because the eligibility window is strictly enforced, graduates must act swiftly upon degree conferral. We ensure that your EOI is registered and your application is flawlessly assembled before your statutory window closes.'
    ],
    sections: [
      {
        heading: 'Statutory Eligibility Criteria',
        list: [
          'Eligible Credential: You must have completed a degree or diploma program of at least two years in length on a full-time basis, or a one-year post-graduate degree/certificate/diploma program that required a prior degree.',
          'Institutional Requirement: The credential must be from an eligible publicly-funded Canadian college or university.',
          'Application Deadline: You must submit your OINP application within precisely two years of the date your degree, diploma, or certificate was granted.',
          'Job Offer Wage: Unlike the Foreign Worker stream, the employer is only required to offer a wage that meets or exceeds the low wage (entry-level) for the occupation in the specific geographic region.'
        ],
      }
    ],
  },
  '/immigration/ontario-pnp/job-offer-streams/in-demand-skills': {
    title: 'OINP In-Demand Skills Stream', tag: 'Permanent residence for critical essential workers.',
    body: [
      'Recognizing severe labour shortages in specific sectors, Ontario created the In-Demand Skills stream. This stream targets workers in agriculture, construction, trucking, personal support, and specific manufacturing roles (TEER 4 and 5 occupations).',
      'Because these occupations generally do not qualify for Express Entry, the In-Demand Skills stream is often the singular viable pathway to permanent residence for these essential workers.'
    ],
    sections: [
      {
        heading: 'Qualifying Occupations and Experience',
        list: [
          'Eligible Occupations: The job offer must be in an occupation specifically listed on the OINP In-Demand Skills list (e.g., NOC 73300 Transport truck drivers, NOC 33102 Nurse aides, NOC 85100 Harvesting labourers).',
          'Ontario Work Experience: You must have at least 9 months of cumulative, paid, full-time work experience in Ontario in the same NOC code as your job offer within the 3 years preceding your application.',
          'Language Proficiency: You must achieve a minimum of CLB 4 in English or French (e.g., IELTS 4.0 in Reading, 4.5 in Listening, 4.0 in Writing, 4.0 in Speaking).',
          'Education: You must have the equivalent of a Canadian secondary school (high school) diploma or higher, verified by an Educational Credential Assessment (ECA).'
        ],
      }
    ],
  },

  // ---- OINP Express Entry Streams ----
  '/immigration/ontario-pnp/express-entry-streams/human-capital-priorities': {
    title: 'OINP Human Capital Priorities (HCP) Stream', tag: 'Strategic targeting of high-value Express Entry candidates.',
    body: [
      'The Human Capital Priorities (HCP) stream is Ontario’s primary mechanism for selecting highly skilled professionals directly from the federal Express Entry pool. It is arguably the most dynamic and competitive provincial stream in Canada.',
      'OINP conducts regular draws targeting specific National Occupational Classification (NOC) codes—predominantly in the technology, healthcare, and finance sectors. Candidates who receive a Notification of Interest (NOI) and successfully apply receive an additional 600 CRS points.'
    ],
    sections: [
      {
        heading: 'Profile Optimization and Selection',
        paras: [
          'You cannot apply directly to the HCP stream. You must wait to be selected based on the specific parameters of an OINP draw.'
        ],
        list: [
          'Express Entry Profile: You must have a valid profile under the Federal Skilled Worker Program (FSWP) or the Canadian Experience Class (CEC).',
          'CRS Score Cut-offs: OINP sets customized CRS score ranges for each draw. Only candidates falling precisely within the targeted range and holding experience in the targeted NOC codes will receive an NOI.',
          'Work Experience: You must meet the work experience requirements of the FSWP or CEC. If you claim FSWP, your experience must be continuous.',
          'Education: A minimum of a Canadian bachelor’s, master’s, or PhD degree, or its foreign equivalent (verified by an ECA) is mandatory.'
        ],
      },
      {
        heading: 'The 45-Day Statutory Deadline',
        paras: [
          'Upon receiving an NOI, the applicant has a strict 45-calendar-day window to submit a complete, error-free provincial application. OINP officers afford almost no leniency for missing documents.'
        ],
      }
    ],
  },
  '/immigration/ontario-pnp/express-entry-streams/skilled-trades': {
    title: 'OINP Skilled Trades Stream', tag: 'Fast-track provincial nomination for Ontario trade workers.',
    body: [
      'The OINP Express Entry Skilled Trades stream provides a dedicated pathway for trade workers who are already contributing to Ontario’s economy. It specifically targets candidates with ongoing or recent Ontario work experience in eligible construction, industrial, and electrical trades.',
      'By securing 600 CRS points, trade workers can bypass the highly competitive federal CRS cut-offs, virtually guaranteeing a federal Invitation to Apply (ITA) for permanent residence.'
    ],
    sections: [
      {
        heading: 'Eligibility Criteria',
        list: [
          'Express Entry Profile: You must hold a valid profile under the Canadian Experience Class (CEC).',
          'Ontario Work Experience: You must have at least one year of cumulative, full-time paid work experience in Ontario in an eligible Minor Group under NOC Major Groups 72, 73, 82, 83, 92, or 93.',
          'Recent Experience: The experience must have been obtained within the two years prior to receiving a Notification of Interest (NOI).',
          'Licensing Requirements: If you are working in a compulsory trade in Ontario, you must hold a valid certificate of qualification or license from Skilled Trades Ontario (STO) at the time of application.'
        ],
      }
    ],
  },
  '/immigration/ontario-pnp/express-entry-streams/french-speaking-skilled-worker': {
    title: 'OINP French-Speaking Skilled Worker Stream', tag: 'Prioritizing bilingual francophone candidates.',
    body: [
      'In alignment with federal mandates to increase Francophone immigration outside of Quebec, Ontario utilizes this stream to nominate highly skilled, bilingual candidates from the Express Entry pool.',
      'This stream operates identically to the Human Capital Priorities stream but is exclusively available to candidates who demonstrate advanced proficiency in French and adequate proficiency in English.'
    ],
    sections: [
      {
        heading: 'Language Proficiency Thresholds',
        paras: [
          'To be eligible for an NOI under this stream, your Express Entry profile must demonstrate both:'
        ],
        list: [
          'French Proficiency: A minimum of Niveaux de compétence linguistique canadiens (NCLC) level 7 in all four abilities (listening, reading, writing, and speaking) via the TEF Canada or TCF Canada exams.',
          'English Proficiency: A minimum of Canadian Language Benchmark (CLB) level 6 in all four abilities via the IELTS General or CELPIP exams.'
        ],
      },
      {
        heading: 'Other Requirements',
        list: [
          'Must qualify under the FSWP or CEC.',
          'Must possess a Bachelor’s degree or higher.',
          'Must demonstrate strong ties or an intent to reside in Ontario.'
        ],
      }
    ],
  },

  // ---- OINP Post-Graduate Streams ----
  '/immigration/ontario-pnp/post-graduate-streams/masters-graduate': {
    title: 'OINP Masters Graduate Stream', tag: 'Direct permanent residence for Ontario Masters alumni.',
    body: [
      'The OINP Masters Graduate stream offers an expedited route to permanent residence without the necessity of securing a job offer. It is engineered to retain top-tier intellectual talent within the province.',
      'This stream utilizes Ontario’s Expression of Interest (EOI) scoring system. Candidates are ranked based on their language proficiency, field of study (STEM fields are highly prioritized), regional location of their studies, and historical earnings.'
    ],
    sections: [
      {
        heading: 'Stringent Eligibility Regulations',
        list: [
          'Eligible Degree: You must have completed the requirements for a master’s degree from an eligible Ontario university, involving at least one academic year of full-time study.',
          'Language Proficiency: You must achieve a minimum of CLB 7 in English or French.',
          'Residency in Ontario: You must have legally resided in Ontario for at least one year within the two years immediately prior to submitting the application.',
          'Application Deadline: You must submit your EOI and subsequent application within exactly two years of the date your master’s degree was granted.'
        ],
      }
    ],
    faq: [
      { q: 'Do I need a job offer to apply?', a: 'No. The Masters Graduate stream is entirely exempt from the job offer requirement, making it one of the most flexible pathways for international students.' }
    ],
  },
  '/immigration/ontario-pnp/post-graduate-streams/phd-graduate': {
    title: 'OINP PhD Graduate Stream', tag: 'Excellence in research rewarded with permanent residence.',
    body: [
      'Recognizing the immense value that doctoral researchers bring to the innovation sector, the OINP PhD Graduate stream is the most direct pathway for advanced degree holders in Ontario.',
      'Unlike the Masters Graduate stream, the PhD stream imposes significantly fewer barriers—it completely waives the mandatory language testing requirement and does not strictly require physical residency in Ontario at the time of application, provided other ties are met.'
    ],
    sections: [
      {
        heading: 'Eligibility Criteria',
        list: [
          'Eligible Degree: You must have successfully completed the requirements for a PhD degree from an eligible Ontario university. At least two years of your PhD studies must have been completed legally in Ontario.',
          'Application Deadline: Like the Masters stream, you have exactly two years from the date your degree was granted to apply.',
          'Settlement Funds: You must prove you have the necessary funds to support yourself and your dependent family members upon settling in Ontario.',
          'Intent to Reside: You must provide a comprehensive statement demonstrating your ties to Ontario (e.g., employment, property leasing, professional networks) and your definitive intent to reside there permanently.'
        ],
      }
    ],
  },

  // ---- Other Immigration Programs ----
  '/immigration/other-programs/provincial-nominee-programs': {
    title: 'Other Provincial Nominee Programs', tag: 'Pathways in every province and territory',
    body: [
      'Beyond Ontario, nearly every province and territory operates its own nominee program — British Columbia, Alberta, Saskatchewan, Manitoba, Nova Scotia, and more — each with streams for workers, graduates, and entrepreneurs.',
      'We track draw trends across all PNPs and match your profile to the provinces where you are most competitive, then manage both the provincial and federal stages of your application.',
    ],
    pointsTitle: 'What we assess',
    points: [
      'Which provinces target your occupation or skills',
      'Streams aligned with Express Entry for faster processing',
      'Connection requirements such as job offers, education, or family ties',
      'Entrepreneur and investment streams for business owners',
    ],
  },
  '/immigration/other-programs/self-employed': {
    title: 'Self-Employed Persons Program', tag: 'PR for cultural and athletic professionals',
    body: [
      'The federal Self-Employed Persons Program offers permanent residence to individuals with relevant experience in cultural activities or athletics who can be self-employed in Canada and contribute to its cultural or athletic life.',
      'We document your track record — performances, publications, competitions, awards — and present a credible plan for self-employment in Canada.',
    ],
    pointsTitle: 'Core requirements',
    points: [
      'Two years of relevant self-employment or world-class participation in the last five years',
      'Intent and ability to be self-employed in Canada',
      'A minimum of 35 points on the program’s selection grid',
      'Medical, security, and admissibility requirements',
    ],
  },
  '/immigration/other-programs/caregivers': {
    title: 'Programs for Caregivers', tag: 'Permanent residence for home care workers',
    body: [
      'Canada offers dedicated permanent residence pathways for home child-care providers and home support workers. Recent caregiver pilots provide PR on arrival or after a period of Canadian work experience, depending on the intake category.',
      'We confirm your training and experience meet the requirements, secure a qualifying job offer where needed, and prepare the complete application for you and your family.',
    ],
    pointsTitle: 'Typical requirements',
    points: [
      'A genuine full-time job offer in home child care or home support',
      'Relevant work experience or a qualifying credential',
      'Language ability of CLB 4–5 depending on the category',
      'Admissibility for you and accompanying family members',
    ],
  },
  '/immigration/other-programs/agri-food-pilot': {
    title: 'Agri-Food Pilot', tag: 'PR for experienced agricultural workers',
    body: [
      'The Agri-Food Pilot creates a pathway to permanent residence for workers in meat processing, mushroom and greenhouse production, and livestock raising who have Canadian work experience in eligible industries.',
      'We verify your occupation and industry qualify, gather the required experience letters, and manage the PR application.',
    ],
    pointsTitle: 'Core requirements',
    points: [
      'One year of Canadian work experience in an eligible occupation and industry',
      'A full-time, non-seasonal job offer outside Quebec, or the required experience',
      'Language ability of CLB 4 or higher',
      'A Canadian high-school credential or educational equivalency',
    ],
  },
  '/immigration/other-programs/rural-northern-pilot': {
    title: 'Rural & Northern Immigration Pilot', tag: 'Community-driven immigration',
    body: [
      'The Rural and Northern Immigration Pilot lets participating smaller communities recommend candidates with local job offers for permanent residence, spreading the benefits of immigration beyond the big cities.',
      'We match your occupation to participating communities, guide you through the community recommendation stage, and file the federal PR application that follows.',
    ],
    pointsTitle: 'How it works',
    points: [
      'A job offer from an employer in a participating community',
      'A community recommendation based on local criteria',
      'Work experience or graduation from the community’s college',
      'Language, education, and settlement fund requirements',
    ],
  },
  '/immigration/other-programs/atlantic-immigration': {
    title: 'Atlantic Immigration Program', tag: 'Employer-driven PR in Atlantic Canada',
    body: [
      'The Atlantic Immigration Program connects skilled workers and international graduates with designated employers in New Brunswick, Nova Scotia, Prince Edward Island, and Newfoundland and Labrador — no LMIA required.',
      'We confirm the employer’s designation, coordinate the required settlement plan, and prepare both the endorsement and the permanent residence application.',
    ],
    pointsTitle: 'Core requirements',
    points: [
      'A job offer from a designated Atlantic employer',
      'Qualifying work experience, or graduation from an Atlantic institution',
      'Language ability of CLB 4–5 depending on the occupation',
      'A settlement plan from a designated service provider',
    ],
  },
  '/immigration/other-programs/hong-kong-residents': {
    title: 'PR Pathways for Hong Kong Residents', tag: 'Dedicated measures for Hong Kongers',
    body: [
      'Canada introduced special measures for Hong Kong residents, including open work permits for recent graduates and dedicated permanent residence streams for those studying or working in Canada.',
      'We determine which stream fits your situation, maintain your temporary status while the PR application is in process, and handle the filings from start to finish.',
    ],
    pointsTitle: 'Key features',
    points: [
      'Stream A — for recent graduates of Canadian institutions',
      'Stream B — for those with recent Canadian work experience',
      'Open work permits for eligible Hong Kong graduates',
      'Inclusion of spouses and dependent children',
    ],
  },

  // ---- Family: Spouse / Partner sub-pages ----
  '/family/spouse-partner/sponsorship': {
    title: 'Spousal Sponsorship Program (PR)', tag: 'Permanent residence for your partner',
    body: [
      'Spousal sponsorship grants your spouse or partner permanent residence in Canada. You can apply inland (while your partner lives with you in Canada) or outland (through the visa office serving their country) — each route has distinct advantages.',
      'We recommend the right route for your circumstances, assemble persuasive relationship evidence, and represent you both until permanent residence is granted.',
    ],
    pointsTitle: 'What the process involves',
    points: [
      'Sponsor eligibility and undertaking of support',
      'Proof of a genuine, continuing relationship',
      'Police certificates and medical examinations',
      'A three-year undertaking of financial responsibility',
    ],
  },
  '/family/spouse-partner/open-work-permit': {
    title: 'Spousal Open Work Permit (Inland)', tag: 'Work while your sponsorship is processed',
    body: [
      'Partners being sponsored from inside Canada can apply for an open work permit alongside the sponsorship application, allowing them to work for almost any employer while the PR file is processed.',
      'We file the work permit with the sponsorship package or afterwards, and keep your partner’s status valid throughout.',
    ],
    pointsTitle: 'Eligibility essentials',
    points: [
      'An inland sponsorship application in process',
      'Valid temporary status in Canada (or eligibility for restoration)',
      'Cohabitation with the sponsoring spouse or partner in Canada',
    ],
  },
  '/family/spouse-partner/visitor-visa': {
    title: 'Visitor Visa for Sponsored Partners', tag: 'Be together during processing',
    body: [
      'While an outland sponsorship is processed, your partner may visit you in Canada with a visitor visa or eTA. IRCC recognizes dual intent — wanting to visit now and immigrate later is not, by itself, a reason for refusal.',
      'We prepare visitor applications that address the dual-intent question head-on, with evidence that your partner will respect the terms of temporary status.',
    ],
    pointsTitle: 'What strengthens the application',
    points: [
      'A transparent explanation of the pending sponsorship',
      'Evidence of ties and the intent to comply with visa conditions',
      'Proof of funds for the visit',
      'A clear travel history where available',
    ],
  },
  '/family/spouse-partner/compare-programs': {
    title: 'Compare All Spouse & Partner Programs', tag: 'Sponsorship, open work permit, or visitor visa?',
    body: [
      'Three programs can bring your partner to Canada — permanent residence through sponsorship, work authorization through a Spousal Open Work Permit, or a temporary stay on a visitor visa. Many couples use them in combination.',
      'Here is how the three options compare side by side.',
    ],
    sections: [
      {
        heading: 'Program comparison',
        table: {
          columns: ['', 'Spousal Sponsorship', 'Spousal Open Work Permit', 'Visitor Visa'],
          rows: [
            ['Primary objective', 'Permanent residence for your partner', 'Work authorization while the sponsorship is processed', 'A temporary visit during processing'],
            ['Relationship types', 'Spouse, common-law, or conjugal partner', 'Spouse or common-law partner', 'Any — including fiancé(e)s'],
            ['Work authorization', 'Full rights after PR is granted', 'Open permit — almost any employer', 'None'],
            ['Typical processing', 'About 12 months', 'A few months', 'Weeks'],
            ['Government fees', '$1,290 total', '$340 total', '$185 (or $7 eTA if visa-exempt)'],
            ['Best for', 'The end goal — every couple needs this eventually', 'Inland couples who need two incomes during processing', 'Outland couples who want to be together while waiting'],
          ],
        },
      },
      {
        heading: 'How we help you choose',
        list: [
          'Processing times for inland versus outland files',
          'Work authorization needs during processing',
          'Travel flexibility while the application is pending',
          'Appeal rights, which differ between the routes',
          'Sequencing — a visitor visa or work permit now, PR in parallel',
        ],
      },
    ],
  },

  // ---- Family: Parents / Grandparents sub-pages ----
  '/family/parents-grandparents/sponsorship': {
    title: 'Parents & Grandparents Sponsorship (PR)', tag: 'Permanent residence for your parents',
    body: [
      'The Parents and Grandparents Program grants permanent residence to sponsored parents and grandparents. Intake is invitation-based: sponsors first submit an interest-to-sponsor form, and IRCC invites applicants from that pool.',
      'We prepare your financial evidence before the window opens, submit your interest form correctly, and file a complete application within the deadline when you are invited.',
    ],
    pointsTitle: 'Sponsor requirements',
    points: [
      'Minimum necessary income for three consecutive tax years',
      'A 20-year undertaking of financial support',
      'Canadian citizenship or permanent residence, age 18 or older',
      'Co-signing options for spouses to combine income',
    ],
  },
  '/family/parents-grandparents/super-visa': {
    title: 'Super Visa', tag: 'Long visits of up to five years per entry',
    body: [
      'The Super Visa is a multi-entry visa for parents and grandparents that allows stays of up to five years per entry, with the visa itself valid for up to ten years. For many families it is faster and more flexible than sponsorship.',
      'We prepare the invitation letter, income evidence, and the private medical insurance documentation the program requires.',
    ],
    pointsTitle: 'Requirements',
    points: [
      'A signed invitation from a child or grandchild in Canada',
      'Host income meeting the minimum necessary income cut-off',
      'At least one year of Canadian private medical insurance coverage',
      'An immigration medical examination',
    ],
  },
  '/family/parents-grandparents/visitor-visa': {
    title: 'Visitor Visa for Parents & Grandparents', tag: 'Shorter visits, simpler requirements',
    body: [
      'For visits of six months or less, a regular visitor visa (or eTA for visa-exempt countries) is often the simplest way for parents and grandparents to spend time with family in Canada.',
      'We prepare applications that demonstrate strong home ties and adequate funds, and advise when a Super Visa is the better tool.',
    ],
    pointsTitle: 'What officers look for',
    points: [
      'Ties to the home country supporting return',
      'Sufficient funds for the visit',
      'The purpose and planned length of stay',
      'An invitation letter from the family in Canada',
    ],
  },
  '/family/parents-grandparents/compare-programs': {
    title: 'Compare All Parent & Grandparent Programs', tag: 'Sponsorship, Super Visa, or visitor visa?',
    body: [
      'PGP sponsorship offers permanent residence but limited intake; the Super Visa offers long stays with predictable approval; a visitor visa suits short trips. Many families use them in combination — a Super Visa now, sponsorship when invited.',
      'Here is how the three options compare side by side.',
    ],
    sections: [
      {
        heading: 'Program comparison',
        table: {
          columns: ['', 'PGP Sponsorship', 'Super Visa', 'Visitor Visa'],
          rows: [
            ['Primary objective', 'Permanent residence', 'Extended visits — up to 5 years per entry', 'Short visits up to 6 months'],
            ['Intake', 'Invitation-based lottery from the interest-to-sponsor pool', 'Apply anytime', 'Apply anytime'],
            ['Income requirement', 'Minimum necessary income for 3 consecutive tax years', 'Host meets the income cut-off for the current year', 'None for the host'],
            ['Medical insurance', 'Not required', 'One year of Canadian private coverage required', 'Not required'],
            ['Undertaking', '20-year financial undertaking', 'None', 'None'],
            ['Healthcare access', 'Provincial coverage as a PR', 'Private insurance only', 'Private insurance only'],
            ['Best for', 'The long-term goal of family reunification', 'Long stays while waiting for a PGP invitation', 'Occasional short visits'],
          ],
        },
      },
      {
        heading: 'How we help you choose',
        list: [
          'Whether your income history supports PGP sponsorship',
          'Super Visa insurance options and costs',
          'Running a Super Visa now and PGP sponsorship in parallel',
          'Quebec’s different undertaking rules where they apply',
        ],
      },
    ],
  },

  // ---- Study sub-pages ----
  '/study/enrol/reasons-to-study-in-canada': {
    title: '7 Reasons to Study in Canada', tag: 'Why students choose Canada',
    body: [
      'Canada is one of the world’s most popular study destinations — and not only for the quality of its universities and colleges. Education here is an investment that can pay off in work rights, immigration options, and quality of life.',
      'Here are the reasons our clients cite most when they choose Canada over other destinations.',
    ],
    pointsTitle: 'The seven reasons',
    points: [
      'World-class institutions at tuition below US and UK equivalents',
      'The right to work part-time during your studies',
      'Post-Graduation Work Permits of up to three years',
      'Clear pathways from study to permanent residence',
      'A safe, multicultural, and welcoming society',
      'Spouses and children can often accompany you',
      'Healthcare and public services in a stable, prosperous country',
    ],
  },
  '/study/study-visa/bring-your-family': {
    title: 'Bring Your Family to Canada', tag: 'Study permits are a family affair',
    body: [
      'Your spouse or partner and dependent children may be able to accompany you to Canada while you study. Spouses of students in eligible graduate and professional programs can apply for open work permits, and children can attend Canadian schools.',
      'We prepare the family’s applications together so everyone’s status is aligned and approvals arrive as a package.',
    ],
    pointsTitle: 'Family options',
    points: [
      'Spousal open work permits for eligible programs',
      'Visitor records or study permits for dependent children',
      'Coordinated applications filed as one family unit',
      'Status renewals synchronized with your study permit',
    ],
  },
  '/study/study-visa/extend-study-permit': {
    title: 'Extend Your Study Permit', tag: 'Keep your status while you finish',
    body: [
      'If your program takes longer than planned, you must extend your study permit before it expires. Applying on time gives you maintained status — you can keep studying under the same conditions while the extension is processed.',
      'We calendar your deadlines, prepare the extension with an updated enrolment letter, and restore status where a deadline has already passed.',
    ],
    pointsTitle: 'What you need',
    points: [
      'Proof of continued enrolment at a designated learning institution',
      'Evidence of funds for the remaining study period',
      'An application filed before your current permit expires',
      'Restoration within 90 days if status has lapsed',
    ],
  },
  '/study/study-visa/change-school-or-program': {
    title: 'Change School or Program', tag: 'Switch without losing status',
    body: [
      'Students can change institutions or programs, but IRCC must be notified and the new school must be a designated learning institution. Changing levels of study or transferring mid-program can affect your permit conditions and future PGWP eligibility.',
      'We review the immigration consequences before you switch and handle the notifications and any permit amendments required.',
    ],
    pointsTitle: 'Before you switch',
    points: [
      'Confirm the new institution is a DLI with PGWP-eligible programs',
      'Notify IRCC of the transfer through your account',
      'Check whether your permit conditions require a new application',
      'Protect your post-graduation work permit eligibility',
    ],
  },
  '/study/study-visa/study-as-a-minor': {
    title: 'Study in Canada as a Minor', tag: 'K-12 education for international children',
    body: [
      'Children under the age of majority can attend Canadian primary and secondary schools as international students. Minors need a study permit, and depending on their age and province, a custodian in Canada.',
      'We handle custodianship declarations, school enrolment coordination, and the study permit application, whether the child travels with a parent or alone.',
    ],
    pointsTitle: 'Key requirements',
    points: [
      'A letter of acceptance from the school or school board',
      'A notarized custodianship declaration where required',
      'Proof of funds for tuition and living costs',
      'Consent documents from non-accompanying parents',
    ],
  },

  // ---- Work: Closed permit sub-pages ----
  '/work/closed-work-permit/lmia': {
    title: 'Labour Market Impact Assessment (LMIA)', tag: 'The employer’s gateway to hiring foreign talent',
    body: [
      'An LMIA is Service Canada’s confirmation that hiring a foreign worker will not negatively affect the Canadian labour market. Most employer-specific work permits require a positive LMIA before the worker can apply.',
      'We manage the entire LMIA process for employers: recruitment planning, advertising compliance, wage analysis, the application itself, and any follow-up interviews with Service Canada.',
    ],
    pointsTitle: 'The LMIA process',
    points: [
      'Minimum four weeks of compliant recruitment and advertising',
      'Wages at or above the prevailing rate for the occupation and region',
      'A complete application with a genuine business case',
      'Transition plans for high-wage positions where required',
      'Employer compliance obligations after approval',
    ],
  },
  '/work/closed-work-permit/global-talent-stream': {
    title: 'Global Talent Stream', tag: 'Two-week processing for top talent',
    body: [
      'The Global Talent Stream offers expedited LMIA processing — often two weeks — for employers hiring highly skilled workers in designated tech occupations (Category B) or unique specialized talent identified by a referral partner (Category A).',
      'We determine your category, build the required Labour Market Benefits Plan, and coordinate the worker’s permit application so start dates are met.',
    ],
    pointsTitle: 'Stream highlights',
    points: [
      'Two-week service standard for LMIA processing',
      'Category A — unique talent referred by a designated partner',
      'Category B — occupations on the Global Talent occupations list',
      'A Labour Market Benefits Plan with commitments to Canada’s workforce',
    ],
  },

  // ---- Work: Open permit sub-pages ----
  '/work/open-work-permits/international-mobility-program': {
    title: 'International Mobility Program (IMP)', tag: 'LMIA-exempt work permits',
    body: [
      'The International Mobility Program covers work permits that are exempt from the LMIA requirement because the hire advances Canada’s economic, social, or cultural interests — including free-trade agreement professionals, intra-company transferees, and post-graduation permit holders.',
      'We identify the exemption code that fits your situation, prepare the employer’s offer of employment in the IMP portal, and file the worker’s permit application.',
    ],
    pointsTitle: 'Common IMP categories',
    points: [
      'Free-trade agreements such as CUSMA, CETA, and CPTPP',
      'Intra-company transferees moving within a corporate group',
      'Significant-benefit and reciprocal-employment permits',
      'Employer compliance fee and offer submission requirements',
    ],
  },
  '/work/open-work-permits/international-mobility-program/intra-company-transfer': {
    title: 'Intra-Company Transfer (ICT)', tag: 'Move key staff into your Canadian operation',
    body: [
      'The ICT category lets multinational companies transfer executives, senior managers, and specialized-knowledge employees to a Canadian parent, subsidiary, branch, or affiliate without an LMIA.',
      'We document the corporate relationship, the employee’s qualifying role abroad, and the genuine need in Canada — the three pillars every ICT application stands on.',
    ],
    pointsTitle: 'Core requirements',
    points: [
      'One year of full-time employment with the foreign entity in the last three years',
      'A qualifying corporate relationship between the entities',
      'An executive, senior managerial, or specialized-knowledge role',
      'A genuine, active business in Canada',
    ],
  },
  '/work/open-work-permits/international-experience-canada': {
    title: 'International Experience Canada (IEC)', tag: 'Work permits for young travellers',
    body: [
      'IEC gives citizens of partner countries aged 18–35 access to Canadian work permits in three categories: Working Holiday, Young Professionals, and International Co-op. Entry is by seasonal invitation pools.',
      'We register your pool profile correctly, prepare your documents in advance, and file within the deadline once an invitation arrives.',
    ],
    pointsTitle: 'The three categories',
    points: [
      'Working Holiday — an open permit for flexible travel and work',
      'Young Professionals — employer-specific permits for career development',
      'International Co-op — internships tied to a study program',
      'Eligibility depends on your country’s bilateral agreement',
    ],
  },
  '/work/open-work-permits/international-experience-canada/working-holiday': {
    title: 'Working Holiday Program', tag: 'Travel Canada, work anywhere',
    body: [
      'The Working Holiday category gives young citizens of partner countries an open work permit — usually for one or two years — with no job offer required. It is one of the simplest ways to live and work in Canada.',
      'We handle pool registration, invitation response, biometrics, and the port-of-entry letter, and advise on transitioning to other permits when your working holiday ends.',
    ],
    pointsTitle: 'Essentials',
    points: [
      'Ages 18–30 or 18–35 depending on your country',
      'An open permit valid with almost any employer',
      'Proof of funds and health insurance for your stay',
      'One or two participations depending on the agreement',
    ],
  },
  '/work/open-work-permits/post-graduation-work-permit': {
    title: 'Post-Graduation Work Permit (PGWP)', tag: 'Canadian work experience after graduation',
    body: [
      'The PGWP is an open work permit for graduates of eligible Canadian programs, valid for up to three years depending on program length. It is the engine of the study-to-immigration pathway: the Canadian experience it provides powers Express Entry.',
      'The PGWP is once-in-a-lifetime and deadline-sensitive — we make sure your program qualifies, your application is on time, and your permit length is maximized.',
    ],
    pointsTitle: 'Key rules',
    points: [
      'Graduation from an eligible program at a PGWP-eligible DLI',
      'Application within 180 days of your final marks',
      'Permit length tied to program length, up to three years',
      'Full-time enrolment maintained throughout your studies',
    ],
  },
  '/work/open-work-permits/spousal-open-work-permit': {
    title: 'Spousal Open Work Permit (SOWP)', tag: 'Work in Canada without being tied to one employer',
    body: [
      'A Spousal Open Work Permit lets an eligible spouse or common-law partner work in Canada for almost any employer. Who qualifies depends entirely on the principal person’s status — sponsored partner, student’s spouse, or worker’s spouse — and the rules changed significantly on January 21, 2025.',
      'We confirm which pathway applies to you before you spend a dollar on the application, and align both partners’ permits so nobody’s status lapses.',
    ],
    sections: [
      {
        heading: 'The January 2025 rule changes',
        paras: [
          'Eligibility for spouses of foreign workers and students narrowed on January 21, 2025. Permits approved before that date remain valid until expiry, and some earlier applications are still assessed under the old rules — but new applications face stricter occupation and program restrictions.',
        ],
      },
      {
        heading: 'Spouses of citizens & permanent residents',
        paras: [
          'Partners being sponsored for PR from inside Canada can apply once IRCC issues the Acknowledgement of Receipt (AOR) for the sponsorship application.',
        ],
        list: [
          'Legally married or 12+ months of continuous cohabitation (common-law)',
          'Living in Canada with the sponsor, with valid temporary status',
          'A genuine, ongoing relationship with supporting evidence',
          'Exception: no AOR needed if your status expires within two weeks and the PR application is already filed',
        ],
      },
      {
        heading: 'Spouses of international students',
        paras: [
          'Since January 2025, only spouses of students in specific programs qualify.',
        ],
        list: [
          'Eligible: Master’s programs of 16+ months, doctoral programs, and certain professional degrees',
          'Not eligible: most undergraduate programs, college diplomas, and shorter Master’s programs',
          'The student must hold a valid study permit with proof of full-time enrolment',
        ],
      },
      {
        heading: 'Spouses of foreign workers & PGWP holders',
        list: [
          'The worker needs at least 16 months of work authorization remaining',
          'The worker’s job must be TEER 0 or 1, or an eligible TEER 2–3 occupation on IRCC’s list',
          'Eligibility is based on the worker’s actual duties and NOC code, not the job title',
          'PGWP holders are assessed under the same rules, based on their actual job',
        ],
      },
      {
        heading: 'Fees',
        table: {
          columns: ['Fee', 'Amount (CAD)'],
          rows: [
            ['Work permit processing fee', '$155'],
            ['Open work permit holder fee', '$100'],
            ['Biometrics (if required)', '$85'],
            ['Total (typical)', '$255–$340'],
          ],
        },
      },
      {
        heading: 'Applying inside vs. outside Canada',
        list: [
          'Inside Canada — you can stay during processing; the permit is mailed after approval. Leaving Canada mid-process can affect your ability to keep working',
          'Outside Canada — approval comes as a Port of Entry Letter of Introduction; the permit is issued by the border officer when you enter',
          'Flagpoling is no longer available for work permits (since December 2024)',
          'Extensions: apply at least 30 days before expiry to benefit from maintained status',
        ],
      },
      {
        heading: 'Proving your relationship',
        list: [
          'Married couples: marriage certificate plus joint documents — lease, bank accounts, insurance, photos over time',
          'Common-law partners: 12 continuous months of cohabitation, evidenced by 2–3+ document types, plus IMM 5409',
          'If living apart: travel records, call logs, and contact samples',
          'IRCC prefers official third-party documents over chat screenshots — use chats sparingly',
        ],
      },
    ],
    faq: [
      { q: 'Does a SOWP require an LMIA?', a: 'No. A spousal open work permit is an open permit — it does not require an LMIA and is not tied to a specific employer.' },
      { q: 'Do I need IELTS or CELPIP?', a: 'Usually not. IRCC does not list language tests as a general requirement for a SOWP, though other applications you file later may require them.' },
      { q: 'Can I apply if I am out of status?', a: 'Usually yes — but you typically need to apply for restoration of status first (within 90 days of losing status), and you cannot work while the restoration is in process.' },
      { q: 'Can I study on a SOWP?', a: 'A SOWP does not automatically allow study. Programs longer than 6 months generally require a study permit, which you can hold at the same time.' },
      { q: 'What if my spouse loses their job after my permit is issued?', a: 'An issued permit generally remains valid until its printed expiry date, even if circumstances change — but you may not qualify to extend it.' },
      { q: 'What happens after a refusal?', a: 'There is no formal appeal. Options are a reconsideration request (for officer error), a stronger reapplication, or judicial review — with strict deadlines of 15 days inside Canada or 60 days outside.' },
    ],
  },

  // ---- Work: Special groups sub-pages ----
  '/work/special-groups/caregivers': {
    title: 'Work Permits for Caregivers', tag: 'Care work with a pathway to PR',
    body: [
      'Caregivers coming to Canada to provide home child care or home support can obtain work permits under dedicated caregiver pathways that also lead to permanent residence.',
      'We secure the qualifying job offer, prepare the permit application, and plan the transition to permanent residence from day one.',
    ],
    pointsTitle: 'What we handle',
    points: [
      'Job offer validation and employer guidance',
      'Occupation-specific work permits for caregivers',
      'Credential and language requirements',
      'The pathway from caregiving work to PR',
    ],
  },
  '/work/special-groups/religious-workers': {
    title: 'Religious & Charitable Workers', tag: 'Serve your community in Canada',
    body: [
      'Religious and charitable workers may qualify for LMIA-exempt work permits — or in some cases may work without a permit — when their role is primarily spiritual or charitable in nature.',
      'We assess whether your role needs a permit at all, and where it does, prepare the exemption-based application with the sponsoring organization.',
    ],
    pointsTitle: 'Key considerations',
    points: [
      'Permit-free work for ordained ministers in some situations',
      'LMIA-exempt permits for charitable and religious work',
      'Documentation of the organization’s bona fides',
      'The distinction between charitable work and regular employment',
    ],
  },
  '/work/special-groups/athletes-staff': {
    title: 'Athletes, Coaches & Team Staff', tag: 'Compete and work in Canadian sport',
    body: [
      'Professional athletes, coaches, trainers, and essential team personnel joining Canadian teams or events have access to permit-free entry in some cases and LMIA-exempt permits in others.',
      'We advise teams and individual athletes on the right category — from permit-free competition to full seasonal work permits.',
    ],
    pointsTitle: 'Common scenarios',
    points: [
      'Foreign athletes competing with foreign teams — often permit-free',
      'Athletes and staff joining Canadian teams — work permit required',
      'LMIA exemptions for reciprocal sports arrangements',
      'Family members accompanying for the season',
    ],
  },
  '/work/special-groups/agricultural-workers': {
    title: 'Agricultural Workers', tag: 'Seasonal and year-round farm work',
    body: [
      'Canada’s agricultural stream and the Seasonal Agricultural Worker Program (SAWP) bring tens of thousands of farm workers to Canada each year under employer-specific permits with dedicated rules.',
      'We support employers with LMIAs, housing and contract requirements, and workers with permits, renewals, and pathways to permanent residence such as the Agri-Food Pilot.',
    ],
    pointsTitle: 'Program features',
    points: [
      'SAWP for citizens of Mexico and Caribbean partner countries',
      'The agricultural stream for eligible commodity sectors',
      'Employer obligations for housing and transportation',
      'PR pathways for experienced agricultural workers',
    ],
  },
  '/work/special-groups/tv-film-workers': {
    title: 'TV & Film Production Workers', tag: 'Keep the cameras rolling',
    body: [
      'Film and television productions move fast, and so do their immigration needs. Essential cast and crew on foreign-financed productions can qualify for LMIA-exempt work permits under significant-benefit provisions.',
      'We work with production companies to permit entire crews on schedule, from directors and lead actors to specialized technicians.',
    ],
    pointsTitle: 'How productions qualify',
    points: [
      'LMIA-exempt permits for essential production personnel',
      'Significant-benefit letters from production partners',
      'Union and guild coordination where applicable',
      'Fast timelines aligned with shooting schedules',
    ],
  },
  '/work/special-groups/ukrainian-nationals': {
    title: 'Measures for Ukrainian Nationals', tag: 'Support for Ukrainians and their families',
    body: [
      'Canada has introduced special measures for Ukrainian nationals and their family members, including open work permits, fee exemptions, and pathways to extend stays for those already in Canada.',
      'Measures evolve — we confirm the current provisions that apply to your family and file under the most favourable option available.',
    ],
    pointsTitle: 'Available measures',
    points: [
      'Open work permits for eligible Ukrainian nationals',
      'Study access for children and adults',
      'Extensions and status changes from within Canada',
      'Family reunification provisions',
    ],
  },
  '/work/special-groups/hong-kong-graduates': {
    title: 'Hong Kong Graduates', tag: 'Open permits for recent HK graduates',
    body: [
      'Recent graduates who hold a Hong Kong SAR or BNO passport can qualify for an open work permit of up to three years under Canada’s dedicated Hong Kong measures — a direct bridge to the Hong Kong PR streams.',
      'We confirm your credential qualifies, file the open permit application, and plan your transition to permanent residence under Stream A or B.',
    ],
    pointsTitle: 'Core requirements',
    points: [
      'A Hong Kong SAR or BNO passport',
      'Graduation within the last ten years with an eligible credential',
      'An open work permit of up to three years',
      'A pathway to PR through the dedicated Hong Kong streams',
    ],
  },
  '/work/special-groups/vulnerable-workers': {
    title: 'Open Permits for Vulnerable Workers', tag: 'Protection from workplace abuse',
    body: [
      'Foreign workers on employer-specific permits who are experiencing abuse — or are at risk of it — can apply for an open work permit for vulnerable workers, allowing them to leave the abusive employer without losing status.',
      'These applications are confidential and expedited. We prepare the evidence sensitively and connect workers with support resources while the application is processed.',
    ],
    pointsTitle: 'What to know',
    points: [
      'Available to workers holding employer-specific permits',
      'Abuse includes physical, sexual, psychological, and financial harm',
      'Applications are processed on an expedited, confidential basis',
      'No fee is charged for this permit',
    ],
  },

  // ---- Other: Citizenship sub-pages ----
  '/other/citizenship/proof-of-citizenship': {
    title: 'Proof of Citizenship (Certificate)', tag: 'Document the citizenship you already have',
    body: [
      'A citizenship certificate is the official proof that you are Canadian — needed for first passports, government services, and confirming citizenship acquired by birth abroad to a Canadian parent.',
      'We determine whether you are already a citizen under the Citizenship Act, assemble the documentary chain, and file the application for your certificate.',
    ],
    pointsTitle: 'Who commonly applies',
    points: [
      'Children born abroad to a Canadian parent',
      'Citizens whose certificates were lost or never issued',
      'People affected by past changes to citizenship law',
      'Applicants needing urgent proof for a passport',
    ],
  },
  '/other/citizenship/citizenship-by-descent': {
    title: 'Canadian Citizenship by Descent', tag: 'You may already be Canadian',
    body: [
      'Citizenship by descent is for people born (or adopted) outside Canada who may already be Canadian through a parent. You do not apply to become a citizen — you apply for a certificate that confirms the citizenship you already hold.',
      'Generation rules make some cases complex, and Bill C-3 (in force December 15, 2025) reshaped them significantly. We trace your family’s citizenship history and determine exactly which rules apply to your birth date.',
    ],
    sections: [
      {
        heading: 'What Bill C-3 changed',
        list: [
          'Births before December 15, 2025 — some people previously excluded by the first-generation limit may now qualify',
          'Births on or after December 15, 2025 — multi-generational cases require the Canadian parent to show a substantial connection to Canada: 1,095 days (3 years) of physical presence',
        ],
      },
      {
        heading: 'You may qualify if',
        list: [
          'You were born outside Canada',
          'At least one parent held Canadian citizenship at the time of your birth',
          'Your case fits the applicable generation and date rules',
          'You can document your identity and the parent-child relationship',
        ],
      },
      {
        heading: 'You typically do not qualify if',
        list: [
          'Your parents became citizens only after your birth',
          'You cannot prove the parent-child relationship',
          'Your multi-generational case does not meet the applicable rules',
          'Your case involves adoption — a different pathway usually applies',
        ],
      },
      {
        heading: 'First and second generation rules',
        paras: [
          'First generation born abroad: you qualify if your parent was Canadian at your birth and was either born in Canada or naturalized before your birth. Second generation and beyond: eligibility depends on your birth date and, for post-Bill C-3 births, on your Canadian parent meeting the substantial connection requirement.',
        ],
      },
      {
        heading: 'The citizenship certificate',
        list: [
          'Confirms — does not grant — your existing citizenship',
          'Does not expire',
          'Required before you can apply for a Canadian passport',
          'Government fee: $75 per person',
        ],
      },
      {
        heading: 'Documents you will need',
        list: [
          'Your birth record showing your parent(s)',
          'Proof of your parent’s Canadian citizenship',
          'Identity documents',
          'Supporting civil documents — marriage, divorce, or name changes',
          'Certified translations for non-English/French documents',
          'Bridging evidence and explanations for any name or date inconsistencies',
        ],
      },
    ],
    faq: [
      { q: 'What is the difference between descent and naturalization?', a: 'Descent confirms citizenship you already have through a parent, via a certificate application. Naturalization is the process for non-citizens to become Canadian through permanent residence, the citizenship test, and a grant application.' },
      { q: 'Can processing be expedited?', a: 'Urgent processing exists only for exceptional circumstances — death, hardship, statelessness, or education and employment deadlines — with evidence.' },
      { q: 'What if I cannot get my parent’s long-form birth certificate?', a: 'Request certified copies from the provincial vital statistics office (if born in Canada) or the local civil registry (if abroad). If unavailable, an official letter confirming the limitation can support the file.' },
    ],
  },
  '/other/citizenship/minors-born-outside-canada': {
    title: 'Citizenship for Minors Born Outside Canada', tag: 'Citizenship grants for children',
    body: [
      'Children born outside Canada who are not citizens by descent can be granted citizenship if a parent is a citizen or is applying to become one. Adopted children have their own dedicated grant process.',
      'We prepare minor grant applications alongside a parent’s citizenship application or on their own, and handle adoption-based grants with the required provincial involvement.',
    ],
    pointsTitle: 'Common routes',
    points: [
      'Minor grants for children of Canadian citizens',
      'Concurrent applications with a parent’s citizenship grant',
      'Adoption-based citizenship for children adopted abroad',
      'No physical presence requirement for minor grants',
    ],
  },

  // ---- Other: Status extension sub-pages ----
  '/other/status-extension/restoration': {
    title: 'Status Restoration', tag: 'A second chance after status expires',
    body: [
      'If your visitor, student, or worker status has expired, you generally have 90 days to apply for restoration. During that window you may remain in Canada, but you cannot work or study until status is restored.',
      'Restoration applications must explain the lapse convincingly. We prepare the explanation, the supporting evidence, and the new status application in one package.',
    ],
    pointsTitle: 'Restoration rules',
    points: [
      'Apply within 90 days of losing status',
      'Explain the circumstances of the lapse',
      'Meet the requirements of the status you are restoring',
      'No work or study until restoration is approved',
    ],
  },
  '/other/status-extension/change-of-status': {
    title: 'Change of Status', tag: 'Visitor to student, worker to visitor, and more',
    body: [
      'Temporary residents can often change from one status to another from inside Canada — a visitor becoming a student, a worker becoming a visitor while between jobs, or a graduate moving from student to worker.',
      'We time the application so your current status never lapses, and document the requirements of the new status thoroughly.',
    ],
    pointsTitle: 'Common changes',
    points: [
      'Visitor to student after acceptance at a DLI',
      'Worker to visitor to remain in Canada between roles',
      'Student to worker after graduation',
      'Maintained status while the change is processed',
    ],
  },
  '/other/status-extension/document-replacement': {
    title: 'Immigration Document Replacement', tag: 'Replace lost or incorrect documents',
    body: [
      'Lost your permit, confirmation of permanent residence, or landing record? Found an error on a document IRCC issued? Replacement and amendment applications restore the paper trail your status depends on.',
      'We identify the correct form for each document, prepare the statutory declarations, and follow up until the replacement is issued.',
    ],
    pointsTitle: 'Documents we replace or amend',
    points: [
      'Work and study permits and visitor records',
      'Confirmation of Permanent Residence (COPR)',
      'Record of Landing for older files',
      'Amendments to correct errors on any of the above',
    ],
  },
  '/other/status-extension/pr-card-renewal': {
    title: 'PR Card Renewal', tag: 'Keep your proof of permanent residence current',
    body: [
      'Your PR card is your proof of status for travel and daily life, and it must be renewed every five years. Renewal requires showing you met the residency obligation — 730 days in Canada within the last five years.',
      'We calculate your days precisely, document time that counts toward the obligation from abroad, and handle urgent processing where travel is imminent.',
    ],
    pointsTitle: 'Renewal essentials',
    points: [
      'The 730-day residency obligation in the last five years',
      'Time abroad that can count — accompanying a citizen spouse or working for a Canadian company',
      'Urgent processing for imminent travel',
      'Humanitarian arguments where the obligation is short',
    ],
  },

  // ---- Other: Services sub-pages ----
  '/other/services/visitor-visa': {
    title: 'Visitor (Tourist) Visa', tag: 'Visit Canada with confidence',
    body: [
      'Citizens of many countries need a Temporary Resident Visa to visit Canada; others need an eTA. Approval turns on convincing the officer you will leave at the end of your stay — something a well-documented application makes easy to see.',
      'We prepare visitor applications with strong evidence of home ties, funds, and purpose of travel, and respond strategically to refusals.',
    ],
    pointsTitle: 'A strong application shows',
    points: [
      'Ties to your home country — work, property, family',
      'Sufficient funds for the trip',
      'A clear purpose and itinerary',
      'An honest travel and immigration history',
    ],
  },
  '/other/services/status-verification': {
    title: 'Status Verification', tag: 'Official confirmation of your immigration history',
    body: [
      'A Verification of Status (VOS) document officially confirms your immigration record — the date you landed, your status history, or the details of a document IRCC issued. It is often needed for citizenship of other countries, pensions, or legal proceedings.',
      'We file the VOS application, and where records are old or incomplete, work with IRCC to locate the underlying file.',
    ],
    pointsTitle: 'Common uses',
    points: [
      'Proof of landing date for pensions and benefits',
      'Evidence for foreign citizenship applications',
      'Reconstructing an immigration history for legal matters',
      'Supporting document replacement applications',
    ],
  },
  '/other/services/atip-notes': {
    title: 'ATIP (GCMS) Notes', tag: 'See what the officer saw',
    body: [
      'The Global Case Management System (GCMS) holds the complete record of your immigration file — including the officer’s notes explaining a refusal. An Access to Information request is the fastest way to understand what really happened.',
      'We order and interpret your GCMS notes, then use them to build a targeted reapplication, reconsideration request, or appeal strategy.',
    ],
    pointsTitle: 'Why order your notes',
    points: [
      'Understand the true reasons behind a refusal',
      'Check the status and history of a pending application',
      'Verify the information IRCC holds about you',
      'Build evidence for judicial review deadlines',
    ],
  },
  '/other/services/travel-document': {
    title: 'Permanent Resident Travel Document (PRTD)', tag: 'Return to Canada without a PR card',
    body: [
      'Permanent residents outside Canada without a valid PR card need a PRTD to board a flight home. The application also assesses whether you have met the residency obligation — so it must be prepared carefully.',
      'We document your residency compliance or the humanitarian factors that justify retaining status, and pursue urgent processing when travel is time-sensitive.',
    ],
    pointsTitle: 'When a PRTD is needed',
    points: [
      'Your PR card expired or was lost while abroad',
      'You never received a card after landing',
      'Residency obligation evidence is assessed with the application',
      'Refusals can be appealed within 60 days',
    ],
  },
  '/other/services/commissioner-of-oath': {
    title: 'Commissioner of Oath Services', tag: 'Sworn declarations for your file',
    body: [
      'Immigration applications frequently require statutory declarations — sworn statements about identity, relationships, lost documents, or facts that lack other proof. Our office provides commissioner of oaths services for immigration-related declarations.',
      'We draft the declaration in the form IRCC expects and administer the oath, so your evidence is properly sworn the first time.',
    ],
    pointsTitle: 'Declarations we commission',
    points: [
      'Identity and name-variation declarations',
      'Common-law union declarations',
      'Lost document declarations',
      'Custodianship declarations for minor students',
    ],
  },
  '/work/lmia-process': {
    title: 'LMIA Process', tag: 'Labour Market Impact Assessment',
    body: [
      'LMIA stands for "Labour Market Impact Assessment." Formerly known as "Labour Market Opinion" (or LMO), an LMIA is a document that a Canadian employer may need to obtain before hiring a foreign worker.',
      'Anyone who has ever given any thought to immigrating to Canada has heard about the LMIA program. An LMIA is a critical document that Canadian employers must obtain before hiring any foreign worker. This document serves as a formal approval from the Canadian government, ensuring that the hiring of a foreign worker will not negatively impact the Canadian job market.',
      'If their application is successful, they will then be provided with a document from Employment and Social Development Canada (ESDC) which states that they are allowed to hire a temporary worker to fill their shortage.',
    ],
    sections: [
      {
        heading: 'Employer eligibility for LMIA - Key Steps',
        list: [
          'Application Submission: Employers must submit a detailed application to Employment and Social Development Canada (ESDC). The application should demonstrate the employer\'s efforts to recruit Canadian citizens or permanent residents for the position and explain why a foreign worker is necessary.',
          'Evaluation Criteria: ESDC evaluates the application based on various factors, including the impact on the Canadian labor market, wages, and working conditions offered. The application must show that the foreign worker will bring a positive or neutral impact on the job market.',
          'Approval and Documentation: If the application is successful, ESDC issues an LMIA document. This document authorizes the employer to hire a temporary foreign worker for the specified role and duration.'
        ],
      },
      {
        heading: 'Benefits of Obtaining an LMIA for employers',
        list: [
          'Filling Skill Gaps: Helps employers address skill shortages in specific industries.',
          'Economic Growth: Contributes to the economic growth by filling positions that are critical for business operations.',
          'Compliance: Ensures that employers are compliant with Canadian immigration laws and regulations.'
        ],
      },
      {
        heading: 'Employer requirements for LMIA Canada',
        paras: [
          'LMIA employer requirements provide guidelines for Canadian employers seeking to hire foreign workers with specialized skills that are in limited supply. In Canada, hiring foreign workers necessitates obtaining a positive Labour Market Impact Assessment.',
          'The LMIA requirements for employers include:'
        ],
        list: [
          'Job Offer: Employers must extend a valid job offer to the foreign worker, detailing critical aspects such as job responsibilities, wages, working conditions, duration of employment, sick leave, and overtime pay. Employers must offer wages that meet or exceed the prevailing wage for the specific occupation and region.',
          'Recruitment Effort: Employers must demonstrate efforts to hire Canadian citizens or permanent residents before considering foreign workers. This includes advertising the vacancy on mandatory job platforms like Job Bank and Star Jobs.',
          'Recruitment Report: A detailed report on efforts to recruit Canadians, including job advertisement details, response summary, and justification for hiring a foreign worker.',
          'Compliance with Regulations: Employers must adhere to all relevant laws and regulations.',
          'Impact on the Labor Market: Employers must demonstrate a genuine need for the foreign worker’s skills and show that their employment will have a positive economic impact.'
        ],
      },
      {
        heading: 'Temporary Foreign Worker Program (TFWP)',
        paras: [
          'The Temporary Foreign Worker Program (TFWP) enables Canadian employers to hire temporary foreign workers to address short-term labor and skill shortages. To employ workers through the TFWP, employers must apply for an LMIA and pay a processing fee of $1,000 per worker.',
          'The TFWP encompasses various streams, each designed to meet different labor market needs, including high-wage positions, low-wage positions, seasonal agricultural workers, and in-home caregivers.'
        ],
      },
      {
        heading: 'What Is The Purpose Of An LMIA For Employers?',
        paras: [
          'The purpose of the LMIA program is to ensure that hiring foreign workers does not adversely affect the Canadian labor market. It requires employers to demonstrate that there are no qualified Canadian citizens or permanent residents available to fill the position.'
        ],
      },
      {
        heading: 'LMIA based work permit',
        paras: [
          'LMIA applicants should be able to display their efforts in hiring Canadians and permanent residents before offering a job to a temporary foreign worker.',
          'When an employer is given a positive LMIA, they can then forward it to the foreign worker who they wish to hire, so that they can submit it with their work permit application.'
        ],
      },
      {
        heading: 'Different Types Of LMIA for Employment',
        list: [
          'Support Work Permit applications: An LMIA to support an application for a work permit under the Temporary Foreign Worker Program.',
          'LMIA for PR purpose: Used to support an Application for Permanent Residence in Canada. If permanent residence is sought based on Express Entry, the foreign worker is awarded 50-600 CRS points.',
          'Support both Permanent Residence & Work Permit: Used to support both a permanent residence application and a work permit application.'
        ],
      },
      {
        heading: 'LMIA Processing Fees',
        paras: [
          'A processing fee of CAD 1,000 is required for each request for Labour Market Impact Assessment for work permit applications. ESDC has committed to a 10 business day processing time for specific types of applications, such as high-demand jobs, high-wage jobs, and short-duration jobs.'
        ],
      },
      {
        heading: 'LMIA Work Permit Temporary Foreign Worker Eligibility',
        paras: [
          'Before an individual applies to be a temporary foreign worker, they should be able to prove:'
        ],
        list: [
          'They will leave Canada when their work permit expires.',
          'They have enough money to provide for themselves during their stay in Canada.',
          'They have no record of criminal activity and are not a danger to Canada’s security.'
        ],
      },
      {
        heading: 'Get Help With Your LMIA Application',
        paras: [
          `At ${COMPANY}, we are one of the best Canadian Immigration Consultants. We help people who wish to immigrate to Canada. Contact us regarding the LMIA employer requirements or any other LMIA related issue for a free assessment.`
        ],
      }
    ],
  },
  '/work/lmia-process/skilled': {
    title: 'Skilled LMIA (High-Wage Stream)', tag: 'Hiring Highly Skilled Foreign Talent',
    body: [
      'The Skilled or High-Wage LMIA stream allows Canadian employers to hire foreign workers for specialized, high-demand positions where the offered wage is at or above the provincial or territorial median hourly wage.',
      'This pathway is essential for businesses seeking specialized expertise, managerial talent, or highly trained professionals to support innovation and economic growth in Canada.'
    ],
    sections: [
      {
        heading: 'Key Requirements for Skilled LMIA',
        list: [
          'Prevailing Wage: The wage offered to the foreign worker must meet or exceed the median hourly wage for the respective province or territory.',
          'Transition Plan: Employers are required to submit a Transition Plan with their LMIA application, demonstrating their long-term strategy to reduce reliance on temporary foreign workers by recruiting and training Canadian citizens and permanent residents.',
          'Extensive Recruitment Efforts: Employers must conduct thorough recruitment efforts to ensure no qualified Canadian is available for the position.',
          'Workplace Compliance: Strict adherence to Canadian labor standards, ensuring the foreign worker receives the same benefits and working conditions as their Canadian counterparts.'
        ],
      }
    ]
  },
  '/work/lmia-process/unskilled': {
    title: 'Unskilled LMIA (Low-Wage Stream)', tag: 'Addressing Essential Labor Shortages',
    body: [
      'The Unskilled or Low-Wage LMIA stream is designed to help Canadian employers fill vital roles in industries facing significant labor shortages, where the offered wage is below the provincial or territorial median hourly wage.',
      'This stream is frequently utilized in sectors such as agriculture, food processing, hospitality, and manufacturing, providing a legal and regulated pathway to sustain critical business operations.'
    ],
    sections: [
      {
        heading: 'Key Requirements for Unskilled LMIA',
        list: [
          'Cap on Low-Wage Workers: Businesses are subject to a cap on the proportion of low-wage temporary foreign workers they can employ, typically set at a maximum percentage of their total workforce.',
          'Housing and Transportation: Employers must ensure that suitable and affordable housing is available for the foreign worker and must provide round-trip transportation to the work location in Canada.',
          'Health Insurance: Employers are required to provide private health insurance coverage until the worker is eligible for provincial health coverage.',
          'Union Consultation: For unionized positions, employers must demonstrate that they have consulted the union regarding the hiring of foreign workers.'
        ],
      }
    ]
  },
}
