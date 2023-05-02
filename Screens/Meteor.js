import React, { Component } from "react";
import { Text,View, StyleSheet, Alert } from "react-native";
//KiGDBQyUaJOqNdlLbReENv7RUOLEQkbesu9rOUyr
import axios from "axios";



export default class Meteor extends Component{
    constructor(){
        super()
        this.state = {
            meteors:{}
        }
    }
    componentDidMount(){
        this.getMeteors()
    }


    getMeteors = () => {
        axios
            .get("https://api.nasa.gov/neo/rest/v1/feed?api_key=KiGDBQyUaJOqNdlLbReENv7RUOLEQkbesu9rOUyr")
            .then(response => {
                this.setState({meteors:response.data.near_earth_objects})
            })
            .catch(error => {Alert.alert(error.message)})
        }


    
    render(){
        if (Object.keys(this.state.meteors).length == 0 ) {
            return(
                <View style = {[styles.container,{justifyContent:"center", alignItems: "center"}]}>
                    <Text>
                    loading...
                    </Text>
                </View>
            ) 
        } else {
            var meteorArray = Object.keys(this.state.meteors).map(meteorDate => {
                return(
                    this.state.meteors[meteorDate]
                )
            })
            var meteors = [].concat.apply([],meteorArray)
            meteors.forEach(element => {
                var diameter = (element.estimated_diameter.kilometers.estimated_diameter_min + element.estimated_diameter.kilometers.estimated_diameter_max)/2
                var threatScore = (diameter/element.close_approach_data[0].miss_distance.kilometers)*1000000000
                element.threat_Score = threatScore
            });
            return(
                <View style = {styles.container}>
                    <Text>
                        Meteor
                    </Text>
                </View>
            ) 
        }
        
        
     
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: "center",
    justifyContent: "center"
        
    }
})