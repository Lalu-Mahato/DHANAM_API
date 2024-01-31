const models = require('@models');

exports.create = (payload) => models.bankBranch.create(payload);
