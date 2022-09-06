import { View, Text, StyleSheet, useWindowDimensions, Pressable, Image, Linking } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react'


const Details = ({detail, navigation}) => {
const {height} = useWindowDimensions()
 console.log(detail);
  return (
    <SafeAreaView style={{height:height}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Pressable style={styles.backBtn} onPress={()=>{navigation.goBack()}}>
            <Ionicons name="arrow-back" size={32} color="black" />
          </Pressable>
          <Text style={styles.textHead}>Details</Text>
          <Text></Text>
        </View>

        <View style={styles.details}>
         
          <Image style={styles.image} source={{uri:detail.urlToImage}}/>
          <Text style={styles.title}>{detail.title}</Text>
          <Text style={{fontSize:15,fontWeight:'600',margin:7}}>{detail.description}</Text>
        </View>
        <Pressable onPress={() => Linking.openURL(detail.url)} style={styles.button}>
            <Text style={{fontSize:16,fontWeight:'bold'}}>VISIT SITE</Text>
          </Pressable>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    flex:1,
  },
  header:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width:'100%',
    padding:10,
    backgroundColor:'#ECECEC'
  },

  textHead:{
    fontSize:30,
    fontWeight:'bold'
  },
  details:{
    alignItems:'center',
    width:'100%',
    padding:5
  },
  image:{
    width:'100%',
    height:200,
    borderRadius:5
  },
  title:{
    fontSize:20,
    width:300,
    margin:5,
    fontWeight:'bold'
  },
  button:{
    alignItems:'center',
    justifyContent:'center',
    width:'80%',
    backgroundColor:'gray',
    paddingVertical:10,
    bottom:30,
    borderRadius:10,
    position:'absolute'
  }
})

export default Details