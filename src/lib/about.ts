export interface AboutCompany {
  name:        string;
  tagline:     string;
  description: string;
  founded:     string;
  location:    string;
}

export interface AboutValue {
  index:       string;
  title:       string;
  description: string;
}

export interface TeamMember {
  name:      string;
  role:      string;
  education: string;
  bio:       string;
  image:     string;
  github:    string;
  linkedin:  string;
  portfolio: string;
}

export interface AboutData {
  company: AboutCompany;
  values:  AboutValue[];
  tech:    string[];
  team:    TeamMember[];
}

function unquote(s: string): string {
  return s.trim().replace(/^["']|["']$/g, "").replace(/\\n/g, "\n");
}

function parseAbout(raw: string): AboutData {
  // Normalize line endings
  const lines = raw.replace(/\r\n/g, "\n").replace(/\r/g, "\n").split("\n");

  // Strip frontmatter delimiters
  let start = -1, end = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim() === "---") {
      if (start === -1) { start = i + 1; }
      else              { end = i; break; }
    }
  }
  const fm = start > -1 ? lines.slice(start, end > -1 ? end : undefined) : lines;

  const company: Record<string, string> = {};
  const values:  AboutValue[]           = [];
  const tech:    string[]               = [];
  const team:    TeamMember[]           = [];

  let section = "";
  let cur: Record<string, string> = {};

  const flushCur = () => {
    if (section === "values" && cur.index) { values.push({ ...cur } as unknown as AboutValue); cur = {}; }
    if (section === "team"   && cur.name)  { team.push({ ...cur }  as unknown as TeamMember);  cur = {}; }
  };

  for (const raw of fm) {
    const line = raw.trimEnd();
    if (!line) continue;

    if (/^company:\s*$/.test(line)) { flushCur(); section = "company"; continue; }
    if (/^values:\s*$/.test(line))  { flushCur(); section = "values";  continue; }
    if (/^tech:\s*$/.test(line))    { flushCur(); section = "tech";    continue; }
    if (/^team:\s*$/.test(line))    { flushCur(); section = "team";    continue; }

    const indent = line.match(/^(\s*)/)?.[1].length ?? 0;

    if (section === "company" && indent === 2) {
      const m = line.match(/^\s+(\w+):\s*(.+)$/);
      if (m) company[m[1]] = unquote(m[2]);
    }

    if (section === "values" || section === "team") {
      // Handle "  - key: val" (inline) and "  -" (standalone dash)
      const inlineItem = line.match(/^\s+-\s+(\w+):\s*(.+)$/);
      if (inlineItem) {
        flushCur();
        cur = { [inlineItem[1]]: unquote(inlineItem[2]) };
      } else if (indent === 2 && line.trimStart() === "-") {
        flushCur();
        cur = {};
      } else {
        const m = line.match(/^\s+(\w+):\s*(.+)$/);
        if (m) cur[m[1]] = unquote(m[2]);
      }
    }

    if (section === "tech" && indent === 2) {
      const m = line.match(/^\s+-\s*(.+)$/);
      if (m) tech.push(unquote(m[1]));
    }
  }

  flushCur();

  return {
    company: {
      name:        company.name        ?? "",
      tagline:     company.tagline     ?? "",
      description: company.description ?? "",
      founded:     company.founded     ?? "",
      location:    company.location    ?? "",
    },
    values,
    tech,
    team,
  };
}

const files = import.meta.glob("/content/about/index.md", {
  query:  "?raw",
  import: "default",
  eager:  true,
}) as Record<string, string>;

const raw = Object.values(files)[0] ?? "";
export const about: AboutData = parseAbout(raw);
