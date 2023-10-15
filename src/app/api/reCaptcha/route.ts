import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const RECAPTCHA_SITE_KEY = process.env.RECAPTCHA_SITE_KEY;
  const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;


  try {
    https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}

    const sheet = doc.sheetsByIndex[0];
    const body = await request.json();

    await sheet.addRow(body);

    return NextResponse.json(
      { message: "Success: Row added to spreadsheet." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error: Row not added to spreadsheet." },
      { status: 400 }
    );
  }
}
