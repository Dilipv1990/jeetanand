// TODO: replace with the centre's real number (digits only, with country code).
export const PHONE = "919999999999";
export const PHONE_DISPLAY = "+91 99999 99999";

export const telHref = `tel:+${PHONE}`;

export const ADDRESS_LINE = "S-K102, Sector 116";
export const ADDRESS_CITY = "Noida, Uttar Pradesh";
export const ADDRESS_FULL = `${ADDRESS_LINE}, ${ADDRESS_CITY}`;
export const NEAREST_METRO = ["Noida Sector 52", "Noida Sector 76"];

const mapsQuery = encodeURIComponent(`${ADDRESS_LINE}, Noida`);
export const mapsHref = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
export const mapsEmbedSrc = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;

export function whatsappHref(message = "Hi, I'd like to know more about classes at Prachi Yoga Center.") {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}
