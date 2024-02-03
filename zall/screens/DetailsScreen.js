import * as React from 'react';
import { View, Text, Image} from 'react-native';
import { styles } from '../style/styles';

export function DetailsScreen({ route, navigation }) {

    const {item} = route.params
  
    return (
      <View style={styles.container}>
        <View style={styles.extraContainers}>
            <Image style={styles.largeImage} source={{uri: `${item.picture.medium}`}}/>
            <Text style={styles.extraListItem}>Nome: {item.name.first} {item.name.last}</Text>
            <Text style={styles.extraListItem}>Email: {item.email}</Text>
            <Text style={styles.extraListItem}>Número: {item.phone}</Text>
        </View>
      </View>
    );
  }

  export default DetailsScreen