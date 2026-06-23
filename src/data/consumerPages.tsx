import React from 'react';

// Content for internal Consumer Information sub-pages, migrated from the college
// catalog. Each entry is rendered by pages/ConsumerInfoPage.tsx at
// /policies-disclosures/<slug>. Keep prose faithful to the source; `sourceUrl`
// links back to the authoritative catalog page.

// A consolidated page that gathers several existing section entries (by slug) and
// renders each under an anchor id, so multiple Consumer Information links can deep-link
// (page#anchor) into one shared page.
export interface ConsumerSection {
  id: string;       // in-page anchor id
  title: string;
  ref?: string;     // key of another CONSUMER_PAGES entry to pull content from
  html?: string;    // or inline HTML for this section
}

export interface ConsumerPage {
  title: string;
  description: string;
  sourceUrl?: string;
  content?: React.ReactNode;
  html?: string;
  sections?: ConsumerSection[];
}

// Lightweight typography helpers so content reads cleanly and stays consistent.
const H2: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <h2 className="text-lg md:text-xl font-display font-bold text-ucb-blue mt-8 mb-3 first:mt-0">{children}</h2>
);
const H3: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wide mt-6 mb-2">{children}</h3>
);
const P: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <p className="text-gray-600 leading-relaxed font-light text-sm mb-4">{children}</p>
);
const UL: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1.5 font-light mb-4 marker:text-ucb-orange/60">{children}</ul>
);
const OL: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <ol className="list-decimal pl-5 text-gray-600 text-sm space-y-1.5 font-light mb-4">{children}</ol>
);
const A: React.FC<{ href: string; children?: React.ReactNode }> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-ucb-orange hover:underline font-medium">{children}</a>
);

export const CONSUMER_PAGES: Record<string, ConsumerPage> = {
  'academic-programs': {
    title: 'Academic Programs',
    description: 'Urban College of Boston academic programs — Associate of Arts degrees, certificate programs, and English language learning requirements.',
    sourceUrl: 'https://catalog.urbancollege.edu/content.php?catoid=3&navoid=100',
    content: (
      <>
        <P>The Urban College degree program's conceptual framework originates from the College's mission, vision, and values and is designed with an understanding that the most lasting way to empower people is through education. As a result, Urban College's academic program sets high academic expectations while leveraging available resources to ensure that students not only have access to a college education but also have the social, economic, interpersonal, and academic support they need to be successful.</P>
        <P>With these goals in mind, Urban College ensures that all curricula are consistent, integrated, and aligned with workforce and transfer needs. Building on the strengths that every student brings to the classroom, faculty at Urban College use instructional methods and teaching practices that recognize and value different abilities and learning styles; incorporate active and collaborative learning; promote strong academic and critical thinking skills; and ensure the application of knowledge gained.</P>
        <P>All Urban College of Boston programs are fully remote.</P>

        <H2>The Associate of Arts Degree</H2>
        <P>All Associate of Arts degree programs require successful completion of at least 60 academic credits, which include the following components:</P>
        <H3>General Education Core</H3>
        <P>The General Education Core at Urban College includes courses in psychology, humanities, social sciences, natural sciences, computer applications, and mathematics. Students are also required to take two courses in College Writing and one in Speech Communication. All associate degrees require 33 credits in General Education.</P>
        <P>Upon successful completion of all General Education Core requirements, students will be able to:</P>
        <UL>
          <li>Engage in a reflective process of information discovery, articulate the value of information and its cycle of development, and conduct discipline-specific research using appropriate technology.</li>
          <li>Examine the diversity of the human experience to develop civic and intercultural knowledge and competence.</li>
          <li>Produce oral, written, and digital communication that best serves the setting and audience and imparts information to others, promotes understanding, and/or influences opinion.</li>
          <li>Utilize quantitative and qualitative reasoning or computational skills to make informed decisions.</li>
        </UL>
        <H3>Internships</H3>
        <P>Some degree programs include up to two 3-credit internship courses. Internship placements are directed by an on-site supervisor and are supported by a concurrent seminar at Urban College. Internships help assess professional capabilities and career readiness, apply acquired knowledge and skills in the workplace, and produce a product or portfolio as evidence of professional experience.</P>
        <P>The Early Childhood Internship courses require students to spend at least 10 hours per week in a licensed early childhood program.</P>
        <P>In order for a student to be eligible to participate in an academic, community, or clinical program that involves potential unsupervised contact with children, the disabled, the elderly, or other vulnerable populations, the student may be required to undergo a Criminal Offender Record Information (CORI) check and/or a Sex Offender Registry Information (SORI) check.</P>
        <H3>Electives</H3>
        <P>Program electives offer students the opportunity to enroll in courses of interest across various disciplines.</P>

        <H2>Certificate Programs</H2>
        <P>Urban College of Boston offers certificate programs that help prepare students for the workforce and further educational opportunities. Certificate program credit and other requirements range from 16 credits (5 courses) to 27 credits (9 courses). Specific course requirements for each certificate can be found in the college catalog, and each certificate's coursework can be applied toward an associate degree.</P>

        <H2>Urban College's Position on English Language Learning</H2>
        <P>Urban College of Boston values the skills, experiences, and assets that students from a variety of learning, cultural, and language backgrounds bring to their studies. To this end, the college's programs and curriculum allow students to begin their studies in a selection of other languages (e.g., Spanish and Mandarin). Some certificate programs even allow for the majority of courses to be taken in one of those languages. However, graduates have the widest range of opportunities for career advancement available to them when they gain some English language proficiency. Additionally, because a fully accredited American college, students are required to gain some English language skills through their education in certificate programs and college-level English skills in all associate degree programs. As a result, students are required to complete an English placement assessment upon entry into the college.</P>
        <H3>English Placement and Requirements</H3>
        <P>All incoming students are required to complete an English placement assessment upon admission to the College. The assessment determines the appropriate entry point in the English course sequence and ensures that each student receives instruction aligned with their current proficiency level.</P>
        <P>Students who place into ENG 101: Introduction to Academic Writing or above may proceed directly into college-level English coursework. However, all students must meet the English completion requirements associated with their program of study. Students who place below ENG 101 are subject to the English sequence requirements described below.</P>
        <H3>English Sequence Requirements</H3>
        <P>Students placed below ENG 101 must begin the English sequence no later than the second term of enrollment, regardless of any gap between their first and second terms. Students may not defer English coursework beyond their second enrolled term. Students taking courses in languages other than English must maintain concurrent English enrollment and take a minimum of one English (ENG) course for every two courses taken in their native language. Students are strongly encouraged to begin English course requirements early, as not all programs or courses are available in languages other than English.</P>
        <H3>Program-Specific English Completion Requirements</H3>
        <P>English completion requirements vary by program and define the level of English proficiency students must achieve.</P>
        <UL>
          <li>For associate degree programs, English completion is defined as successful completion of ENG 112: College Writing II.</li>
          <li>For most certificate programs, students are required to demonstrate foundational or college-level English proficiency based on program requirements.</li>
          <li>The Foundations in Early Childhood Education Certificate is an exception. This certificate is offered as a monolingual program in English, Spanish, and Mandarin to support early entry into the workforce and create access for multilingual adult learners beginning their educational pathway. Students enrolled in this certificate are still required to complete the English placement assessment upon admission and are strongly encouraged to continue developing English language proficiency as part of their long-term educational and career advancement goals.</li>
          <li>Certificate programs that require foundational English proficiency (defined as completion of ENG 097: Reading and Writing Skills ESOL) include:
            <UL>
              <li>Paraprofessional Educator</li>
              <li>Children's Behavioral Health</li>
              <li>Business</li>
              <li>Digital Marketing</li>
              <li>Project Management</li>
            </UL>
          </li>
          <li>Certificate programs that require a higher level of English proficiency (defined as successful completion of ENG 111: College Writing I) include:
            <UL>
              <li>Human Services</li>
              <li>Case Management</li>
              <li>Elder Care</li>
              <li>General Studies</li>
            </UL>
          </li>
          <li>Students who place into ENG 101: Introduction to Academic Writing or above are not exempt from these requirements and must meet the English completion standard for their program of study.</li>
        </UL>
        <P><A href="https://catalog.urbancollege.edu/content.php?catoid=3&navoid=96#placement-testing-requirements">Information about the English Placement Process can be found here.</A></P>
      </>
    ),
  },

  'acceptable-use-policy': {
    title: 'Acceptable Use Policy',
    description: "Urban College of Boston's Computer and Network Usage (Acceptable Use) Policy governing use of college computer resources, email, and social media.",
    sourceUrl: 'https://catalog.urbancollege.edu/content.php?catoid=3&navoid=105#computer-and-network-usage',
    content: (
      <>
        <H2>General Principles</H2>
        <P>Access to the College's computer systems and networks, including email, imposes certain responsibilities and obligations and is granted subject to College policies, and local, state, and federal laws. Acceptable use always is ethical, reflects academic honesty, and shows restraint in the consumption of shared resources. It demonstrates respect for intellectual property, ownership of data, system security mechanisms, and individual rights to privacy.</P>
        <P>Users include - but are not limited to - all students, faculty, staff, and administrators, who have been granted access to college-owned or college-licensed computers, networks, software, or any peripherals associated with the College's computing facilities and/or equipment ("computer resources"). This policy applies to all Users.</P>
        <P>The College's computer resources are the property of the College. Such equipment and resources, including email, shall be only used for academic, educational, or professional purposes, which are related to official College business and in support of the College's mission.</P>

        <H2>No Expectation of Privacy</H2>
        <P>Users shall have no expectation of privacy when using College computer resources, including email. The President of the College may also authorize the network administrator to inspect any user's computer, any data contained in it, and any data, including email communications, sent, or received by that computer, on a case-by-case basis.</P>

        <H2>Guidelines</H2>
        <P>In making acceptable use of resources, users MUST:</P>
        <UL>
          <li>use resources only for College business, for purposes authorized by the College;</li>
          <li>be responsible for all activities on your user ID or that originate from your system that result from your negligent failure to protect your user ID or to protect against such unauthorized use; Users should not give a password to anyone;</li>
          <li>access only files and data that are your own, that are publicly available, or to which you have authorized access;</li>
          <li>use only legal versions of copyrighted software in compliance with vendor license requirements; and</li>
          <li>be considerate in your use of shared resources. Examples include not monopolizing systems, overloading networks with excessive data, or wasting computer time or resources, disk space, printer paper, manuals, or other resources.</li>
        </UL>
        <P>In making acceptable use of resources, users MUST NOT:</P>
        <UL>
          <li>use another person's system, user ID, password, files, email address, or data without permission; use computer programs to decode passwords or access control information;</li>
          <li>download, transmit, or display obscene material;</li>
          <li>circumvent or subvert, or attempt to circumvent or subvert system or network security measures;</li>
          <li>engage in any activity that unreasonably interferes with the normal operation of the college;</li>
          <li>engage in any activity that might be harmful to systems or to any information stored thereon, such as creating or propagating viruses, disrupting services, distributing chain letters, or damaging files;</li>
          <li>use College systems for commercial or partisan political purposes, such as using electronic mail to circulate advertising for products, political candidates, or any profit-making company or enterprise;</li>
          <li>make or use illegal copies of copyrighted software, store such copies on College systems, or transmit them over College Resources;</li>
          <li>engage in unauthorized use or distribution of copyrighted material, including unauthorized peer-to-peer file sharing; or download any online software without appropriate authorization.</li>
          <li>use the network for purposes that place a heavy load on scarce resources;</li>
          <li>use the College's computers or networks to libel, slander, or harass any other person. The following shall constitute Computer Harassment:
            <UL>
              <li>Intentionally using the computer to harass, intimidate, or threaten another person by conveying obscene language, pictures, or other materials or threats of bodily harm to the recipient or the recipient's immediate family;</li>
              <li>Intentionally using the computer to contact another person repeatedly, whether or not any actual message is communicated, and/or where no purpose of legitimate communication exists, and where the recipient has expressed a desire for the communication to cease;</li>
              <li>Intentionally using the computer to contact another person repeatedly regarding a matter for which one does not have a legal right to communicate, once the recipient has provided reasonable notice that he or she desires such communication to cease (such as debt collection);</li>
              <li>Intentionally using the computer to disrupt or damage the academic research, administrative, or related pursuits of another;</li>
              <li>Intentionally using the computer to invade privacy, academic or otherwise;</li>
            </UL>
          </li>
          <li>use the College's systems or networks for personal gain; for example, by selling access to your user ID or to College systems or networks, or by performing work for profit with College resources in a manner not authorized by the College;</li>
          <li>use the College's systems or networks to transmit any material in violation of United States or Massachusetts laws or regulations;</li>
          <li>engage in any illegal or unethical act, including violation of any criminal or civil laws or regulations, whether state or federal;</li>
          <li>engage in any conduct that violates the College's other policies; and</li>
          <li>engage in any other activity that does not comply with the General Principles presented above.</li>
        </UL>

        <H2>College Email</H2>
        <P>The College provides Users with electronic mail (email) communication. Email communication is intended primarily for educational and College business-related communications, and shall be used by all students, faculty, staff, administrators, and contractors in a manner consistent with this policy.</P>
        <P>Student email accounts will be created for each new student upon registration. Students are required to use and check their College email account regularly.</P>
        <P>Important College information will be communicated to students through the student email system. The College will not allow students to update their email addresses with private or other email addresses, but they can forward their Urban College email to another email account. Only the assigned College email address will be used by the College for email communications with students.</P>
        <P>College email accounts remain active while a student is enrolled at the college. Accounts are deactivated one year after the last term of enrollment, whether or not a student receives a credential. If a student re-enrolls, the account will be reactivated.</P>

        <H2>Social Media</H2>
        <P>The use of all College computer resources for social media activities, including but not limited to, Facebook, YouTube, X (formerly Twitter), Instagram, blogs, or other forms of social media, shall comply with this policy. Use of the College's computer resources by students for educational and social activities consistent with the College's mission shall comply with this policy.</P>

        <H2>Enforcement</H2>
        <P>College officials will review alleged violations of acceptable use policies on a case-by-case basis. Violations of policy will result in appropriate actions, consideration of appropriate disciplinary measures, and/or referral to appropriate authorities responsible for enforcing local, state, and federal laws. Users who breach this policy may be denied access to the College's computer and communications networks and may be subject to further disciplinary action.</P>
        <P>To prevent further possible unauthorized activity, the College reserves the right to disconnect that user from the network. If this is deemed necessary by College staff, where appropriate, reasonable effort will be made to inform the user prior to the disconnection. Breaches of this Computer and Network Usage Policy will be referred to appropriate administrators for consideration of discipline in accordance with applicable College policies and procedures.</P>
        <P>The College considers any violation of acceptable use of principles or guidelines to be a serious offense and reserves the right to copy and examine any files or information resident on the College systems allegedly relating to unacceptable use.</P>
        <P>Violators are subject to disciplinary action as prescribed in student and employee policies, handbooks, or contracts.</P>
      </>
    ),
  },

  'articulation-agreements': {
    title: 'Articulation Agreements',
    description: "Urban College of Boston articulation agreements and bachelor's completion partnerships.",
    sourceUrl: 'https://catalog.urbancollege.edu/content.php?catoid=3&navoid=95#articulation-agreements',
    html: `
<p>Articulation agreements facilitate Urban College graduates' entrance into bachelor's degree programs. An articulation agreement describes when and how a student may be able to transfer to a specific bachelor's degree program and often includes the entrance and program requirements, which are unique to the partner institution, as well as the expected transfer of courses and credits.</p>
<p>Urban College currently offers bachelor's completion programs with American College of Education, Boston College - Woods College, Endicott College, Franklin Cummings Tech, Fisher College, Fitchburg State University, Lasell University, Lesley University, Quincy College, Regis College, Salem State University, Southern New Hampshire University, UMass Boston, and William James College. For additional information regarding articulation agreements, please contact the Admissions offices at each institution or visit our <a href="/college-transfer-pathways">College Transfer Pathways</a> page.</p>`,
  },

  'nc-sara': {
    title: 'State Authorization and NC-SARA Information',
    description: "Urban College of Boston's NC-SARA participation, distance-education state authorization, student complaint process, and professional licensure disclosure.",
    sourceUrl: 'https://catalog.urbancollege.edu/content.php?catoid=3&navoid=95#nc-sara-participation-statement',
    html: `
<p>Urban College of Boston participates in the National Council for State Authorization Reciprocity Agreements (NC-SARA). NC-SARA is an agreement among member states, districts, and territories that establishes comparable national standards for the interstate offering of postsecondary distance education courses and programs.</p>
<p>As a participating institution, Urban College of Boston is authorized to offer distance education to students residing in other SARA member states, consistent with the terms and conditions of NC-SARA.</p>
<h3>Student Complaint Process</h3>
<p>Students enrolled in distance education courses who reside outside of Massachusetts and wish to file a complaint should first follow the Urban College of Boston Student Complaint Procedure.</p>
<p>If the complaint is not resolved at the institutional level, the student may file a complaint with the Massachusetts Department of Higher Education, the state portal entity for NC-SARA. Information on the NC-SARA Student Complaint Process is available at: <a href="https://www.nc-sara.org/student-complaints" target="_blank" rel="noopener noreferrer">nc-sara.org/student-complaints</a>.</p>
<h3>Professional Licensure Disclosure</h3>
<p>Programs that lead to professional licensure or certification may not meet educational requirements in all states. Students are responsible for confirming licensure requirements in the state where they intend to work prior to enrollment.</p>`,
  },

  'campus-location-services': {
    title: 'Campus Location and Services',
    description: 'Urban College of Boston campus location, services, and transportation options.',
    sourceUrl: 'https://catalog.urbancollege.edu/content.php?catoid=3&navoid=95#campus-location-and-services',
    html: `
<p>2 Boylston Street, 2nd Floor<br>Boston, MA 02116<br>Phone: (617) 449-7070<br>Email: <a href="mailto:contact@urbancollege.edu">contact@urbancollege.edu</a><br>Fax: (617) 830-3137</p>
<p>Urban College of Boston's downtown Boston campus is located within a convenient walking distance from several Massachusetts Bay Transportation Authority (MBTA) T stations on the 1st and 2nd floors of a building known as the China Trade Center.</p>
<p>The College's main entrance is on the 2nd floor and accessible via stairs and elevators near the building's entrance. The College's administrative offices, student support services, and meeting rooms are located on the 2nd floor of this building, including Enrollment Services, Academic Advising, Financial Aid, Student Services, the Business Office, Advancement, the Student Lounge, and the Learning Resource Center. Classrooms are on the first and second floors. All classrooms and meeting rooms are equipped with an instructor station and standard educational technology.</p>
<h3>Transportation Options</h3>
<p>For individuals intending to drive to and from the campus, limited public parking spaces may be available across the campus for a parking fee. Parking in downtown Boston can be expensive. Students and campus visitors are strongly encouraged to take advantage of alternate and sustainable commuting solutions, including buses and trains. The College is located across from the Chinatown Orange Line Massachusetts Bay Transportation Authority (MBTA or "T") station in Boston. The College is easily accessible via the Orange, Red, Green, and Silver T Lines, and numerous bus routes. The MBTA offers an <a href="https://www.mbta.com/fares/reduced/income-eligible" target="_blank" rel="noopener noreferrer">Income-Eligible Reduced Fare Program</a> and a <a href="https://www.mbta.com/fares/reduced/senior-charliecard" target="_blank" rel="noopener noreferrer">Senior CharlieCard</a>; visit the <a href="https://www.mbta.com/" target="_blank" rel="noopener noreferrer">MBTA</a> website to learn more.</p>`,
  },

  'diversity-equity-inclusion': {
    title: 'Diversity, Equity, and Inclusion',
    description: "Urban College of Boston's non-discrimination, equal access and equal opportunity statement, and student body diversity.",
    sourceUrl: 'https://catalog.urbancollege.edu/content.php?catoid=3&navoid=95#diversity-equity-and-inclusion',
    html: `
<p>Urban College of Boston is an affirmative action/equal opportunity institution and does not discriminate on the basis of gender, age, religion, race, color, disability, sexual orientation, or national and ethnic origin in the administration of its educational policies, employment policies, and other programs and activities. Our students include recent high school graduates, parents, working adults, transfer students, international students, and individuals interested in changing careers or completing their degree.</p>
<p>Chartered in 1993, the College has long served an ethnically- and racially-diverse student body. Of the over 1,138 students enrolled during the 2023-2024 academic year, 51% identified as Hispanic or Latinx, 15% as Black or African American, 9% as Asian, 5% as white, 2% as two or more races, and 18% did not indicate their race or ethnicity. Additionally, 88% of students were women, the average age was 36, and students came from over 120 cities and towns across Massachusetts.</p>`,
  },

  'transfer-credit-policy': {
    title: 'Transfer Credit Policy',
    description: "Urban College of Boston transfer credit evaluation policy — eligibility, maximum transfer credits, procedure, and residency requirements.",
    sourceUrl: 'https://catalog.urbancollege.edu/content.php?catoid=3&navoid=97#transfer-credit-evaluation',
    html: `
<h3>Eligibility and Restrictions</h3>
<ul>
<li>Transfer credits are accepted only from regionally accredited U.S. institutions or their recognized international equivalents.</li>
<li>Courses must be undergraduate-level, with a minimum grade of C (2.0) or higher.</li>
<li>Transfer credit will not be awarded for:
  <ul><li>Courses in disciplines not offered by Urban College.</li><li>Courses not applicable to the student's declared program of study.</li></ul></li>
<li><strong>Credit for Prior Learning</strong> counts toward the total number of transfer credits accepted.</li>
<li>Transcripts and course descriptions from non-regionally accredited institutions must be evaluated by an approved external agency (e.g., Scholaro, CED, WES, ECE).</li>
</ul>
<h3>Maximum Transfer Credits</h3>
<ul>
<li><strong>Associate of Arts Degree:</strong> Up to 30 credits may be transferred. Students must complete a minimum of 30 credits at Urban College to meet residency requirements.</li>
<li><strong>Certificate Programs:</strong> Students must complete at least 50% of the total certificate credits at Urban College. Maximum transferrable credits for each certificate program:
  <ul>
    <li>Foundations of Early Childhood Education: 8 credits</li>
    <li>Paraprofessional Educators: 10 credits</li>
    <li>Children's Behavioral Health: 8 credits</li>
    <li>Case Management: 10 credits</li>
    <li>Human Services: 10 credits</li>
    <li>Elder Care: 10 credits</li>
    <li>General Studies: 10 credits</li>
    <li>Digital Marketing: 9 credits</li>
    <li>Project Management: 9 credits</li>
    <li>Business: 9 credits</li>
  </ul></li>
</ul>
<h3>Procedure</h3>
<ul>
<li><strong>At the time of application:</strong> Students seeking transfer credits must submit official transcripts and/or evaluations to the Admissions Office.</li>
<li><strong>After admission:</strong> Transcripts/evaluations not submitted during application should be sent directly to the Office of Registration Services at <a href="mailto:registration@urbancollege.edu">registration@urbancollege.edu</a>.</li>
</ul>
<h3>Residency Requirements</h3>
<ul>
<li><strong>Associate Degrees:</strong> Students must complete a minimum of 30 credits at Urban College. These credits should include core program requirements and discipline-specific courses to ensure depth and rigor.</li>
<li><strong>Certificate Programs:</strong> Students must complete a meaningful portion of the program at Urban College — at least 50% of the total credits, including any capstone, internship, or culminating experiences if applicable. Residency requirements for each certificate program:
  <ul>
    <li>Foundations of Early Childhood Education: 8 credits</li>
    <li>Paraprofessional Educators: 11 credits</li>
    <li>Children's Behavioral Health: 8 credits</li>
    <li>Case Management: 11 credits</li>
    <li>Human Services: 11 credits</li>
    <li>Elder Care: 11 credits</li>
    <li>General Studies: 11 credits</li>
    <li>Digital Marketing: 9 credits</li>
    <li>Project Management: 9 credits</li>
    <li>Business: 9 credits</li>
  </ul></li>
</ul>`,
  },

  'disability-accessibility-services': {
    title: 'Disability and Accessibility Services',
    description: 'Urban College of Boston accessibility and academic accommodations, ADA services, and the accommodation request process.',
    sourceUrl: 'https://catalog.urbancollege.edu/content.php?catoid=3&navoid=101#accessibility-academic-accommodations',
    html: `
<p>The Director of Student Services and Support at Urban College of Boston provides services to students who qualify as having a disability under the Americans with Disabilities Act (ADA). The Director of Student Services and Support is responsible for accommodations in accordance with the Americans with Disabilities Act, Section 504 of the Rehabilitation Act, and applicable state law. The ADA defines a person with a disability as someone who "has a physical or mental impairment that substantially limits one or more major life activities, has a history or record of such an impairment (such as cancer that is in remission), or is perceived by others as having such an impairment (such as a person who has scars from a severe burn)."</p>
<p>The services provided to registered students with disabilities may include, but are not limited to:</p>
<ul>
<li>Providing advocacy support for students with documented disabilities,</li>
<li>Coordinating services for students with disabilities, which includes verifying eligibility for academic accommodations based on documentation,</li>
<li>Providing assistance to members of the campus community in responding to disability-related issues and concerns,</li>
<li>Working with the larger campus community to overcome architectural, attitudinal, and administrative barriers,</li>
<li>Educating and training students on assistive technology resources,</li>
<li>Coordinating peer note-taking services,</li>
<li>Providing exam accommodations,</li>
<li>Assisting students with academic strategies,</li>
<li>Assisting with the diagnostic evaluation referral process.</li>
</ul>
<p>Questions and Contact Information: The Director of Student Services and Support may be reached by email at <a href="mailto:studentservices@urbancollege.edu">studentservices@urbancollege.edu</a> or by phone at 617-449-7380.</p>
<ul>
<li><a href="https://forms.office.com/Pages/ResponsePage.aspx?id=HnCdJ2cNiUupTrgmGCPjKzt0agm94stErG3OXo8chiNUQjlIRkpXVks5MEU2UU5QUUFMV0Y5Vk1LSy4u" target="_blank" rel="noopener noreferrer">Accommodation Request Form</a></li>
<li><a href="https://forms.office.com/Pages/ResponsePage.aspx?id=HnCdJ2cNiUupTrgmGCPjKzt0agm94stErG3OXo8chiNUMjNJMk41V040S0czMURXVzBERlRYU0tNMC4u" target="_blank" rel="noopener noreferrer">Medical Provider Form</a></li>
</ul>
<h3>Accommodation and Accessibility Process</h3>
<p>Urban College of Boston is committed to the success of its students. This includes providing equal access to all members of the student body. If a student discloses a disability and is interested in an accommodation, please encourage the student to contact the Director of Student Services and Support, Rosana Perella.</p>
<ol>
<li>Student looking for accommodations initiates communication with the Director of Student Services and Support directly.</li>
<li>The Director provides the Accommodation Request Form (ARF) and the process begins.</li>
<li>If the student does not contact the Director, the process cannot begin.</li>
<li>The student is responsible for completing and submitting the Accommodation Request Form (ARF).</li>
<li>If the ARF is not submitted, the process is on hold until it is submitted.</li>
<li>The ARF will be reviewed.</li>
<li>The student will need to submit appropriate disability documentation (e.g., Medical Provider Form (MPF), IEP, 504, Neuropsychological evaluation, Psychoeducational evaluation, etc.).</li>
<li>If documentation is not submitted, the process is on hold until it is submitted.</li>
<li>An intake meeting will be scheduled to discuss the student's experience with their disability and review documentation.</li>
<li>After the intake meeting, either additional information may be requested (and the student informed), or the information provided was sufficient to make a determination.</li>
<li>An official communication with an accommodation decision will be sent to the student via email.</li>
</ol>`,
  },

  'privacy-policy': {
    title: 'Privacy Policy',
    description: 'How Urban College of Boston collects, uses, and safeguards your information, including SMS/text messaging and phone call communications.',
    html: `
<p>Urban College is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information, including information collected in connection with our SMS (text messaging) communications.</p>

<h3>Information We Collect</h3>
<p>We may collect personal information that you voluntarily provide to us, including but not limited to:</p>
<ul>
<li>Name</li>
<li>Email address</li>
<li>Mailing address</li>
<li>Mobile phone number</li>
</ul>
<p>This information may be collected when you:</p>
<ul>
<li>Complete forms on our website</li>
<li>Submit inquiries or applications</li>
<li>Register for events</li>
<li>Communicate with us directly</li>
</ul>

<h2>SMS / Text Messaging</h2>

<h3>Consent to Receive Text Messages</h3>
<p>By providing your mobile phone number and explicitly opting in (for example, by checking a consent box on a form), you agree to receive SMS messages from Urban College. Message and data rates may apply.</p>
<p>Consent to receive text messages is not a condition of enrollment or purchase.</p>

<h3>Types of Messages You May Receive</h3>
<p>Messages may include both informational and promotional content, such as:</p>
<ul>
<li>Admissions updates and application status notifications</li>
<li>Event reminders and campus information</li>
<li>Enrollment-related communications</li>
<li>Promotional messages about programs, opportunities, or events</li>
</ul>
<p>Message frequency may vary. You may receive multiple messages per week depending on your engagement with us.</p>

<h3>How You Opt In</h3>
<p>You may opt in to receive SMS messages by:</p>
<ul>
<li>Submitting forms on our website and selecting the SMS consent option</li>
<li>Registering for events and opting into text communications</li>
<li>Providing consent during the application or inquiry process</li>
<li>Communicating with us and agreeing to receive follow-up messages</li>
</ul>

<h3>Information Collected for SMS Communications</h3>
<p>When you opt in to receive SMS messages, we may collect:</p>
<ul>
<li>Your mobile phone number</li>
<li>Your name</li>
<li>Information related to your inquiry, application, or engagement with us</li>
</ul>

<h3>How We Use SMS Information</h3>
<p>We use your information to:</p>
<ul>
<li>Send admissions and enrollment communications</li>
<li>Provide application updates and reminders</li>
<li>Share event information</li>
<li>Send promotional and marketing messages (where consent has been provided)</li>
<li>Respond to inquiries and provide support</li>
</ul>

<h3>Sharing of SMS Information</h3>
<p>We do not sell, rent, or share your mobile phone number or SMS consent information with third parties for their marketing purposes.</p>
<p>We may share your information with trusted service providers (such as messaging platforms) solely for the purpose of delivering SMS communications.</p>

<h3>Opt-Out of SMS Communications</h3>
<p>You may opt out of receiving text messages at any time by replying:</p>
<ul>
<li><strong>STOP</strong> to unsubscribe</li>
<li><strong>HELP</strong> for assistance</li>
</ul>
<p>Message and data rates may apply. Carriers are not liable for delayed or undelivered messages.</p>

<h3>Retention of SMS Data</h3>
<p>We retain SMS-related information only for as long as necessary to fulfill the purposes described in this policy or as required by applicable law. When no longer needed, we securely delete or anonymize the information.</p>

<h2>General Privacy Provisions</h2>

<h3>How We Use Your Information</h3>
<p>We may use your information to:</p>
<ul>
<li>Provide and improve our services</li>
<li>Communicate with you</li>
<li>Process applications and registrations</li>
<li>Respond to inquiries</li>
<li>Comply with legal obligations</li>
</ul>

<h3>Your Privacy Rights</h3>
<p>You may request to:</p>
<ul>
<li>Access your personal information</li>
<li>Correct inaccurate information</li>
<li>Request deletion of your data</li>
</ul>
<p>To make a request, please contact us using the information below. You may also opt out of SMS communications at any time by replying STOP.</p>

<h3>Data Security</h3>
<p>We implement reasonable administrative, technical, and physical safeguards to protect your information.</p>

<h3>Contact Us</h3>
<p>If you have questions about this Privacy Policy or your data, contact us at:</p>
<ul>
<li>Email: <a href="mailto:helpdesk@urbancollege.edu">helpdesk@urbancollege.edu</a></li>
</ul>

<h2>Phone Call Communications</h2>

<h3>Consent to Receive Phone Calls</h3>
<p>By providing your phone number to Urban College, you consent to receive phone calls from us, which may include calls made using automated technology, artificial intelligence (AI)-assisted systems, and/or prerecorded or artificial voice messages.</p>
<p>These calls may be made for informational or promotional purposes related to:</p>
<ul>
<li>Admissions and enrollment</li>
<li>Application status and follow-ups</li>
<li>Event reminders and participation</li>
<li>Programs, offerings, and other opportunities</li>
</ul>
<p>Consent to receive phone calls is not a condition of enrollment or purchase.</p>

<h3>AI-Assisted Calling</h3>
<p>Some calls may be conducted or supported by automated systems or AI-assisted technology. These technologies may be used to:</p>
<ul>
<li>Provide information</li>
<li>Route calls or assist representatives</li>
<li>Deliver prerecorded or partially automated messages</li>
</ul>
<p>You may request to speak with a live representative at any time during a call, where applicable.</p>

<h3>Call Recording and Monitoring</h3>
<p>Phone calls with Urban College may be recorded and/or monitored for purposes such as:</p>
<ul>
<li>Quality assurance</li>
<li>Training and evaluation</li>
<li>Record-keeping and compliance</li>
</ul>
<p>By engaging in a call with us, you acknowledge and agree that the call may be recorded, where permitted by applicable law.</p>

<h3>How We Use Call Information</h3>
<p>Information collected during phone communications may be used to:</p>
<ul>
<li>Respond to inquiries and provide support</li>
<li>Assist with admissions and enrollment processes</li>
<li>Improve our services and communication practices</li>
<li>Maintain records of interactions</li>
</ul>

<h3>Opt-Out of Phone Calls</h3>
<p>You may opt out of receiving phone calls at any time by:</p>
<ul>
<li>Informing the caller during any call</li>
<li>Contacting us using the information provided below</li>
<li>Following any opt-out instructions provided during the call</li>
</ul>
<p>We will process opt-out requests in accordance with applicable law.</p>

<h3>Sharing of Call Information</h3>
<p>We do not sell or share your phone number with third parties for their marketing purposes.</p>
<p>We may share information with trusted service providers solely for the purpose of facilitating communications and services on our behalf.</p>

<h3>Call Frequency</h3>
<p>The frequency of phone calls may vary depending on your interaction with us, including your inquiry status, application progress, or engagement with our programs.</p>

<h3>Compliance with Applicable Laws</h3>
<p>We strive to comply with all applicable laws and regulations related to phone communications, including the Telephone Consumer Protection Act (TCPA) and other relevant regulations governing automated calls, prerecorded messages, and call recording.</p>`,
  },

  'student-activities': {
    title: 'Student Activities',
    description: 'Urban College of Boston student activities, success workshops, and the Student Strong Pathway.',
    sourceUrl: 'https://catalog.urbancollege.edu/content.php?catoid=3&navoid=101#student-activities-success-workshops',
    html: `
<p>The Student Services Department and the Learning Resource Center (LRC) offer workshops in multiple languages throughout the year. These sessions are designed to address students' common questions, concerns, and areas of interest. Whether you're interested in better understanding your syllabus, seeking help tackling a research paper, or looking to improve your technology skills, there is a workshop for you. Student Services holds monthly events for networking and building our student community (such as Winter Celebration, Lunar New Year, and What's My Story). Student Services posts a "Wellness Wednesday" email to all students, staff, and faculty to promote self-care and well-being. Please check the monthly newsletter for current events.</p>
<p><a href="https://www.canva.com/design/DAGwDSodNxU/O5HvNUSoS-gUBDY8RbVEeA/view" target="_blank" rel="noopener noreferrer">View the Student Activities Calendar for the current semester</a></p>
<h3>Student Strong Pathway</h3>
<p>The Student Strong Pathway focuses on support and engagement of students from the day they enroll to when they become Urban College alumni. The data has shown that students who attend events within the Student Strong Pathway are more likely to persist through their first semester and continue their studies. The workshops involved in the Student Strong Pathway include:</p>
<ul>
<li>First Steps to Success</li>
<li>Accepted Student's Day</li>
<li>New Student Orientation</li>
<li>Asynchronous New Student Orientation</li>
<li>Learn Computer Skills Strong</li>
<li>Start Strong</li>
<li>Continue Strong</li>
<li>You Started Strong, Let's Finish Strong</li>
<li>Develop Your Career Strong</li>
<li>Transfer Strong</li>
<li>Graduate Strong</li>
<li>Continue Your Career Strong</li>
</ul>`,
  },

  'ferpa': {
    title: 'Family Educational Rights and Privacy Act (FERPA)',
    description: "Urban College of Boston's FERPA policy — students' rights, access to education records, directory information, and release of records.",
    sourceUrl: 'https://catalog.urbancollege.edu/content.php?catoid=3&navoid=105#educational-records-and-privacy',
    html: `
<p>Privacy rights, regarding access to information, are observed in accordance with the Family Educational Rights and Privacy Act, commonly known as the Buckley Amendment.</p>
<p>In accordance with the provisions of the Family Educational Rights and Privacy Act (FERPA) (Section 438 of the General Education Provisions Act 20 USC 1232), below are the regulations that Urban College has adopted to protect the privacy rights of its students. Revisions and clarifications will be published as experience with the law and the institution's policy warrants.</p>
<p>Students are informed of their rights under this act through the College Catalog and Student Handbook. In compliance with this federal law, the college has established a policy to protect students from misuse of information in their education records and to allow students access to their own education records.</p>
<h3>Student's Rights: FERPA</h3>
<p>The Family Educational Rights and Privacy Act (FERPA) affords students certain rights with respect to their educational records. These rights include:</p>
<ul>
<li>The right to inspect and review the student's education records within 45 days of the day the college receives a request for access. Students should submit to the Registrar written requests that identify the record(s) that they wish to inspect. The Registrar will arrange for access and notify the student of the time and place where the record may be inspected.</li>
<li>The right to request the amendment of the student's education records that the student believes is inaccurate. A student may ask the College to amend a record that they believe is inaccurate. They should write to the college official that is responsible for the record, clearly identify the part of the record that they want changed, and specify why they believe that it is inaccurate. If the college decides not to amend the record as requested, the college will notify the student of the decision and advise the student of their right to a hearing regarding the request for amendment.</li>
<li>The right to consent to disclosures of personally identifiable information contained in the student's education records, except to the extent that FERPA authorizes disclosure without consent. One exception, which permits disclosure without consent, is disclosure to school officials with legitimate educational interests. A school official is a person employed by the college in an administrative, supervisory, academic or research, or support staff position (including law enforcement unit personnel and health staff); a person or company with whom the college has contracted (such as an attorney, auditor, or collection agent); a person serving on the Board of Trustees; or a student serving on an official committee. A school official has a legitimate educational interest if the official needs to review an education record to fulfill their professional responsibility.</li>
<li>The right to file a complaint with the U.S. Department of Education concerning alleged failures by Urban College of Boston to comply with the requirements of FERPA. The office that administers FERPA is: Family Policy Compliance Office, U.S. Department of Education, 400 Maryland Avenue, SW, Washington, DC 20202-4605.</li>
</ul>
<p>Our FERPA waiver form is available <a href="https://forms.office.com/r/p7dr1aCTx5" target="_blank" rel="noopener noreferrer">here</a>.</p>
<h3>Access to Education Records</h3>
<p>Access to records is limited to school officials with a legitimate educational interest. A school official is defined as follows:</p>
<ul>
<li>a person employed by the College in an administrative, counseling, supervisory, or academic, student support services position, or a support person to these positions; or</li>
<li>a person employed by or under contract to the College to perform a special task.</li>
</ul>
<p>Legitimate educational interest needed for a school official to access a record includes:</p>
<ul>
<li>The information requested is necessary for that official to perform appropriate tasks that are specified in their position description or by a contract agreement.</li>
<li>The information is to be used within the context of official agency or school business and not for purposes extraneous to the official's areas of responsibility or to the College.</li>
<li>The information is relevant to the accomplishment of some task or to a determination about the student.</li>
<li>The information is to be used consistently with the purposes for which the data are maintained.</li>
</ul>
<p>Those with access to education records are required to maintain confidentiality of the contents of those records.</p>
<h3>Directory Information</h3>
<p>The following pieces of information are considered Directory Information and may be released with or without notice by the college except in cases where they have been specifically protected by written request from a student:</p>
<ul>
<li>Name as it appears in the College's records</li>
<li>Degrees or Certificates enrolled or conferred and Date of Graduation</li>
<li>Dates of Attendance</li>
<li>Enrollment status</li>
<li>Urban College Email address</li>
<li>College Honors, including Dean's List</li>
</ul>`,
  },

  'grievance-procedure': {
    title: 'Student Disciplinary and Grievance Procedures',
    description: "Urban College of Boston's Code of Student Conduct, sanctions, and financial aid grievances.",
    sourceUrl: 'https://catalog.urbancollege.edu/content.php?catoid=3&navoid=105#students-disciplinary-and-grievance-procedures',
    html: `
<h3>Code of Student Conduct</h3>
<p>Urban College of Boston is committed to promoting student learning in a stable and peaceful environment. Therefore, students are responsible for conducting themselves in a manner that is appropriate and non-threatening to others. Specifically, students should refrain from disruptive behavior, theft, falsification of records, possession of weapons, destruction of property, hazing, physical and verbal abuse, and acts of harassment towards anyone. Students who violate this code of conduct are subject to expulsion, suspension, or other penalties. Conduct subject to disciplinary action includes, but is not limited to, the following:</p>
<h4>Unprofessional Conduct</h4>
<ul>
<li>Dishonesty, including, but not limited to, forgery, knowingly furnishing false information to the college, and alteration and/or use of college documents, financial instruments, or identification cards with intent to defraud.</li>
<li>Dishonesty involving academic integrity, including, but not limited to, cheating or plagiarism, will be addressed under the Academic Honesty Policy.</li>
<li>Disrespect of or insubordination to college personnel.</li>
<li>Use of oral or written profanity.</li>
<li>Sexual harassment of other students, faculty, or staff.</li>
</ul>
<h4>Misuse of College Property</h4>
<ul>
<li>Littering, destroying, or damaging property of the college or property under its jurisdiction.</li>
<li>Violation of the college computer facilities and network use policy.</li>
</ul>
<h4>Alcohol and Drug Violations</h4>
<ul>
<li>Use of alcoholic beverages, including the purchase, consumption, possession, or sale of such items, except where specifically authorized in the policies and guidelines of the College.</li>
<li>Possession, use, sale, or distribution of any type of drugs for illegal purposes.</li>
<li>Appearing at any College premises while intoxicated or while under the influence of an illegal substance.</li>
<li>Violation of the college Non-Smoking policy.</li>
</ul>
<h4>Criminal Activity and Violent or Dangerous Behavior</h4>
<ul>
<li>Violation of any local, state, or federal law.</li>
<li>Possession on college property of weapons, such as knives, firearms, or any dangerous chemical or explosive elements or their component parts.</li>
<li>Threatening of any member of the Urban College community.</li>
</ul>
<h3>Sanctions</h3>
<p>The following sanctions may be imposed, separately or in conjunction with other sanctions:</p>
<ol>
<li>A written statement to a student that he/she is violating or has violated College policies and may be subject to more severe disciplinary action.</li>
<li>Required reimbursement for damage to or misappropriation of property. This may take the form of appropriate services or other compensation.</li>
<li>Interim Suspension: If, in the opinion of the Vice President of Student Success or designee, the presence of a student poses a serious threat to others, the Vice President of Student Success or designee may suspend the student immediately. If the student requests an appeal of the decision, a hearing shall be held at the earliest reasonable time.</li>
<li>Termination of student status with the college for an indefinite, or permanent, period of time.</li>
<li>Withdrawal without refund. A student may be administratively withdrawn from the current or future semesters at the College, and the course withdrawal refund policies described in the College Catalog will be followed.</li>
</ol>
<h3>Financial Aid Grievances</h3>
<p>Business Office<br>2 Boylston St. 2nd Floor, Boston, MA 02116<br>617-449-7030</p>
<p>Students with concerns about financial aid issues should first contact the Business Office to discuss any concerns that they have. Many issues can be resolved via a conversation. In the event that the student is not satisfied after contacting the Business Office, the student should follow the Non-Academic or Financial Aid Grievance Procedures as outlined in the College Catalog.</p>`,
  },

  'voter-registration': {
    title: 'Voter Registration',
    description: 'Voter registration information for Urban College of Boston students.',
    sourceUrl: 'https://catalog.urbancollege.edu/content.php?catoid=3&navoid=105#voter-registration',
    html: `
<p>The Higher Education Amendment requires Massachusetts colleges and universities to provide students with information on how to register to vote. You may submit an application to register or pre-register to vote in Massachusetts if:</p>
<ul>
<li>You are a citizen of the United States; and</li>
<li>You are 16 years old; and</li>
<li>You are not currently incarcerated by reason of a felony conviction.</li>
</ul>
<p>If you meet the above requirements, you may apply online, by mail, or in person.</p>
<p>The deadline to register to vote in any election or regular town meeting is twenty (20) days prior to the date of the election or meeting. The deadline to register to vote in a special town meeting is ten (10) days prior to the special town meeting.</p>
<p>If you are a new citizen who was naturalized after the last day to register to vote, you may register to vote in person at your local election office until 4 p.m. on the day before the election. You should bring documentation to show that your naturalization ceremony occurred after the voter registration deadline.</p>
<p>Additional information can be found at this link: <a href="https://www.sec.state.ma.us/divisions/elections/elections-and-voting.htm" target="_blank" rel="noopener noreferrer">sec.state.ma.us — Elections and Voting</a>.</p>`,
  },

  'title-ix-sexual-misconduct': {
    title: 'Title IX / Sexual Misconduct',
    description: "Urban College of Boston's Title IX policy, non-discrimination statement, sexual harassment and sexual misconduct policies, reporting procedures, victim protections, and resources.",
    sourceUrl: 'https://catalog.urbancollege.edu/content.php?catoid=3&navoid=105#title-ix',
    html: `
<p>Title IX of the Education Amendments of 1972 ("Title IX"), 20 U.S.C. &sect;1681 et seq., is a Federal civil rights law that prohibits discrimination on the basis of sex—including pregnancy and parental status—in any educational programs and activities. It ensures equal opportunity in academics, addressing issues such as sexual harassment, pregnancy discrimination, and gender equity for students and employees. Urban College of Boston must comply with this law because we are a college that receives federal funding.</p>
<p><a href="https://www.canva.com/design/DAGtWztuhDQ/yUk2r0FJ7M61KHh6s6mJ6g/view" target="_blank" rel="noopener noreferrer">Results from our 2025 Climate Survey can be found here.</a></p>
<h3>Non-Discrimination, Affirmative Action, Equal Opportunity, and Diversity</h3>
<p>Urban College of Boston is an affirmative action and equal opportunity employer and does not discriminate on the basis of race, sex, color, age, religion, sexual orientation, political affiliation, national origin, marital status, veteran status, or disability in any of its policies, practices, or procedures, as required by Title VI and Title VII of the Civil Rights Act of 1964; Title IX of the Education Amendments of 1972; Section 504 of the Rehabilitation Act of 1973, as amended; the Age Discrimination Act of 1975; the Americans with Disabilities Act of 1990; and other applicable federal and state civil rights laws. This includes, but is not limited to, admission, employment, financial aid, and educational services. The college prohibits sexual harassment, including sexual violence. Inquiries and complaints should be referred to the Title IX Coordinator, Affirmative Action Officer, and the Massachusetts Commission Against Discrimination.</p>
<h3>Pregnancy</h3>
<p>Under Title IX, Urban College pregnant students are entitled to the following if needed:</p>
<ul>
<li>Participate in all classes and extracurricular activities.</li>
<li>Have absences excused due to pregnancy or childbirth for as long as your doctor says it is necessary.</li>
<li>Be allowed to return to the same academic and extracurricular status as before their medical leave began, which should include giving the opportunity to make up any work missed while they were out.</li>
<li>Be provided with the same special services the college provides to students with temporary medical conditions. This includes homebound instruction / at-home tutoring / independent study.</li>
</ul>
<h3>Sexual Harassment Policy</h3>
<p>Urban College prohibits sexual harassment of students, faculty, or staff. Sexual harassment is defined as unwelcome sexual advances; requests for sexual favors; or other physical conduct, verbal, non-verbal, or written communication of a sexual nature when the conduct of such is sufficiently severe, persistent, or pervasive that it denies or limits a student's ability to participate in or benefit from the education program or that it creates a hostile or abusive educational environment.</p>
<p>Sexual harassment violates Urban College policy as well as state and federal law. Any incidents of sexual harassment should be reported to the Director of Student Services and Support so that prompt and effective actions can be taken. Urban College's Title IX Coordinator is Rosana Perella. Students may contact the office by email at <a href="mailto:titleix@urbancollege.edu">titleix@urbancollege.edu</a> or by phone at 617-449-7380.</p>
<p>It is unlawful to retaliate or discriminate in any way against any person who has expressed concern or made any complaint regarding sexual harassment, and Urban College of Boston will not retaliate or discriminate against any person who expresses concern or files a complaint alleging sexual harassment or discrimination.</p>
<h3>Sexual Assault, Domestic Violence, Dating Violence, or Stalking</h3>
<p>The College is obligated to investigate all allegations of sexual violence, even if the alleged victim chooses not to file a formal complaint and/or participate in the investigation. Additionally, a complaint filed in another forum, including a criminal or civil complaint, shall not delay the college's investigation of a complaint of sexual violence. The college shall promptly and thoroughly investigate all such allegations in accordance with the Policy on Affirmative Action's Complaint Procedure and shall provide the victim with periodic updates on the status of the investigation.</p>
<h4>Procedures to Follow for Victims</h4>
<p><strong>Ensure Safety:</strong> Call the Boston Police Department by dialing 911. It is imperative to ensure your safety and avoid remaining in a dangerous situation.</p>
<p><strong>Seek Medical Care:</strong> Seek immediate medical treatment, even if you feel you were not physically hurt. The survivor has the right to accept or reject any part of the medical exam. Sexual assault nurse examiners (SANEs) are specially trained to care for survivors of sexual violence and to perform sexual assault evidence collection kits. The SANE program serves seven hospitals in the greater Boston area:</p>
<ul>
<li>Beth Israel Deaconess Medical Center</li>
<li>Brigham and Women's Hospital</li>
<li>Boston Medical Center</li>
<li>Cambridge Hospital</li>
<li>Children's Hospital</li>
<li>Massachusetts General Hospital</li>
<li>Newton-Wellesley Hospital</li>
</ul>
<p><strong>Preserve Evidence:</strong> It is important to preserve evidence in cases of sexual assault, dating violence, domestic violence, or stalking, if possible. Victims should take certain actions promptly to preserve evidence for criminal prosecution and/or to obtain a protective order.</p>
<p><strong>Victim Identification:</strong> Personal identifiable information about a victim will be treated as confidential and only shared with persons with a specific need to know and/or who are investigating and/or adjudicating the complaint, delivering resources or support services to the victim, or as public safety requires. The College does not publish the names or other identifiable information of victims. In accordance with FERPA, a victim may request that no directory information maintained by the college be released without their prior written consent.</p>
<p><strong>Report the Incident:</strong> In addition to contacting local law enforcement, you may also file a complaint with the college. A college complaint (Sexual Misconduct Complaint) may be submitted by contacting the Title IX Coordinator at 617-449-7380 or <a href="mailto:titleix@urbancollege.edu">titleix@urbancollege.edu</a>. Ultimately, it is the student's choice whether or not to make a report.</p>
<p><strong>Written Notification:</strong> Urban College will provide written notification to students and employees who report sexual assault, dating violence, domestic violence, or stalking about existing counseling, health, mental health, victim advocacy, legal assistance, visa and immigration assistance, student financial aid, and other services available on and off campus. Urban College will further provide written notification about options for requesting changes to academic or working situations, as well as how to request protective measures.</p>
<p><strong>Disciplinary Actions:</strong> After a final determination has been made, Urban College is authorized to impose a sanction. In determining the appropriate sanction, Urban College shall consider the severity of the violation, the safety of the complainant and the community, and the education or changes needed from the respondent. Possible sanctions for students include a disciplinary warning, disciplinary probation, disciplinary suspension, disciplinary expulsion, required participation in educational seminars or programs, domestic violence education or treatment programs, restitution, directed study of a related topic, and no-contact orders, as well as criminal prosecution. Possible sanctions for employees include a disciplinary warning, disciplinary probation, suspension from employment, termination of employment, required participation in educational seminars or programs, domestic violence education or treatment programs, restitution, directed study of a related topic, and no-contact orders, as well as criminal prosecution.</p>
<h4>Protections for Victims of Sexual Violence</h4>
<p>A person subjected to sexual violence shall:</p>
<ul>
<li>Be provided with a copy of the college's Sexual Violence — Victim's Rights and Information Advisory, which shall include information concerning counseling, health, and mental health services, victim advocacy and support, law enforcement assistance, and other services available on and off campus;</li>
<li>Have the right to pursue, or not pursue, assistance from campus administration officials or campus law enforcement;</li>
<li>Not be discouraged by college officials from reporting an incident to both on-campus and off-campus authorities;</li>
<li>Be provided assistance in contacting local law enforcement if requested and have the full and prompt assistance and cooperation of campus personnel should a civil and/or criminal complaint be pursued;</li>
<li>Be free from any suggestion that they somehow contributed to or had a shared responsibility in the violent act;</li>
<li>Receive the same level of support at any proceeding before college officials as is permitted to the accused party, including the presence of a personal advisor during any disciplinary proceeding and the right to be notified in a timely manner of the outcome of such proceedings and any appeal right available;</li>
<li>Receive full and prompt cooperation from college personnel in obtaining and securing evidence (including medical evidence) necessary for any potential criminal proceedings;</li>
<li>Have access to existing college advising, support services, and obtain referrals to off-campus counseling and support services if desired;</li>
<li>Be permitted to attend classes, work, and participate in college activities free from unwanted contact or proximity to the respondent insofar as the College is permitted and able;</li>
<li>Be permitted to request changes to an academic schedule if such changes are requested by the alleged victim and are reasonably available; and</li>
<li>Be informed of any no-contact or no-trespass orders issued to the respondent by the college and the college's commitment to honor any court-issued restraining or protective orders, to the extent permitted by law.</li>
</ul>
<h4>Interim Protective Measures</h4>
<p>Title IX requires the college to take reasonable steps to ensure equal access to its education programs and activities and protect individuals from Prohibited Conduct, including taking interim protective measures before the final outcome of an investigation. Examples include, but are not limited to:</p>
<ul>
<li>access to counseling services and assistance in scheduling an appointment, on or off campus;</li>
<li>imposition of an interim suspension or on-campus "no-contact" order;</li>
<li>rescheduling of exams and assignments;</li>
<li>providing alternative course completion options;</li>
<li>changing class schedules, including withdrawing from a course without penalty;</li>
<li>changing work schedules or job assignments;</li>
<li>limiting access to certain college facilities or activities pending resolution of the matter;</li>
<li>voluntary leave of absence;</li>
<li>providing an escort to ensure safe movement between classes and activities; and/or</li>
<li>providing academic support services, such as tutoring.</li>
</ul>
<h4>Amnesty</h4>
<p>Students may be hesitant to report sexual violence out of concern that they, or witnesses, might be charged with violations of the college's drug/alcohol policies. While the college does not condone such behavior, it places a priority on addressing allegations of sexual violence. Accordingly, the college may elect not to pursue discipline against a student who, in good faith, reports, witnesses, or possesses personal knowledge of an incident of sexual violence.</p>
<h4>Retaliation</h4>
<p>Urban College of Boston prohibits retaliation against any person who presents a formal or informal complaint of sexual violence or who testifies or offers evidence connected with a complaint. Retaliation is a violation of this policy whether or not the underlying claim of sexual violence is confirmed.</p>
<h3>Programs &amp; Prevention — Resources for Survivors</h3>
<p>Current contact information on rape crisis centers in Massachusetts can be found at the Commonwealth's <a href="https://www.mass.gov/orgs/executive-office-of-health-and-human-services" target="_blank" rel="noopener noreferrer">Executive Office of Health and Human Services</a> website under Consumer Information.</p>
<h4>Greater Boston Area</h4>
<ul>
<li>Boston Area Rape Crisis Center, Cambridge — 617-492-7273 Hotline, 617-492-6434 TTY</li>
<li>Reach Beyond Domestic Violence, Waltham — 800-899-4000 Hotline</li>
</ul>
<h4>Northeastern Massachusetts</h4>
<ul>
<li>North Shore Rape Crisis Center, Beverly — 800-922-8772 Hotline, 978-921-8729 TTY</li>
<li>Rape Crisis Services of Greater Lowell — 800-542-5212 Hotline, 978-452-8723 TTY</li>
<li>YWCA of Greater Lawrence — 877-509-9922 SA Hotline, 978-686-8840 TTY</li>
</ul>
<h4>Central Massachusetts</h4>
<ul>
<li>Rape Crisis Center of Central Mass., Worcester — 800-870-5905 Hotline, 508-852-7600 TTY</li>
<li>Rape Crisis Center of Central Mass., Fitchburg — 800-870-5905</li>
<li>Wayside Victim Services, Milford — 800-511-5070 Hotline, 508-478-4205 TTY</li>
<li>Voices Against Violence, Framingham — 800-593-1125 Hotline, 508-626-8686 TTY</li>
</ul>
<h4>Southeastern Massachusetts</h4>
<ul>
<li>A Safe Place, Nantucket — 508-228-2111 Hotline, 508-228-0561 TTY</li>
<li>Independence House, Hyannis — 800-439-6507 Hotline, 508-778-6782 TTY</li>
<li>Women Support Services, Vineyard Haven — 508-696-7233</li>
<li>Greater New Bedford Women Center, New Bedford — 888-839-6636 Hotline, 508-996-1177 TTY</li>
<li>New Hope, Attleboro — 800-323-4673 Hotline/TTY</li>
<li>Stanley Street Women Center, Fall River — 508-675-0087 Hotline, 508-673-3328 TTY</li>
<li>Woman's Place Crisis Center, Brockton — 508-588-8255 SA Hotline, 508-894-2869 TTY</li>
</ul>
<h4>Western Massachusetts</h4>
<ul>
<li>Elizabeth Freeman Center, Pittsfield — 413-443-0089 Hotline, 413-499-2425 TTY</li>
<li>Everywoman Center, Amherst — 413-545-0800 Hotline, 888-337-0800 TTY</li>
<li>NELCWIT, Greenfield — 413-772-0806 Hotline/TTY</li>
<li>YWCA, Springfield — 800-796-8711</li>
<li>YWCA of Western Mass, Westfield — 800-479-6245 Hotline/TTY</li>
</ul>
<h4>Transition House</h4>
<p><a href="http://www.transitionhouse.org/" target="_blank" rel="noopener noreferrer">www.transitionhouse.org</a> — Call 617-661-7203 for emergency shelter and transitional and supported housing. Casa Myrna Vazquez, support for survivors: 617-521-0116, <a href="http://www.casamyrna.org/" target="_blank" rel="noopener noreferrer">www.casamyrna.org</a>.</p>`,
  },

  'faculty-administration-staff': {
    title: 'Faculty, Administration and Staff',
    description: 'Urban College of Boston Board of Trustees, administration, staff, and faculty.',
    sourceUrl: 'https://catalog.urbancollege.edu/content.php?catoid=3&navoid=106',
    html: `
<h3>Board of Trustees</h3>
<ul>
<li><strong>Joan Becker, Ed.D.</strong>, Chair — Consultant, Council for Opportunity in Education and University of Massachusetts Boston</li>
<li><strong>Adzele Benoit</strong>, Faculty Representative — Urban College Alumna (2010) and Adjunct Faculty Member; Public Health Specialist/Technical Assistant Liaison, Baystate Community Services</li>
<li><strong>Barbara Brittingham, Ph.D.</strong>, Secretary — President Emerita, New England Commission of Higher Education (NECHE)</li>
<li><strong>Constanza Cabello, Ed.D.</strong> — Managing Director, Global Inclusion, Diversity, and Equity Team, State Street</li>
<li><strong>Peter Ebb, Esq.</strong> — Retired Partner, Ropes &amp; Gray</li>
<li><strong>Kenneth Lee</strong>, Treasurer — Chief Financial Officer, Southern New Hampshire University</li>
<li><strong>Amelia Manning</strong>, Vice Chair — Dean, Tulane University's School of Professional Advancement</li>
<li><strong>Mark Ouellette</strong> — Consultant, Pitney Bowes</li>
<li><strong>Sharon Scott-Chandler, Esq.</strong> — President and CEO, Action for Boston Community Development (ABCD)</li>
<li><strong>Megan Stevens</strong> — Director, Leadership Advancement, AnitaB.org</li>
<li><strong>Anneisha Thompson</strong>, Student Representative — Urban College Alumna (2022) and Adjunct Faculty Member; Family &amp; Community Engagement Supervisor, ABCD</li>
<li><strong>Jan Wyatt, Ph.D.</strong> — Vice President of Academic Programs, Southern New Hampshire University</li>
</ul>
<h3>Office of the President</h3>
<ul>
<li><strong>Yves Salomon-Fern&aacute;ndez</strong> — President</li>
<li><strong>Julianna Poupard</strong> — Administrative Coordinator</li>
</ul>
<h3>President's Cabinet</h3>
<ul>
<li><strong>Caitlin Callahan</strong> — Chief Operating Officer</li>
<li><strong>Erline Louis Tanice</strong> — Chief Financial Officer</li>
<li><strong>Anna Berry</strong> — Vice President of Student Success</li>
<li><strong>Noem&iacute; Custodia-Lora</strong> — Vice President of Academic Affairs and Workforce Development</li>
<li><strong>Daliza Nova</strong> — Associate Vice President of Workforce Development</li>
</ul>
<h3>Staff</h3>
<h4>Academic Affairs</h4>
<ul>
<li><strong>Rachelle Hannoush</strong> — Interim Early Childhood Education Department Chair</li>
<li><strong>Caleb Sabatka</strong> — Program Chair &amp; Assistant Professor of Human Services Administration</li>
<li><strong>Jennifer Grehan</strong> — Program Chair &amp; Assistant Professor of General Studies</li>
</ul>
<h4>Administration and Finance</h4>
<ul>
<li><strong>Timesha Scott</strong> — IT Lead</li>
<li><strong>Erik Robles</strong> — LMS System Administrator</li>
<li><strong>Miguel De Los Santos</strong> — IT Innovation &amp; Cybersecurity Project Coordinator</li>
<li><strong>Madeleine Pitcher</strong> — Senior Manager of Development Operations</li>
<li><strong>Sara Wendell</strong> — Accounting Operations Manager</li>
<li><strong>Sergio Mendoza</strong> — Bilingual Staff Accountant</li>
<li><strong>Malcolm Dyer</strong> — Human Resource Coordinator</li>
</ul>
<h4>Admission and Financial Services</h4>
<ul>
<li><strong>Calvin Conyers</strong> — Associate Vice President of Enrollment Management</li>
<li><strong>Stacy Broadus</strong> — Director of Student Financial Services</li>
<li><strong>Carla Desisto</strong> — Assistant Director of Financial Services</li>
<li><strong>Nancy Morales</strong> — Bilingual Financial Services Specialist</li>
<li><strong>Daniella Sanchez</strong> — Senior Admissions Advisor</li>
<li><strong>Leandra Rivera</strong> — Admissions Advisor</li>
<li><strong>Roystone Martinez</strong> — Admissions Advisor</li>
</ul>
<h4>Learning Resource Center</h4>
<ul>
<li><strong>Ellie Wolf</strong> — Learning Support Associate</li>
<li><strong>Maudeline Clervoix-Frank</strong> — Learning Support Associate</li>
<li><strong>Pamela Peralta</strong> — Learning Support Associate</li>
</ul>
<h4>Institutional Research</h4>
<ul><li><strong>TBD</strong> — Director of Institutional Research and Assessment</li></ul>
<h4>Communications and Marketing</h4>
<ul><li><strong>Arianna Valle</strong> — Director of Marketing and Communications</li></ul>
<h4>Registration</h4>
<ul>
<li><strong>Waqas Mirza</strong> — Director of Registration Services and Registrar</li>
<li><strong>Daniel Borges</strong> — Registration Coordinator</li>
</ul>
<h4>Student Success</h4>
<ul>
<li><strong>Rosana Perella</strong> — Director of Student Services and Support</li>
<li><strong>Kendall Driscoll</strong> — Academic Success Coach and Advisor</li>
<li><strong>Yessenia Guglielmi</strong> — Early Childhood Education Academic Success Coach and Advisor</li>
<li><strong>Catherine Kerr</strong> — AmeriCorps VISTA</li>
</ul>
<h3>Faculty</h3>
<table>
<thead><tr><th>Last Name</th><th>First Name</th><th>Department</th><th>Highest Degree</th></tr></thead>
<tbody>
<tr><td>Amy-Cordero</td><td>Alberto</td><td>ECE</td><td>Cambridge College, M.Ed.</td></tr>
<tr><td>Aparicio</td><td>Sasha</td><td>PRO/SOC</td><td>Universidad de San Carlos de Guatemala, M.S.</td></tr>
<tr><td>Bamford</td><td>Chelsea</td><td>HUS</td><td></td></tr>
<tr><td>Barnes</td><td>Andrea</td><td>HUS/PRO</td><td>New York Institute of Technology, MSCN</td></tr>
<tr><td>Benoit</td><td>Adzele</td><td>HUS/PSY</td><td>Wheelock College, MSW</td></tr>
<tr><td>Bernecer</td><td>Vanessa</td><td>ECE</td><td></td></tr>
<tr><td>Buskey</td><td>Jamie</td><td>ECE</td><td>Wheelock College, M.Ed.</td></tr>
<tr><td>Carles</td><td>Maria</td><td>NTS</td><td>University of Panama, Ph.D</td></tr>
<tr><td>Carter</td><td>Sonia</td><td>NTS</td><td>Eastern Nazarene College, MSM</td></tr>
<tr><td>Chukwuanu</td><td>Olive</td><td>ECE</td><td>Eastern Nazarene College, M.Ed.</td></tr>
<tr><td>Clark</td><td>Eric</td><td>MAT</td><td>Eastern Nazarene College, M.Ed.</td></tr>
<tr><td>Clervoix-Frank</td><td>Maudeline</td><td>COM/PSY/SOC</td><td>North Carolina A&amp;T State University, M.S.</td></tr>
<tr><td>Cordero</td><td>Ana</td><td>ECE</td><td>Boston State College, M.Ed.</td></tr>
<tr><td>Cruz</td><td>Idalsy</td><td></td><td></td></tr>
<tr><td>Davidson</td><td>Bernadette</td><td>ECE</td><td>Lesley University, MA</td></tr>
<tr><td>Davidson</td><td>Rebecca</td><td>ART</td><td>University of Pennsylvania, MFA</td></tr>
<tr><td>De Los Santos</td><td>Miguel</td><td>CIS</td><td>Wentworth Institute of Technology, M.S.</td></tr>
<tr><td>Deon</td><td>Jane</td><td>COM/ENG</td><td>Florida International University, MFA</td></tr>
<tr><td>Deschenes</td><td>Amber</td><td>MGT</td><td>Fitchburg State University, MBA</td></tr>
<tr><td>Driscoll</td><td>Kendall</td><td>HUM</td><td>Boston University, M.M.</td></tr>
<tr><td>Farias</td><td>Ana Teresa</td><td>ECE</td><td>Worcester State University, M.Ed.</td></tr>
<tr><td>Finkelstein</td><td>Deborah</td><td>COM</td><td>Goddard College, MFA</td></tr>
<tr><td>Giraldo-Wonders</td><td>Daniel</td><td>HUM/ENG</td><td>University of Pittsburgh, Ph.D.</td></tr>
<tr><td>Grehan</td><td>Jennifer</td><td>COM/ENG</td><td>Cambridge College, M.Ed.</td></tr>
<tr><td>Grenier</td><td>J.M.</td><td>HUM</td><td>Northeastern University, M.Ed.</td></tr>
<tr><td>Grout</td><td>Kenneth</td><td>COM</td><td>Emerson College, M.Ed.</td></tr>
<tr><td>Guevara Alvarez</td><td>Yasmin</td><td>ECE</td><td>Lesley University, M.Ed.</td></tr>
<tr><td>Guglielmi</td><td>Yessenia</td><td>HUM</td><td>Drew University, D.Litt.</td></tr>
<tr><td>Hannoush</td><td>Rachelle</td><td>ECE</td><td>Bay Path University, M.Ed.</td></tr>
<tr><td>Hernandez</td><td>Rosemary</td><td>ECE</td><td>Southern New Hampshire University, MS</td></tr>
<tr><td>Huang</td><td>Jiaying</td><td>ECE</td><td>Wheelock College, M.Ed.</td></tr>
<tr><td>Jeanty-Bazile</td><td>Ruth-Fiona</td><td>ECE</td><td></td></tr>
<tr><td>King</td><td>Christina</td><td>HUS</td><td>Simmons University, Ph.D.</td></tr>
<tr><td>Laskey</td><td>Robin</td><td>PRO/PSY</td><td></td></tr>
<tr><td>Lauziere</td><td>Patricia</td><td>HUS/PRO</td><td>University of Phoenix Online, M.Ed.</td></tr>
<tr><td>Lazo</td><td>Oscar</td><td>ENG/MAT/NTS</td><td>Catholic University of Chile, PhD</td></tr>
<tr><td>Lazo</td><td>Riola</td><td>ECE</td><td>University of Concepcion, M.Ed.</td></tr>
<tr><td>Liu</td><td>Yanying</td><td>ECE</td><td>Cambridge College, M.Ed.</td></tr>
<tr><td>Lopez</td><td>Odette</td><td>ECE</td><td>Inter American University, M.Ed.</td></tr>
<tr><td>McKay</td><td>Glen</td><td>ECE</td><td></td></tr>
<tr><td>Maglio</td><td>Elizabeth</td><td>HUS/PRO</td><td>Catholic University, MSW</td></tr>
<tr><td>Marte</td><td>Joselyn</td><td>ECE</td><td>Hunter College, MSW</td></tr>
<tr><td>Matthews</td><td>Allison</td><td>ECE/HUM</td><td>Nova Southeastern University, Ed.D</td></tr>
<tr><td>Meyerson</td><td>Anne</td><td>PRO</td><td>Clark University, BA</td></tr>
<tr><td>Miller</td><td>Aisha</td><td>PRO</td><td>University of Phoenix, DBA</td></tr>
<tr><td>Munoz-Benavides</td><td>Sonia</td><td>ECE</td><td>Lesley University, M.SPEd.</td></tr>
<tr><td>Newman</td><td>Peter</td><td>HUM/SOC</td><td>Loyola University School of Law, LLM</td></tr>
<tr><td>Osarenkhoe</td><td>Karen</td><td>ECE</td><td>Springfield College, MS OML</td></tr>
<tr><td>Paciulli</td><td>Melissa</td><td>MAT</td><td>University of Massachusetts Amherst, Ph.D</td></tr>
<tr><td>Perdomo</td><td>Maridel</td><td>ECE</td><td>Framingham State University, MPA</td></tr>
<tr><td>Perella</td><td>Rosana</td><td>ENG</td><td>Massachusetts School of Law, JD</td></tr>
<tr><td>Quiceno</td><td>Leidy</td><td>HUS</td><td>UMass Boston, MS</td></tr>
<tr><td>Ramos</td><td>Arlene</td><td>ECE</td><td>Cambridge College, MS</td></tr>
<tr><td>Reilly</td><td>Matthew</td><td>MKT</td><td>Northeastern University, Ed.D</td></tr>
<tr><td>Rich</td><td>Taylor</td><td>HUS</td><td></td></tr>
<tr><td>Rivera-Garcia</td><td>Lilliam</td><td>ECE</td><td>Cambridge College, MA</td></tr>
<tr><td>Rogers</td><td>Zoe</td><td>ENG/MAT</td><td>Rhode Island College, MA</td></tr>
<tr><td>Russo</td><td>Kristin</td><td>COM/PRO</td><td></td></tr>
<tr><td>Sabatka</td><td>Caleb</td><td>COM/HUS/PRO/SOC</td><td>Vermont Law School, MARJ</td></tr>
<tr><td>Schultz</td><td>Robert</td><td>MGT</td><td>University of Massachusetts Boston, MBA</td></tr>
<tr><td>Stec</td><td>Amy</td><td>ECE</td><td></td></tr>
<tr><td>Sullivan</td><td>Aracelis</td><td>ECE/PRO</td><td>University of Massachusetts, M.Ed.</td></tr>
<tr><td>Tabora</td><td>Ilyitch Nahiely</td><td>HUS</td><td>UMass Boston, Ph.D.</td></tr>
<tr><td>Tambio</td><td>Jennine</td><td>ECE</td><td>Northeastern University, Ed.D</td></tr>
<tr><td>Thompson</td><td>Anneisha</td><td>ECE</td><td>Cambridge College, M.Ed.</td></tr>
<tr><td>Tineo</td><td>Paola</td><td>ECE</td><td>Simmons College, MA</td></tr>
<tr><td>Todisco</td><td>Amanda</td><td>ENG</td><td>Lesley University, MFA</td></tr>
<tr><td>Vasquez</td><td>Geovanni</td><td>HUS</td><td>Northcentral University, Ph.D.</td></tr>
<tr><td>Whittinghill</td><td>Angela</td><td>HUS/PSY</td><td>Capella University, M.S.</td></tr>
<tr><td>Wong</td><td>Kevin</td><td>PSY</td><td>Northeastern University, MS</td></tr>
<tr><td>Yahya Al-Arashi</td><td>Lamis</td><td>ENG</td><td>Cambridge College, PhD in Education</td></tr>
<tr><td>Zarrella</td><td>Christy</td><td>ECE</td><td>Boston College, M.Ed.</td></tr>
<tr><td>Zayas</td><td>Carmen</td><td>ECE</td><td></td></tr>
<tr><td>Zayas</td><td>Myrna</td><td>ECE</td><td>Springfield College, MS</td></tr>
<tr><td>Zhu</td><td>Junxian</td><td>CIS</td><td>Shanghai University, BS</td></tr>
</tbody>
</table>`,
  },

  // ---- Consolidated pages (one per source catalog page; deep-linked via #anchor) ----
  'student-rights': {
    title: 'Student Rights and Responsibilities',
    description: "Urban College of Boston student rights and responsibilities — acceptable use, disciplinary and grievance procedures, FERPA, Title IX, and voter registration.",
    sourceUrl: 'https://catalog.urbancollege.edu/content.php?catoid=3&navoid=105',
    sections: [
      { id: 'computer-and-network-usage', title: 'Acceptable Use Policy (Computer and Network Usage)', ref: 'acceptable-use-policy' },
      { id: 'grievance-procedures', title: 'Student Disciplinary and Grievance Procedures', ref: 'grievance-procedure' },
      { id: 'ferpa', title: 'Family Educational Rights and Privacy Act (FERPA)', ref: 'ferpa' },
      { id: 'title-ix', title: 'Title IX / Sexual Misconduct', ref: 'title-ix-sexual-misconduct' },
      { id: 'voter-registration', title: 'Voter Registration', ref: 'voter-registration' },
      {
        id: 'drug-and-alcohol-policy',
        title: 'Drug and Alcohol Policy',
        html: `
<p>Urban College of Boston strives to achieve a healthy living, learning, and working environment. As part of this commitment and pursuant to the Federal Drug-Free Workplace Act of 1988 and the Drug-Free Schools and Communities Act Amendments of 1989, the College complies with all local, state, and federal regulations pertaining to alcohol and illicit drugs. The unlawful manufacture, dispensing, possession, use, or distribution of alcohol or illicit drugs by students or employees on Urban College's property is prohibited.</p>
<p>All members of the Urban College community are responsible for knowing and acting in accordance with applicable laws and college policy concerning the purchase, possession, consumption, and sale of alcoholic beverages. Urban College distributes materials and provides educational workshops as prevention, and Student Affairs personnel can provide referrals to other agencies and organizations.</p>
<h4>Legal Sanctions for Unlawful Possession of Alcohol and Drugs</h4>
<p>Violation of the alcohol and drugs policy will result in actions ranging from mandated participation in drug counselling and rehabilitation programs to dismissal.</p>
<h4>Drug-Related Crimes and Federal Financial Aid</h4>
<p>Under the Higher Education Amendments of 1998, effective July 1, 2000, a student is ineligible for federal student aid if convicted, under federal or state law, of any offense involving the possession or sale of a controlled substance (generally illegal drugs, not including alcohol or tobacco). The period of ineligibility begins on the date of conviction and lasts until the end of the statutorily specified period. The student may regain eligibility early by completing a qualifying drug rehabilitation program (including two unannounced drug tests) or if the conviction is overturned.</p>
<h4>Health Risk of Alcohol and Drug Use</h4>
<p>The negative physical and mental effects of the use of alcohol and other drugs are well-documented and may include blackouts, poisoning, overdose, physical and psychological dependence, damage to vital organs, and an inability to learn and remember information. For more information, visit <a href="https://nida.nih.gov/research-topics/commonly-used-drugs-charts" target="_blank" rel="noopener noreferrer">drugabuse.gov</a>.</p>
<h4>Drug and Alcohol Abuse Prevention Program</h4>
<p>As required under the Drug-Free Schools and Communities Act of 1989, Urban College uses multiple strategies to provide comprehensive education regarding alcohol and other drugs, distributes materials, and provides educational workshops as prevention. Student Affairs personnel can provide referrals to other agencies and organizations for individuals experiencing or affected by substance abuse issues.</p>
<h4>Free Alcohol, Drug, and Other Rehab Sources</h4>
<ul>
<li>Whittier Street Health Center — 1290 Tremont Street, Boston, MA 02120 — (617) 427-1000</li>
<li>Center After Care Services Inc. — 2 Lexington Street, Boston, MA 02128 — (617) 569-4561</li>
<li>Fenway Community Health Center, Substance Abuse Treatment Program — 142 Berkeley Street, Boston, MA 02116 — (617) 247-7555</li>
<li>Boston Rescue Mission, OP Counselling — 39 Kingston Street, Boston, MA 02111 — (617) 482-8819</li>
<li>Boston Children's Hospital Services — 300 Longwood Avenue, Boston, MA 02115 — (617) 355-2727</li>
<li>Bay Cove Human Services — 66 Canal Street, Boston, MA 02114 — (617) 371-3030</li>
</ul>`,
      },
      {
        id: 'safety-and-security',
        title: 'Safety and Security',
        html: `
<p>Student safety is of the utmost importance at Urban College, and we all must work together to maintain a safe and secure campus community. Students should maintain awareness of campus safety and immediately report issues and circumstances that may reduce safety and security.</p>
<h4>Preparing the Annual Disclosure of Crime Statistics</h4>
<p>Urban College prepares an annual report to comply with the Jeanne Clery Disclosure of Campus Security Policy and Crime Statistics Act, in cooperation with local law enforcement. The <a href="https://static1.squarespace.com/static/5be099a375f9eecbf2753e8d/t/68cc33956c34e1374ca797e7/1758213013180/Final+2025+Clery+Report+to+be+emailed+%281%29.pdf" target="_blank" rel="noopener noreferrer">full report</a> is accessible online; an annual email notification is sent to all enrolled students, faculty, and staff. Copies may be requested from the Office of Enrollment Services, and prospective employees may obtain a copy from Human Resources.</p>
<h4>Notification of a Missing Student</h4>
<p>If a member of the college community has reason to believe a student is missing, they should immediately notify the Boston Police Department by calling 911 and notify the President at (617) 449-7037. If the Boston Police Department confirms the student is missing, the college will notify the student's emergency contact no later than 24 hours after the determination. If the missing student is under 18 and not emancipated, the college must also notify the parent or legal guardian within 24 hours. Students may confidentially identify an individual to be contacted if they are determined to be missing; that information is confidential and accessible only by authorized campus officials and law enforcement during an investigation.</p>
<h4>Reporting a Crime and Other Emergencies</h4>
<p>Members of the community — visitors, students, faculty, and staff — are encouraged to report all crimes and emergencies in a timely manner. A crime is "reported" when brought to the attention of a Campus Security Authority (CSA) or law enforcement by a victim, witness, third party, or offender. Suspicious activities or individuals seen within the campus vicinity should also be reported.</p>
<h4>Accurate Prompt Reporting</h4>
<p>To report a crime or emergency on campus, call 911. To report a non-emergency security or public safety matter, call 617-449-7070. When a potentially dangerous threat arises, timely reports or warnings will be issued through email announcements, posted notices, in-class announcements, or other appropriate means.</p>
<h4>To Report a Crime</h4>
<p>Anyone can report a crime or emergency by dialing 911 or contacting the President at (617) 449-7037. To report suspicious activity or non-emergencies, contact an Urban College Campus Security Authority:</p>
<table><tbody>
<tr><td>Report emergencies or suspicious activities</td><td>Dial 911</td></tr>
<tr><td>College President</td><td>617-449-7068</td></tr>
<tr><td>Vice President of Academic Affairs</td><td>617-960-0257</td></tr>
<tr><td>Director of Student Services and Support</td><td>617-449-7380</td></tr>
<tr><td>AVP of Enrollment Management and Financial Services</td><td>617-449-7041</td></tr>
<tr><td>Learning Resource Center staff</td><td>617-449-7044</td></tr>
<tr><td>Financial Services</td><td>617-449-7429</td></tr>
<tr><td>Business Office</td><td>617-449-7430</td></tr>
<tr><td>Registration Services</td><td>617-449-7039</td></tr>
<tr><td>Boston Municipal Police</td><td>617-338-9134</td></tr>
</tbody></table>
<p>You can also report a crime online via the <a href="https://docs.google.com/forms/d/e/1FAIpQLSdXquj_mxIOOEjAKWJcwzU7VFVeB26n6MPGcnk1pNSXtnTGkA/viewform" target="_blank" rel="noopener noreferrer">reporting form</a> or by email to <a href="mailto:Rosana.perella@urbancollege.edu">Rosana.perella@urbancollege.edu</a>.</p>
<h4>Response to a Reported Crime</h4>
<p>The Boston Police Department will work with individuals reporting a crime to obtain information and conduct a thorough investigation. When appropriate, crime suspects may be adjudicated through the criminal justice system and/or the college.</p>
<h4>Campus Law Enforcement</h4>
<p>The Boston Police Department and respective law enforcement for alternative learning sites have full law enforcement authority, including the authority to make arrests, on campus and at alternative learning sites. The main campus has a municipal building officer on site who is a sworn officer of the Boston Police Department. Although there is no formal memorandum of understanding, Urban College maintains a healthy working relationship with the Boston Police Department and other local and state law enforcement and emergency response agencies.</p>`,
      },
      {
        id: 'hazing-policy',
        title: 'Hazing Policy',
        html: `
<p>All Urban College of Boston students are subject to the following act of the Massachusetts Legislature, which makes hazing a crime. Action will be initiated for alleged violation(s) under applicable sections of the Code of Student Conduct, and students may also be subject to lawsuits by victims of hazing. Chapter 269 of the General Laws provides the following three sections:</p>
<h4>Section 17: Penalty</h4>
<p>Whoever is a principal organizer or participant in the crime of hazing shall be punished by a fine of not more than three thousand dollars or by imprisonment in a house of correction for not more than one year, or both. "Hazing" means any conduct or method of initiation into any student organization, whether on public or private property, which willfully or recklessly endangers the physical or mental health of any student or other person. Such conduct includes whipping, beating, branding, forced calisthenics, exposure to the weather, forced consumption of any food, liquor, beverage, drug, or other substance, or any other brutal treatment or forced physical activity which is likely to adversely affect the physical health or safety of any such student or person, or which subjects such student or person to extreme mental stress, including extended deprivation of sleep or rest or extended isolation. Consent shall not be available as a defense to any prosecution under this action.</p>
<h4>Section 18: Duty to Report</h4>
<p>Whoever knows that another person is the victim of hazing and is at the scene of such crime shall, to the extent that they can do so without danger or peril to themselves or others, report such crime to an appropriate law enforcement official as soon as reasonably practicable. Whoever fails to report such crime shall be punished by a fine of not more than one thousand dollars.</p>
<h4>Section 19: Notice</h4>
<p>Each institution of postsecondary education shall issue to every student group, team, or organization a copy of sections 17, 18, and 19. Each such group shall distribute a copy to each of its members, plebes, pledges, or applicants for membership, and deliver annually an attested acknowledgment that it has received and agrees to comply with these sections. Each institution shall, at least annually before or at the start of enrollment, deliver to each full-time student a copy of these sections, and shall file an annual report certifying compliance and that it has adopted a disciplinary policy regarding the organizers and participants of hazing.</p>`,
      },
    ],
  },

  'about-ucb': {
    title: 'About Urban College of Boston',
    description: "General college information — articulation agreements, diversity/equity/inclusion, state authorization and NC-SARA, and campus location and services.",
    sourceUrl: 'https://catalog.urbancollege.edu/content.php?catoid=3&navoid=95',
    sections: [
      { id: 'articulation-agreements', title: 'Articulation Agreements', ref: 'articulation-agreements' },
      { id: 'diversity-equity-inclusion', title: 'Diversity, Equity, and Inclusion', ref: 'diversity-equity-inclusion' },
      { id: 'nc-sara', title: 'State Authorization and NC-SARA Information', ref: 'nc-sara' },
      { id: 'campus-location', title: 'Campus Location and Services', ref: 'campus-location-services' },
    ],
  },

  'student-supports': {
    title: 'Academic and Student Supports',
    description: 'Academic and student supports — disability and accessibility services and student activities.',
    sourceUrl: 'https://catalog.urbancollege.edu/content.php?catoid=3&navoid=101',
    sections: [
      { id: 'disability-accessibility', title: 'Disability and Accessibility Services', ref: 'disability-accessibility-services' },
      { id: 'student-activities', title: 'Student Activities', ref: 'student-activities' },
    ],
  },

  'financing-resources': {
    title: 'Financing and Resources',
    description: 'Applying for federal financial aid (Title IV), FAFSA, and the Return of Title IV Funds policy at Urban College of Boston.',
    sourceUrl: 'https://catalog.urbancollege.edu/content.php?catoid=3&navoid=98',
    sections: [
      {
        id: 'federal-financial-aid-application',
        title: 'Applying for Federal Financial Aid (Title IV)',
        html: `
<p><strong>Financial Services Department</strong><br>Email: <a href="mailto:financialservices@urbancollege.edu">financialservices@urbancollege.edu</a><br>Phone: For English 617-449-7429 or for Spanish 617-540-0122<br>Website: <a href="https://www.urbancollege.edu/financial-services-and-funding-options" target="_blank" rel="noopener noreferrer">urbancollege.edu/financial-services-and-funding-options</a></p>
<p>Urban College of Boston offers several options to help students fund their education. Depending on the program of study, Urban College offers state, City of Boston, and federal financial aid to all eligible students.</p>
<h3>Free Application for Federal Student Aid (FAFSA)</h3>
<p>Website: <a href="https://studentaid.gov/h/apply-for-aid/fafsa" target="_blank" rel="noopener noreferrer">studentaid.gov/h/apply-for-aid/fafsa</a> &middot; <strong>Urban College School Code for FAFSA: 031305</strong></p>
<p>Urban College strongly encourages all eligible students to complete the FAFSA for the appropriate award year. The FAFSA will determine eligibility for need-based aid, such as Pell Grants and Direct Subsidized Loans, and for non-need-based aid, such as Direct Unsubsidized Loans. The FAFSA can be completed at studentaid.gov with the Urban College School Code: 031305.</p>
<p>To be eligible for federal financial aid, including grants, loans, and work-study funds, a student must meet certain requirements:</p>
<ul><li>Be enrolled in a degree or certificate program.</li><li>Be a U.S. citizen or eligible non-citizen.</li><li>Not be in default on federal student loans.</li><li>Possess a High School diploma or equivalent.</li><li>Maintain Satisfactory Academic Progress.</li></ul>
<p>Students will need the following information to complete the FAFSA:</p>
<ul><li>Their parents' Social Security Numbers (SSNs) if they are a dependent student</li><li>Tax return information, including IRS W-2, IRS Form 1040, a foreign tax return or IRS Form 1040-NR, or a tax return for Puerto Rico, Guam, American Samoa, the U.S. Virgin Islands, the Marshall Islands, the Federated States of Micronesia, or Palau</li><li>Records of child support received</li><li>Current balances of cash, savings, and checking accounts</li><li>Net worth of investments, business, and farms</li><li>The student's driver's license number</li><li>The student's A-number if they are not a U.S. Citizen</li></ul>
<p><em>If students already have a completed 2025-2026 FAFSA application, they will need to add the Urban College School Code: 031305.</em></p>
<h4>Assistance with the Financial Aid Application</h4>
<p>Urban College staff can assist students who encounter difficulty completing the FAFSA. Contact the Financial Services Department at <a href="mailto:financialservices@urbancollege.edu">financialservices@urbancollege.edu</a> or by phone: For English 617-449-7429 or for Spanish 617-540-0122.</p>
<h4>Dependency Status Criteria</h4>
<p>The US Department of Education considers the following students to be independent of their parents for the purposes of offering federal financial aid for the 2025-2026 school year (July 1, 2025 through June 30, 2026):</p>
<ul>
<li>Students who were born before January 1, 2002.</li>
<li>Students who are married (and not separated).</li>
<li>Students who are veterans of the US Armed Forces.</li>
<li>Students who have children, or will have children, if they provide or will provide more than half of the support for the child.</li>
<li>Students who have dependents (other than a child or spouse) living with them, if they provide more than half of the support for the dependent.</li>
<li>Students who will be graduate/professional students in 2025-2026.</li>
<li>Students who are serving on active duty in the US Armed Forces for purposes other than training.</li>
<li>Students who are or were emancipated minors as determined by a court.</li>
<li>Students who are orphans or wards of the court, or were wards of the court as of age 13.</li>
<li>Students who are or were in a legal guardianship as determined by a court.</li>
<li>Students who are or were considered an unaccompanied youth who was homeless on or after May 1, 2025.</li>
</ul>
<p>Financial independence is not one of the criteria used to determine dependency. Parental data must be provided on the FAFSA for students unable to answer "yes" to one of the listed criteria. Urban College uses the US Department of Education's definition of dependency status for all federal and state aid programs.</p>
<h4>Prior Bachelor's Degree</h4>
<p>Students who possess a bachelor's degree prior to enrollment are not eligible for certain grant programs, including the Federal Pell Grant and Federal Supplemental Educational Opportunity Grant.</p>
<h4>FAFSA Follow Up</h4>
<p><strong>C-Flags, Verification, Unusual Enrollment History:</strong> In some instances, the College is required by federal and state regulations to verify the information on the FAFSA. After the FAFSA is signed, it is run through database matches (Social Security Administration, National Student Loan Data System, Department of Homeland Security). If a match fails, additional documentation may be required; failure to submit it may delay or cancel an offer. Knowingly submitting falsified information may result in refusal or cancellation of aid and referral to the Office of the Inspector General.</p>
<p><strong>FAFSA Corrections:</strong> Corrections are reported electronically to the Central Processing System (CPS). The school receives a corrected Institutional Student Information Report (ISIR) and the CPS notifies the student via a Student Aid Report (SAR).</p>
<p><strong>Duration &amp; Renewal of Aid:</strong> The FAFSA becomes available for the new aid year typically by October 1 (and no later than January 1 by law). Students must complete it each year to meet applicable deadlines.</p>
<p><strong>Cost of Attendance (COA):</strong> The COA is an estimate of a student's educational expenses for one academic year, including tuition, fees, books, miscellaneous expenses, transportation, and room &amp; board, based on on-campus, off-campus, or with-parent enrollment. For students attending less than half-time, the COA cannot include miscellaneous expenses, and the offer may not exceed the COA.</p>
<p><strong>Expected Family Contribution (EFC):</strong> The EFC is a measure of a family's financial strength calculated by a federal formula. It is an index number used to determine eligibility, not the amount the family must pay.</p>
<p><strong>Determining Financial Need:</strong> Financial need = COA minus EFC. Need-based aid includes Direct Subsidized Loans, Federal Pell Grants, and Federal Supplemental Educational Opportunity Grants (FSEOG).</p>
<p><strong>Financial Aid Offer Package:</strong> Once COA, EFC, and need are determined, the student receives a financial aid offer electronically. After review, the offer may be reduced or canceled by request to the Financial Services Department.</p>
<p><strong>Outside Resources:</strong> Outside resources (employer reimbursement, tuition waivers, private scholarships, fellowships) must be reported and included in the student's package. If the package exceeds the COA or need, it will be adjusted even if aid has already been disbursed.</p>
<p><strong>Use of Aid:</strong> Funds may be used only for education-related expenses incurred at the College for the respective academic year.</p>`,
      },
      {
        id: 'loan-counseling',
        title: 'Loan Counseling and Federal Student Loan Repayment Options',
        html: `
<h3>Loan Counseling</h3>
<h4>Entrance Counseling</h4>
<p>Federal law requires any student who has not previously received a subsidized or unsubsidized loan (or PLUS Loan) to complete Entrance Counseling. Its purpose is to help the student understand their rights and responsibilities in borrowing through the Direct Loan program — what a Direct Loan is, how the loan process works, how to manage educational expenses, other financial resources, and what repayment programs are available. Entrance Counseling can be completed online at <a href="https://studentaid.gov/entrance-counseling/" target="_blank" rel="noopener noreferrer">studentaid.gov</a> or through the Urban College Online Financing Portal.</p>
<h4>Financial Awareness Counseling</h4>
<p>Financial Awareness Counseling is not required by federal law, but Urban College encourages all students to complete it routinely to stay up to date with Direct Loan information — including understanding loans, managing spending, repayment plans, avoiding default, and prioritizing finances. It can be completed online at <a href="https://studentaid.gov/" target="_blank" rel="noopener noreferrer">studentaid.gov</a>.</p>
<h4>Exit Counseling</h4>
<p>Exit Counseling is a federal requirement for all students who received subsidized, unsubsidized, or PLUS loans under the Direct Loan Program or the Federal Family Education Loan (FFEL) Program, to be completed once the student graduates, leaves school, or drops below half-time enrollment. It reminds borrowers of their obligation to repay and covers deferment, forbearance, and avoiding default. Students receive an Exit Counseling Packet via their Urban College email if they withdraw or graduate, and can complete it online at <a href="https://studentaid.gov/exit-counseling/" target="_blank" rel="noopener noreferrer">studentaid.gov</a>.</p>
<h3>Federal Loan Repayment Options</h3>
<h4>Loan Repayment Responsibility</h4>
<p>It is the responsibility of the student borrower to repay student loans, even if financial circumstances become difficult. Borrowers can find several repayment options at <a href="https://studentaid.gov/" target="_blank" rel="noopener noreferrer">studentaid.gov</a>.</p>
<h4>Prepayment of Student Loans</h4>
<p>There are no penalties for paying on student loans prior to repayment or for making larger monthly payments than required; doing so reduces the total interest applied and the amount paid over the repayment period.</p>
<h4>Federal Student Aid Loan Simulator</h4>
<p>Urban College encourages students to use the Federal Student Aid Repayment Estimator to review and compare repayment options. It is available online at <a href="https://studentaid.gov/loan-simulator/" target="_blank" rel="noopener noreferrer">studentaid.gov/loan-simulator</a>.</p>
<h4>Deferment</h4>
<p>A deferment is a period during which payments of principal are postponed. No interest accrues on Direct Subsidized loans; interest is charged on Direct Unsubsidized Loans and may be paid or allowed to accrue and capitalize. Borrowers must meet specific eligibility criteria and request the deferment from their lender(s).</p>
<h4>Forbearance</h4>
<p>Forbearance is a period during which monthly loan payments are temporarily suspended or reduced. During forbearance, principal payments are postponed but interest continues to accrue. Visit <a href="https://studentaid.gov/h/manage-loans" target="_blank" rel="noopener noreferrer">studentaid.gov/h/manage-loans</a> to learn more about payment plans, deferment, and forbearance options.</p>`,
      },
      {
        id: 'return-of-title-iv-funds',
        title: 'Return of Title IV Funds',
        html: `
<p>Return of Title IV funds requirements apply to a Title IV grant and/or loan recipient (or eligible recipient) who withdraws or ceases attendance from Urban College of Boston before completing the payment period. The payment period is the academic period for which financial aid is offered and disbursed.</p>
<p>Urban College will perform a Return to Title IV calculation and notify the student of any Federal Student Aid (FSA) fund return within 30 days of the date of withdrawal or last date of attendance. Urban College has 45 days from the date of determination that the student withdrew to return all unearned FSA funds it is responsible to return.</p>
<p>Urban College divides the number of days attended by the number of days scheduled in the period (excluding breaks of five days or more) to determine the percent of earned aid. A student who has earned greater than 60% of the payment period is considered 100% earned. The percent earned multiplied by the total federal aid for the period is the amount earned; if greater than what was disbursed, the College may offer a post-withdrawal disbursement, and if less, the excess is unearned. The College returns the lesser of the unearned institutional charges or the total amount unearned.</p>
<h4>Return of Funds</h4>
<p>The College will return FSA to the programs from which the student received aid during the payment period, up to the net amount disbursed from each source, in the following order:</p>
<ul>
<li>Direct Unsubsidized Loan</li>
<li>Direct Subsidized Loan</li>
<li>Direct PLUS Loan</li>
<li>Federal Pell Grant</li>
<li>Federal Supplemental Education Opportunity Grant (FSEOG)</li>
<li>Iraq and Afghanistan Service Grant</li>
</ul>
<p>There is a 50% grant protection allowance built into the calculation, and students are not required to return unearned funds of $50 or less for Title IV grant programs. Students are responsible for immediate payment on resulting account balances. Title IV grant funds are typically repaid by the College, with the student responsible for payment to the College; Direct Loans are repaid per the student's signed Master Promissory Note (MPN).</p>
<h4>Post-Withdrawal Disbursement</h4>
<p>A student subject to a return of unearned aid may also be eligible for a portion of earned but undisbursed aid. Grants do not require authorization; Direct Loan funds require student authorization. Student Financial Services will notify the student in writing if they are eligible for a Direct Loan post-withdrawal disbursement; the student must sign and return the authorization within fourteen (14) days of the notice.</p>
<h4>Return of Title IV Fund Requirements</h4>
<p>Return of Title IV funds requirements <strong>do apply</strong> to a student who:</p>
<ul>
<li>Officially withdraws during a payment period; or</li>
<li>Unofficially withdraws during a payment period (stops attending without notification); or</li>
<li>Ceases attendance during a payment period.</li>
</ul>
<p>Return of Title IV funds requirements <strong>do not apply</strong> to a student who:</p>
<ul>
<li>Graduates during a payment period; or</li>
<li>Successfully completes 49% (a non-rounded percentage) of a payment period constructed of modules (earning a passing grade); or</li>
<li>Withdraws from some classes but remains enrolled in other courses during the same payment period; or</li>
<li>Never attended any classes, or for whom Urban College cannot document academic engagement in at least one class — in which case the student did not establish Title IV eligibility and all funds must be returned.</li>
</ul>`,
      },
      {
        id: 'withdrawal-drops-refunds',
        title: 'Withdrawal, Drops, and Refunds',
        html: `
<p>Students may drop courses during the first two weeks of the semester (the drop period) and not incur tuition charges. Courses dropped after the drop period are considered withdrawn and full tuition charges are assessed. Students with financial aid who withdraw from the semester are treated as withdrawn students for financial aid purposes; tuition owed and refunds are reviewed on a case-by-case basis (see <a href="/policies-disclosures/financing-resources#return-of-title-iv-funds">Return of Title IV Funds</a>).</p>
<h3>Tuition Refund</h3>
<p><strong>Course Drops and Administrative Course Drops:</strong></p>
<ul>
<li><strong>During Week 1</strong> (add/drop period): No tuition charged, or 100% refund if full payment was made.</li>
<li><strong>During Week 2</strong> (drop period): No tuition charged, or 100% refund if full payment was made.</li>
<li><strong>After Week 2</strong> (withdrawal period): 100% tuition charged, or no refund if payment was submitted.</li>
</ul>
<p><strong>Course Withdrawals and Administrative Course Withdrawals:</strong> Students are not eligible for any tuition refunds for course withdrawal(s) at any point in the semester.</p>
<p><strong>Semester Withdrawals and Administrative Semester Withdrawals:</strong></p>
<ul>
<li><strong>During Week 1</strong> (add/drop period): No tuition charged, or 100% refund if full payment was made.</li>
<li><strong>During Week 2</strong> (drop period): No tuition charged, or 100% refund if full payment was made.</li>
<li><strong>After Week 2</strong> (withdrawal period): 100% tuition charged, or no refund if payment was submitted.</li>
</ul>
<h4>Military Semester Withdrawal</h4>
<p>Enrolled active-duty military personnel may withdraw from a semester if they are deployed to a location that has no civilian internet access. A tuition refund requires a copy of military orders and a letter from the superior officer confirming the lack of civilian internet access. In appropriately documented cases, a student may withdraw with a full tuition refund if the withdrawal is predicated on an injury or illness directly related to military service (supporting medical documentation required).</p>
<h4>Registration and Tuition Refund Appeal Process</h4>
<p>Students may appeal for relief from a process, deadline, payment, or ruling in unusual circumstances such as the death of a student or an immediate family member, serious injury/accident, hospitalization, unexpected job loss, or homelessness. All appeals should begin with a conversation with the Director of Student Services and Support. The appeal process is limited to 15 days from the posting of the withdrawal from the course, and appeals are limited to one per student per semester. Students must complete their own appeal in English. The Committee's decisions are final.</p>
<h4>Refund Schedule</h4>
<ul>
<li><strong>Fall 2025</strong> (Sept 2 – Dec 22): courses starting Sept 2 — 100% refund on or before Sept 16, 2025, 0% after; courses starting Oct 28 — 100% on or before Nov 11, 2025, 0% after.</li>
<li><strong>Spring 2026</strong> (Jan 20 – May 18): courses starting Jan 20 — 100% on or before Feb 3, 2026, 0% after; courses starting Mar 24 — 100% on or before Apr 7, 2026, 0% after.</li>
<li><strong>Summer 2026</strong> (June 2 – July 27): courses starting June 2 — 100% on or before June 16, 2026, 0% after.</li>
</ul>`,
      },
    ],
  },

  'academic-policies': {
    title: 'Academic Policies',
    description: 'Standards of Satisfactory Academic Progress (SAP) for financial aid and Credit for Prior Learning (CPL) at Urban College of Boston.',
    sourceUrl: 'https://catalog.urbancollege.edu/content.php?catoid=3&navoid=103',
    sections: [
      {
        id: 'satisfactory-academic-progress',
        title: 'Standards of Satisfactory Academic Progress (SAP)',
        html: `
<p>Full-time students are expected to complete all requirements for the associate degree within three academic years. Part-time students will normally complete all degree requirements within six academic years.</p>
<p>The academic year is defined as two semesters and one summer session. Academic semesters or years do not need to be taken consecutively. Satisfactory progress is defined in terms of cumulative grade point average. To remain in good academic standing, the student must earn the minimum cumulative grade point averages outlined in the catalog. Satisfactory Academic Progress (SAP) indicates the successful completion of coursework towards a degree or certificate. (HEA Sec. 484(c); 34 CFR 668.16(e), 668.32(f), 668.34)</p>
<ul>
<li>Federal regulations require schools to monitor student progression within a degree or certificate. Students who fail to make satisfactory academic progress will lose their eligibility to receive Federal Student Aid.</li>
<li>Evaluations are performed based on the grades posted at the end of each payment period (Fall, Spring, Summer) prior to the next term begin date.</li>
<li>Students who progress to "suspension" will lose their aid eligibility but may appeal provided there are extenuating circumstances that inhibited their academic progress.</li>
<li>Students who wish to submit an appeal must follow the SAP Appeal Process.</li>
<li>If an appeal is approved, the student regains eligibility under a "probationary" status for one semester.</li>
<li>If an appeal is denied, the student can remain in their courses but must apply for another payment method to cover tuition.</li>
<li>When students change certificates or degrees, only credits that apply to the new program are counted toward qualitative and quantitative calculations.</li>
</ul>
<h3>SAP Measurements</h3>
<ul><li>Cumulative grade point average (qualitative)</li><li>Credit hour completion / program pace (quantitative)</li></ul>
<h4>Qualitative Standard</h4>
<p>Cumulative GPA is the qualitative measure of SAP. Students must maintain a minimum cumulative GPA based on the number of credit hours attempted:</p>
<table><thead><tr><th>Credit Hours Attempted</th><th>Cumulative GPA Required</th></tr></thead><tbody>
<tr><td>1 – 9</td><td>1.50</td></tr>
<tr><td>10 – 21</td><td>1.70</td></tr>
<tr><td>22 – 45</td><td>1.90</td></tr>
<tr><td>46+</td><td>2.00</td></tr>
</tbody></table>
<ul>
<li>Cumulative GPA is calculated after 3 undergraduate credits are completed.</li>
<li>Courses that receive a "W" do not calculate into CGPA.</li>
<li>If a failed course is retaken, the later grade replaces the failed grade in the CGPA.</li>
<li>Students who fail to meet CGPA requirements also fail SAP and will be denied Federal Student Aid, but may appeal in most cases.</li>
<li>Remedial/developmental courses are graded A–F but are not calculated into the student's CGPA.</li>
</ul>
<h4>Quantitative Standards</h4>
<p>Credit hour completion is the quantitative measure of SAP — students must complete 67% (standard rounding applies) of courses to maintain eligibility for Federal Student Aid, and cannot exceed the credits needed by more than 150%. The pace of completion ensures students finish within the allowed maximum time frame.</p>
<h4>Maximum Time Frame / Pace</h4>
<p>Urban College is a credit-hour school; each program is defined by a set number of credits. To complete within the maximum time frame, students must complete the program within 150% of the published credits. Students become ineligible for federal financial aid once they reach the 150% time frame.</p>
<ul>
<li>With the exception of remedial/developmental courses, all grades earned at the College count toward cumulative GPA.</li>
<li>The credit hours a student may attempt cannot exceed the maximum allowed in their program, less applicable accepted transfer credits.</li>
<li>All credits attempted count toward the maximum time frame except remedial/developmental or non-degree courses.</li>
<li>Once a student reaches 110% of their program's published credits and cannot finish within the maximum, all federal financial aid will stop.</li>
<li>Maximum time frame is not an appealable status.</li>
</ul>
<table><thead><tr><th>Program / Certificate</th><th>Credits Required</th><th>150% Maximum</th></tr></thead><tbody>
<tr><td>Associate Degrees</td><td>60</td><td>90</td></tr>
<tr><td>Early Childhood Education (Certificate)</td><td>27</td><td>40.5</td></tr>
<tr><td>Case Management; Clinical Research Coordinator; Elder Care; Human Services; Paraprofessional</td><td>21</td><td>31.5</td></tr>
<tr><td>Foundations of Early Childhood Education</td><td>19</td><td>28.5</td></tr>
<tr><td>Project Management; Business; Digital Marketing</td><td>18</td><td>27</td></tr>
<tr><td>Children's Behavioral Health</td><td>16</td><td>24</td></tr>
</tbody></table>
<h4>Coursework Included in the SAP Calculation</h4>
<ul>
<li>Undergraduate degree &amp; certificate courses with a final grade of A through F count toward credits attempted and completed.</li>
<li>Final grades of "W" count as attempted credits toward the completion rate; courses dropped during add/drop are not counted as attempted.</li>
<li>Grade changes are monitored and SAP is rechecked using new information.</li>
<li>Incomplete grades ("I") count as attempted but not earned; an incomplete later updated with a grade is picked up at the next SAP evaluation (a re-evaluation may be requested in writing to the Office of the Registrar).</li>
<li>Repeat coursework: all repeats count as credits attempted; a previously passed course may be repeated once and remain eligible for federal financial aid; the most recent grade is used in the GPA.</li>
<li>Transfer courses: program-applicable transfer credits count as attempted and completed toward pace/maximum time frame but are not counted toward GPA.</li>
</ul>
<h4>SAP Results</h4>
<ul>
<li><strong>Satisfactory (SAP Met):</strong> the student is achieving both standards and may continue to receive federal financial aid.</li>
<li><strong>Financial Aid Warning:</strong> the student is not meeting a standard after the most recent semester (from a SAP Met status) but remains eligible until the next evaluation.</li>
<li><strong>Financial Aid Suspension:</strong> failure to meet a standard suspends aid eligibility until the next evaluation; the student may continue taking coursework without aid and may appeal under extenuating circumstances.</li>
<li><strong>Financial Aid Probation:</strong> students placed on suspension with an approved appeal are placed on probation, and aid eligibility is reinstated.</li>
</ul>
<h4>SAP Appeals</h4>
<p>Students notified of financial aid suspension may submit a SAP appeal if extenuating circumstances beyond their control prevented normal academic success, including:</p>
<ul>
<li>Death of an immediate family member (spouse, significant other, parent, guardian, sibling, or child)</li>
<li>Major medical issues, including long-term care due to injury to the student or an immediate family member</li>
<li>Domestic violence</li>
<li>Involuntary call to active duty</li>
<li>National disaster / emergency relief</li>
<li>Involuntary loss of job</li>
<li>Homelessness</li>
<li>Other extraordinary circumstances (case-by-case)</li>
</ul>
<p><strong>SAP Appeal Form:</strong> the student must complete the Urban College of Boston Suspension Appeal Form explaining how the circumstance prevented them from meeting requirements, how their situation has changed, and their plan to get back on track.</p>
<p><strong>Academic Plan:</strong> as part of the appeal, the student must agree to an Academic Plan, which becomes part of the appeal file and must be followed.</p>
<p><strong>Appeal Committee Review:</strong> appeals are reviewed on an ongoing basis by the Review Committee; a decision is rendered within ten (10) business days of receiving all documentation and delivered via the student's Urban College email. Decisions are final.</p>
<p><strong>Approved Appeals:</strong> approved for one term only (unless a 2-semester appeal is specially approved). The student retains aid eligibility, is placed on SAP Monitoring (Probation) each subsequent term until reaching good standing, and must follow their academic plan.</p>
<p><strong>Denied Appeals:</strong> students who are denied are no longer eligible for Federal Financial Aid. To remain in courses, contact the Financial Services Department (<a href="mailto:financialservices@urbancollege.edu">financialservices@urbancollege.edu</a>) to secure other payment methods, or they will be administratively withdrawn by add/drop.</p>`,
      },
      {
        id: 'credit-for-prior-learning',
        title: 'Credit for Prior Learning (CPL)',
        html: `
<p>Phone: 617-960-0257<br>Email: <a href="mailto:academicaffairs@urbancollege.edu">academicaffairs@urbancollege.edu</a></p>
<p>Many people have developed skills and knowledge that may make them eligible for college credit. Individuals seeking college credits may apply to earn Credit for Prior Learning (CPL) — also known as Prior Learning Assessment (PLA) or life experience credit — based on job, training, military service, or other relevant life experiences. Since each person's situation is unique, students are advised to contact an academic advisor to begin the CPL process.</p>
<h3>Types of Evaluation and Assessment for CPL</h3>
<p>CPL is determined on a case-by-case basis by program, department, and course. Examples of how a student may earn CPL include:</p>
<ul>
<li>Advanced Placement (AP) exams and national standardized exams (CLEP, DSST, Excelsior)</li>
<li>Online course services credited by ACE for transfer (e.g., <a href="https://www.straighterline.com/" target="_blank" rel="noopener noreferrer">StraighterLine.com</a>)</li>
<li>ACE National Guide to College Credit for Workforce Training</li>
<li>ACE Military Guide and the Joint Services Transcript (JST)</li>
<li>National College Credit Recommendation Service (NCCRS)</li>
<li>License or credential review</li>
<li>Challenge exam or exercise</li>
<li>Portfolio development and review</li>
<li>National Portfolio Evaluation Service (<a href="https://www.learningcounts.org/" target="_blank" rel="noopener noreferrer">LearningCounts.org</a>)</li>
<li>International degrees and credits: Center for Educational Documentation (CED), World Education Services (WES)</li>
</ul>
<h3>Limitations of CPL</h3>
<ul>
<li>Students seeking an associate degree can apply a maximum of 18 CPL credits; the maximum for a certificate is 25% of the total credits (rounded down).</li>
<li>These credit limits count toward the total allowed transfer credits (39 for associate students and 9 for certificate students — see the <a href="/policies-disclosures/transfer-credit-policy">Transfer Credit Policy</a>).</li>
<li>A nominal, nonrefundable fee of $50/student is charged for CPL evaluation and credit.</li>
<li>CPL may not be transferable to another college, so check with the transfer institution to learn more.</li>
<li>General Education courses (science, math, humanities, social sciences) are generally not eligible for CPL except through national exams such as CLEP.</li>
<li>The College cannot evaluate subject areas where it has no matching courses or subject areas offered.</li>
</ul>`,
      },
      {
        id: 'course-withdrawal',
        title: 'Course Withdrawal and Administrative Course Withdrawal',
        html: `
<p>After the drop deadline, any course(s) that remain on a student's schedule is considered their final selection for that semester and will appear on their transcript as credits attempted and/or completed. Students who wish to drop their classes after the drop deadline may do so by withdrawing from a course and receiving a grade of "W" on the transcript. Withdrawn courses appear as credits attempted but no credits earned. Students continue to be financially responsible for withdrawn courses and are not eligible for a tuition refund.</p>
<p>Course withdrawals could have adverse implications for a student's <a href="/policies-disclosures/academic-policies#satisfactory-academic-progress">Satisfactory Academic Progress</a>. Students who do not maintain Satisfactory Academic Progress will experience an impact on financial aid eligibility.</p>
<p>If a student fails to post attendance for one class lesson week, they are at risk of an administrative course withdrawal. Immediately following the second consecutive missed attendance reporting deadline, the student will be administratively withdrawn from that course. Students who are administratively withdrawn receive a grade of "W" and are responsible for all tuition charges for that course.</p>`,
      },
      {
        id: 'semester-withdrawal',
        title: 'Withdrawal from the Semester and Administrative Withdrawal from the Semester',
        html: `
<p>If a leave of absence is scheduled to begin in a semester in which the student is currently enrolled, they will be withdrawn from that semester. After the start of the semester, students may only drop or withdraw from individual courses, but not all registered courses. If a registered student no longer wishes to continue after the start of the semester, they must withdraw from the semester. Students who cease to attend all their registered courses will be administratively withdrawn from the semester.</p>
<p>Students who withdraw from the semester will receive grades of "W" in all registered courses. A semester withdrawal may impact the student's <a href="/policies-disclosures/academic-policies#satisfactory-academic-progress">Satisfactory Academic Progress</a> and/or financial aid eligibility.</p>
<p>Students who wish to withdraw from a semester in the first week of classes and have not posted attendance in any registered courses may be eligible for a leave of absence beginning at the start of that semester. A final determination is made by the Registrar, based on the student's attendance record.</p>
<p>The deadline to withdraw from the semester is published in the Academic Calendar. Students may withdraw from the semester by submitting the Request a Leave of Absence or Withdrawal form.</p>`,
      },
    ],
  },
};
