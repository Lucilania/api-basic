const { Schema, model } = require('mongoose');

const UsuarioSchema = new Schema(
	{
		nome: {
			type: String,
			required: true,
		},
		senha: {
			type: String,
			required: true,
        }
		
	},
	{ timestamps: true }
);

module.exports = model('Acesso', UsuarioSchema);
