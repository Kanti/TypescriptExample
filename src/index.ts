import DummyClass from './dummyclass';
import * as $ from 'jquery';
import 'datatables.net';
import 'slick-carousel';

$(async () => {
  let x = new DummyClass(' Hello ');
  await x.run();

  $('.js-table').dataTable();
  $('.js-slider').slick();
});
