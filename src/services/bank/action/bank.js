const models = require('@models');

exports.create = (payload) => models.banks_master.create(payload);
exports.findByCode = (code) => models.banks_master.findOne({ where: { code } });
