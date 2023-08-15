'use client';

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("808c782f-45c0-41ee-a7c7-1ada1aadc230")
    }, []);

    return null;
}