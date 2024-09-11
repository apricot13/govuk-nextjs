"use server";
import { cookies } from "next/headers";

export async function setConsentCookie(value: boolean) {
  console.log("setConsentCookie");
  // const cookieStore = cookies();
  // cookieStore.set("consentCookie", value.toString(), {
  //   path: "/",
  //   maxAge: 31536000, // 1 year
  //   sameSite: "strict",
  // });
}
