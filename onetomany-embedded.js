// embeded document into main document
db.orderInfo.insert(
    {
        cust_id:101,
        comments: 'My order with orderItems',
        orderItems:[{
            productName: 'Mouse',
            quantity: 1,
        },{
            productName: 'Keyboard',
            quantity: 2,

        },{
            productName: 'CPU',
            quantity: 1,
        }]
    }   
);