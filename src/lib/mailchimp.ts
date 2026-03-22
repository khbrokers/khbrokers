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
  signup_page?: string;
}

export async function addToMailchimp(subscriber: MailchimpSubscriber) {
  const [firstName, ...rest] = (subscriber.name || "").split(" ");
  const lastName = rest.join(" ");

  // Build merge_fields dynamically — only include non-empty values
  // so tags that don't exist in Mailchimp yet won't break the request
  const merge_fields: Record<string, string> = {};
  merge_fields.FNAME = firstName || "Subscriber";
  if (subscriber.phone) merge_fields.PHONE = subscriber.phone;
  if (subscriber.budget) merge_fields.MMERGE12 = subscriber.budget;
  if (subscriber.utm_source) merge_fields.UTM_SOURCE = subscriber.utm_source;
  if (subscriber.utm_medium) merge_fields.UTM_MEDIUM = subscriber.utm_medium;
  if (subscriber.utm_campaign) merge_fields.UTM_CAMP = subscriber.utm_campaign;
  if (subscriber.utm_content) merge_fields.UTM_CONTEN = subscriber.utm_content;
  if (subscriber.utm_term) merge_fields.UTM_TERM = subscriber.utm_term;
  if (subscriber.signup_page) merge_fields.MMERGE2 = subscriber.signup_page;
  if (subscriber.lookingFor) merge_fields.MMERGE13 = subscriber.lookingFor;
  if (subscriber.ownership) merge_fields.MMERGE14 = subscriber.ownership;

  const res = await fetch(
    `https://${SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${btoa(`anystring:${API_KEY}`)}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: subscriber.email,
        status: "subscribed",
        merge_fields,
      }),
    }
  );

  if (!res.ok) {
    const data = await res.json();
    // Don't fail signup if user is already subscribed
    if (data.title === "Member Exists") return { success: true, alreadyExists: true };
    console.error("Mailchimp error:", JSON.stringify(data, null, 2));
    return { success: false, error: data.detail || data.title };
  }

  return { success: true };
}
