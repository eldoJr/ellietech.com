export interface Project {
  slug:        string;
  title:       string;
  description: string;
  category:    string;
  tech:        string[];
  live?:       string;
  year:        string;
  order:       number;
  image:       string;
}

function parseFrontmatter(raw: string): Record<string, unknown> {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};
  const result: Record<string, unknown> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const colon = line.indexOf(":");
    if (colon === -1) continue;
    const key = line.slice(0, colon).trim();
    const val = line.slice(colon + 1).trim();
    if (val.startsWith("[")) {
      result[key] = val.slice(1, -1).split(",").map((s) => s.trim().replace(/^"|"$/g, "").replace(/^'|'$/g, ""));
    } else {
      result[key] = val.replace(/^"|"$/g, "").replace(/^'|'$/g, "");
    }
  }
  return result;
}

const files = import.meta.glob("/content/projects/*/index.md", {
  query:  "?raw",
  import: "default",
  eager:  true,
}) as Record<string, string>;

export const projects: Project[] = Object.entries(files)
  .map(([path, raw]) => {
    const data = parseFrontmatter(raw);
    const slug = path.split("/")[3];
    return {
      slug,
      title:       data.title       ?? "",
      description: data.description ?? "",
      category:    data.category    ?? "",
      tech:        data.tech        ?? [],
      live:        data.live,
      year:        data.year        ?? "",
      order:       data.order       ?? 99,
      image:       `/projects/${slug}.png`,
    } as Project;
  })
  .sort((a, b) => a.order - b.order);
