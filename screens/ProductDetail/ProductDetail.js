import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
  ImageBackground,
  
} from "react-native";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { Colors, Fonts } from "../../Helpers/AppThemes";
import { useNavigation } from "@react-navigation/native";
 import ProductDetailStyles from "./ProductDetailStyles";
// import ProductsRow from "../../Components/ProductsView/ProductsRow";

const ApiManager = require('../../ApiManager/ApiManager');
let deviceWidth = Dimensions.get('window').width

export default function ProductDetail(props) {
  const navigation = useNavigation();
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])

  console.log('props in detail page are.. ',props.route.params.data)
  // useEffect(() => {
  //   getAllCategories()
  //   getAllProducts()
  // }, []);

  // const dismissLink = useCallback(
  //   (event) => {
  //     props.changeLinkVisible(false);
  //   },
  //   [props.changeLinkVisible]
  // );

  return (
    // <Modal
    //   animationType="slide"
    //   flexDirection="bottom"
    //   transparent={true}
    //   visible={props.isLocked}
    // >
    <SafeAreaView style={ProductDetailStyles.container}>
      <View style={{justifyContent:'center',alignItems:'center'}}>
        <ImageBackground
          // imageStyle={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
          source={{ uri: props.route.params.data.avatar }}
          style={ProductDetailStyles.image}
        >
          {/* <View style={WhiteboardStyles.experienceName}>
            <Text style={WhiteboardStyles.TagStyle}>
              {props.data.GroupName}
            </Text>
          </View> */}
        </ImageBackground>
      </View>
      <View style={{marginTop:20, justifyContent:'center'}}>
      <Text style={ProductDetailStyles.price}>Price : {props.route.params.data.price}</Text>
      <Text style={ProductDetailStyles.title}>Title : {props.route.params.data.name}</Text>
      <Text style={ProductDetailStyles.title}>Category : {props.route.params.data.category}</Text>
      <Text style={ProductDetailStyles.title}>Description : {props.route.params.data.description}</Text>
      <Text style={ProductDetailStyles.title}>Email : {props.route.params.data.developerEmail}</Text>
      </View>
      {/* 
       */}

      {/* <View style={{flex:0.2, marginTop: 15, justifyContent: 'center', alignItems: 'center' }}>
        <ScrollView style={{ marginLeft: 10 }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          {categories.map((item, index) => (
            <View style={{ marginRight: 10, justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity style={HomeStyles.categoryView} onPress={continueTapped}>
                <Image style={{ height: 60, width: 60 }} source={require('../../assets/category.png')} />
              </TouchableOpacity>
              <Text style={{}}>{item.name}</Text>
            </View>
          ))}
        </ScrollView>
        </View>
        <View style={{flex:0.8,marginTop:10, backgroundColor:'yellow'}}>
        <FlatList
            numColumns={2}
            data={products}
            renderItem={({ item, index }) => (
               <ProductsRow item={item} index={index} />
            )}
            keyExtractor={(item, index) => index.toString()}
            ListHeaderComponent={() => (
              <View style={{marginLeft:10, height:20}}>
                <Text>Products</Text>
              </View>
            )}
          />
          </View> */}
      {/* <ImageBackground
          source={{ uri: "https://wallpapercave.com/wp/wp4613264.jpg" }}
          style={UserDisabledStyles.container}
        >
          <View style={UserDisabledStyles.logoView}>
            <Image
              style={UserDisabledStyles.logoPic}
              source={require("../../assets/images/AdeptionLogo.png")}
            />
          </View> */}
      {/* <View style={AccountLockedStyles.disabledPopup}>
          <View style={{width:'100%'}}>
          <TouchableOpacity
                style={AccountLockedStyles.backButtonView}
                onPress={backTapped}
              >
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ width: "20%" }}>
                    <MaterialCommunityIcons
                      name="chevron-left"
                      size={24}
                      color="blue"
                    />
                  </Text>
                  <Text
                    style={{
                      width: "75%",
                      marginLeft: 10,
                      marginTop: 3,
                    }}
                  >
                    Back
                  </Text>
                </View>
              </TouchableOpacity>
              </View>
            <Text style={AccountLockedStyles.lockIcon}>
              <MaterialCommunityIcons name="lock" size={45} color="black" />
            </Text>
            <Text style={AccountLockedStyles.header}>Account Locked</Text>
            <Text style={AccountLockedStyles.description}>
              If you think your account has been disabled in error, please get
              in touch with our team.
            </Text>
            <View style={AccountLockedStyles.contactBtn} onTouchEnd={contactTapped}>
              <Text style={AccountLockedStyles.contactText}>Activate Account</Text>
            </View>
          </View> */}
      {/* </ImageBackground> */}
    </SafeAreaView>
    // </Modal>
  );

  function getAllCategories() {
    ApiManager.getCategories().then((response) => {
      if (response != null) {
        const categoriesData = JSON.parse(response);
        console.log("categories data..", categoriesData);
        setCategories(categoriesData)
      }
    });
  }

  function getAllProducts() {
    ApiManager.getProducts().then((response) => {
      if (response != null) {
        const productsData = JSON.parse(response);
        console.log("products data..", productsData);
        setProducts(productsData)
      }
    });
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
