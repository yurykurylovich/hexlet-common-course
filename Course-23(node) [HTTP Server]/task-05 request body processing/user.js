let id = 1000;

export const nextId = () => {
  id += 1;
  return id;
};

export const validate = ({ name, phone }) => {
  let errors = [];
  if (!name) { errors.push({ source: 'name', title: "can't be blank"})};
  if (!phone) { errors.push({ source: 'phone', title: "can't be blank"})};
  if (!/^[\w\.]+$/.test(name)) {
    errors.push({ source: 'name', title: 'bad format'});
  }
  return errors;
}
