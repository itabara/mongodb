# mongodb
MongoDB adventure and samples

mongod --config e:\mongodb\mongo.config --journal
use <database>
show dbs
show collections
load("<fullpath_json file");
db.studentsInfoCollection.find({"age":{$eq:12}}).pretty();
db.studentsInfoCollection.find({"name.lastName":{$eq:"Tabara"}}).pretty();
db.studentsInfoCollection.find({"age":{$lt:20}}).pretty();
db.studentsInfoCollection.find({"age":{$gt:15}}).pretty();
db.studentsInfoCollection.find({"subjects":{$in:["Small Business"]}}).pretty();
db.studentsInfoCollection.find({"subjects":{$exists:true, $nin:["Small Business"]}}).pretty();
db.studentsInfoCollection.update({"name.firstName":"Iulian"}, {$set:{"age":35}});
db.studentsInfoCollection.update({"name.firstName":"Iulian"}, {$set:{"age":35}}, {upsert:true});
db.studentsInfoCollection.update({"name.firstName":"Iulian"}, {$set:{"subjects.1":"MongoDB"}}); -- second element from subjects array
db.studentsInfoCollection.remove({"name.firstName":"Tabara"});
db.studentsInfoCollection.remove({"subjects":"Maths"}, 1); -- removes just one documents if multiple returned
