export const WHATSAPP_NUMBER = '5516993000388';
export const WHATSAPP_DISPLAY = '+55 16 99300-0388';

export const buildWhatsAppLink = (message?: string) => {
  const baseUrl = `https://wa.me/${WHATSAPP_NUMBER}`;

  if (!message) {
    return baseUrl;
  }

  return `${baseUrl}?text=${encodeURIComponent(message)}`;
};
