import DummyClass from './dummyclass';

window.addEventListener('load', async () => {
  let x = new DummyClass(' Hello ');
  await x.run();
});
