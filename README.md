# ETEC 565T Course Website

**Live site:** https://ubclddi.github.io/course-website-template/

Each `.md` file here is one page on the site. Edit them on GitHub, and the site updates in 1 to 2 minutes. No programming needed.

## Edit a page

1. Click the file (e.g. `schedule.md`), then the **pencil icon** ✏️.
2. Make your changes. Use the **Preview** tab to check.
3. Click **Commit changes**.

⚠️ Don't delete the lines between the two `---` at the top of each page. They set the page's name (`title`) and its position in the menu (`nav_order`, lowest at the top).

## Formatting

| Type                               | To get                                                      |
| ---------------------------------- | ----------------------------------------------------------- |
| `## Heading`                       | Section heading (also added to "On this page" on the right) |
| `**bold**` / `*italic*`            | **bold** / _italic_                                         |
| `[Canvas](https://canvas.ubc.ca)`  | A link                                                      |
| `- Item`                           | Bullet point                                                |
| `![Description](images/photo.jpg)` | An image                                                    |

Tables: copy an existing row and change the text. Keep the `|---|---|` line under the header row.

## Add a page

**Add file** → **Create new file**, name it like `office-hours.md`, and start it with:

```
---
layout: default
title: Office Hours
nav_order: 6
---
```

To put it under a dropdown in the menu, add `parent: Project Materials` (the parent's exact title). The parent page needs `has_children: true`.

## Add a PDF or image

**Add file** → **Upload files**. Type a folder before the name (e.g. `files/syllabus.pdf`), with no spaces in the name. Then link it: `[Syllabus](files/syllabus.pdf)`.

## If something goes wrong

- **Change not showing?** Wait 2 minutes, then hard-refresh (Cmd/Ctrl + Shift + R).
- **Red ❌ in the Actions tab?** Usually the top `---` section was changed. To restore an older version, open the file, click **History**, and copy back the old version.
- **Still stuck?** Contact [Name], [email@ubc.ca].

---

Content licensed under [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/). Site template adapted from the [UBC Library Research Commons workshop template](https://github.com/ubc-library-rc/rc-workshop-template), based on [Just the Docs](https://github.com/just-the-docs/just-the-docs).
