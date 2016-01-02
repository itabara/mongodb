db.deposit.insert({cust_id:1, credit:100, debit:20, status: "Verified"});
db.deposit.insert({cust_id:1, credit:500, debit:120, status: "Verified"});
db.deposit.insert({cust_id:2, credit:250, debit:0, status: "Verified"});
db.deposit.insert({cust_id:2, credit:750, debit:100, status: "Verified"});
db.deposit.insert({cust_id:1, credit:1500, debit:400, status: "Verified"});
db.deposit.insert({cust_id:1, credit:3000, debit:1500, status: "Pending"});
db.deposit.insert({cust_id:2, credit:1000, debit:500, status: "Pending"});
db.deposit.insert({cust_id:1, credit:2000, debit:300, status: "Verified"});

db.deposit.mapReduce(
    function(){emit(this.cust_id, this.credit);},
    function(key, values){ return Array.sum(values)},
    {
        query:{status:"Verified"},
        out: "TotalCredit"
    }
);

db.TotalCredit.find();

db.deposit.mapReduce(
    function(){emit(this.cust_id, this.debit);},
    function(key, values){ return Array.sum(values)},
    {
        query:{status:"Verified"},
        out: "TotalCredit"
    }
).find();
