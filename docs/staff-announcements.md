# Staff homepage announcement editor

Use **Pages CMS** to edit homepage service announcements without touching
the site's design, opening hours, or clinical safety information.

## Initial setup (site manager)

1. Merge the pull request that introduces `.pages.yml`.
2. Open https://app.pagescms.org/ and sign in with GitHub.
3. Install/authorise the Pages CMS GitHub App for **AbsurdSyssie/HHC_site**
   only (use the option to grant access to selected repositories).
4. Open the repository on the **main** branch.
5. Open the **Homepage announcements** collection.
6. In Pages CMS, find **Collaborators / Invite collaborator** for the repository,
   enter the staff member's work email, and send an invitation. Only a repository
   administrator can manage collaborators; this step cannot be performed by the
   GitHub file changes alone.
7. The staff member accepts the invite and signs in to Pages CMS with the
   invited email. GitHub access is not required for email collaborators.

## Staff: publish a test announcement

1. Open https://app.pagescms.org/ and select **HHC_site**.
2. Choose **Homepage announcements** and **New**.
3. Enter a headline and plain-text announcement.
4. Leave **Show on homepage** enabled, or disable it for a draft.
5. Optionally set an **Expiry date**. Leave it blank otherwise.
6. Save the entry. This makes a GitHub commit; it does not itself publish
   the website. Check that the configured Cloudflare Pages project deploys
   commits from `main`.
7. Open the deployed homepage and verify the NHS-style **Important** banner.
8. To withdraw the test, edit the notice and turn off **Show on homepage**, save,
   wait for a successful deployment, and verify it is gone.

## Important operational notes

- This editor is for **public homepage notices only**, not patient messages.
- Site notices already present in `practice/practice.yaml` remain supported.
- A failed Cloudflare build means staff changes will not appear. Have a manual
  emergency update procedure and an alternate way to alert patients.
- Expiry dates are evaluated during the build: an expired notice does not
  automatically disappear at midnight unless a new deployment occurs.
- Staff without GitHub accounts can be invited as Pages CMS collaborators;
  they cannot manage CMS configuration or invite other collaborators.
- For urgent service changes, use an approved practice workflow and verify the
  exact published wording and live status.
