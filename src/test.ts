import * as $ from 'jquery';

export class Test {
  constructor(protected subject: string) {
  }

  run(): void {
    let $A = $('#A');
    $A.text($A.text() + this.subject);
  }
}
