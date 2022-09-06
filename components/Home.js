import { ScrollView, StyleSheet, Text, View } from 'react-native';
import News from './News';
import { useState,useEffect } from 'react';



export default function Home({navigation,setDetail}) {


const [info,setInfo] = useState([])


const fertchData = async ()=>{
  const data = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-07-22&sortBy=publishedAt&apiKey=544cd4d390ba4e478b56545e14269ea3')
  const clean = await data.json()
  setInfo(clean.articles)
  
}

useEffect(()=>{
  if(!!info){
    fertchData()
  }
},[])


  return (
    <View style={styles.container}>
      <View style={styles.headConatiner}>
      <Text style={styles.heading}>News</Text>
      </View>

      <ScrollView bounces showsVerticalScrollIndicator={false} width={'100%'}>
       {
        info?.map((article,index)=>{
          if(index<=20){
            return  <News setDetail={setDetail} info={article} navigation={navigation} url={article.urlToImage} title={article.title} publishedAt={article.publishedAt} key={index}/>
          }
        })
       }
        
      </ScrollView>
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
    
  },
  heading:{
    fontSize:24,
    fontWeight:'900',
    marginTop:10
  },
  headConatiner:{
    paddingVertical:15,
    backgroundColor:'#ECECEC',
    width:'100%',
    alignItems:'center',
    borderBottomWidth:1,
    borderColor:'gray',
    zIndex:100
  }
});
