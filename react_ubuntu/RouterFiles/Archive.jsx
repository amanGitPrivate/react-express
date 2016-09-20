import React from 'react';
import $ from 'jquery';
import {Map,Marker} from 'google-maps-react';


class Archive extends React.Component {

   constructor(props){
      super(props);
      this.state = {

         todos :[]
      }
   }


  componentDidMount(){  

    let latLongData;

      var self = this;
       $.ajax({
              type:'GET',
              url: 'http://localhost:3000',
              dataType: 'jsonp',
              cache: false,
              crossDomain: true,
              jsonpCallback: 'jsonp',
              success: function(data) {
                console.log(data);
                
                this.setState({todos:data});
              }.bind(this),
              error: function(xhr, status, err) {
                console.log('xhr',xhr);
                console.log('satutus',status);
                console.log('err',err);
                alert('fail')
              }.bind(this)

            });   
    }  

   joinIndiaCities(data){
       // map type can be roadmap,satellite,hybrid,terrain
        // marker are used to set the loaction
        // let center = new google.maps.LatLng(51.508742,-0.120850);
        // let center2 = new google.maps.LatLng(27.1767, 78.0081);
        // let centerArray = [];
        // centerArray.push(center);
        // centerArray.push(center2);
        // let mapCanvas = document.getElementById("map");
        // let mapOptions = {
        //   center: new google.maps.LatLng(27.1767, 78.0081),
        //   zoom: 10,
        //   mapTypeId: google.maps.MapTypeId.HYBRID
        // }
        // let map = new google.maps.Map(mapCanvas, mapOptions);  

        // centerArray.map(function(data,index){
        //   let marker = new google.maps.Marker({position:data,
        //   animation:google.maps.Animation.HYBRID
        //   });
        //   marker.setMap(map)  
        // })
        // let centerArray=[];
        // data.map(function(data,index){

        // console.log('data',parseInt(data.latitude),parseInt(data.longitude));
        //   centerArray.push(
        //       new google.maps.LatLng(parseInt(data.latitude),parseInt(data.longitude)))
            
        // console.log('centerArray',centerArray)  

        // });
        // console.log('centerArray',centerArray);
        // let mapCanvas = document.getElementById("map");

        // let mapOptions = {
        //   center: new google.maps.LatLng(27.1767, 78.0081),
        //   zoom: 10,
        //   mapTypeId: google.maps.MapTypeId.HYBRID
        // }
        // let map = new google.maps.Map(mapCanvas, mapOptions);

        // let flightPath = new google.maps.Polyline({
        //     path: centerArray,
        //     strokeColor: "#0000FF",
        //     strokeOpacity: 0.8,
        //     strokeWeight: 2,
        //   });
        //   flightPath.setMap(map);


        // let center = new google.maps.LatLng(51.508742,-0.120850);
        // let center2 = new google.maps.LatLng(27.1767, 78.0081);
        // let centerArray = [];
        // centerArray.push(center);
        // centerArray.push(center2);
        // let mapCanvas = document.getElementById("map");
        // let mapOptions = {
        //   center: new google.maps.LatLng(27.1767, 78.0081),
        //   zoom: 10,
        //   mapTypeId: google.maps.MapTypeId.HYBRID
        // }
        // let map = new google.maps.Map(mapCanvas, mapOptions);  

        // centerArray.map(function(data,index){
        //   let marker = new google.maps.Marker({position:data,
        //   animation:google.maps.Animation.HYBRID
        //   });
        //   marker.setMap(map)  
        // })


   } 

   render() {
      
      var self = this;
      return (
          <div>
            Arch1
            {this.state.todos.map(function(data,index){

              return (<div>{data.name}</div>)

             })
            }
            <div id = "map" style={{height:"300px"}}></div>
          </div>
      );
   }
}

export default Archive;
