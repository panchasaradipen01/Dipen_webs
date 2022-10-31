//on load we should render a product using js logic
function Product(pid, pname, unitPrice, stockQuantity, img) {
    this.pid = pid;
    this.pname = pname;
    this.unitPrice = unitPrice;
    this.stockQuantity = stockQuantity;
    this.img = img;
}
productList = [
    { pid: 1001, pname: "Pepsi", unitPrice: 30.0, stockQuantity: 100, img: 'images/pepsi.jfif' },
    { pid: 1002, pname: "Thumsup", unitPrice: 30.0, stockQuantity: 100, img: 'images/thumsup.jfif' },
    { pid: 1003, pname: "Limca", unitPrice: 30.0, stockQuantity: 100, img: 'images/limca.jfif' }
]

const root = document.getElementById("root");
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
function onLoad() {
    for (let index in productList) {
        const p1 = productList[index];

        const div_p1 = document.createElement("div");
        const pre_p1 = document.createElement("pre")

        const img_p1 = document.createElement("img");
        img_p1.src = p1.img;

        const span_pname_p1 = document.createElement("span");
        span_pname_p1.innerText = p1.pname;

        const btn_dec_p1 = document.createElement("button");
        btn_dec_p1.innerText = "-";
        

        const span_quantity_p1 = document.createElement("span");
        span_quantity_p1.innerText = counter1;
        span_quantity_p1.id = p1.pid;

        const btn_inc_p1 = document.createElement("button");
        btn_inc_p1.innerText = "+";
        if (span_quantity_p1.id == "1001") {
            btn_dec_p1.onclick = onDec1;
        }
        if (span_quantity_p1.id == "1002") {
            btn_dec_p1.onclick = onDec2;
        }
        if (span_quantity_p1.id == "1003") {
            btn_dec_p1.onclick = onDec3;
        }
        if (span_quantity_p1.id == "1001") {
            btn_inc_p1.onclick = onIncr1;
        }
        if (span_quantity_p1.id == "1002") {
            btn_inc_p1.onclick = onIncr2;
        }
        if (span_quantity_p1.id == "1003") {
            btn_inc_p1.onclick = onIncr3;
        }

        pre_p1.append(img_p1);
        pre_p1.append(span_pname_p1);
        pre_p1.append(btn_dec_p1);
        pre_p1.append(span_quantity_p1)
        pre_p1.append(btn_inc_p1);

        div_p1.append(pre_p1);
        root.append(div_p1);

    }

}
function onDec1() {
    // alert("onDec Called");
    const span_quantity_p2 = document.getElementById("1001");
    if (counter1>0) {
        counter1 = counter1 - 1;
        span_quantity_p2.innerText = counter1;
    } else {
        alert("quantity can't less than zero");
    }
    


}
function onDec2() {
    // alert("onDec Called");
    const span_quantity_p2 = document.getElementById("1002");
    if (counter2>0) {
        counter2 = counter2 - 1;
        span_quantity_p2.innerText = counter2;
    } else {
        alert("quantity can't less than zero");
    }


}
function onDec3() {
    // alert("onDec Called");
    const span_quantity_p2 = document.getElementById("1003");
    if (counter3>0) {
        counter3 = counter3 - 1;
        span_quantity_p2.innerText = counter3;
    } else {
        alert("quantity can't less than zero");
    }


}
function onIncr1() {
    // alert("onInc Called");    
    const span_p1 = document.getElementById("1001");
    counter1 = counter1 + 1;
    span_p1.innerText = counter1;
}
function onIncr2() {
    // alert("onInc Called");    
    const span_p1 = document.getElementById("1002");
    counter2 = counter2 + 1;
    span_p1.innerText = counter2;
} function onIncr3() {
    // alert("onInc Called");    
    const span_p1 = document.getElementById("1003");
    counter3 = counter3 + 1;
    span_p1.innerText = counter3;
}