// embeded document into main document
db.customerInfo.insert(
    {
        firstName:'Iulian',
        lastName:'Tabara',        
        url:'http://www.iuliantabara.com',
        address:{	// let's embed
        	street:'XXXXX Str.',
        	city:'Iasi',
        	country:'Romania'
        }
    }   
);