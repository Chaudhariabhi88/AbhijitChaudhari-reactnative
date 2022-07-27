import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  KeyboardAvoidingView,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Dimensions,
  Platform,

} from "react-native";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { Colors, Fonts } from "../../Helpers/AppThemes";
import { useNavigation } from "@react-navigation/native";
import CreateProductStyles from './CreateProductStyles'
import InputView from "../../Components/InputView/InputView";
// import ProductsRow from "../../Components/ProductsView/ProductsRow";

const GLOBAL = require('../../Global/Global');
const ApiManager = require('../../ApiManager/ApiManager');
let deviceWidth = Dimensions.get('window').width

export default function CreateProduct(props) {
  const navigation = useNavigation();
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState([])
  const [desc, setDesc] = useState('')
  const [avatar, setAvatar] = useState('')
  const [email, setEmail] = useState([])



  const [products, setProducts] = useState([])
  const [selectedValue, setSelectedValue] = useState("Electronics");

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={80} style={CreateProductStyles.container} >
      <ScrollView>
        <View style={{ margin: 15 }}>
          <InputView title={'Name'} getValue={getValue} />
          <InputView title={'Price'} getValue={getValue} />
          <InputView title={'Category'} getValue={getValue} />
          <InputView title={'Description'} getValue={getValue} />
          <InputView title={'Avatar'} getValue={getValue} />
          <InputView title={'Email'} getValue={getValue} />
        </View>
        <TouchableOpacity style={CreateProductStyles.submitBtn} onPress={submitTapped}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );

  function submitTapped() {
    let data = '{"name":'+name+',"price":'+price+',"category":'+category+',"description":'+desc+',"avatar":'+avatar+',"developerEmail":'+email+'}'
    
    saveProduct(data)
  }

  function saveProduct(data) {
    console.log('data in getAllProducts is..',data)
    let url = GLOBAL.BASE_URL + GLOBAL.GET_REQUEST.getProducts
    ApiManager.getProducts(
      url,
      data
    ).then((response) => {
      if (response != null) {
        const productsData = JSON.parse(response);
        navigation.goBack()
        //console.log('saving the product..',productsData)
        //setProducts(productsData)
      }
    });
  }

  function getValue(text, type) {
    switch (type) {
      case 'Name':
        setName(text)
        break;
      case 'Price':
        setPrice(text)
        break;
      case 'Category':
        setCategory(text)
        break;
      case 'Description':
        setDesc(text)
        break;
      case 'Avatar':
        setAvatar(text)
        break;
      case 'Email':
        setEmail(text)
        break;
      default:
        alert('no category')
    }
  }

  function continueTapped() {
    // dismissLink();
    // props.isVisible();
    // navigation.navigate("ResetPassword");
  }

  // function backTapped() {
  //   props.backTapped();
  // }
}
