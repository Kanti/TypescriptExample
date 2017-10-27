export default class DummyClass {
  constructor(protected subject) {
  }

  async run() {
    document.getElementById('A').innerText += this.subject;

    const BCD = await import('./test');

    let x = new BCD.Test(' World ');
    x.run();
  }
}
