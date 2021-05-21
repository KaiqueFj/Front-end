import moment from "moment";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useState } from 'react';
import { daysOfWeek } from '../utils/daysOfWeek';
import React, { SyntheticEvent } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

type UserInformation = {
    adress: String,
    age: Number,
    cep: String,
    chronicDisease:  String,
    height: String,
    phoneNumber: String,
    weight: String,
}

type AppContextData = {
    medicinesToday: Array<Object>
    userInformation: UserInformation[];
    medicineDayNotification: () => void;
    getAllMedicinesOfDay: (props: Array<Object>) => Number;
    getUserInformation: (props: Array<Object>) => void;
}

export const AppContext = createContext({} as AppContextData);

type AppContextProviderProps = {
    children: ReactNode
}

export function AppContextProvider({ children }: AppContextProviderProps) {

    // variables
    const [medicinesToday, setMedicinesToday] = useState([]);
    const [userInformation, setUserInformation] = useState([]);
    const router = useRouter();

    // Functions
    function medicineDayNotification() {
        var time = moment(Date.now()).format("HH:mm")

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

    function getUserInformation(props){
        setUserInformation(props);
    }


    return (
        <AppContext.Provider
            value={{
                userInformation,
                medicinesToday,
                getUserInformation,
                medicineDayNotification,
                getAllMedicinesOfDay,
            }}>

            {children}
        </AppContext.Provider>
    )
}

export const useApp = () => {
    return useContext(AppContext);
}