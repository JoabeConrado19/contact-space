import { DataSource } from "typeorm";
import path from "path";
import Users from "./Entities/users.entity";
import Contacts from "./Entities/contacts.entity";
import { InitialMigration1679930849611 } from "./Migrations/1679930849611-InitialMigration";

const AppDataSource = new DataSource(
  process.env.NODE_ENV === "test"
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
        entities: [Users, Contacts],
        migrations: [InitialMigration1679930849611],
      }
);

export default AppDataSource;