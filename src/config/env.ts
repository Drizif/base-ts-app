import { config } from "dotenv";
config();

const env = {
  server: {
    tz: <string> process.env.TZ,
    // @ts-ignore
    port: <number> parseInt(process.env.PORT),
  },
  database: {
    cluster: <string> process.env.DBCLUSTER,
    name: <string> process.env.DBNAME,
    user: <string> process.env.DBUSER,
    pass: <string> process.env.DBPASS,
  },
  jwt: {
    expiration: <string> process.env.JWT_EXPIRATION,
    secretKey: <string> process.env.SECRET_KEY,
  },
};

export default env;
