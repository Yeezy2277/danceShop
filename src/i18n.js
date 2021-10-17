import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./components/languages/en.json";
import ru from "./components/languages/ru.json";

const resources = {
    en, ru
};

i18n.use(initReactI18next).init({
        resources,
        lng: "ru",

        interpolation: {
            escapeValue: false
        }
    });
export default i18n;
