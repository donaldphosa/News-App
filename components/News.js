import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'

export default function News({title, publishedAt,url,navigation,info,setDetail}) {

    const date = new Date(publishedAt).toDateString()

  return (
    <View style={styles.container}>
     <Image resizeMode='cover' style={styles.images} source={{uri:url}}/>
        <Text style={styles.headNews}>{title.substring(0,50)}...</Text>
        <Text style={styles.date}>{date}</Text>
     <Pressable style={styles.button} onPress={()=>{
       setDetail(info)
        navigation.navigate('Details')
     }}>
        <Text style={styles.buttonText}>Read more</Text>
     </Pressable>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        marginHorizontal:7,
        width:'96%',
        backgroundColor:'#ECECEC',
        height:340,
        marginTop:10,
        borderRadius:5,
        overflow:'hidden'
    },
    images:{
        width:'100%',
        height:200,
        marginTop:0
    },
    headNews:{
        marginLeft:20,
        marginVertical:10,
        fontSize:16,
        fontWeight:'900',
        width:250,
        height:36
    },
    date:{
        marginLeft:20,
        fontSize:14,
    },
    button:{
        padding:5,
        backgroundColor:'gray',
        width:100,
        marginLeft:20,
        alignItems:'center',
        justifyContent:'center',
        marginVertical:10,
        borderRadius:5
    },
    buttonText:{
        fontSize:14,
        fontWeight:'600'
    }
    

})