const mongoose=require('mongoose');
const uri="mongodb+srv://dbUser:dbUser@cluster0.h346g.mongodb.net/<dbname>?retryWrites=true&w=majority"
mongoose.connect(uri,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log('Database is connected'));