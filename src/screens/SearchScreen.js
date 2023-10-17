import React, {useState} from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";

const SearchScreen=()=>{
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterRestaurtantByPrice =(price)=>{
        // price === '$'||=== '$$'||=== '$$$'
        return results.filter(result=>{
            return result.price === price
        })
    }

    return(
        <>
            <SearchBar 
                term={term}
                onTermChange={newTerm=>setTerm(newTerm)}
                ontermSubmit={()=>searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text>: null}
            {/* <Text>We have found{results.length} results</Text> */}
            <ScrollView>
                <ResultList
                    results = {filterRestaurtantByPrice('$')}
                    title="Cost Effective"
                />
                <ResultList
                    results = {filterRestaurtantByPrice('$$')}
                    title="Bit Pricier"
                />
                <ResultList
                    results = {filterRestaurtantByPrice('$$$')}
                    title="Big Spender"
                />
                <ResultList
                    results = {filterRestaurtantByPrice('$$$$')}
                    title="Super Big Spender"
                />
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({});

export default SearchScreen;
