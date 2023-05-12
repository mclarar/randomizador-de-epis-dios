import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import {messages} from './languages' 

i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: false,
        defaultNS: ['translations'],
        fallbackLng: 'en',
        ns: ['translations'],
        resources: messages,
        detection: {
            order: ["localStorage","cookie", "htmlTag",  "path", "subdomain"],
            caches:['cookie']
        },
    })

    
    
export {i18next}