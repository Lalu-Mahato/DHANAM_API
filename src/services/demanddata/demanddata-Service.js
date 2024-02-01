const CommonMethod = require('@common-methods');
const demandHelper = require('@helpers/demanddata');

exports.uplaod = async () => {
    const filePath = 'src/public/upload/demand_data.xlsx';

    const data = demandHelper.readExcelFile(filePath);

    const banks = demandHelper.filterUniqueBranches(data);
    await demandHelper.saveBankBranches(banks);

    const prodcuts = demandHelper.filterUniqueProducts(data);
    await demandHelper.saveProducts(prodcuts);

    data.forEach(async (item) => {
        await demandHelper.saveProspectDetails(item);
        await demandHelper.saveLoanDetails(item);
        await demandHelper.saveEmiDetails(item);
    });

    return CommonMethod.createdResponse('File Uploaded...');
};
