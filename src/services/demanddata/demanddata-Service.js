const CommonMethod = require('@common-methods');
const XLSX = require('xlsx');
const bankAction = require('../bank/action/bank');
const prodcutAction = require('../product/action/product');

const readExcelFile = (filePath) => {
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    const data = XLSX.utils.sheet_to_json(sheet);
    return data;
};

const filterUniqueBranches = (data) => {
    const uniqueIds = new Set();
    const uniqueData = data.filter((branch) => {
        if (!uniqueIds.has(branch.Branch_Code)) {
            uniqueIds.add(branch.Branch_Code);
            return true;
        }
        return false;
    });
    return uniqueData.map((branch) => ({
        Branch_Name: branch.Branch_Name,
        Branch_Code: branch.Branch_Code,
    }));
};

const filterUniqueProducts = (data) => {
    const uniqueIds = new Set();
    const uniqueData = data.filter((product) => {
        if (!uniqueIds.has(product.Product_Id)) {
            uniqueIds.add(product.Product_Id);
            return true;
        }
        return false;
    });
    return uniqueData.map((product) => ({
        Product_Id: product.Product_Id,
        Product_Name: product.Product_Name,
    }));
};

const saveBankBranches = (banks) => {
    banks.forEach(async (bank) => {
        const existingBank = await bankAction.findByCode(bank.Branch_Code);
        if (!existingBank) {
            await bankAction.create({
                code: bank.Branch_Code,
                name: bank.Branch_Name,
            });
        }
    });
};

const saveProducts = async (products) => {
    products.forEach(async (product) => {
        const existingProduct = await prodcutAction.findByCode(product.Product_Id);
        if (!existingProduct) {
            await prodcutAction.create({
                code: product.Product_Id,
                name: product.Product_Name,
            });
        }
    });
};

exports.uplaod = async () => {
    const filePath = 'src/public/upload/demand_data.xlsx';

    const data = readExcelFile(filePath);

    const banks = filterUniqueBranches(data);
    await saveBankBranches(banks);

    const prodcuts = filterUniqueProducts(data);
    await saveProducts(prodcuts);

    return CommonMethod.createdResponse('Demand uploaded successfully.');
};
