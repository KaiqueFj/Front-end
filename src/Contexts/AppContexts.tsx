import moment from "moment";
import { useRouter } from "next/router";
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { daysOfWeek } from '../utils/daysOfWeek';

type UserInformation = {
    adress: String,
    age: Number,
    cep: String,
    chronicDisease: String,
    height: String,
    phoneNumber: String,
    weight: String,
}

type Theme = "light" | "dark";


type AppContextData = {
    medicinesToday: Array<Object>
    userInformation: UserInformation;
    theme: Theme;
    medicineDayNotification: () => void;
    getAllMedicinesOfDay: (props: Array<Object>) => Number;
    getUserInformation: (props: Array<Object>) => void;
    toggleTheme: () => void;
}

export const AppContext = createContext({} as AppContextData);

type AppContextProviderProps = {
    children: ReactNode
}

export function AppContextProvider({ children }: AppContextProviderProps) {

    // variables
    const [medicinesToday, setMedicinesToday] = useState([]);
    const [userInformation, setUserInformation] = useState();
    const router = useRouter();

    // Functions
    function medicineDayNotification() {
        var time = moment(Date.now()).format("HH:mm");

        for (var i = 0; i < medicinesToday.length; i++) {
            if (time === medicinesToday[i].time && medicinesToday[i].status === 2) {
                router.push(`/Status/${medicinesToday[i].id}&${medicinesToday[i].name}&${medicinesToday[i].time}`);
            }
        }
    };

    // Verify in each minute if has medicines to taken
    setInterval(medicineDayNotification, 1000 * 60);

    function getAllMedicinesOfDay(props) {

        // Variables
        const days = daysOfWeek();
        const currentDay = moment().format("YYYY-MM-DD");

        // Get medicines of today
        const indexOf = days.indexOf(currentDay);
        setMedicinesToday(props[indexOf])

        return indexOf;
    }

    function getUserInformation(props) {
        setUserInformation(props);
    }

    ////////////////////////////////// THEME

    const [theme, setTheme] = useState<Theme>("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
        // localStorage.setItem('theme', theme);
        document.querySelector('body').setAttribute('data-theme', theme);

        const themes = {
            dark: {
                '--primaryColor': '#191622',
                '--secondaryColor': '#44475a',
                '--font1': '#fff',
                '--boxShadow': 'none',
                '--linear': 'linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)',
                '--transparent': '#44475a7b',
                '--dark': '#62657a',
                '--input': '#fff',
                '--textarea' : '#44475a6c'

            },
            light: {
                '--primaryColor': '#e1e1e6',
                '--secondaryColor': '#D6D5E8',
                '--font1': '#6b42e1',
                '--boxShadow': '#6b42e1',
                '--linear': 'linear-gradient(180deg, #6b42e1 0%, rgba(59, 31, 141, 0.22) 100%)',
                '--transparent': '#6a42e1a1',
                '--dark': '#3b1f8d',
                '--input':'#000',
                '--textarea' : '#d6d5e84e',

            },
        }

        function activateTheme(theme) {
            for (let prop in theme) {
                document.querySelector(':root').style.setProperty(prop, theme[prop]);
            }
        }

        // Switch to the dark theme:
        activateTheme(theme === 'light' ? themes.light : themes.dark);
    };

    return (
        <AppContext.Provider
            value={{
                theme,
                userInformation,
                medicinesToday,
                getUserInformation,
                medicineDayNotification,
                getAllMedicinesOfDay,
                toggleTheme,
            }}>

            {children}
        </AppContext.Provider>
    )
}

export const useApp = () => {
    return useContext(AppContext);
}