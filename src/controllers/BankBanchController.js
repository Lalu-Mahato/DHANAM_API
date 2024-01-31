const bankbanchService = require('@services/bankbranch/bankbranch-service');

const ErrorHelper = require('@helpers/error.helper');

class BankBanchController {
    static async create(req, res) {
        try {
            const { body } = req;
            const result = await bankbanchService.create(body);
            return res.status(result.code).send(result);
        } catch (err) {
            const appError = ErrorHelper.error(err);
            return res.status(appError.code).send(appError);
        }
    }
}

module.exports = BankBanchController;
