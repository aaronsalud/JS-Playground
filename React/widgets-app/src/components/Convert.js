import React, { useEffect, useState } from 'react';
import axios from 'axios';

const KEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';

const Convert = ({ language, text }) => {
    const [translatedText, setTranslatedText] = useState('');
    const [debouncedText, setDebouncedText] = useState(text);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text);
        }, 500)

        return () => {
            clearTimeout(timerId);
        }
    }, [text]);

    useEffect(() => {
        const getTranslation = async () => {
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: debouncedText,
                    target: language.value,
                    key: KEY
                }
            });

            setTranslatedText(data.data.translations[0].translatedText);
        };

        if(debouncedText){
            getTranslation();
        }
    }, [language, debouncedText]);

    return <div>{translatedText}</div>
};

export default Convert;