import _ from 'lodash';

export default class InMemoryKV {
  constructor(initialValue = {}) {
    this.data = _.cloneDeep(initialValue);
  }

  set(key, value) {
    this.data[key] = value;
  }

  unset(key) {
    this.data = _.omit(this.data, key);
  }

  get(key, defaultValue = null) {
    return _.get(this.data, key, defaultValue);
  }

  toObject() {
    return this.data;
  }
}
