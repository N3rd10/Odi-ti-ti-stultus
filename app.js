document.addEventListener("DOMContentLoaded", () => {
  const translationsContainer = document.getElementById("translationsContainer");
  
  const translations = [
    { language: "Spanish (es)", translation: "Te odio, idiota." },
    { language: "French (fr)", translation: "Je te déteste, idiot." },
    { language: "German (de)", translation: "Ich hasse dich, du Idiot." },
    { language: "Chinese (Simplified) (zh-Hans)", translation: "我恨你，你这个白痴。" },
    { language: "Arabic (ar)", translation: "أنا أكرهك، أيها الأحمق." },
    { language: "Hindi (hi)", translation: "मैं तुमसे नफरत करता हूँ, मूर्ख।" },
    { language: "Japanese (ja)", translation: "お前が嫌いだ、この馬鹿。" },
    { language: "Russian (ru)", translation: "Я ненавижу тебя, идиот." },
    { language: "Portuguese (pt)", translation: "Eu te odeio, seu idiota." },
    { language: "Italian (it)", translation: "Ti odio, idiota." },
    { language: "Korean (ko)", translation: "너를 싫어해, 바보야." },
    { language: "Swedish (sv)", translation: "Jag hatar dig, din idiot." },
    { language: "Dutch (nl)", translation: "Ik haat je, idioot." },
    { language: "Finnish (fi)", translation: "Vihaan sinua, idiootti." },
    { language: "Greek (el)", translation: "Σε μισώ, ηλίθιε." },
    { language: "Latin (la)", translation: "Te odi, stulte." },
    { language: "Ancient Greek (grc)", translation: "Σε μισῶ, ἄφρον." },
    { language: "Old English (ang)", translation: "Ic þe hata, dysiga." },
    { language: "Sanskrit (sa)", translation: "त्वां द्वेष्मि, मूढ।" },
    { language: "Old Norse (non)", translation: "Ek hata þik, fáráði." },
    { language: "Middle English (enm)", translation: "Ich hate thee, fool." },
    { language: "Esperanto (eo)", translation: "Mi malamas vin, vi idioto." },
    { language: "Klingon (tlh)", translation: "qamuSHa', qoH." },
    { language: "Quenya (Elvish)", translation: "Amin tlelle, umbaro." },
    { language: "Sindarin (Elvish)", translation: "Gweston le, gawar." }
  ];

  translations.forEach(({ language, translation }) => {
    const translationElement = document.createElement("p");
    translationElement.textContent = `${language}: ${translation}`;
    translationsContainer.appendChild(translationElement);
  });
});