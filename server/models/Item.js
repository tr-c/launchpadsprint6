//User Schema
const ItemSchema = new mongoose.Schema({
 id: {
	 type: Number,
	 required: true,
	 unique: true,
 },
 name: {
	 type: String,
	 required: true,
 },
 category: {
	 type: String,
	 required: true,
 },

});
//User model
const Item = mongoose.model("ItemAnthony", ItemSchema) --> items
module.exports = Item