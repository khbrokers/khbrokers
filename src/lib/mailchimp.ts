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
}

export async function addToMailchimp(subscriber: MailchimpSubscriber) {
  const [firstName, ...rest] = (subscriber.name || "").split(" ");
  const lastName = rest.join(" ");

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
        merge_fields: {
          FNAME: firstName || "",
          LNAME: lastName || "",
          PHONE: subscriber.phone || "",
          BUDGET: subscriber.budget || "",
          OWNERSHIP: subscriber.ownership || "",
          LOOKINGFOR: subscriber.lookingFor || "",
        },
      }),
    }
  );

  if (!res.ok) {
    const data = await res.json();
    // Don't fail signup if user is already subscribed
    if (data.title === "Member Exists") return { success: true, alreadyExists: true };
    console.error("Mailchimp error:", data.detail || data.title);
    return { success: false, error: data.detail || data.title };
  }

  return { success: true };
}
