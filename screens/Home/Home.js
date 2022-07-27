import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import HomeStyles from "./HomeStyles";
import ProductsRow from "../../Components/ProductsView/ProductsRow";

const GLOBAL = require('../../Global/Global');
const ApiManager = require('../../ApiManager/ApiManager');

export default function Home(props) {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filterName, setFiltername] = useState('')

  useEffect(() => {
    getAllCategories()
    isFocused && getAllProducts()
  }, [isFocused]);

  return (
    <SafeAreaView style={HomeStyles.container}>
      <View style={{flex:0.2, marginTop: 15, justifyContent: 'center', alignItems: 'center' }}>
        <ScrollView style={{ marginLeft: 10 }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          {categories.map((item, index) => (
            <View style={HomeStyles.filtersView}>
              <TouchableOpacity style={filterName == item.name ? HomeStyles.categoryViewEnabled : HomeStyles.categoryViewDisabled} onPress={() => continueTapped(item.name)}>
                <Image style={{ height: 60, width: 60 }} source={require('../../assets/category.png')} />
              </TouchableOpacity>
              <Text style={{}}>{item.name}</Text>
            </View>
          ))}
        </ScrollView>
        <View onTouchEnd={clearFilters} >
        <Text style={filterName.length > 0 ? {display:'flex'} : {display:'none'}}>Clear All</Text>
        </View>
        </View>
        <View style={{flex:0.8,marginTop:10,}}>
        <FlatList
            numColumns={2}
            data={products}
            renderItem={({ item, index }) => (
               <ProductsRow item={item} index={index} />
            )}
            keyExtractor={(item, index) => index.toString()}
            ListHeaderComponent={() => (
              <View style={{flexDirection:'row'}}>
                <Text style={HomeStyles.listHeader}>Products</Text>
                <View onTouchEnd={createProduct} >
                <Text style={HomeStyles.addBtn}>+</Text>
                </View>
              </View>
            )}
          />
          </View>
      </SafeAreaView>
  );

  function getAllCategories() {
    ApiManager.getCategories().then((response) => {
      if (response != null) {
        const categoriesData = JSON.parse(response);
        setCategories(categoriesData)
      }
    });
  }

  function getAllProducts() {
    let url = GLOBAL.BASE_URL + GLOBAL.GET_REQUEST.getProducts
    ApiManager.getProducts(
      url
    ).then((response) => {
      if (response != null) {
        const productsData = JSON.parse(response);
        setProducts(productsData)
      }
    });
  }

  function continueTapped(name) {
    //clearFilters()
    setFiltername(name)
    let data = products.filter(function(item){
      return item.category == name;
   });
   setProducts(data)
  }

  function clearFilters() {
    setFiltername('')
    getAllProducts()
  }

  function createProduct(){
    navigation.navigate('CreateProduct')
  }

}
