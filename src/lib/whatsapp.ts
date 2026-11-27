// Número de WhatsApp de TRUFI (con código de país, sin "+" ni espacios).
// TODO: es un número de ejemplo; reemplazarlo por el real cuando lo entreguen.
export const WHATSAPP_NUMBER = "573001234567";

const WHATSAPP_MESSAGE =
  "Hola, me interesa obtener información sobre los créditos de libranza de TRUFI.";

// Enlace que usan el botón flotante y los botones de solicitar crédito
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
