import Sequelize from 'sequelize';
import dbConfig from './database.js';
import User from '../app/models/User';
const models = [User];

class Database {
    constructor() { this.init(); }
    init() {
        this.connection = new Sequelize(dbConfig);
        models.map(model => model.init(this.connection));
    }
}
export from Database;
