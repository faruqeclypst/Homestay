// src/hooks/useWhatsAppLink.ts

const useWhatsAppLink = () => {
    const phoneNumber = '6282285134141';
  
    const openWhatsApp = (customMessage?: string) => {
      const defaultMessage = 'Halo, saya tertarik untuk booking Aiza Homestay.';
      const message = encodeURIComponent(customMessage || defaultMessage);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
      window.open(whatsappUrl, '_blank');
    };
  
    return openWhatsApp;
  };
  
  export default useWhatsAppLink;