import { promises as fs } from "fs";
import path from "path";

type MetricsSchema = {
  pageviews: {
    projects: Record<string, number>;
  };
  deduplicate: Record<string, Record<string, number>>; // slug -> ipHash -> unix ms
};

const METRICS_PATH = path.join(process.cwd(), "data", "metrics.json");

async function readMetricsFile(): Promise<MetricsSchema> {
  try {
    const data = await fs.readFile(METRICS_PATH, "utf8");
    return JSON.parse(data) as MetricsSchema;
  } catch (err: any) {
    if (err && (err.code === "ENOENT" || err.code === "ENOTDIR")) {
      const initial: MetricsSchema = { pageviews: { projects: {} }, deduplicate: {} };
      await ensureDir(path.dirname(METRICS_PATH));
      await fs.writeFile(METRICS_PATH, JSON.stringify(initial, null, 2), "utf8");
      return initial;
    }
    throw err;
  }
}

async function ensureDir(dir: string) {
  await fs.mkdir(dir, { recursive: true });
}

async function writeMetricsFile(data: MetricsSchema): Promise<void> {
  await ensureDir(path.dirname(METRICS_PATH));
  await fs.writeFile(METRICS_PATH, JSON.stringify(data, null, 2), "utf8");
}

// Views analytics removed; file kept to avoid breaking imports if any linger


