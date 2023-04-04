"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTable = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../utils/connection"));
const File = connection_1.default.define("files", {
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    originalName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    size: {
        type: sequelize_1.DataTypes.STRING,
    }
});
function createTable() {
    connection_1.default.sync().then(() => {
        console.log('File table created successfully!');
    }).catch((error) => {
        console.error('Unable to create table : ', error);
    });
}
exports.createTable = createTable;
exports.default = File;
;
