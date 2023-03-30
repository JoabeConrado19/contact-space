"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const users_entity_1 = __importDefault(require("./Entities/users.entity"));
const contacts_entity_1 = __importDefault(require("./Entities/contacts.entity"));
const _1679930849611_InitialMigration_1 = require("./Migrations/1679930849611-InitialMigration");
const AppDataSource = new typeorm_1.DataSource(process.env.NODE_ENV === "test"
    ? {
        type: "sqlite",
        database: ":memory:",
        synchronize: true,
        entities: ["./src/Entities/*.ts"],
    }
    : {
        type: "sqlite",
        database: "db.sqlite3",
        logging: true,
        synchronize: false,
        entities: [users_entity_1.default, contacts_entity_1.default],
        migrations: [_1679930849611_InitialMigration_1.InitialMigration1679930849611],
    });
exports.default = AppDataSource;
