import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const filePath = path.join(process.cwd(), "app/json-data/contact.json");

    // Read existing data
    const fileData = fs.existsSync(filePath)
      ? JSON.parse(fs.readFileSync(filePath, "utf8"))
      : [];

    // Add timestamp
    const newEntry = {
      ...body,
      createdAt: new Date().toISOString(),
    };

    fileData.push(newEntry);

    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2));

    return NextResponse.json(
      { message: "Data saved successfully" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to save data" },
      { status: 500 },
    );
  }
}
