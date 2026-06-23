import React from 'react';

// Content for internal Consumer Information sub-pages, migrated from the college
// catalog. Each entry is rendered by pages/ConsumerInfoPage.tsx at
// /policies-disclosures/<slug>. Keep prose faithful to the source; `sourceUrl`
// links back to the authoritative catalog page.

export interface ConsumerPage {
  title: string;
  description: string;
  sourceUrl?: string;
  content?: React.ReactNode;
  html?: string;
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
};
