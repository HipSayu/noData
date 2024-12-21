import { MetaData } from "../../domain/namenode/metadata.entity";
import mongoose, { Schema } from 'mongoose';



const metaDataSchema = new Schema<MetaData>({
    name: { type: String, maxLength: 255 },
    index: { type: Number },
    datanode: { type: String },
    datanodeReplication1: { type: String },
    datanodeReplication2: { type: String },
});
const MetaData = mongoose.model('metaData', metaDataSchema);
export default MetaData;
