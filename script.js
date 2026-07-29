// Registra como conversão todo clique que abre uma conversa no WhatsApp.
document.addEventListener('click', (event) => {
  const whatsappLink = event.target.closest('a[href*="wa.me/"]');

  if (!whatsappLink || typeof gtag !== 'function') {
    return;
  }

  gtag('event', 'conversion', {
    send_to: 'AW-18356739448/Hg_WCP614NgcEPi6lrFE'
  });
});
