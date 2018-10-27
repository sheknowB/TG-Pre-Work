class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}
const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');

const surgeonDurant = new Surgeon('Durant', 'Orthopedics');
// An instance is an object that contains the property names and the methods of a class, but with unique property values. We use the new keyword to create a new instance.
