const { Schema, model } = require('mongoose');

const ProductSchema = new Schema(
	{
		nome: {
			type: String,
			required: true,
		},
		descricao: {
			type: String,
			required: false,
		},
		status: {
			type: Boolean,
			default: true,
		},
	},
	{ timestamps: true }
);

module.exports = model('Product', ProductSchema);