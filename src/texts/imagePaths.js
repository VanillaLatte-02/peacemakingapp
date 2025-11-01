import images from '../images'
import defaultBackground from '../images/mainBackground.png'
import defaultlogoWhite from '../images/default-logowhite.png'
import eslogoWhite from '../images/es-logowhite-bold.png';

// Centralized image paths per language.
// You can add language-specific background or logo images here.
// Right now most languages fallback to the same `defaultBackground`.

const imagePaths = {
  defaultBackground,
  // default logo (white)
  logo: defaultlogoWhite,
  // Per-language overrides. By default we keep the same background but allow
  // language-specific logos. If you later add `logo-{lang}.png` files,
  // update the corresponding entry to import and reference them here.
  langs: {
    id: { mainBackground: defaultBackground, logo: defaultlogoWhite },
    en: { mainBackground: defaultBackground, logo: defaultlogoWhite },
    zh: { mainBackground: defaultBackground, logo: defaultlogoWhite },
    sw: { mainBackground: defaultBackground, logo: defaultlogoWhite },
    es: { mainBackground: defaultBackground, logo: eslogoWhite },
    pt: { mainBackground: defaultBackground, logo: defaultlogoWhite },
    ru: { mainBackground: defaultBackground, logo: defaultlogoWhite },
    ar: { mainBackground: defaultBackground, logo: defaultlogoWhite },
    fr: { mainBackground: defaultBackground, logo: defaultlogoWhite },
  }
}

export default imagePaths
