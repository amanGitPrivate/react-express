import React from 'react';
import $ from 'jquery';


class Archive extends React.Component {

   constructor(props){
      super(props);
      this.state = {

         todos :[]
      }
   }


  
   render() {

      var self = this;
      return (
          <div>
           Welcome this is what has been happening latley
          </div>
      );
   }
}

export default Archive;
