# Homepage announcements

This folder is managed by Pages CMS at https://app.pagescms.org/.

Create an announcement in the **Homepage announcements** collection. Each notice is stored
as a YAML file with `title`, `text`, `published`, and optional `expires` fields.

Only published, non-expired notices appear in NHS notification banners on the
home page. Saving a notice commits to GitHub; the host must deploy the new commit
before patients see it. Confirm the live page actually updated.

**Important:** expiry dates are checked at build time, not continuously. A notice
with an expiry date will stay visible until another successful build runs.
For an urgent removal, turn off **Show on homepage** or delete the notice and
verify the updated public site after deployment.

Do not include patient-identifiable data, confidential information or medical
advice in homepage announcements. Practice staff must verify all public content
and keep emergency access information accurate.
