import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

// import { AntDesign } from "@expo/vector-icons";
 import { useNavigation } from "@react-navigation/native";
 const GLOBAL = require('../../Global/Global');
 const ApiManager = require('../../ApiManager/ApiManager');
// import UserExperiencesStyles from "./UserExperiencesStyles";
// import * as Progress from "react-native-progress";
// import { Colors, Fonts } from "../../Helpers/AppThemes";
// import { useState, useEffect } from "react";
// import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native";
// import { setExpDetails } from "../../redux/actions/ExperienceDetailsAction";
// import { useSelector, useDispatch } from "react-redux";

// //import { List } from 'react-content-loader'

// import { createIconSetFromFontello } from "react-native-vector-icons";
// import fontello from "../../assets/config.json";
// const Icon = createIconSetFromFontello(fontello);

// const ExperiencesManager = require("../../Managers/ExperiencesManager");

// const proceedTapped = (index) => {
//   //const navigation = useNavigation();
//   //console.log("proceed tapped on button for experience " + index);
//   //navigation.navigate('ModulesSplash')
// };
let deviceWidth = Dimensions.get('window').width

const ProductsRow = (props) => {
  const navigation = useNavigation();
  //const dispatch = useDispatch();
  // const [isLoader, setisLoader] = useState("flex");
  // useEffect(() => {
  //   const timer = setTimeout(() => setisLoader("none"), 2500);
  // }, []);
  // console.log('item..', item)
  return (
    <View style={styles.container} onTouchEnd={productTapped}>
      <View style={{justifyContent:'center',alignItems:'center'}}>
        <ImageBackground
          // imageStyle={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
          source={{ uri: props.item.avatar }}
          style={styles.image}
        >
          {/* <View style={WhiteboardStyles.experienceName}>
            <Text style={WhiteboardStyles.TagStyle}>
              {props.data.GroupName}
            </Text>
          </View> */}
        </ImageBackground>
      </View>

      <Text style={styles.title}>{props.item.name}</Text>
      <Text style={styles.price}>{props.item.price}</Text>
      
    </View>
  );

  function productTapped(){
    //console.log("Id..", props.item.id)
    getProduct(props.item.id)
  }

  function getProduct(Id) {
    let url = GLOBAL.BASE_URL + GLOBAL.GET_REQUEST.getProducts + '/' + Id
    ApiManager.getProducts(
      url
    ).then((response) => {
      if (response != null) {
        const productData = JSON.parse(response);
        console.log("products data..", productData);
        navigation.navigate("ProductDetail",{data : productData})
      }
    });
  }

};

export default ProductsRow;

const styles = StyleSheet.create({
  container: {
    margin:10, width:(deviceWidth/2)-20, height:150,
    borderRadius: 12,
    backgroundColor:'white',
    shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
          },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        justifyContent:'center',
        alignItems:'center'
  },
  image: {
    //flex: 1,
    marginTop:5,
    width: 50,
    height: 50,
    resizeMode: 'contain'
},
  title: {
    margin:5,
    fontSize: 14,
    fontWeight:'bold',
  },
  price: {
    margin:5,
    fontSize: 14,
    fontWeight:'bold',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

