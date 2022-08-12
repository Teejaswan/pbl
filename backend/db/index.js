import { readFileSync, writeFileSync } from "fs";

class DB {
  users = [];
  pass = [];
  teams = [];
  proposals = [];

  #path;

  constructor(options = { path: "db/db.t" }) {
    this.#path = options.path;
    this.get();
  }

  get() {
    const data = readFileSync(this.#path);
    const { users, pass, teams, proposals } = JSON.parse(data);

    this.users = users;
    this.pass = pass;
    this.teams = teams;
    this.proposals = proposals;

    return this;
  }

  sync() {
    const data = JSON.stringify(this, null, 2);
    writeFileSync(this.#path, data);
  }

  newUser({ name, pass, type }) {
    const id = this.users.length;
    this.users.push({ id, name, type });
    this.pass.push(pass);
    this.sync();
  }

  changePass(id, [before, after]) {
    if (this.pass[id] === before) {
      this.pass[id] = after;
      this.sync();
      return true;
    }

    return false;
  }

  addProposals(proposal) {
    this.proposals.push(proposal);
    this.sync();
  }

  updateProposal(id, proposal) {
    this.proposals[id] = { ...proposal };
    this.sync();
  }

  deleteProposal(id) {
    this.proposals.splice(id, 1);
    this.sync();
  }
}

function db(...options) {
  return new DB(...options);
}

export default db;
