const Engineer = require('../lib/engineer')

describe("Engineer", () => {
  describe('Initilization', () => {
    it("should return values passed in as parameters", () => {
      const engineer = new Engineer('Leone', 1, 'lvarando@gmail.com', 'Opaleone');

      expect(engineer.name).toEqual('Leone');
      expect(engineer.id).toEqual(1);
      expect(engineer.email).toEqual('lvarando@gmail.com');
      expect(engineer.github).toEqual('Opaleone')
    })
  })

  describe('getRole', () => {
    it("should return role 'Engineer'", () => {
      const engineer = new Engineer('Leone', 1, 'lvarando@gmail.com', 'Opaleone');

      expect(engineer.getRole()).toEqual('Engineer');
    })
  })

  describe('getName', () => {
    it("should return 'Leone'", () => {
      const engineer = new Engineer('Leone', 1, 'lvarando@gmail.com', 'Opaleone');

      expect(engineer.getName()).toEqual('Leone');
    })
  })

  describe('getId', () => {
    it("should return 1", () => {
      const engineer = new Engineer('Leone', 1, 'lvarando@gmail.com', 'Opaleone');

      expect(engineer.getId()).toEqual(1);
    })
  })

  describe('getEmail', () => {
    it("should return 'lvarando@gmail.com'", () => {
      const engineer = new Engineer('Leone', 1, 'lvarando@gmail.com', 'Opaleone');

      expect(engineer.getEmail()).toEqual('lvarando@gmail.com');
    })
  })

  describe('getGithub', () => {
    it("should return 'Opaleone'", () => {
      const engineer = new Engineer('Leone', 1, 'lvarando@gmail.com', 'Opaleone');

      expect(engineer.getGithub()).toEqual('Opaleone');
    })
  })
});