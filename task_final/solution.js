

function sendRequest(name, phone, address, goods, sum) {
    let data = {goods: [], order:{}};

    let countOfGoods = goods.length;

    for (let i = 0; i < countOfGoods; i++) {
        data.goods.push(goods[i].title, goods[i].count);
    }
    //for (let property in data.goods){
    //    data.goods.push('${property}, ${data.goods[property]}')
    //};

    data.client = [name + phone];

    data.order.address = {
        street: data.order.address.street,
        house: data.order.address.house,
        entrance: data.order.address.entrance,
        floor: data.order.address.floor,
        flat: data.order.address.flat
      };

    data.order.sum = [900, 1800]; //name + phone + address + goods + sum;

    data.goods = {
        title: goods.title,
        count: goods.count
    };

    let jsonData = JSON.stringify({data: data});

    return jsonData;
}
