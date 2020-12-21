import React from "react";
import PropTypes from "prop-types";
import { FlatList, View, Text, Button, StatusBar,Alert,Modal,StyleSheet,TouchableHighlight} from "react-native";
import Layout from "../../containers/Layout";
import { summaryStyle } from "../../styles/summary";
import WButton from "../../components/Button";
import { useSelector } from "react-redux";
import { historyStyle } from "../../styles/history";
import { openDatabase } from "expo-sqlite";


export default function HistoryScreen({ navigation }) {
    const db = openDatabase("db.db");

        db.transaction(tx => {
          tx.executeSql(
            //"create table if not exists DataTable (id integer primary key not null, column_1 int, column_2 int, column_3 text);",
            "select * from db",
            []
          );
        });
      
    var test = db.transaction(tx => {
      
        tx.executeSql(
          /*"create table if not exists DataTable (id integer primary key not null, column_1 int, column_2 int, column_3 text);", */ 
          "select * from history",
          []
        );
      });
   
      
     return (

     <View style={historyStyle.container}>
     <FlatList
       data={[
         {key:header},
         {key: queyFromhistoryCalWater }
         
       ]}
       renderItem={({item}) => 
      <Text style={historyStyle.item}>
           {item.key}
       </Text>}
     />
   </View>

     );
}









var header = 'Date                                                      percentWater'
var queyFromhistoryCalWater = '2020-12-20                                                        32.46%';


