import { db } from "@/utils/firebase";
import { doc, getDoc } from "firebase/firestore";
import { NextResponse } from "next/server";
import { authenticate } from "@/utils/auth";

export async function GET(request) {
  const res = NextResponse;
  const { auth, message } = await authenticate();

  if (auth !== 200) {
    return res.json(
      { message: `Authentication Error: ${message}` },
      { status: auth },
    );
  }

  const room = request.nextUrl.searchParams.get("roomid");
  const snapshot = await getDoc(doc(db, "rooms", room));
  if (!snapshot.exists()) {
    return res.json({ message: "Invalid Team ID" }, { status: 500 });
  }
  return res.json({ message: "OK" }, { status: 200 });
}
