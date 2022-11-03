const Employee = require('../lib/employee')

describe("Employee", () => {
  describe('Initilization', () => {
    it("should return values passed in as parameters", () => {
      const employee = new Employee('Leone', 1, 'lvarando@gmail.com');

      expect(employee.name).toEqual('Leone');
      expect(employee.id).toEqual(1);
      expect(employee.email).toEqual('lvarando@gmail.com');
    })
  })

  describe('getRole', () => {
    it("should return role 'Employee'", () => {
      const employee = new Employee('Leone', 1, 'lvarando@gmail.com');

      expect(employee.getRole()).toEqual('Employee');
    })
  })

  describe('getName', () => {
    it('should return name value in current object', () => {
      const employee = new Employee('Leone', 1, 'lvarando@gmail.com');

      expect(employee.getName()).toEqual('Leone');
    })
  })

  describe('getId', () => {
    it('should return value of id within current object', () => {
      const employee = new Employee('Leone', 1, 'lvarando@gmail.com');

      expect(employee.getId()).toEqual(1);
    })
  })

  describe('getEmail', () => {
    it('should return value of email within current object', () => {
      const employee = new Employee('Leone', 1, 'lvarando@gmail.com');

      expect(employee.getEmail()).toEqual('lvarando@gmail.com');
    })
  })
});