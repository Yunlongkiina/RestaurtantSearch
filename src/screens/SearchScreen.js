import React, {useState} from "react";
import { Text,View, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";

const SearchScreen=()=>{
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    return(
        <View>
            <SearchBar 
                term={term}
                onTermChange={newTerm=>setTerm(newTerm)}
                ontermSubmit={()=>searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text>: null}
            <Text>We have found{results.length} results</Text>
            <ResultList title="Cost Effective"/>
            <ResultList title="Bit Pricier"/>
            <ResultList title="Big Spender"/>
        </View>
    )
}

const styles = StyleSheet.create({});

export default SearchScreen;
