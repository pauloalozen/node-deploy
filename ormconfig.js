require('dotenv/config');

const devConfig = [
  {
    type: 'postgres',
    localhost: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'docker',
    database: 'gostack_gobarber',
    entities: ['./src/modules/**/infra/typeorm/entities/*.ts'],
    migrations: ['./src/shared/infra/typeorm/migrations/*.ts'],
    cli: {
      migrationsDir: './src/shared/infra/typeorm/migrations',
    },
  },
  {
    name: 'mongo',
    type: 'mongodb',
    localhost: 'localhost',
    port: 27017,
    database: 'gobarber',
    useUnifiedTopology: true,
    entities: ['./src/modules/**/infra/typeorm/schemas/*.ts'],
  },
];

const prodConfig = [
  {
    type: 'postgres',
    localhost: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'docker',
    database: 'gostack_gobarber',
    entities: ['./dis/modules/**/infra/typeorm/entities/*.js'],
    migrations: ['./dist/shared/infra/typeorm/migrations/*.js'],
    cli: {
      migrationsDir: './dist/shared/infra/typeorm/migrations',
    },
  },
  {
    name: 'mongo',
    type: 'mongodb',
    localhost: 'localhost',
    port: 27017,
    database: 'gobarber',
    useUnifiedTopology: true,
    entities: ['./dist/modules/**/infra/typeorm/schemas/*.js'],
  },
];

module.exports =
  process.env.NODE_ENV === 'development' ? devConfig : prodConfig;
