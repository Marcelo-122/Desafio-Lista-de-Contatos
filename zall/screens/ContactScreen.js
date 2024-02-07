import * as React from 'react';
import { Button, View, Text,SafeAreaView,ScrollView,Image, RefreshControl, TouchableOpacity} from 'react-native';
import { useState,useEffect } from 'react';
import { styles } from '../style/styles';

export function ContactScreen({ navigation,route }) {

    const [refreshing, setRefreshing] = React.useState(false);
  
    const [list,setList] = useState([])

    const [number, setNumber] = React.useState(1);

    useEffect(()=>{
      getContact();
    },[])
  
    useEffect(() =>{
      AddItem(route.params?.addName,route.params?.addSurname,route.params?.addEmail,route.params?.addPhone);
    },[route.params?.addName,route.params?.addEmail,route.params?.addPhone])
  
     useEffect(() =>{
      UpdateItem(route.params?.index, route.params?.editName,route.params?.editSurname,route.params?.editEmail,route.params?.editPhone);
    },[route.params?.editName,route.params?.editSurname,route.params?.editEmail,route.params?.editPhone])
  
    const getContact = () => {
      fetch("https://randomuser.me/api/?results=50",{
        method:"GET",
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(responce=>{
        return responce.json()
      }).then(responce=>{
        var data = responce.results
        setList(data)
      }).catch(error=>{
        console.error(error)
      })
    }

    const getRandomNumber = () => {
      const randomNumber = Math.floor(Math.random() * 89);
      setNumber(randomNumber);
  }
    const deleteById = (phone) => {
      setList(oldValues => {
        return oldValues.filter(item => item.phone !== phone)
      })
    }
  
    const AddItem = (addName,addSurname,addEmail,addPhone) => {
      return(
        getRandomNumber(),
        setList([{name: {first:`${addName}`,last:`${addSurname}`},
                  phone:addPhone,
                  picture:{medium:`https://randomuser.me/api/portraits/men/${number}.jpg`},
                  email:addEmail
                  }
    
        , ...list])
        )
      }
  
      const UpdateItem = (index, editName,editSurname,editEmail,editPhone) => {
        let newState = list.map((obj,id) => {
          if (index == id ) {
            return (obj[0] = {...obj, 
                              email: editEmail, 
                              phone:editPhone, 
                              name:{first:editName,last:editSurname
                              }});
          }
          return obj;
        });
        setList(newState);
      }
  
    return (
  <SafeAreaView style = {styles.container}>
          <ScrollView refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={getContact} enabled ={true} />
          } > 
            <View>
              {list.map((item,index)=>{
                return(
                    <View key={index} style={styles.containerList}>
                      <TouchableOpacity onPress={() => navigation.navigate('Details',{item: item})}>
                        <Image style= {styles.mediumImage} source={{uri: `${item.picture.medium}`}}/> 
                      </TouchableOpacity>
                      <View styles={styles.containerButton}>
                          <Text style = {styles.listItem}>{item.name.first} {item.name.last}</Text>
                          <Text style={styles.smallListItem}>{item.email}</Text>
                          <Text style={styles.smallListItem}>{item.phone}</Text>
                      </View>  
                      <View styles={styles.containerButton}>
                          <TouchableOpacity onPress={() => navigation.navigate('Edit',{index,item})}>
                            <Image style={styles.contactButtons} source={require('../assets/pencil.png')}/>
                          </TouchableOpacity>

                          <TouchableOpacity onPress={() => deleteById(item.phone)}>
                          <Image style={styles.contactButtons} source={require('../assets/bin.png')}/>
                          </TouchableOpacity>
                      </View>   
                    </View>
                )
              })}
            </View>
            <View>
            </View>
            </ScrollView>
            <Button title="Adicionar" onPress={() => navigation.navigate('Adicionar')}/>
        </SafeAreaView>
    );
  }

  export default ContactScreen