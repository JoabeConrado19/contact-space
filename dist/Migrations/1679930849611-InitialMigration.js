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
exports.InitialMigration1679930849611 = void 0;
class InitialMigration1679930849611 {
    constructor() {
        this.name = 'InitialMigration1679930849611';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "contact" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar(50) NOT NULL, "email" varchar(100) NOT NULL, "telephone" varchar(11) NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "deletedAt" datetime, "userId" varchar, CONSTRAINT "UQ_eff09bb429f175523787f46003b" UNIQUE ("email"))`);
            yield queryRunner.query(`CREATE TABLE "user" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar(50) NOT NULL, "email" varchar(100) NOT NULL, "password" varchar NOT NULL, "telephone" varchar(11) NOT NULL, "isActive" boolean NOT NULL DEFAULT (1), "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "deletedAt" datetime, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"))`);
            yield queryRunner.query(`CREATE TABLE "temporary_contact" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar(50) NOT NULL, "email" varchar(100) NOT NULL, "telephone" varchar(11) NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "deletedAt" datetime, "userId" varchar, CONSTRAINT "UQ_eff09bb429f175523787f46003b" UNIQUE ("email"), CONSTRAINT "FK_e7e34fa8e409e9146f4729fd0cb" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
            yield queryRunner.query(`INSERT INTO "temporary_contact"("id", "name", "email", "telephone", "createdAt", "updatedAt", "deletedAt", "userId") SELECT "id", "name", "email", "telephone", "createdAt", "updatedAt", "deletedAt", "userId" FROM "contact"`);
            yield queryRunner.query(`DROP TABLE "contact"`);
            yield queryRunner.query(`ALTER TABLE "temporary_contact" RENAME TO "contact"`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "contact" RENAME TO "temporary_contact"`);
            yield queryRunner.query(`CREATE TABLE "contact" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar(50) NOT NULL, "email" varchar(100) NOT NULL, "telephone" varchar(11) NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "deletedAt" datetime, "userId" varchar, CONSTRAINT "UQ_eff09bb429f175523787f46003b" UNIQUE ("email"))`);
            yield queryRunner.query(`INSERT INTO "contact"("id", "name", "email", "telephone", "createdAt", "updatedAt", "deletedAt", "userId") SELECT "id", "name", "email", "telephone", "createdAt", "updatedAt", "deletedAt", "userId" FROM "temporary_contact"`);
            yield queryRunner.query(`DROP TABLE "temporary_contact"`);
            yield queryRunner.query(`DROP TABLE "user"`);
            yield queryRunner.query(`DROP TABLE "contact"`);
        });
    }
}
exports.InitialMigration1679930849611 = InitialMigration1679930849611;
