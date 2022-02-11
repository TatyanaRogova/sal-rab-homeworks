

function sendRequest(name, phone, address, goods, sum) {
    let data = {goods: [], order:{}};

    let a = goods.count;
    let b = goods.title;

    data.goods = {title: b, count: a};
    
    let countOfGoods = goods.length;
    
    for(let i = 0; i <countOfGoods; i++){
        function dataGoodsPush(i);
    };

    //for (let nameGood of data.goods){
    //    data.goods.push(nameGood)
    //};

    data.client = name + + phone;

    data.order.address = {
        street: "",
        house: "",
        entrance: "",
        floor: "",
        flat: ""
      };

    data.order.sum = sum;

    let jsonData = JSON.stringify({data: data});

    return jsonData;
}
