import React, {Component} from 'react';
import { View, TouchableOpacity, ImageBackground, Text, FlatList, StyleSheet, LayoutAnimation, Platform, UIManager} from "react-native";
import { Colors } from '../../../Helpers/AppThemes';
//import Icon from "react-native-vector-icons/MaterialIcons";

export default class Continue extends Component{

    constructor(props) {
        super(props);
        this.state = { 
          data: props.data,
          expanded : false,
        }
    }
  
  render() {
    return (
       <View style={styles.container}>
                <TouchableOpacity onPress={()=>this.continueTapped()}>
                <Text style={[styles.caption]}>Tap here when you're ready to continue</Text>
                </TouchableOpacity>
       </View>
    )
  }

  continueTapped=()=>{
      //console.log('Continue is clicked')
      this.props.continue();
    // LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    // this.setState({expanded : !this.state.expanded})
  }

}

const styles = StyleSheet.create({
    container:{
        //flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 15,
        borderTopLeftRadius:0,
        backgroundColor: '#fff',
        width:'75%',
        height:50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
          },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
    },
    Photo: {
        height: 100,
        width: 100,
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 10,
    },
    caption: {
        marginLeft: 10,
        marginTop: 10,
        fontSize: 16,
        //fontWeight:'bold',
        color: Colors.BLUE,
        marginBottom: 10,
    },
});