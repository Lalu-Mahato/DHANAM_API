const CommonMethod = require('@common-methods');
const action = require('./action/bankbranch');

exports.create = async (payload) => {
    const response = await action.create(payload);

    return CommonMethod.createdResponse(response);
};
