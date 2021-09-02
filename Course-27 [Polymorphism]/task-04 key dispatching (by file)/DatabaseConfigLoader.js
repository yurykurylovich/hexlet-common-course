import fs from 'fs';
import path from 'path';
import _ from 'lodash';

class DatabaseConfigLoader {
  constructor(configPath) {
    this.configPath = configPath;
  }
  load(env) {
    const filename = `database.${env}.json`;
    const pathToFile = path.join(this.configPath, filename);
    const raw = fs.readFileSync(pathToFile, 'utf-8');
    let config = JSON.parse(raw);

    if (!_.has(config, 'extend')) {
      return config;
    }

    const newEnv = config.extend;
    const extension = this.load(newEnv);
    const configWithoutExtend = _.omit(config, 'extend');
    return _.merge(extension, configWithoutExtend);
  }
}

