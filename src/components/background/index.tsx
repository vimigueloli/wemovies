import React, { ReactNode } from "react";
import * as S from "./styles";

interface BackgroundProps {
    children: ReactNode;
}

export default function Background({ children }: BackgroundProps) {
    return <S.Background>{children}</S.Background>;
}
