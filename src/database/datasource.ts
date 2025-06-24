import { Attendee } from "src/attendee/entities/attendee.entity";
import { Event } from "src/event/entities/event.entity";
import { User } from "src/user/entities/user.entity";
import { DataSource } from "typeorm";
import { Init1750725458642 } from "./migrations/1750725458642-init";



export default new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "root",
    password: "123456",
    database: "event-db",
    entities:[
        Attendee,
        Event,
        User
    ],
    migrations:[Init1750725458642]
})