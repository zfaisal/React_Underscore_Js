import React, {Component} from 'react'
import _ from 'lodash'

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

    this.setState({arr: this.state.arr, myObj: this.state.myObj})
    // console.log(this.state.arr, this.state.myObj)

    this._first()
  }

  // get the first element of the array or the first n elements of the array
  _first() {
    var result =  _.first(this.state.arr)
    console.log('first element', result)

     result =  _.first(this.state.arr, 3)
    console.log('first n elements', result)
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
