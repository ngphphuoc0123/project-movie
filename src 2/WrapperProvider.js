import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import Vietnam from "./lang/vi.json";
import English from "./lang/en.json";

export const Context = React.createContext();

const local = navigator.language;

let lang;
if (local === "en-US") {
  lang = English;
} else {
  lang = Vietnam;
}
const WrapperProvider = (props) => {
  const [locale, setLocale] = useState(local);
  const [messages, setMessages] = useState(lang);

  function selectLanguage(e) {
    const newLocale = e.target.value;
    console.log(e.target.value);
    setLocale(newLocale);
    if (newLocale === "en") {
      setMessages(English);
    } else {
      setMessages(Vietnam);
    }
  }
  return (
    <Context.Provider value={{ locale, selectLanguage }}>
      <IntlProvider messages={messages} locale={locale}>
        {props.children}
      </IntlProvider>
    </Context.Provider>
  );
};
export default WrapperProvider;
