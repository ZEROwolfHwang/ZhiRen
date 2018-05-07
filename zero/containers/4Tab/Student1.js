/**
 * Created by zerowolf Date: 2018/4/23 Time: 下午3:56
 */
import React, {Component} from 'react';
import {
    Platform, StyleSheet, Text, Alert, View, TouchableOpacity, Image, Dimensions, ListView
} from 'react-native';

const {width, height} = Dimensions.get('window');
import MyTabView from '../../views/MyTabView';
import ButtonView from "../../views/ButtonView";
import {connect} from 'react-redux';


class Student1 extends Component {

    constructor(props) {
        super(props);

        /* setTimeout(function(){
             console.log("Hello World");
         },1);

         function foo() {
             // NOTE: don't ever do crazy long-running loops like this
             for (var i=0; i<=200; i++) {
                 console.log(i);
             }
         }

         foo();


         function* helloWorldGenerator() {
             yield 'hello';

             yield 'world';
             return ;
         }

         var hw = helloWorldGenerator();


         function* gen() {
             yield  123 + 456;
         }

         function f() {
             console.log('执行了！')
         }

         var generator = f();

         // setTimeout(function () {
         //     generator.next()
         // }, 2000);
         //
         console.log(gen().next());


         console.log(hw.next());
 // { value: 'hello', done: false }

         console.log(hw.next());
 // { value: 'world', done: false }

         console.log(hw.next());
 // { value: 'ending', done: true }

         console.log(hw.next());
 // { value: undefined, done: true }
 */
        /*   (function (){
               yield 1;
           })()
   */
        /*  var arr = [1, [[2, 3], 4], [5, 6]];

          var flat = function* (a) {
              a.forEach(function (item) {
                  if (typeof item !== 'number') {
                      yield* flat(item);
                  } else {
                      yield item;
                  }
              });
          };

          for (var f of flat(arr)){
              console.log(f);
          }*/

        /* var arr = [1, [[9, 8,0], [4,6]], [5, 6]];

         var flat = function* (a) {
             var length = a.length;
             for (var i = 0; i < length; i++) {
                 var item = a[i];
                 if (typeof item !== 'number') {
                     yield* flat(item);
                 } else {
                     yield item;
                 }
             }
         };



         for (var f of flat(arr)) {
             console.log(f);
         }
         for (var f of arr) {
             console.log(f);

         }

         var myIterable = {};
         myIterable[Symbol.iterator] = function* () {
             yield 1;
             yield 2;
             yield 3;
         };

         console.log([...myIterable]);

         function* gen(){
             // some code
             yield 4;
             yield 5;
             yield 6;
         }

         var g = gen();

         console.log(g);

         console.log(g[Symbol.iterator]() === g);

         console.log(g);*/


        // function* f() {
        //     for(var i = 0; true; i++) {
        //         console.log((yield  i));
        //
        //
        //         var reset = yield i;
        //         if(reset) { i = -1; }
        //
        //     }
        // }
        //
        //
        //
        // var g = f();
        //
        //
        //
        // console.log(g.next()); // { value: 0, done: false }
        // console.log(g.next()); // { value: 1, done: false }
        // console.log(g.next(true)); // { value: 0, done: false }


        /*

                function* foo(x) {
                    // console.log(y)
                    var y = 3 * (yield (x + 1));

                    console.log(y)
                    var z = yield (y / 3);
                    console.log(y)
                    // console.log(('x:' + x + 'y:' + y + 'z:' + z));
                    return (x + y + z);
                }

                var a = foo(5);
                console.log(a.next()); // Object{value:6, done:false}
                console.log(a.next()); // Object{value:NaN, done:false}
                console.log(a.next()); // Object{value:NaN, done:true}


                var b = foo(5);
                console.log(b.next()); // { value:6, done:false }
                console.log('......');
                console.log(b.next(12)); // { value:8, done:false }
                console.log('......');
                console.log(b.next(13)); // { value:42, done:true }
                console.log('......');


        */

//         function* dataConsumer() {
//             console.log('Started');
//             console.log(`1. ${yield 'nihao'}`);
//             console.log(`2. ${yield}`);
//             return 'result';
//         }
//
//         let genObj = dataConsumer();
//         genObj.next();
// // Started
//         console.log(genObj.next());
//
// // 1. a
//         console.log(genObj.next('b'));
//
// // 2. b


        /*

                function wrapper(generatorFunction) {
                    return function (...args) {
                        let generatorObject = generatorFunction(...args);
                        generatorObject.next();
                        return generatorObject;
                    };
                }

                const wrapped = wrapper(function* () {
                    console.log(`First input: ${yield}`);
                    return 'DONE';
                });

                wrapped().next('hello!')

        */


        /*var str = "ajsdasdk";

        for(s of str){
            console.log(s);
        }
*/

        /*  let arr = "nass";
          let iter = arr[Symbol.iterator]();

          console.log(iter.next()); // { value: 'a', done: false }
          console.log(iter.next()); // { value: 'b', done: false }
          console.log(iter.next()); // { value: 'b', done: false }
          console.log(iter.next()); // { value: 'b', done: false }
          console.log(iter.next()); // { value: 'b', done: false }
          console.log(iter.next()); // { value: 'b', done: false }
          console.log(iter.next()); // { value: 'b', done: false }
          // iter.next() // { value: 'c', done: false }
          // iter.next() // { value: undefined, done: true }

          for (let obg of arr) {
              console.log(obg);
              return obg;

          }*/


        /* class RangeIterator {
             constructor(start, stop) {
                 this.value = start;
                 this.stop = stop;
             }

             [Symbol.iterator]() { return this; }

             next() {
                 var value = this.value;
                 if (value <= this.stop) {
                     this.value++;
                     return {done: false, value: value};
                 }
                 return {done: true, value: undefined};
             }
         }

         function range(start, stop) {
             return new RangeIterator(start, stop);
         }

         for (var value of range(0, 3)) {
             console.log(value); // 0, 1, 2
         }*/


        /*

                function Obj(value) {
                    this.value = value;
                    this.next = null;
                }

                Obj.prototype[Symbol.iterator] = function() {
                    var iterator = { next: next };

                    var current = this;

                    function next() {
                        if (current) {
                            var value = current.value;
                            current = current.next;
                            return { done: false, value: value };
                        } else {
                            return { done: true };
                        }
                    }
                    return iterator;
                }

                var one = new Obj(1);
                var two = new Obj(2);
                var three = new Obj(3);

                one.next = two;
                two.next = three;

                for (var i of one){
                    console.log(i); // 1, 2, 3
                }
        */

        /*let iterable = {
            1: 'a',
            2: 'b',
            3: 'c',
            length: 5,


            [Symbol.iterator]: Array.prototype[Symbol.iterator]
        };



        for (let item of iterable) {
            console.log(item); // 'a', 'b', 'c'
        }*/

        /*  let iterable = {
              a: 'a',
              b: 'b',
              c: 'c',
              length: 3,
              [Symbol.iterator]: Array.prototype[Symbol.iterator]
          };
          for (let item of iterable) {
              console.log(item); // undefined, undefined, undefined
          }*/


        /* var obj = {};

         obj[Symbol.iterator] = () => 1;

         [...obj] // TypeError: [] is not a function

 */

        /*    var ITERABLE = ['1','2','3'];
            var iterator = ITERABLE[Symbol.iterator]();
            var result = iterator.next();
            while (!result.done) {
                var x = result.value;
                // ...
                console.log(x);
                result = iterator.next();

            }
    */

/*
        let set = new Set().add('a').add('b').add('c').add('d' );

        // let [x, y] = set;
        // console.log(set[1]);

        var anies = set;
        console.log(anies);
        var [...x] = set;
        console.log(x);
         var [x,y,...z] = set;
        console.log(z);

// x='a'; y='b'

        let [first, ...rest] = set;
// first='a'; rest=['b','c'];*/

        var numbers = [1,2,34,5];
        console.log([...numbers]);
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
                <MyTabView titleColor={'black'} title={'xuesheng1'}
                           leftView={true}
                           navigation={this.props.navigation}/>

                <ButtonView onPress={() => {
                    this.props.navigation.navigate('HelloBack')
                }
                }/>
                <Text>学生1</Text>
            </View>)
    }

}


const mapStateToProps = (state) => {
    return {
        nav: state.nav
    }

};

export default connect(mapStateToProps)(Student1);
