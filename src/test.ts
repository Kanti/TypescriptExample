export class Test {
  constructor(protected subject) {
  }

  async run() {
    document.getElementById('A').innerText += this.subject;
  }
}
