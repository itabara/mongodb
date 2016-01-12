// create product records
db.products.insert({"_id": "product.1", "name": "Product One", "producer": "Producer 1", "category": "Category 1"})
db.products.insert({"_id": "product.2", "name": "Product Two", "producer": "Producer 2", "category": "Category 2"})
db.products.insert({"_id": "product.3", "name": "Product Three", "producer": "Producer 3", "category": "Category 3"})
db.products.insert({"_id": "product.4", "name": "Product Four", "producer": "Producer 4", "category": "Category 4"})
db.products.insert({"_id": "product.5", "name": "Product Five", "producer": "Producer 5", "category": "Category 5"})

// create orderItems records
db.orders.insert({"_id": "order.1", "description": "Please pay", "products": ["product.1","product.2"], "quantity": [1,2]})
db.orders.insert({"_id": "order.2", "description": "Please pay", "products": ["product.1","product.2","product.4","product.5"], "quantity": [1,2,4,5]})
db.orders.insert({"_id": "order.3", "description": "Please pay", "products": ["product.4","product.5"], "quantity": [4,5]})
db.orders.insert({"_id": "order.5", "description": "Please pay", "products": ["product.3"], "quantity": [3]})

// create customer records
db.customer.insert({"_id": "cust.1", "name": {"first": "Iulian", "middle": "E", "last": "Tabara"}, "email": "iulian.tabara@gmail.com", "address": "Iasi", "phone": [{"mobile": "+40 123 456789", "home": "+40 321 987654"}], "orders": ["order.4"]})
db.customer.insert({"_id": "cust.2", "name": {"first": "Emilian", "middle": "E", "last": "Tabara"}, "email": "emilian.tabara@gmail.com", "address": "Iasi", "phone": [{"mobile": "+40 333 555444", "home": "+40 444 334444"}], "orders": ["order.1", "order.2"]})
db.customer.insert({"_id": "cust.3", "name": {"first": "Doina", "middle": "E", "last": "Tabara"}, "email": "doina.tabara@gmail.com", "address": "Iasi", "phone": [{"mobile": "+40 111 222444", "home": "+40 222 888111"}], "orders": ["order.3"]})


// P1. Products -> number of orders containing product_id
// Solution:
// we parse each order and foreach product in products array, we emit value 1
// product.1 [1,1]
// product.2 [1,1]
// etc
// product.3 [1]
map_number_orders = function(){
    this.products.forEach(function(value){
        emit(value, 1);
    });
}

// we count each product from (key,value)
reduce_number_orders = function(key,values){
    var result = 0;
    values.forEach(function(value){
        result +=value;
    });
    return result;
}

result = db.orders.mapReduce(map_number_orders, reduce_number_orders, {out: {replace:"numberproducts"}});


// P2. Products report
// produce a listing of products-category and how many orders
// are containing the productID
// Choose a common key value to link Map and Reduce
map_order_report_names = function(){
    emit(this._id, {name: this.category + ' ' + this.name, numberproducts:0});
}

map_order_report_number = function(){
    this.products.forEach(function (value){
        emit(value, {name: '', numberproducts: 1});
    });
}

// How to debug
var order = db.orders.findOne();
var product = db.products.findOne();
var emit = function(key, value){
    print("key:" + key + "  value: " + tojson(value));
}
map_order_report_names.apply(product);
// key:product.1  value: { "name" : "Category 1 Product One", "numberproducts" : 0 }
map_order_report_number.apply(order);
// key:product.1  value: { "name" : "", "numberproducts" : 1 }
// key:product.2  value: { "name" : "", "numberproducts" : 1 }

reduce_orders_report = function(key,values){
    var result = {name: '', numberproducts:0};
    values.forEach(function(value){
        result.numberproducts += value.numberproducts;
        if (result.name === ''){
            result.name = value.name;
        }
    });
    return result;
}

var product_map_output={"product.1": [{ "name" : "Category 1 Product One", "numberproducts" : 0 }]};
var order_map_output={
    "product.1":{ "name" : "", "numberproducts" : 1 },
    "product.2":{ "name" : "", "numberproducts" : 1 }
};

result = db.orders.mapReduce(map_order_report_number, reduce_orders_report, {out: {replace: "ordersreport"}});
