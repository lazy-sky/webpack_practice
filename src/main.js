const a = 1;

const abc = () => {
  console.log(a)
}

class User {
  constructor(name) {
    this.name = name
  }

  getName() {
    return this.name
  }
}

const b = { x: 1}
const c = {
  ...b,
  y: 2
}