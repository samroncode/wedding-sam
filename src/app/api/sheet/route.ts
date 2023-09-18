import { JWT } from "google-auth-library";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const GOOGLE_SERVICE_ACCOUNT_EMAIL =
    process.env.NEXT_PUBLIC_GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY =
    process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;

  const serviceAccountAuth = new JWT({
    email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"]
  });

  const doc = new GoogleSpreadsheet(
    "1CY-t9kOsbRXQCmQymhcEtdjUgue_Y_pz_RoRXJeo5XE",
    serviceAccountAuth
  );

  try {
    await doc.loadInfo();

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
