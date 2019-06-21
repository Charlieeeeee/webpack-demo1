import axios from 'axios';

(() => {
  console.log('the other one');
})();

axios.get('/api/info').then(res => {
  console.log('here:', res);
});

class Greet {
  hello() {
    console.log('hello ', this.name);
  }
  get name() {
    return this._name;// 加个_
  }
  set name(val) {
    this._name = 'chen' + val;
  }
}

let greet = new Greet();

greet.name = 'lichao';
greet.hello();

new Promise((resolve, reject) => {
  resolve('haha');
}).then(res => {
  console.log(res);
});
