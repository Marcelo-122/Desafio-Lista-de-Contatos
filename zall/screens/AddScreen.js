import * as React from 'react';
import { Button, View,TextInput,TouchableOpacity,Image,ScrollView} from 'react-native';
import { styles } from '../style/styles';

export function AddScreen({ route, navigation }) {

    const [addName, setNewName] = React.useState('');
    const [addSurname, setNewSurname] = React.useState('');
    const [addEmail, setNewEmail] = React.useState('');
    const [addPhone, setNewPhone] = React.useState('');
  
    return (
      <ScrollView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.extraContainers}>

        <TouchableOpacity>
          <Image style={styles.largeImage} source={require('../assets/placeholder.png')}/>
        </TouchableOpacity>

          <TextInput
            style={styles.extraListItem}
            placeholder='Nome'
            onChangeText={newName=> setNewName(newName)}
            defaultValue={addName}
          />

          <TextInput
            style={styles.extraListItem}
            placeholder='Sobrenome'
            onChangeText={newSurname=> setNewSurname(newSurname)}
            defaultValue={addSurname}
          />

          <TextInput
            style={styles.extraListItem}
            placeholder='Email'
            onChangeText={newEmail=> setNewEmail(newEmail)}
            defaultValue={addEmail}
          />

          <TextInput
            style={styles.extraListItem}
            placeholder='Phone'
            onChangeText={newPhone => setNewPhone(newPhone)}
            defaultValue={addPhone}
          />

          <Button
            title="Done"
            onPress={() => {
              navigation.navigate({
              name: 'Contatos',
              params: {
                        addName:addName,
                        addSurname:addSurname,
                        addEmail:addEmail,
                        addPhone:addPhone
                      },
              merge: true}
              );
            }}
          />
        </View>
      </View>
      </ScrollView>
    );
  }

  export default AddScreen