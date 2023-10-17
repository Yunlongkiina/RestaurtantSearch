import React from "react";
import {View, Text, StyleSheet, TextInput} from 'react-native'
import { Feather } from '@expo/vector-icons';

const SearchBar=({term, onTermChange, ontermSubmit})=>{
    return(
        <View style={styles.background}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Search"
                style={styles.inputStyle}
                value={term}
                // onChangeText={newTerm=>onTermChange(newTerm)}
                // Same as below
                onChangeText={onTermChange}
                // onEndEditing={()=>ontermSubmit()}
                // Same as below
                onEndEditing={ontermSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    background:{
        backgroundColor:'#F0EEEE',
        height:50,
        marginTop:5,
        borderRadius:5,
        marginHorizontal:15,
        display:'flex',
        flexDirection:'row',
        justifyContent:"center",
        marginBottom:10
    },
    inputStyle:{
        // borderWidth:1,
        // borderColor:'black',
        flex:1,
        fontSize:20
    },
    iconStyle:{
        fontSize:35,
        alignSelf:"center"
    }
});

export default SearchBar;