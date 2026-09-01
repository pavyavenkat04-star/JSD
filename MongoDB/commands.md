**How to open MongoDB?**
- To open MongoDB type the command
    - mongosh
**To create a database**
- use database_name
- Eg:use nmvnjsd
**To insert data**
- db.collection_name.insertOne({key1:value1,...})
- Eg: db.student.insertOne({rno:1001,sname:"riya",mark:85})
**To view all data within a collection**
- db.collection_name.find()
- Eg:db.student.find()
**To view all databases**
- show dbs
**To view all collections from a database**
- show collections
**To change one db to another db**
- use olddbname
**To delete one record**
- db.collection_name.deleteOne({key1:value1,})
- Eg:db.login.deleteOne({user:"Ravi"})
**To delete more than one record**
- db.collection_name.deleteMany({})
- Eg:db.login.deleteMany({})
**To update**
- db.collection_name.updateOne({key:value},{$set:{key2:value2}})
- Eg:db.student.updateOne({rno:1006},{$set:{mark:35}})
**To update many**
- db.student.updateMany({mark:{$gt:35}},{$set:{result:"pass"}})
- db.student.updateMany({mark:{$lte:34}},{$set:{result:"fail"}})
**Ascending order**
- db.collection_name.find().sort({keyname:1})
- Eg:db.student.find().sort({sname:1})
**Descending order**
- db.collection_name.find().sort({keyname:-1})
- db.student.find().sort({sname:-1})
**Projection**
- db.collection_name({},{key1:1,key2:0,key3:1})
- specify '1' to display that particular key value pair