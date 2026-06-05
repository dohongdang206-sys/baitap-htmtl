function calculate (a,op,b) {
switch (op){
    case "+":
        return a+b;
    case "-":
        return a-b;
    case "*":
        return a*b;
    case "/":
        if (b === 0) {
            return "Lỗi: Không thể chia cho 0";
        }
        return a/b;
        default:
        return "Lỗi: Operator không hợp lệ";
}
}
consolog.log(calculate(10,"+",5));
consolog.log(calculate(10,"/",0));
consolog.log(calculate(10,"^",5));
consolog.log(calculate("abc","+",5));
consolog.log(calculate(2,"**",10));
