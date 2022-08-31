import React, { ReactNode } from "react";
import * as S from "./styles";

interface TableProps {
    children: ReactNode;
}

export default function Carttable({ children }: TableProps) {
    return (
        <S.Table>
            <tr>
                <th />
                <th>PRODUTO</th>
                <th>QTD</th>
                <th>SUBTOTAL</th>
                <th />
            </tr>
            {children}
        </S.Table>
    );
}
