import React, {Component} from 'react'
import _ from 'lodash'


class Collections extends Component {

  constructor(props) {
    super(props)
    this.state = { arr: [], courses: [] , nums:[]}
  }

  componentDidMount() {
    this.state.arr = ['one', 'two', 'three']
    this.state.nums = [10, 20, 30, 40, 50, 60, 70, 80, 100, 120, 130]
    this.state.courses = [{id:120, name:'Zaki', category: 'A'},
                          {id:20, name:'Faisal', category: 'B'},
                          {id:132, name:'Zaki', category: 'C'} ,
                           {id:22, name:'Another', category: 'A'}]


    this.setState({arr:this.state.arr
                  ,nums: this.state.nums
                  ,courses:this.state.courses})


    // console.log(this.state.courses)

    this._size()

  }

  // find the size of the array or size of the object itself by counting the number of properties
  _size() {
    var result = _.size(this.state.arr)
    console.log('size of the array', result)

    result = _.size(this.state.courses)
    console.log('size of the object', result)

    result = _.size({name: 'ABC', cost: 50, category: 'N', location: 'CT'})
    console.log('object size', result)
  }

  // use this to get the arguments passed to a function
  _toArray() {
    var numsArr = [5,6,7]
    var getAll = function() {
        var args = _.toArray(arguments)
        console.log('arguments',args)
    }

    getAll(numsArr)
  }

   // similar to group by, this is just to count on each group
  _countBy() {
    var numsArr = [3,4,6,7,8,9,3,4,5,6,4,2,5,6,7,4,3,2,3,4,5,6,7]

    var result = _.countBy(this.state.courses, 'category')
    console.log('count by property', result)

    var groupingCriteria = function(value) {
      if(value % 2 == 0)
      {
        return 'divisble'
      }
      else {
        return 'nonDivible'
      }
    }

    result = _.countBy(numsArr,groupingCriteria)
    console.log('count array by criteria', result)

  }

  // randomly shuffle the elements
  _shuffle() {
    var result = _.shuffle(this.state.nums)
    console.log('shuffle', result)
  }

  _groupBy() {
    var result = _.groupBy(this.state.courses, 'category')
    console.log('group by property', result)

    var groupingCriteria = function(value) {
      if(value % 20 == 0)
      {
        return 'divisble'
      }
      else {
        return 'nonDivible'
      }
    }

    result = _.groupBy(this.state.nums,groupingCriteria)
    console.log('group array by criteria', result)
  }

   // sort array or object
  _sortBy() {
    var unsortedList = [67,34,56,23,78,44]
    var result = _.sortBy(unsortedList)
    console.log('aort by array of nums',result)

    result = _.sortBy(this.state.courses, 'id').reverse() // desceding order
    console.log('sort object', result)
  }

  _min() {
    var result = _.min(this.state.nums)
    console.log('min', result)
  }

  _max() {
    var result = _.max(this.state.nums)
    console.log('max', result)
  }

  // get all available values for a particular property within the array of an object
  _pluck() {
    var result = _.pluck(this.state.courses,'name')

    console.log('pluck', result)
  }

  // check if an item is contained sommewhere
  _contains() {
    var result = _.contains('hello', 'h')

    console.log('contains char in string: ' + result)

    result = _.contains(this.state.arr, 'one')

    console.log('contains in array: ' + result)
  }


  // returns true if the conditions is true for at least one item in the collection
  _some() {
    var result = _.some(this.state.nums, function(value) {
      return value % 10 == 0
    })

    console.log('some', result)
  }

  // returns true if the conditions is true for every item in the collection
  _every() {
    var result = _.every(this.state.nums, function(value) {
      return value % 20 == 0
    })

    console.log('every', result)
  }

  //  clause to search by a specific properties and return the ONLY the first match
  _findWhere() {
    var result = _.findWhere(this.state.courses,{name:'Zaki'})
    console.log('findWhere', result)
  }

  //  clause to search by a specific properties and return ALL matches
  _where() {
     var result = _.where(this.state.courses,{name:'Zaki'})
     console.log('where', result)
  }

  // cellection for which the mentioned conditionsa are not met
  _reject() {
    var result = _.reject(this.state.nums, function(value) {
      return value % 20 == 0
    })

    console.log('reject', result)
  }

  // filtering the collection based on ResultSet but only get the first item, NOT every item
  _find() {
    var result = _.find(this.state.nums, function(value) {
      return value % 20 == 0
    })

    console.log('find', result)
  }

  // filtering the collection based on ResultSet
  _filter() {
    var result = _.filter(this.state.nums, function(value) {
      return value % 5 == 0
    })

    console.log('filter', result)
  }

  // reduce an aray to something using a memo and the next value
  _reduce() {
    var result = _.reduce(this.state.arr, function(memo, value) {
      return memo  + ' '  + value
    }, 'Prepend ')

    console.log('reduce', result)
  }

  render() {
    return (
      <div>
          this is for collections
          <label></label>
      </div>
    )
  }
}

export default Collections
