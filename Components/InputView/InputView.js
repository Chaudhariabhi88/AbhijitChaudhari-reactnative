import React, {useEffect, useState} from 'react';
import { View, TextInput, Text, Modal, StyleSheet, FlatList, Image, Platform, UIManager, Dimensions} from "react-native";
// import Icon from "react-native-vector-icons/MaterialIcons";
// import { Colors } from '../../../Helpers/AppThemes';
// import { useSelector, useDispatch } from "react-redux";
// import {setAllRecommendedTools, setAllBrowseTools, setAllSharedInsights} from "../../../redux/actions/stepObjectsAction"

// import * as Progress from 'react-native-progress';
// import { WebView } from 'react-native-webview';
// import CommentRow from '../../../Views/CommentRow/CommentRow';
// import LikeShareRow from '../../../Models/LikeShareRow';

// import ToolRow from '../../../screens/Inspirations/ToolRow';
// import InsightRow from '../../../screens/Inspirations/InsightRow';

// const ProgramManager = require("../../../Managers/ProgramManager");

// const windowHeight = Dimensions.get('window').height;
// var heightSize = windowHeight / 2

export default function InputView(props){
  const [feildText, setFeildText] = useState('')
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   if(props.IsRecommend && props.IsBrowseAll == false){
  //     getAllRecommended()
  //   }else if(props.IsRecommend && props.IsBrowseAll){
  //     getAllBrowse()
  //   }
  // }, []);

  // const { InspireData } = useSelector((state) => ({
  //   InspireData: state.stepObjectsDetails,
  // }));

  //console.log('props in component.. ',props)


    return (
       <View style={styles.container}>
        <View style={{margin:10}}>
        <Text style={{height:20}}>{props.title}</Text>
        <TextInput style = {styles.input}
               placeholder = {props.title}
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {text => setFeildText(text)}
               value={feildText}
               onBlur={() => sendValue(feildText,props.title) }
               />
        </View>
       {/* <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.scrollContainer}>
            {props.IsRecommend && props.IsBrowseAll == false && InspireData.recommendedToolsResult.map((item, index) => (
              item.EntityTypeId === 1 ?
              <InsightRow data={item} key={index} isFetch={fetchData} /> :
              <ToolRow data={item} key={index} isFetch={fetchData} />
            ))}
            {props.IsRecommend && props.IsBrowseAll && InspireData.browseToolsResult.map((item, index) => (
              item.EntityTypeId === 1 ?
              <InsightRow data={item} key={index} isFetch={fetchData} /> :
              <ToolRow data={item} key={index} isFetch={fetchData} />
            ))}
        </ScrollView> */}
    </View>
    )

    function sendValue(text,type){
      props.getValue(text,type);
    }
}

const styles = StyleSheet.create({
    container:{
        //flex:1,
        //marginTop:20
    },
    input: {
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
});