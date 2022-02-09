

function sendRequest(name, phone, address, goods, sum) {
    let data = {client: "Иван +7(987)65-43-210",
                order: {address: "ул. Ленина, дом 2, 4 подъезд, 5 этаж, кв 53", sum: 900},
                goods: [{title: "Пицца", count: 2}]
  }
    let countOfGoods = goods.length;

    for (let i = 0; i <= countOfGoods; i += 1) {
        data.goods.push(goods[i].title);
    }

    data.order.address = address;
    data.order.sum = name + phone + address + goods + sum;

    data.client = "Иван +7(987)65-43-210";

    let jsonData = JSON.stringify(data);

    return jsonData;
}

