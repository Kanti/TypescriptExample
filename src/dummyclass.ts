import * as $ from 'jquery';

export default class DummyClass {
  constructor(protected subject) {
  }

  async run() {
    let $A = $('#A');
    if ($A.length) {
      $A.text($A.text() + this.subject);

      const {Test} = await import('./test');

      let test = new Test(' World ');
      $A.click(async () => {
        $A.off( 'click' );
        await test.run();
      });

    }
  }
}
