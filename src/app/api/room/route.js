import { db } from "@/utils/firebase";
import { doc, getDoc } from "firebase/firestore";
import { NextResponse } from "next/server";
import { authenticate } from "@/utils/auth";
import { storage } from "@/utils/firebase";
import { uploadString, ref } from "firebase/storage";

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

export async function PUT(request) {
  const res = NextResponse;
  const { img } = await request.json();
  const roomID = request.nextUrl.searchParams.get("roomID");
  const { auth, message } = await authenticate();

  const metadata = {
    contentType: "image/png",
  };

  if (auth !== 200) {
    return res.json(
      { message: `Authentication Error: ${message}` },
      { status: auth },
    );
  }

  try {
    const imgRef = ref(storage, `rooms/${roomID}/board.png`);

    uploadString(imgRef, img, "data_url").then((snapshot) => {
      console.log("Uploaded Canvas!");
    });

    return res.json({ message: "OK" }, { status: 200 });
  } catch (err) {
    return res.json(
      { message: `Internal Server Error: ${err}` },
      { status: 500 },
    );
  }
}
