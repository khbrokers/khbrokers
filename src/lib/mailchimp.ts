import { createHash } from "crypto";

const API_KEY = process.env.MAILCHIMP_API_KEY!;
const SERVER = process.env.MAILCHIMP_SERVER_PREFIX!;
const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID!;

interface MailchimpSubscriber {
  email: string;
  name?: string;
  phone?: string;
  budget?: string;
  ownership?: string;
  lookingFor?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  gclid?: string;
  utm_adgroup?: string;
  utm_device?: string;
  utm_loc_physical?: string;
  signup_page?: string;
}

function subscriberHash(email: string) {
  return createHash("md5").update(email.toLowerCase()).digest("hex");
}

export async function addToMailchimp(subscriber: MailchimpSubscriber) {
  console.log("🟡 API KEY BEING USED:", API_KEY);
  console.log("🟡 MAILCHIMP CALLED WITH:", subscriber.email);

  const [firstName, ...rest] = (subscriber.name || "").split(" ");
  const lastName = rest.join(" ");

  const merge_fields: Record<string, string> = {};
  merge_fields.FNAME = firstName || "Subscriber";
  if (lastName) merge_fields.LNAME = lastName;
  if (subscriber.phone) merge_fields.PHONE = subscriber.phone;
  if (subscriber.budget) merge_fields.MMERGE12 = subscriber.budget;
  if (subscriber.utm_source) merge_fields.UTM_SOURCE = subscriber.utm_source;
  if (subscriber.utm_medium) merge_fields.UTM_MEDIUM = subscriber.utm_medium;
  if (subscriber.utm_campaign) merge_fields.UTM_CAMP = subscriber.utm_campaign;
  if (subscriber.utm_content) merge_fields.UTM_CONTEN = subscriber.utm_content;
  if (subscriber.utm_term) merge_fields.UTM_TERM = subscriber.utm_term;
  if (subscriber.gclid) merge_fields.GCLID = subscriber.gclid;
  if (subscriber.utm_adgroup) merge_fields.UTM_ADGRP = subscriber.utm_adgroup;
  if (subscriber.utm_device) merge_fields.UTM_DEVICE = subscriber.utm_device;
  if (subscriber.utm_loc_physical) merge_fields.UTM_LOC_PH = subscriber.utm_loc_physical;
  if (subscriber.signup_page) merge_fields.MMERGE2 = subscriber.signup_page;
  if (subscriber.lookingFor) merge_fields.MMERGE13 = subscriber.lookingFor;
  if (subscriber.ownership) merge_fields.MMERGE14 = subscriber.ownership;

  const hash = subscriberHash(subscriber.email);
  const url = `https://${SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members/${hash}`;

  try {
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        // ✅ Buffer.from instead of btoa
        Authorization: `Basic ${Buffer.from(`anystring:${API_KEY}`).toString("base64")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: subscriber.email,
        status_if_new: "subscribed",
        merge_fields,
      }),
    });

    const data = await res.json();
    console.log("🟡 MAILCHIMP RESPONSE:", JSON.stringify(data));

    if (!res.ok) {
      console.error("❌ MAILCHIMP ERROR:", data.detail || data.title);
      return { success: false as const, error: data.detail || data.title };
    }

    console.log("✅ MAILCHIMP SUCCESS");
    return { success: true as const, alreadyExists: false };
  } catch (error) {
    console.error("❌ MAILCHIMP NETWORK ERROR:", error);
    return { success: false as const, error: (error as Error).message };
  }
}

