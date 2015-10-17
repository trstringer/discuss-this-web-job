var mongo = new Mongo();
var db = mongo.getDB('letsdiscuss');

print('setting current question to now date...');

db.questions.update(
    { isCurrent: true },
    { 
        $set: {
            dateAsked: new Date() 
        }
    }
);

print('completed setting current question dateAsked...');