

function sendRequest(name, phone, address, goods, sum) {
    let data = {goods: [], order:{}};
 
    let countOfGoods = goods.length;
     
    for(let i = 0; i < goods.length; i++){
        title = goods.title;
        count = goods.count;
        data.goods.push({title: goods[i].title, count: goods[i].count});
    };

    data.client = name + " " + phone;

    data.order.address = '';

    data.order.address = "ул. "+ address.street + ", " + "дом "+ address.house + ", " + address.entrance + " подъезд" + ", " + address.floor + " этаж"  + ", " + "кв " + address.flat;

    data.order.sum = sum;

    let jsonData = JSON.stringify({data: data});

    return jsonData;
}
