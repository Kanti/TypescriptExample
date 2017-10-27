import * as $ from 'jquery';

export class Test {
  constructor(protected subject) {
  }

  async run() {
    let $A = $('#A');
    $A.text($A.text() + this.subject);
  }
}
