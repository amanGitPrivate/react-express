import React from 'react';

class Name extends React.Component {



   type1(){
      this.setState({});
   }

   render() {
    alert('type2');
      return (
         <div>
           <div onClick = {this.type1.bind(this)}>Type2</div>
         </div>
      );
   }
}

Name.propTypes = {
   // chnage string to other type
    name: React.PropTypes.string,
    int:React.PropTypes.number
}
export default Name;
