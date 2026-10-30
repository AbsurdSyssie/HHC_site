# Handforth Health Centre: questions before publication

## Status and context

Local migration draft only. Sources observed on 29 October 2026. **No practice facts have been confirmed by the practice. No one has signed off this website.** A source observation is not a clinical, legal, accessibility or practice review. All questions below remain open. The source site's own modification dates and NHS profile's "Last confirmed" date are not approval of this migration.

The user authorised replacement of fictional demo content, local draft preview, and subsequently creating a public GitHub copy at `AbsurdSyssie/HHC_site` and pushing the migrated source there. This does not authorise patient-site publication, enabling Pages, or changes to hosting, DNS or workflows. This administrative file lives outside `practice/pages/` and is not a patient page.

`demo: false` identifies real practice data; it is not evidence of approval. `site.content_last_reviewed` and `gp_earnings.financial_year` are deliberately blank, so normal checks and builds must fail. Filling those two validation fields alone does **not** make publication safe: every applicable question, core framework conflict, cutover dependency and sign-off item below remains a gate. Do not insert a guessed date/year or weaken the validator to make a preview or publication succeed. Resolve the questions and complete the sign-off checklist first.

## Blocking and safety-critical questions

### Q01: Practice ownership, new copy and future address

- **Context:** The user selected `AbsurdSyssie/HHC_site` for a new public source copy. The original upstream remote is retained, not a push destination. Practice ownership and account continuity still require confirmation. `site.url` records the existing source website, not an approved publishing destination; `custom_domain` remains empty.
- **Source:** [Existing website](https://www.handforthhealthcentre.nhs.uk/) and [copy/publication safeguards](../skill/gp-practice-website/references/github-fork.md).
- **Exact clarification requested:** Which practice-owned account and copy will hold this site, who controls the shared account and recovery details, what preview/live address is approved, and who may authorise publication? Confirm no publication should happen until the remaining sign-off is complete.

### Q02: Whole-site review and clinical safety sign-off

- **Context:** Nobody has approved any migrated fact. The content review date is empty and is an intentional build blocker. The observation date must never be shown as the practice's review date.
- **Source:** [Sign-off checklist](../skill/gp-practice-website/references/sign-off-checklist.md), [safety responsibilities](../SAFETY.md).
- **Exact clarification requested:** Who is the responsible practice approver and Clinical Safety Officer or equivalent, and will they check every sign-off item, confirm the full website is accurate and suitable, and provide their name and actual approval date? Until that happens, leave the review date empty.

### Q03: Identity, address and main telephone

- **Context:** N81070, 01625 529421 and SK9 3HL are source-observed. The old contact page omits "The Green"; the NHS and CQC records include it, so the draft includes it. No practice verification has taken place.
- **Source:** [Contact](https://www.handforthhealthcentre.nhs.uk/contact/), [NHS profile](https://www.nhs.uk/services/gp-surgery/handforth-health-centre/N81070/contact-details-and-opening-times), [CQC](https://www.cqc.org.uk/location/1-566349270).
- **Exact clarification requested:** Please compare the phone number with your phone system or letterhead and confirm the practice name, ODS code, full postal address including The Green, postcode, and that there are no other surgery sites to list.

### Q04: Reception hours, phone hours and closures

- **Context:** Contact and NHS pages agree on Mon/Tue/Thu/Fri 08:00-18:30, Wed 07:00-20:00, weekends closed. Appointments says phone Mon-Fri 08:00-18:30. NHS reception hours were last confirmed there on 21 October 2025. Extended Wednesday reception hours are not assumed to be phone hours. No future closures were migrated.
- **Source:** [Contact](https://www.handforthhealthcentre.nhs.uk/contact/), [appointments](https://www.handforthhealthcentre.nhs.uk/health-information/appointments/), [NHS opening times](https://www.nhs.uk/services/gp-surgery/handforth-health-centre/N81070/contact-details-and-opening-times).
- **Exact clarification requested:** Confirm opening hours and phone hours separately for every day, whether Wednesday extended access is appointment-only, any lunchtime restrictions, any branch/PCN hours, bank-holiday arrangements and upcoming training closures.

### Q05: Online consultation supplier, destination and hours

- **Context:** Appointments/contact link to `https://florey.accurx.com/p/N81070`; prescriptions uses `https://accurx.nhs.uk/patient-initiated/n81070/flows`; fit notes/contact messaging uses `https://accurx.nhs.uk/patient-initiated/n81070`. The homepage HTML also contains RapidHealth, PATCHS, Klinik, SystmConnect and Engage banners, which may be unused supplier-template content. The draft uses the appointments page's Accurx link as a candidate, not a confirmed supplier. Homepage text says 06:00-18:30 weekdays, unlike phone hours. No banner code, scripts or embeds were copied.
- **Source:** [Homepage](https://www.handforthhealthcentre.nhs.uk/), [appointments](https://www.handforthhealthcentre.nhs.uk/health-information/appointments/), [prescriptions](https://www.handforthhealthcentre.nhs.uk/health-information/prescriptions/), [fit notes](https://www.handforthhealthcentre.nhs.uk/health-information/sick-fit-notes/).
- **Exact clarification requested:** Which supplier and exact patient URL are currently active for appointments, prescriptions, results and administrative requests? Please open each required link as a patient, confirm the correct practice and request types, opening hours and weekend/bank-holiday behaviour, and explain whether the other homepage banners are obsolete template content. Provide supplier-issued code only if an embed is required.

### Q06: Prescription methods conflict with fixed template wording

- **Context:** The source says NHS App/account for repeats, Accurx for queries/non-repeat items, paper requests and no phone repeats. The unchanged framework prescriptions page also offers its general online form and pharmacy ordering, and includes a phone exception. Its homepage similarly suggests the online form for repeats. This is not established by the source. The extra prescription request information page preserves source-observed methods but does not resolve conflicting framework wording.
- **Source:** [Source prescriptions](https://www.handforthhealthcentre.nhs.uk/health-information/prescriptions/), [framework prescriptions](../src/prescriptions.njk), [framework homepage](../src/index.njk).
- **Exact clarification requested:** Confirm which repeat-ordering methods are accepted, whether pharmacy ordering or any telephone exception applies, the current paper-drop location, and whether the turnaround remains 3 working days plus potentially 2 pharmacy days. If fixed framework wording is wrong, authorise a separately reviewed configurable framework change before publication; an extra information page alone is not sufficient.

### Q21: NHS App booking wording conflicts with source

- **Context:** The fixed appointments page says patients can book directly through the NHS App. Source S028 withdrew direct NHS App bookings; the migrated source-derived information must not imply direct booking remains available. The fixed framework has not been changed.
- **Source:** [Source appointment information](https://www.handforthhealthcentre.nhs.uk/health-information/appointments/), [framework appointments](../src/appointments.njk), [inventory S028](CONTENT-INVENTORY.md).
- **Exact clarification requested:** Confirm the current NHS App appointment functions and booking route, including whether direct booking is still withdrawn. If fixed framework wording is inaccurate, authorise a separately reviewed framework correction before publication; do not treat the source observation as practice confirmation.

### Q07: GP earnings reporting year and declaration

- **Context:** The declaration posted 26 February 2026 says £72,086 before tax/NI, 1 full-time, 8 part-time and 1 locum working over six months. It only says "last financial year". The reporting year has not been inferred from the post date. Its missing value intentionally blocks the build.
- **Source:** [Latest earnings declaration](https://www.handforthhealthcentre.nhs.uk/2026/02/26/publication-of-earnings-4/).
- **Exact clarification requested:** What exact financial year do these figures cover, are the amount and GP counts correct, and is there a more recent approved declaration? Please supply the practice manager/accountant's declaration, not an estimate.

### Q08: Results and appointment workflow

- **Context:** The source results page uses "no news is good news"; that reassurance was deliberately not copied. Draft results retain doctor-reviewed results through NHS account/App and phone 10:00-16:00. The fixed framework's booking and routine/urgent wording also needs checking against the actual triage workflow. Cancellation by replying CANCEL or NHS App, and consultation preferences/interpreter requests are source-observed but not yet fully represented in fixed pages.
- **Source:** [Results](https://www.handforthhealthcentre.nhs.uk/health-information/test-results/), [appointments](https://www.handforthhealthcentre.nhs.uk/health-information/appointments/), [framework appointments](../src/appointments.njk).
- **Exact clarification requested:** Confirm the current results follow-up process, result phone hours and query route. Confirm appointment request, response, cancellation/change and access-support arrangements, including how patients who cannot use online services obtain help. Have a clinician check that migrated wording does not suggest silence guarantees a normal result.

### Q09: Registration boundary and online registration

- **Context:** The source links to the NHS N81070 registration service and embeds a boundary map, but no reliable textual boundary was extracted. The draft does not invent a list of places. The fixed register page links to generic NHS registration guidance; an extra page contains the practice-specific service link.
- **Source:** [Registration](https://www.handforthhealthcentre.nhs.uk/practice-information/new-patient-registration/), [change details](https://www.handforthhealthcentre.nhs.uk/practice-information/change-personal-details/).
- **Exact clarification requested:** Confirm the NHS registration destination, current acceptance of new patients, exact boundary in accessible words and a shareable map link if available. Confirm the out-of-area policy and current registration requirements, and approve the generic framework registration text against NHS requirements.

### Q10: Current privacy notice, data choices and Data Protection Officer

- **Context:** The old data page links 2023 documents and COVID-era material and explicitly marks the Cheshire Care Record site as not working. Its NHS Digital/data-sharing wording and consent forms may be stale. A holding page was used instead of inventing or silently modernising a legal notice. No legacy data-submission form was reproduced.
- **Source:** [Your Data](https://www.handforthhealthcentre.nhs.uk/policies/your-data/), [practice policies with same-host document links](https://www.handforthhealthcentre.nhs.uk/practice-information/).
- **Exact clarification requested:** Please ask the Data Protection Officer for the current approved privacy notice, controller/DPO contacts, records-access process and data-sharing/opt-out information, including current CCR/SCR links and AI-scribe processing. Can the holding page be used pending the full notice? Which legacy documents should be retained, replaced or retired, with accessible alternatives?

### Q11: Complaints contact and procedure

- **Context:** Source complaints go to the practice manager and promise acknowledgement in 3 working days and an investigation aim of 10. The old online complaints form collects sensitive information and was not copied. No public complaints email has been assumed.
- **Source:** [Complaints procedure](https://www.handforthhealthcentre.nhs.uk/policies/complaints-procedure/), [old form](https://www.handforthhealthcentre.nhs.uk/online-complaints-form/).
- **Exact clarification requested:** Confirm the complaints role/name, postal and telephone routes, any specifically approved complaints mailbox, current timescales, advocacy and escalation information, and the approved alternative to the old online form. Check the framework complaints page and approve the full current procedure.

## Content and operational questions

### Q12: Staff and listing permissions

- **Context:** Names and broad roles came from the team page (source modified August 2026). Qualifications, working days and clinical-scope claims were not copied. "Claire Farrell" spans HTML fragments and needs spelling confirmation. The infection statement names Amy Blake, absent from the team page.
- **Source:** [Team](https://www.handforthhealthcentre.nhs.uk/practice-information/meet-the-team/), [infection statement](https://www.handforthhealthcentre.nhs.uk/infection-control-statement/).
- **Exact clarification requested:** Confirm each listed person's name, role, current employment and consent to publication, Claire Farrell's spelling, any missing staff and the current infection-control lead. Are trainee and administrative-team descriptions required?

### Q13: Clinics, travel, self-referral and local directory

- **Context:** Only service categories were copied, not old clinical advice or eligibility promises. Some referral links use older organisations' domains, particularly Eastern Cheshire CCG physiotherapy. Travel says a form is sent by text; newer messaging information says email is now primary. Referral destination availability and suitability have not all been verified.
- **Source:** [Clinics](https://www.handforthhealthcentre.nhs.uk/health-information/clinics/), [self-referral](https://www.handforthhealthcentre.nhs.uk/self-refer/), [travel](https://www.handforthhealthcentre.nhs.uk/clinics-and-services/travel-vaccinations/), [local numbers](https://www.handforthhealthcentre.nhs.uk/useful-telephone-numbers/).
- **Exact clarification requested:** Confirm all listed services are currently offered, including ear syringing, and distinguish practice clinics from external services. Confirm each current self-referral URL, accessibility and geographic eligibility. Confirm travel enquiry method and form delivery channel. Which local service phone numbers are current and should be retained?

### Q14: Messages, email and replacing administrative forms

- **Context:** How-we-contact-you says email became the main channel in April 2026, but its email-update link contains an HTML error rather than a valid URL. NHS profile lists a registration mailbox; this has not been promoted as a general care address. Forms for carers, travel, PPG, feedback, complaints and changed details were not reproduced. The new requests page routes patients to reception and existing approved services instead.
- **Source:** [Contact messaging](https://www.handforthhealthcentre.nhs.uk/how-we-contact-you/), [forms index](https://www.handforthhealthcentre.nhs.uk/our-practice-forms-online/), [NHS contact details](https://www.nhs.uk/services/gp-surgery/handforth-health-centre/N81070/contact-details-and-opening-times).
- **Exact clarification requested:** Confirm email/SMS/NHS App/phone use and response arrangements. In particular, does the practice still use email as its main contact method, should patients check their inbox after triage, and may urgent follow-up be by phone? Confirm whether any response or acknowledgement is guaranteed, expected response times, and a safe route for updating email addresses (the source email-update form link was broken). Is any mailbox intended for public use, and for what purpose? For each removed form, approve a phone/in-person or supplier-hosted alternative, including identity/consent requirements. Do not request a new patient-data form on this static website.

### Q15: AI consultation notes notice

- **Context:** Homepage notice dated 18 July 2025 describes AI scribe use and opt-out. The migrated page preserves the optional nature and manual-notes alternative, not unsupported guarantees of security, accuracy or benefit. No AI code is running here.
- **Source:** [Homepage AI Medical Scribes notice](https://www.handforthhealthcentre.nhs.uk/).
- **Exact clarification requested:** Is the scribe still used, what supplier/version and data processing apply, is the described opt-out route current, and what patient notice and FAQ has the Data Protection Officer approved? Approve the new consultation-notes page and provide an accessible current notice.

### Q16: Infection control and other policy currency

- **Context:** The full statement is dated 12 October 2025 and promises update by 12 October 2026, despite a 2026 sitemap modification date and 2026 news announcement. The draft links to it without claiming it is current. Codes/zero-tolerance policies are old and potentially sensitive, including removal-of-household wording, so only short administrative signposting was retained.
- **Source:** [Statement](https://www.handforthhealthcentre.nhs.uk/infection-control-statement/), [duplicate policy](https://www.handforthhealthcentre.nhs.uk/policies/5301/), [zero tolerance](https://www.handforthhealthcentre.nhs.uk/policies/zero-tolerance/), [codes](https://www.handforthhealthcentre.nhs.uk/policies/codes-of-practice/).
- **Exact clarification requested:** Supply the approved 2026 infection-control statement and current lead/review dates. Which current versions of confidentiality, freedom-of-information, access and respectful-behaviour policies should be published? Have the relevant owner review them rather than silently copying outdated legal wording.

### Q17: Patient Participation Group

- **Context:** Several overlapping PPG pages and historic minutes/documents exist. New draft uses the current overview's purpose and 3-4 meetings/year and refers joining requests to reception. Personal chair contact details, old minutes and sign-up forms were not copied.
- **Source:** [PPG overview](https://www.handforthhealthcentre.nhs.uk/ppg-patients-participation-group/), [minutes](https://www.handforthhealthcentre.nhs.uk/ppg-minutes/), [chair welcome](https://www.handforthhealthcentre.nhs.uk/chairs-welcome/).
- **Exact clarification requested:** Confirm current chair, meeting arrangements, approved public contact and whether consent exists to publish it. Which minutes, newsletters and achievements documents should be retained, redacted or archived?

### Q18: Physical access and parking

- **Context:** Homepage mentions library-shared parking and School Road pay-and-display parking. Generic disabled-access policy does not prove specific facilities. No step-free, hearing-loop or toilet claims were inferred.
- **Source:** [Homepage parking notice](https://www.handforthhealthcentre.nhs.uk/), [practice policies](https://www.handforthhealthcentre.nhs.uk/practice-information/), [NHS facilities](https://www.nhs.uk/services/gp-surgery/handforth-health-centre/N81070/facilities).
- **Exact clarification requested:** Confirm current parking arrangements, accessible bays, step-free route, accessible toilet, hearing loop, interpreting/communication assistance and how patients request support. Is any car-park monitoring in operation or merely a historical proposal?

### Q19: Accessibility statement and links

- **Context:** Draft statement preparation is recorded as 29 October 2026, not audit or approval. No full accessibility audit or phone/tablet/desktop inspection of this blocked build has occurred. The NHS App source includes two unusable `file:///C:/...` PDF links, which were omitted. External documents/services may be inaccessible.
- **Source:** [NHS App support](https://www.handforthhealthcentre.nhs.uk/nhs-app-and-technical-support/), [generated statement template](../src/accessibility-statement.njk).
- **Exact clarification requested:** Who will test the final site, external services and documents for accessibility and approve the statement? Supply web-accessible, accessible replacements for the missing PDFs if still needed. Confirm the feedback contact and any known issues after real testing, and approve the statement's framework claims.

### Q20: News, archives, licences and redirects

- **Context:** All 122 sitemap URLs were fetched and inventoried. Old campaigns, clinical text, duplicates, staff author archives, third-party embeds and patient forms were not copied indiscriminately. Source documents/images may have rights restrictions. Old path redirects and search indexing have not been changed; internal framework paths differ from many old URLs. Existing-source links may become self-referential or break if the old domain is later moved.
- **Source:** [Sitemap](https://www.handforthhealthcentre.nhs.uk/sitemap.xml), [news archive](https://www.handforthhealthcentre.nhs.uk/category/practicenews/), [inventory](CONTENT-INVENTORY.md).
- **Exact clarification requested:** Which news, veteran-accreditation announcement, campaign pages, PPG history and downloads must be retained? Confirm permission to reuse content/assets and any required attribution. Who will approve a source-to-target redirect plan, replace **all** old-domain links/downloads (including fit notes, prescription requests, privacy and infection-control links) before switching addresses, and review link health and search indexing? These are publication blockers, not post-cutover tidy-up. No domain migration should proceed without this work.

## Final approval record

- Practice confirmation: **not received**.
- Clinical/content sign-off: **not received**.
- Data protection/legal approval: **not received**.
- Accessibility review: **not completed**.
- Phone and supplier-link patient checks: **not completed by the practice**.
- Public source-copy creation and push: **authorised by the user; not patient-site approval**.
- Patient-site publication/hosting change permission: **not granted for this draft**.
- Required sign-off checklist: **all 16 items awaiting practice confirmation**.

Record answers with the respondent, evidence and actual date here or in the practice's own approval record. Only then update patient content and the review date. A successful technical check alone would not constitute approval.

**Publication gate:** All open questions and framework conflicts (including Q06 and Q21), current practice approvals, all applicable sign-off checklist items, and old-domain/link/redirect cutover work in Q20 must be resolved before publication. Completing only the two blank validation fields does not satisfy these gates.
