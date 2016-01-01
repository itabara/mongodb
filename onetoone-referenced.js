// OneToOne-Reference.js
db.customerInfo.insert(
    {
    	_id: 1001,
        firstName:'Emilian',
        lastName:'Tabara',        
        url:'http://www.iuliantabara.com',        
    }   
);

db.addressInfo.insert(
    {
    	cust_id: 1001,
       	street:'AAAAAA Str.',
       	city:'Iasi',
       	country:'Romania'
    }
);