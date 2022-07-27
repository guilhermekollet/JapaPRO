import mongoose from "mongoose";

//https://cloud.mongodb.com/v2/62e09e3d5b41297adb338caf#clusters/connect?clusterId=Cluster0
mongoose.connect("mongodb+srv://japaCluster:FGw5DTcRmUsyo5BJ@cluster0.drllj.mongodb.net/JapaPRO?");

let db = mongoose.connection;

export default db;