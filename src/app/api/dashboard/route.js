import { db } from "@/utils/firebase";
import {
  doc,
  collection,
  updateDoc,
  addDoc,
  arrayUnion,
} from "firebase/firestore";
import { NextResponse } from "next/server";
import { authenticate } from "@/utils/auth";
export async function POST(request) {
  const res = NextResponse;
  const { auth, message, user } = await authenticate();

  if (auth !== 200) {
    return res.json(
      { message: `Authentication Error: ${message}` },
      { status: auth },
    );
  }

  try {
    const newRoom = {
      users: [],
      roles: {
        admin: [user.id],
        editor: [],
      },
    };
    const docRef = await addDoc(collection(db, "rooms"), newRoom);
    await updateDoc(doc(db, "users", user.id), {
      rooms: arrayUnion(docRef.id),
    });
    return res.json(
      {
        message: "OK",
      },
      { status: 200 },
    );
  } catch (error) {
    return res.json(
      { message: `Internal Server Error: ${error}` },
      { status: 500 },
    );
  }
}
