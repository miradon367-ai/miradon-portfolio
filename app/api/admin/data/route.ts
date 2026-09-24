import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const dataDir = path.join(process.cwd(), "data");

    const [
      profileRaw,
      projectsRaw,
      servicesRaw,
      testimonialsRaw,
      metricsRaw,
      toolsRaw,
    ] = await Promise.all([
      fs.readFile(path.join(dataDir, "profile.json"), "utf8"),
      fs.readFile(path.join(dataDir, "projects.json"), "utf8"),
      fs.readFile(path.join(dataDir, "services.json"), "utf8"),
      fs.readFile(path.join(dataDir, "testimonials.json"), "utf8"),
      fs.readFile(path.join(dataDir, "metrics.json"), "utf8"),
      fs.readFile(path.join(dataDir, "tools.json"), "utf8"),
    ]);

    return NextResponse.json({
      profile: JSON.parse(profileRaw),
      projects: JSON.parse(projectsRaw),
      services: JSON.parse(servicesRaw),
      testimonials: JSON.parse(testimonialsRaw),
      metrics: JSON.parse(metricsRaw),
      tools: JSON.parse(toolsRaw),
    });
  } catch (error) {
    console.error("Error reading data files:", error);
    return NextResponse.json(
      { error: "Failed to read content files." },
      { status: 500 }
    );
  }
}
