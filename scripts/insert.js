// inserts 100x100x100 records into mycoll collection.
// { "_id" : 0, "a" : 0, "b" : 0, "c" : 0 }
// { "_id" : 1, "a" : 0, "b" : 0, "c" : 1 }
// { "_id" : 2, "a" : 0, "b" : 0, "c" : 2 }

for (i=0; i<100; i++){
  for (j=0; j<100; j++){
    x = [];
    for (k=0; k<100; k++){
      x.push({a:i, b:j, c:k, _id:(100*100*i + 100*j + k)});
    }
    db.mycoll.insert(x);
  }
}

 db.mycoll.createIndex({a:1, b:1})
 db.mycoll.createIndex({b:1})

 db.mycoll.explain().find({a:17}).sort({b:-1})
 // we look for winningPlan
