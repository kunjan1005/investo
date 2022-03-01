import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import common_en from './content/en'
import common_mn from './content/mn'

const resources = {
    en:{
        translation:common_en,
    },
    mn:{
        translation:common_mn
    }
}
i18n
.use(initReactI18next)
.init({
    resources,
    lng:'en',
    keySeparator:false,
    interpolation:{
        escapeValue:false
    }
})
export default i18n