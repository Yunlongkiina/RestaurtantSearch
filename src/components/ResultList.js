import React from "react";
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import ResultsDetailes from "./ResultsDetailes";
import { useNavigation } from '@react-navigation/native';

const ResultList=({results, title})=>{
// If nothing to diisplay, do not show anything
    if(!results.length){
        return null
    }

    const navigation = useNavigation();
    // FIX >>>::::>>> WARN  Sending `onAnimatedValueUpdate` with no listeners registered.
    navigation.removeListener
    return(
        <View style={styles.containerStyle}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator = {false}
                data={results}
                keyExtractor={result=>result.id}
                renderItem={({item})=>{
                    return(
                        <TouchableOpacity onPress={()=>{navigation.navigate('ResultShow',{'id':item.id})}}>
                            <ResultsDetailes result = {item}/>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:10
    },
    containerStyle:{
        marginBottom:10
    }
});

export default ResultList;