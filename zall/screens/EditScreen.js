import * as React from 'react';
import { Button, View,ScrollView,Image, TextInput} from 'react-native';
import { styles } from '../style/styles';

export function EditScreen({ route, navigation }) {
    const {index} = route.params
    const {item} = route.params

    const [editName, setEditName] = React.useState(`${item.name.first}`);
    const [editSurname, setEditSurname] = React.useState(`${item.name.last}`);
    const [editEmail, setEditEmail] = React.useState(item.email);
    const [editPhone, setEditPhone] = React.useState(item.phone);

    return (
      <ScrollView style={styles.container}>
        <View style={styles.extraContainers}>
          <Image style={styles.largeImage} source={{uri: `${item.picture.medium}`}}/>

          <TextInput
            style={styles.extraListItem}
            placeholder='Nome'
            onChangeText={newEditName => setEditName(newEditName)}
            defaultValue={`${item.name.first}`}
          />

          <TextInput
            style={styles.extraListItem}
            placeholder='Sobrenome'
            onChangeText={newEditSurname => setEditSurname(newEditSurname)}
            defaultValue={`${item.name.last}`}
          />

          <TextInput
            style={styles.extraListItem}
            placeholder='Email'
            onChangeText={newEditEmail => setEditEmail(newEditEmail)}
            defaultValue={item.email}
          />

          <TextInput
            style={styles.extraListItem}
            placeholder='Phone'
            onChangeText={newEditPhone => setEditPhone(newEditPhone)}
            defaultValue={item.phone}
          />

          <Button
            title="Done"
            onPress={() => {
              navigation.navigate({
              name: 'Contatos',
              params: { editName: editName ,
                        editSurname: editSurname ,
                        editEmail: editEmail ,
                        editPhone: editPhone ,
                        index: index
                      },
              merge: true}
              );
            }}
          />

        </View>
      </ScrollView>
    );
  }

  export default EditScreen