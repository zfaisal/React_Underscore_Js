import React, {Component} from 'react'
import _ from 'underscore'

class Arrays extends Component {
  constructor(props) {
    super(props)

    this.state =  {arr:[], myObj: []}
  }

  componentDidMount() {
    this.state.arr = ['he', 'she', 'me', 'you']
    this.state.myObj = [{name:'Zaki', id: 345, value: 4567}
                       ,{name:'Faisal', id: 857, value: 8745}
                       ,{name:'Developer', id: 634, value: 2569}]
    this.state.nums = [1,2,3,4,5,6,7,8,9,10]

    this.setState({arr: this.state.arr, myObj: this.state.myObj, nums: this.state.nums})
    // console.log(this.state.arr, this.state.myObj)
    
    this._indexOf()
  }

  _range() {

  }

    // find the index of the last occurance of any element that is being searched
  _lastIndexOf() {
    var result = _.lastIndexOf([1, 2,2, 3], 2)
    console.log('last index of', result)

    result = _.lastIndexOf('hello', 'l') // CAUTION: only works when the second parameter is a single character
    console.log('index of', result)
  }

    // find the index of the first occurance of any element that is being searched
  _indexOf() {
    var result = _.indexOf([1, 2,2, 3], 2)
    console.log('index of', result)

    result = _.indexOf('hello', 'l') // CAUTION: only works when the second parameter is a single character
    console.log('index of', result)
  }

  // covverting two arrays of keys and values to an object
  _object() {
    var propNames = ['name', 'id']
    var propValues = ['Zaki', 3]
    var result = _.object(propNames, propValues)
    console.log('coversion to an object', result)
  }

  // opposite of zip
  _unzip() {
    var result = _.unzip([["moe", 30, true], ["larry", 40, false], ["curly", 50, false]])
    console.log('unzip', result)
  }

  // seperate arrays put to one single array so it becomes an array or arrays
  _zip() {
    var arr1 = [3,5,6,7,8,3]
    var arr2 = [5,6,7,8]
    var arr3 = [2,5]

    var result = _.zip(arr1, arr2, arr3)
    console.log('zip', result)
  }


  // find all unique values. If sorted, pass true for faster result. Also an function can be passed for certain algorithm
  _uniq() {
    var result = _.uniq([1,9,4,5,6,1,2,3,4,6])
    console.log('uniq', result)
  }

  // find all values that are in the first array but not in the second array
  _difference() {
    var result = _.difference([1, 2, 3, 3, 4, 5], [5, 2, 10])
    console.log('difference', result)
  }


  // find distinct common values accross multiple arrays
  _intersection() {
    var arr1 = [3,5,6,5,7,8,3]
    var arr2 = [5,6,7,8]
    var arr3 = [2,5]

    var result = _.intersection(arr1, arr2, arr3)
    console.log('intersection', result)
  }

  // gather the list of distinct values accross multiple arrays
  _union() {
    var arr1 = [3,5,6,7,8,3]
    var arr2 = [5,6,7,8]
    var arr3 = [2,5]

    var result = _.union(arr1, arr2, arr3)
    console.log('union', result)
  }

  // exlcude from the array whetever values are specified to removed
  _without() {
    var mixed = [1,1,1,5,6,7,7,8,8,9,9]
    var result = _.without(mixed, 1,8,7)
    console.log('without', result)
  }

  _flatten() {
    var result = _.flatten([1, [2] ,[2], [3, [[4]]]])
    console.log('flatten all to a single level', result)

    result = _.flatten([1, [2], [3, [[4]]]], true)
    console.log('flatten but keep the nested levels intact', result)
  }

  // drops values such as undefined, false, '', null , 0 and NaN
  _compact() {
    var mixed = [3,4,5,'m', undefined, false , 't', '', 5, 56, null , 0 , NaN]
    var result = _.compact(mixed)
    console.log('compact', result)
  }

  // same as _rest
  _drop() {
    var result = _.drop(this.state.nums)
    console.log('all elements but the first one', result)

    result = _.drop(this.state.nums, 3)
    console.log('all elements but the first n elements ',result)
  }


  // same as _tail
  _tail() {
    var result = _.tail(this.state.nums)
    console.log('all elements but the first one', result)

    result = _.tail(this.state.nums, 3)
    console.log('all elements but the first n elements ',result)
  }

  _rest() {
    var result = _.rest(this.state.nums)
    console.log('all elements but the first one ',result)

    result = _.rest(this.state.nums, 3)
    console.log('all elements but the first n elements ',result)
  }

  _last() {
    var result = _.last(this.state.myObj)
    console.log('the last element only', result)

    result = _.last(this.state.arr, 2)
    console.log('the last n elements', result)
  }

  _initial() {
    var arr = [1,2,3,4,5,6,7,8,9,10]
    var result = _.initial(arr)
    console.log('all elements except the last one',result)

    result = _.initial(arr, 5)
    console.log('all elements except the last n elements', result);
  }

  // get the first element of the array
  _take() {
    var result =  _.take(this.state.arr,3)
    console.log('first n element', result)

  }

  // get the first element of the array
  _first() {
    var result =  _.first(this.state.arr)
    console.log('first element', result)

  }

  render() {
    return (
      <div>
          this is the arrays section
      </div>
    )
  }

}

export default Arrays
