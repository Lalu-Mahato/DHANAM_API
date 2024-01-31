const demanddataService = require('@services/demanddata/demanddata-Service');
const ErrorHelper = require('@helpers/error.helper');

class DemandDataController {
    static async upload(req, res) {
        try {
            const { body } = req;
            const result = await demanddataService.uplaod(body);
            return res.status(result.code).send(result);
        } catch (err) {
            const appError = ErrorHelper.error(err);
            return res.status(appError.code).send(appError);
        }
    }
}

module.exports = DemandDataController;
