document.addEventListener("DOMContentLoaded", () => {
  const translationsContainer = document.getElementById("translationsContainer");
  
  const translations = [
    // Existing languages
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
    
    // Dead languages
    { language: "Latin (la)", translation: "Te odi, stulte." },
    { language: "Ancient Greek (grc)", translation: "Σε μισῶ, ἄφρον." },
    { language: "Old English (ang)", translation: "Ic þe hata, dysiga." },
    { language: "Sanskrit (sa)", translation: "त्वां द्वेष्मि, मूढ।" },
    { language: "Old Norse (non)", translation: "Ek hata þik, fáráði." },
    { language: "Middle English (enm)", translation: "Ich hate thee, fool." },
    { language: "Old Church Slavonic (cu)", translation: "Възненавидѣхъ тѧ, ѥмѻу." },
    { language: "Akkadian (akk)", translation: "Anāku kâ šanum, tapšum." },
    { language: "Hittite (hit)", translation: "Tēpinušmi tēkan, lāman." },
    { language: "Sumerian (sux)", translation: "E-me-en-na-me, lu-gal." },
    { language: "Coptic (cop)", translation: "Ⲛⲓⲟⲕⲉⲥⲉⲛⲟⲩⲧⲉⲛ, ⲡⲓⲥⲟⲩⲗⲟⲥ." },
    { language: "Phoenician", translation: "𐤀𐤉𐤂𐤈𐤍𐤀𐤉𐤃𐤉𐤔𐤏𐤉𐤕𐤎𐤍." },
    
    // Fictional languages
    { language: "Dothraki (Game of Thrones)", translation: "Anha zhilak yera, ifak!" },
    { language: "Valyrian (Game of Thrones)", translation: "Nyke jaelza ao, idiotis." },
    { language: "Huttese (Star Wars)", translation: "Mee jewz ku, poodoo." },
    { language: "Minionese (Despicable Me)", translation: "Bello! Me hate tu, banana!" },
    { language: "Simlish (The Sims)", translation: "Sul sul! Flib flarb, doofus!" },
    { language: "Na'vi (Avatar)", translation: "Oel ngati kameie, skxawng." },
    { language: "Klingon (tlh)", translation: "qamuSHa', qoH." },
    { language: "Quenya (Elvish)", translation: "Amin tlelle, umbaro." },
    { language: "Sindarin (Elvish)", translation: "Gweston le, gawar." },
    { language: "Pig Latin", translation: "Iyay atechay ouyay, idiotyay." },
    
    // Crafted and humorous examples
    { language: "Emoji", translation: "🤬🤡" },
    { language: "Binary", translation: "01001001 00100000 01101000 01100001 01110100 01100101 00100000 01111001 01101111 01110101 00101100 00100000 01101001 01100100 01101001 01101111 01110100 00101110" },
    { language: "Morse Code", translation: "- .... .. ... / .. ... / .... .- - . / -.-- --- ..- --..-- / .. -.. .. --- - " },
    { language: "Leetspeak", translation: "1 h@73 y0u, 1d10t." },
    { language: "Pirate Speak", translation: "Arrr! I be hatin' ye, ye scallywag!" },
    { language: "Shakespearean", translation: "I dost loathe thee, thou fool." },
    { language: "Robot Speak", translation: "Does not compute. Hate detected. Idiot." },
    { language: "Gibberish", translation: "Flibber flabber foo, idioty!" },
    { language: "Martian Speak", translation: "Zorp blip bloop, idiot!" },
    { language: "ASCII Art", translation: ":-|<" }
  ];

  translations.forEach(({ language, translation }) => {
    const translationElement = document.createElement("p");
    translationElement.textContent = `${language}: ${translation}`;
    translationsContainer.appendChild(translationElement);
  });
});
