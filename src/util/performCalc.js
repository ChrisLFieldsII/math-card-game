export default function performCalc(x, y, sym) {
    switch (sym) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            return x / y;
        default:
            return;
    }
}