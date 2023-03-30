"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitialMigration21679943209906 = void 0;
class InitialMigration21679943209906 {
    constructor() {
        this.name = 'InitialMigration21679943209906';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "temporary_user" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar(50) NOT NULL, "email" varchar(100) NOT NULL, "password" varchar NOT NULL, "telephone" varchar(11) NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "deletedAt" datetime, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"))`);
            yield queryRunner.query(`INSERT INTO "temporary_user"("id", "name", "email", "password", "telephone", "createdAt", "updatedAt", "deletedAt") SELECT "id", "name", "email", "password", "telephone", "createdAt", "updatedAt", "deletedAt" FROM "user"`);
            yield queryRunner.query(`DROP TABLE "user"`);
            yield queryRunner.query(`ALTER TABLE "temporary_user" RENAME TO "user"`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "user" RENAME TO "temporary_user"`);
            yield queryRunner.query(`CREATE TABLE "user" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar(50) NOT NULL, "email" varchar(100) NOT NULL, "password" varchar NOT NULL, "telephone" varchar(11) NOT NULL, "isActive" boolean NOT NULL DEFAULT (1), "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "deletedAt" datetime, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"))`);
            yield queryRunner.query(`INSERT INTO "user"("id", "name", "email", "password", "telephone", "createdAt", "updatedAt", "deletedAt") SELECT "id", "name", "email", "password", "telephone", "createdAt", "updatedAt", "deletedAt" FROM "temporary_user"`);
            yield queryRunner.query(`DROP TABLE "temporary_user"`);
        });
    }
}
exports.InitialMigration21679943209906 = InitialMigration21679943209906;
