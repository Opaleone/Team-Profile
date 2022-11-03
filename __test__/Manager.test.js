const Manager = require('../lib/manager')

describe("Intern", () => {
  describe('Initilization', () => {
    it("should return values passed in as parameters", () => {
      const manager = new Manager('Leone', 1, 'lvarando@gmail.com', 10);

      expect(manager.name).toEqual('Leone');
      expect(manager.id).toEqual(1);
      expect(manager.email).toEqual('lvarando@gmail.com');
      expect(manager.officeNumber).toEqual(10)
    })
  })

  describe('getRole', () => {
    it("should return role 'Manager'", () => {
      const manager = new Manager('Leone', 1, 'lvarando@gmail.com', 10);

      expect(manager.getRole()).toEqual('Manager');
    })
  })

  describe('getName', () => {
    it("should return 'Leone'", () => {
      const manager = new Manager('Leone', 1, 'lvarando@gmail.com', 10);

      expect(manager.getName()).toEqual('Leone');
    })
  })

  describe('getId', () => {
    it("should return 1", () => {
      const manager = new Manager('Leone', 1, 'lvarando@gmail.com', 10);

      expect(manager.getId()).toEqual(1);
    })
  })

  describe('getEmail', () => {
    it("should return 'lvarando@gmail.com'", () => {
      const manager = new Manager('Leone', 1, 'lvarando@gmail.com', 10);

      expect(manager.getEmail()).toEqual('lvarando@gmail.com');
    })
  })

  describe('getOfficeNumber', () => {
    it("should return 10", () => {
      const manager = new Manager('Leone', 1, 'lvarando@gmail.com', 10);

      expect(manager.getOfficeNumber()).toEqual(10);
    })
  })
});