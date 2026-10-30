# Handforth Health Centre migration inventory

## Evidence, scope and safety

Source: <https://www.handforthhealthcentre.nhs.uk/sitemap.xml>, retrieved 29 October 2026. Sitemap header reports generation on 27 October 2026. All **122 listed URLs returned HTTP 200** during a read-only crawl. HTTP success does not establish accuracy, currency, accessibility or an active supplier. Main-page text and links were inspected for migration; this is not a clinical review of every article, downloadable document or external destination. Source HTML/JSON working archives are in `/tmp/opencode/handforth-source/`, not public website output or a durable archive.

Every source path below is relative to **https://www.handforthhealthcentre.nhs.uk**. Targets are proposed local paths, not evidence that a site has been published. Each row records a disposition, including deliberate non-migration. No source URL was silently treated as unnecessary just because it was absent from the main navigation. The news category and pagination are additional navigation entry points, not separate articles in the sitemap.

**All migrated facts are source-observed, not practice-confirmed.** See [MIGRATION-QUERIES.md](MIGRATION-QUERIES.md) for exact questions and blocking issues. This inventory and the questions file are outside `pages/` and are not rendered as patient pages. Normal build remains blocked by missing practice review and the unnamed GP earnings reporting year.

### Disposition key

- **Draft:** factual administrative content mapped to data or a new page; still requires practice approval.
- **Consolidate:** overlap merged into a shorter administrative page, with historic detail withheld.
- **NHS links:** do not copy clinical advice; use the NHS health-information links instead.
- **Hold:** retain in this inventory for owner review, not in patient-facing news/content.
- **No form:** do not rebuild patient-data collection. Provide reception/supplier routes through `/practice-requests/`.
- **Historical earnings:** do not substitute older figures for the latest declaration; obtain reporting year approval.

## Full sitemap disposition (122 URLs)

| ID | Source path | Draft target / decision | Review question |
| --- | --- | --- | --- |
| S000 | `/` | Draft identity/parking/online-contact data; `/consultation-notes/`, PPG overview; old campaigns not copied | Q03-Q05, Q15, Q18 |
| S001 | `/infection-control-statement/` | `/infection-control/`: link to source, do not claim overdue statement is current | Q16 |
| S002 | `/how-we-contact-you/` | `/how-we-contact-you/`: signposting; broken email-update link omitted | Q14 |
| S003 | `/our-practice-forms-online/` | Consolidate `/practice-requests/`, no forms or preview links copied | Q14 |
| S004 | `/ppg-patients-participation-group/` | Draft `ppg` data and `/patient-participation-group/` | Q17 |
| S005 | `/nhs-app-and-technical-support/` | Draft `/nhs-app-and-technical-support/`, NHS help links only | Q19 |
| S006 | `/travel-form/` | No form; `/travel-vaccinations/` and reception route | Q13-Q14 |
| S007 | `/ppg-sign-up-form/` | No form; `/patient-participation-group/` and reception | Q17 |
| S008 | `/rebuilding-general-practice-2/` | Hold campaigning/overlap, not republished as current access guidance | Q20 |
| S009 | `/online-complaints-form/` | No form; `/complaints/` | Q11 |
| S010 | `/rebuilding-general-practice/` | Hold campaigning/overlap | Q20 |
| S011 | `/you-and-your-general-practice/` | Hold; owner to select current external NHS information | Q20 |
| S012 | `/carer-form/` | No form; `/practice-requests/`, reception route | Q14 |
| S013 | `/change-your-contact-details-online-form/` | No form; `/change-personal-details/` | Q14 |
| S014 | `/4449-2/` | Hold opaque legacy page; do not infer a new patient service from slug | Q20 |
| S015 | `/health-information/think-pharmacy-first/` | NHS links via `/health-information/`, no clinical text copied | Q13 |
| S016 | `/self-refer/` | Draft `/self-refer/`, source-observed external links, no embedded forms | Q13 |
| S017 | `/practice-information/change-personal-details/` | Draft `/change-personal-details/`, identity paperwork details require approval | Q14 |
| S018 | `/your-ppg/` | Consolidate `/patient-participation-group/` | Q17 |
| S019 | `/ppg-minutes/` | Hold historical documents pending currency/redaction review | Q17 |
| S020 | `/benefits-of-a-ppg/` | Consolidate `/patient-participation-group/` | Q17 |
| S021 | `/chairs-welcome/` | Hold chair-specific/historical wording pending consent | Q17 |
| S022 | `/patient-participation-group/` | Consolidate current PPG overview at same local path | Q17 |
| S023 | `/practice-information/new-patient-registration/` | Draft `registration` data, `/register/`, `/new-patient-registration/` | Q09 |
| S024 | `/useful-telephone-numbers/` | Hold local directory pending telephone/destination checks | Q13 |
| S025 | `/health-information/sick-fit-notes/` | Draft `/fit-notes/`, NHS guidance link instead of copied advice | Q05, Q08 |
| S026 | `/health-information/test-results/` | Draft `/test-results/` data; omit "no news is good news" | Q08 |
| S027 | `/health-information/prescriptions/` | Draft turnaround data and `/prescription-requests/`; framework conflict unresolved | Q06 |
| S028 | `/health-information/appointments/` | Draft supplier/phone data for `/appointments/`; workflow approval pending | Q05, Q08 |
| S029 | `/health-information/talking-saves-lives/` | NHS mental-health links via `/health-information/`; no copied clinical advice | Q13 |
| S030 | `/health-information/who-do-i-see/` | NHS links and `/services/`, no new triage instructions | Q13 |
| S031 | `/health-information/live-well/` | NHS Live Well link via `/health-information/` | Q13 |
| S032 | `/practice-information/friends-family-test/` | No feedback form/widget; reception via `/practice-requests/` | Q14 |
| S033 | `/form-success/` | Omit obsolete submission confirmation; no local forms | Q14 |
| S034 | `/health-information/find-a-local-service/` | NHS service links via `/health-information/`; local directory held | Q13 |
| S035 | `/online-services/` | Consolidate `/practice-requests/` and `/nhs-app-and-technical-support/` | Q05, Q14 |
| S036 | `/health-information/clinics/` | Draft `services` categories for `/services/`, no medical advice | Q13 |
| S037 | `/practice-information/meet-the-team/` | Draft `team` for `/our-team/`, names/broad roles only | Q12 |
| S038 | `/health-information/` | Draft `/health-information/` NHS links and local navigation | Q13 |
| S039 | `/practice-information/` | Consolidate `/about/`, `/practice-policies/`, complaints/privacy/infection pages | Q10-Q11, Q16 |
| S040 | `/contact/` | Draft `/contact/`, `/opening-times/` and phone/site data | Q03-Q04, Q18 |
| S041 | `/2026/10/23/sexual-health-clinics-are-free-and-available-to-all-2/` | Hold campaign; NHS links instead | Q20 |
| S042 | `/2026/10/10/today-marks-world-mental-health-day/` | Hold campaign; NHS links instead | Q20 |
| S043 | `/2026/10/05/did-you-know/` | Hold campaign; NHS links instead | Q20 |
| S044 | `/2026/10/04/breast-cancer-awareness-month/` | Hold campaign; NHS links instead | Q20 |
| S045 | `/2026/10/03/national-hygiene-week-7th-13th-october/` | Hold campaign; NHS links instead | Q20 |
| S046 | `/2026/10/02/back-care-awareness-week-2nd-8th-october/` | Hold campaign; NHS links instead | Q20 |
| S047 | `/2026/10/01/symptoms-and-treatments-for-raynauds/` | Hold clinical article; NHS links instead | Q20 |
| S048 | `/2026/10/01/october-is-stoptober/` | Hold campaign; NHS links instead | Q20 |
| S049 | `/2026/10/01/breast-cancer-awareness-month-october/` | Hold duplicate campaign; NHS links instead | Q20 |
| S050 | `/2026/10/01/go-sober-for-october/` | Hold campaign; NHS links instead | Q20 |
| S051 | `/2026/10/01/adhd-awareness-month-october/` | Hold campaign; NHS links instead | Q20 |
| S052 | `/2026/10/01/national-cholesterol-month-october/` | Hold campaign; NHS links instead | Q20 |
| S053 | `/2026/10/01/speak-up-month-october/` | Hold campaign; NHS links instead | Q20 |
| S054 | `/2026/10/01/black-history-month-october/` | Hold campaign | Q20 |
| S055 | `/2026/09/25/turn-on-nhs-app-notifications/` | Consolidate official help into `/nhs-app-and-technical-support/`, no dated news | Q14, Q20 |
| S056 | `/2026/09/22/its-now-easier-than-ever-to-update-your-organ-donation-decision/` | Hold campaign | Q20 |
| S057 | `/2026/09/15/nhs-rolls-out-discreet-home-testing-kits-against-cervical-cancer/` | Hold clinical/news claim; no service availability inferred | Q20 |
| S058 | `/2026/09/08/support-your-practice-this-flu-season/` | Hold seasonal campaign; no current clinics invented | Q13, Q20 |
| S059 | `/2026/09/08/please-support-your-practice-get-your-flu-vaccines-here/` | Hold seasonal campaign; no current clinics invented | Q13, Q20 |
| S060 | `/policies/5301/` | Consolidate `/infection-control/`, retain duplicate for review | Q16 |
| S061 | `/2026/08/19/handforth-health-centre-annual-infection-control-statement/` | Consolidate `/infection-control/`, statement currency unresolved | Q16 |
| S062 | `/2026/06/26/the-power-to-quit-smoking-is-in-your-hands/` | Hold campaign; NHS links instead | Q20 |
| S063 | `/2026/06/15/dont-miss-your-cervical-screening-updates-on-the-nhs-app/` | Hold campaign; NHS links instead | Q20 |
| S064 | `/2026/06/11/baby-and-toddler-screen-time-guidance/` | Hold clinical article; NHS links instead | Q20 |
| S065 | `/2026/06/11/out-of-hours-and-emergencies/` | Framework urgent help remains unchanged on every page | Q02 |
| S066 | `/2026/06/11/better-health-24-7-breastfeeding-support/` | Hold campaign/directory claim | Q20 |
| S067 | `/2026/06/11/3-reasons-not-to-miss-your-appointment/` | Hold news; appointment cancellation workflow needs approval | Q08 |
| S068 | `/2026/06/11/nhs-healthy-living-programme-type-2-diabetes/` | Hold clinical/service claim; NHS links instead | Q20 |
| S069 | `/2026/06/11/whats-your-heart-age/` | Hold campaign; no interactive tools embedded | Q20 |
| S070 | `/2026/06/11/pharmacies-offer-free-blood-pressure-checks/` | Hold eligibility/service claims; NHS links instead | Q20 |
| S071 | `/2026/06/11/new-call-back-service-available/` | Hold until current telephone workflow confirmed | Q04, Q08 |
| S072 | `/2026/06/11/think-pharmacy-first/` | Hold duplicate campaign; NHS links instead | Q20 |
| S073 | `/2026/06/11/sexual-health-clinics-are-confidential-free-and-available-to-everyone/` | Hold campaign; NHS links instead | Q20 |
| S074 | `/2026/06/11/your-pharmacy-can-check-your-blood-pressure-for-free/` | Hold duplicate eligibility claim; NHS links instead | Q20 |
| S075 | `/2026/06/11/make-sure-you-have-your-eyes-tested/` | Hold campaign; NHS links instead | Q20 |
| S076 | `/2026/06/11/urgent-help-for-mental-health/` | No clinical text copied; framework urgent help and NHS mental-health links | Q02, Q20 |
| S077 | `/2026/06/11/the-nhs-app-can/` | Consolidate official help into `/nhs-app-and-technical-support/` | Q14 |
| S078 | `/2026/06/11/contraception-free-on-nhs/` | Hold clinical/eligibility article; NHS links instead | Q20 |
| S079 | `/2026/06/11/detect-bowel-cancer-early/` | Hold clinical campaign; NHS links instead | Q20 |
| S080 | `/2026/06/11/check-your-blood-pressure/` | Hold clinical campaign; NHS links instead | Q20 |
| S081 | `/2026/06/11/think-pharmacy-first-2/` | Hold duplicate campaign; NHS links instead | Q20 |
| S082 | `/2026/06/11/view-messages-in-the-nhs-app/` | Consolidate official help into `/nhs-app-and-technical-support/` | Q14 |
| S083 | `/2026/06/11/tap-the-app-to-request-your-repeat-prescription/` | Consolidate `/prescription-requests/`; NHS account route | Q06 |
| S084 | `/2026/06/11/require-urgent-dental-care/` | Hold directory/clinical article; no local phone copied unverified | Q13, Q20 |
| S085 | `/2026/06/11/abdominal-aortic-aneurysm-aaa-screening/` | Hold clinical campaign; NHS links instead | Q20 |
| S086 | `/2026/05/28/important-update/` | Hold dated operational notice pending owner review | Q20 |
| S087 | `/2026/03/19/public-health-update-meningitis-b/` | Hold dated public-health advice; no stale alert republished | Q20 |
| S088 | `/2026/02/26/publication-of-earnings-4/` | Draft `gp_earnings`; year missing, `/about/` blocked | Q07 |
| S089 | `/2026/02/12/children-under-6-now-offered-the-mmrv/` | Hold clinical/eligibility article; NHS links instead | Q20 |
| S090 | `/2026/01/09/mmrv-replaces-the-mmr-vaccine/` | Hold clinical/eligibility article; NHS links instead | Q20 |
| S091 | `/2025/11/04/veteran-friendly-accredited-status/` | Hold accreditation claim for current confirmation | Q20 |
| S092 | `/clinics-and-services/travel-vaccinations/` | Draft `/travel-vaccinations/`, administrative requests only | Q13 |
| S093 | `/2025/02/26/publication-of-earnings-3/` | Historical earnings retained in inventory, not current figures | Q07, Q20 |
| S094 | `/2024/04/16/publication-of-earnings-2/` | Historical earnings retained in inventory | Q07, Q20 |
| S095 | `/clinics-and-services/non-diabetic-hyperglycaemia/` | Service name consolidated in `/services/`; NHS links, no clinical text | Q13 |
| S096 | `/clinics-and-services/chronic-kidney-disease/` | Service name consolidated in `/services/`; NHS links | Q13 |
| S097 | `/clinics-and-services/chronic-heart-disease/` | Service name consolidated in `/services/`; NHS links | Q13 |
| S098 | `/clinics-and-services/hypertension/` | Service name consolidated in `/services/`; NHS links | Q13 |
| S099 | `/clinics-and-services/c-o-p-d/` | Service name consolidated in `/services/`; NHS links | Q13 |
| S100 | `/clinics-and-services/diabetes/` | Service name consolidated in `/services/`; NHS links | Q13 |
| S101 | `/clinics-and-services/asthma/` | Service name consolidated in `/services/`; NHS links | Q13 |
| S102 | `/clinics-and-services/hormone-replacement-therapy/` | Service name consolidated in `/services/`; NHS links | Q13 |
| S103 | `/clinics-and-services/family-planning/` | Service name consolidated in `/services/`; NHS links | Q13 |
| S104 | `/clinics-and-services/pneumonia-vaccinations/` | Service name consolidated in `/services/`; NHS links | Q13 |
| S105 | `/clinics-and-services/shingles-vaccinations/` | Service name consolidated in `/services/`; NHS links | Q13 |
| S106 | `/clinics-and-services/influenza-vaccinations/` | Service name consolidated in `/services/`; NHS links | Q13 |
| S107 | `/clinics-and-services/post-natal-care/` | Service name consolidated in `/services/`; NHS links | Q13 |
| S108 | `/clinics-and-services/baby-immunisations/` | Service name consolidated in `/services/`; NHS links | Q13 |
| S109 | `/clinics-and-services/smear/` | Service name consolidated as cervical screening in `/services/`; NHS links | Q13 |
| S110 | `/clinics-and-services/ear-syringing/` | Service name consolidated in `/services/`, needs current availability check | Q13 |
| S111 | `/clinics-and-services/implants/` | Service name consolidated in `/services/`; NHS links | Q13 |
| S112 | `/clinics-and-services/coil/` | Service name consolidated in `/services/`; NHS links | Q13 |
| S113 | `/clinics-and-services/stop-smoking/` | Service name consolidated in `/services/`; NHS links | Q13 |
| S114 | `/clinics-and-services/sexual-health/` | Service name consolidated in `/services/`; NHS links | Q13 |
| S115 | `/clinics-and-services/anticoagulation-clinic/` | Service name consolidated in `/services/`; NHS links | Q13 |
| S116 | `/clinics-and-services/physiotherapy/` | Service name consolidated in `/services/` and referral link in `/self-refer/` | Q13 |
| S117 | `/2023/10/24/publication-of-earnings/` | Historical earnings retained in inventory | Q07, Q20 |
| S118 | `/policies/complaints-procedure/` | Draft `/complaints/`, postal manager route, no sensitive form copied | Q11 |
| S119 | `/policies/zero-tolerance/` | Short signposting `/practice-policies/`; do not transplant removal policy unreviewed | Q16 |
| S120 | `/policies/codes-of-practice/` | Short freedom-of-information signposting `/practice-policies/`; legal/access claims held | Q16 |
| S121 | `/policies/your-data/` | `/privacy-notice/` holding page; old documents pending DPO approval | Q10 |

## New local information architecture

The framework remains unchanged. Its navigation still supplies appointments, prescriptions, opening times, contact, registration, team, services, about, news, results and required policies. Practice-specific extra pages are discoverable through **Services → More information**, which the existing framework generates automatically from `practice/pages/`. This migration does not edit core templates to imitate the source navigation or inject source JavaScript.

Additional pages: change-personal-details, consultation-notes, fit-notes, health-information, how-we-contact-you, infection-control, new-patient-registration, nhs-app-and-technical-support, patient-participation-group, practice-policies, practice-requests, prescription-requests, self-refer and travel-vaccinations. The privacy holding page replaces fictional privacy material. Fictional notices, closures, news, staff, addresses, phone numbers, links and earnings have been removed from active practice content.

### Evidence for practice data

| Data | Source | Decision |
| --- | --- | --- |
| Practice name, telephone, postal address and reception hours | [Contact](https://www.handforthhealthcentre.nhs.uk/contact/), [NHS contact/hours](https://www.nhs.uk/services/gp-surgery/handforth-health-centre/N81070/contact-details-and-opening-times) | Draft with NHS/CQC's additional address line "The Green"; confirmation pending |
| ODS N81070 | [NHS profile](https://www.nhs.uk/services/gp-surgery/handforth-health-centre/N81070), source registration link | Draft, practice confirmation pending |
| Phone hours | Source appointments/cancellation instructions | Kept separate from reception hours |
| Online service | Source appointments/contact pages, homepage opening-hours paragraph | Candidate Accurx URL; conflicts captured in Q05 |
| Staff names and roles | Source team page | Broad roles, no working days, qualifications or clinical scope added |
| Clinic names | Source clinics index | Categories only, no copied advice or eligibility |
| GP earnings | Latest source declaration S088 | Values copied, reporting year deliberately absent |
| CQC location | [CQC location 1-566349270](https://www.cqc.org.uk/location/1-566349270) fetched directly | Link only, no rating widget or hard-coded rating |
| Parking | Source homepage | Library-shared car park and School Road alternative only |
| PCN/ICB, general email, physical accessibility facilities, boundary map | No sufficient confirmed source supplied | Optional fields omitted, not guessed |

## Downloads and assets: retained as evidence, not blindly copied

Source pages link documents on both the practice domain and `practice365.co.uk`. These are a dependency risk if the old supplier or domain changes. None has been locally republished or represented as DPO-approved/accessibility-checked. Listing is based on observed anchors, not a full download-content/legal audit. Before domain cutover, approved documents need an accessible, stable home and reviewed links. No logo, stock image, tracking pixel, video, third-party stylesheet, cookie script, map embed, consultation widget or complaints form was imported.

| Source page | Observed document or asset group | Decision / issue |
| --- | --- | --- |
| S121 and S039 | `GDPR-Privacy-Notice.docx` | DPO to supply current approved version; holding page used |
| S121 and S039 | `Access-to-Medical-Records-Leaflet-X.pdf`, `Request-for-Access-to-Records.pdf` | Hold for current process, accessibility and identity checks |
| S121 and S039 | `GDPR-Patient-Privacy-Notice-leaflet-.pdf`, `GDPR-Fair-Processing-Notice.pdf` | Hold for DPO/legal review |
| S121 and S039 | `Patient-Information-for-Young-People.pdf`, `GDPR-Patient-Leaflet_.pdf`, `GDPR-Young-person-privacy-notice.pdf` | Hold, obtain current accessible versions |
| S121 and S039 | `GDPR-Supplementary-Privacy-Notice-_COVID19_April.pdf` | Hold dated emergency-era notice; do not assume current |
| S121 and S039 | `Opt-Out-Type-1.docx`, `CCR.SCR_.Care-data-info-and-opt-out.docx` | Hold consent/data-sharing paperwork; CCR link explicitly marked not working |
| S118 and S039 | `Handforth-Health-Centre-Complaint-Form.docx`, `Advocacy-Support-The-Complaints-Process.docx` | No hosted patient form, obtain current approved process |
| S017 | `Change-of-Address-NEW-2019.doc` | Hold legacy form; reception route provided |
| S004 and PPG cluster | `PPg-achievements.pdf`, `PPG-report-2019.pdf`, `Improvements-Feb-2019_.pdf`, `community-health-2019_.pdf`, meeting minutes | Hold historical documents for retention, consent and redaction review |
| S005 | NHS App step-by-step PDF and volunteer guide PDF | Source links point at a local Windows filesystem, unusable for patients; omitted |
| S000 | `UK-patient-explainer-digital.docx` AI-scribe explainer | Hold for current supplier/DPO approval; optionality preserved in new page |

## Navigation and crawl limits

- Main source navigation: Home, Appointments, Prescriptions, Our Practice, Health Information, Self Refer, News and Contact. News points to `/category/practicenews/`; homepage also links `/page/2/`. These listing/pagination URLs were observed but not exhaustively crawled for articles outside the sitemap.
- All 122 sitemap page requests succeeded. Download URLs, external supplier destinations, every NHS health-information URL and external referral services were not all fetched or exercised end to end. No form was submitted and no patient information was collected.
- NHS profile and CQC location were independently fetched. The initial guessed NHS `/opening-times` route returned 404; the actual source-linked `/contact-details-and-opening-times` route was then fetched successfully. It agrees on reception hours and labels them last confirmed 21 October 2025.
- HTTP 200 does not guarantee a form works. Source email-update markup is malformed; two PDF links are local file paths. Those were not reproduced.
- No redirects have been installed. Old-domain links in holding/signposting pages require resolution before moving that domain. The inventory is a migration decision record, not a completed redirect configuration.
- No externally hosted source scripts were executed as part of the text crawl. No source logos/images were copied without rights review. No attempt was made to reconstruct an inaccessible or absent document.
- No real-practice build/visual approval can be claimed while the existing safety gate rejects missing sign-off data. Independent risk review and full patient-journey checks remain outstanding.
