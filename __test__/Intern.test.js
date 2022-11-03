const Intern = require('../lib/intern')

describe("Intern", () => {
  describe('Initilization', () => {
    it("should return values passed in as parameters", () => {
      const intern = new Intern('Leone', 1, 'lvarando@gmail.com', 'UTA');

      expect(intern.name).toEqual('Leone');
      expect(intern.id).toEqual(1);
      expect(intern.email).toEqual('lvarando@gmail.com');
      expect(intern.school).toEqual('UTA')
    })
  })

  describe('getRole', () => {
    it("should return role 'Intern'", () => {
      const intern = new Intern('Leone', 1, 'lvarando@gmail.com', 'UTA');

      expect(intern.getRole()).toEqual('Intern');
    })
  })

  describe('getName', () => {
    it("should return 'Leone'", () => {
      const intern = new Intern('Leone', 1, 'lvarando@gmail.com', 'UTA');

      expect(intern.getName()).toEqual('Leone');
    })
  })

  describe('getId', () => {
    it("should return 1", () => {
      const intern = new Intern('Leone', 1, 'lvarando@gmail.com', 'UTA');

      expect(intern.getId()).toEqual(1);
    })
  })

  describe('getEmail', () => {
    it("should return 'lvarando@gmail.com'", () => {
      const intern = new Intern('Leone', 1, 'lvarando@gmail.com', 'UTA');

      expect(intern.getEmail()).toEqual('lvarando@gmail.com');
    })
  })

  describe('getSchool', () => {
    it("should return 'UTA'", () => {
      const intern = new Intern('Leone', 1, 'lvarando@gmail.com', 'UTA');

      expect(intern.getSchool()).toEqual('UTA');
    })
  })
});