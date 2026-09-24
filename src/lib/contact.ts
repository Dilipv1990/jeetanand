// TODO: replace with the centre's real number (digits only, with country code).
export const PHONE = "919999999999";
export const PHONE_DISPLAY = "+91 99999 99999";

export const telHref = `tel:+${PHONE}`;

export function whatsappHref(message = "Hi, I'd like to know more about classes at Prachi Yoga Center.") {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}
