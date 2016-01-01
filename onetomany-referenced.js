// reference orderId into orderItem
db.orderInfo.insert(
    {
        _id: 1,
        cust_id:101,
        comments: 'My second order with orderItems'        
    }   
)

db.orderItemsInfo.insert(    
    {
        order_id: 1,
        productName: 'HDD',
        quantity: 2,
    }
)

db.orderItemsInfo.insert(
    {
        order_id: 1,
        productName: 'SSD',
        quantity: 2,
    }
)

db.orderItemsInfo.insert(
    {
        order_id: 1,
        productName: 'MB',
        quantity: 1,
    }
)

db.orderItemsInfo.insert(
    {
        order_id: 1,
        productName: 'Case',
        quantity: 1,
    }
)