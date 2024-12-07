import {View, Text, StyleSheet, Button, Alert } from 'react-native'



export default function HomeScreen(){

    return(

        <View style={styles.container}>
          
            <Text style={styles.text}>Welcome to Food Finds!</Text>
         </View>
    )


}



const styles = StyleSheet.create({


    
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    text: {
        fontSize: 24,
        fontWeight:  'bold',
        marginBottom: 16,
        color: "blue"


    }

})