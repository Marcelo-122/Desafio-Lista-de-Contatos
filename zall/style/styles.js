import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b9ebff',
        flexDirection: 'flex'
      },
      containerList: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding:10,
        margin:15,
        flexDirection:'row',
        borderRadius:15,
        borderWidth:2
      },
      listItem: {
        fontWeight: 'bold',
        color:'black',
        fontSize:17
      },
      smallListItem: {
          color:'black',
          fontSize:14
        },
      mediumImage: {
        width: 80,
        height: 80,
        borderRadius:50,
        marginRight:10,
        overflow: "hidden",
        borderWidth: 2,
        borderColor: 'black'
      },
      extraContainers:{
        flex: 1, 
        alignItems: 'center', 
      },
      largeImage: {
        width: 270,
        height: 270,
        borderRadius: 200,
        overflow: "hidden",
        borderWidth: 5,
        borderColor: 'black',
        margin:30
      },
      extraListItem: {
        fontWeight: 'bold',
        color:'black',
        fontSize:20,
        margin:10,
        padding:10,
        backgroundColor:'white',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius:10
      },
      contactButtons:{
        width:27,
        height:27,
        margin:7,
      },
      containerButton: {
        flex: 1,
      }
 })