// numbers only mask
export function numberMask(number: string) {
    number = number.replace(/\D+/g, "");
    return number;
}

// text currency format
export const money = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
});
