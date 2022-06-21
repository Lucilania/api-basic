const { Schema, model } = require('mongoose');

const MensagemSchema = new Schema(
	{
		remetente: {
			type: String,
			required: true,
		},
		destinatario: {
			type: String,
			required: true,
		},
		mensagem: {
			type: String,
			required: false
		},
	},
	{ timestamps: true }
);

module.exports = model('Mensagem', MensagemSchema);