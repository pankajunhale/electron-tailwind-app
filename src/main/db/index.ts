import * as knexConfig from '../../../release/app/knex';
import { Knex } from 'knex';

const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
const knex: Knex = require('knex')(knexConfig[env]);

export default knex;
