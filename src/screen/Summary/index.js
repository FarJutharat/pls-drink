import React from "react";
import PropTypes from "prop-types";
import { View, Text, Button, StatusBar,Alert,Modal,StyleSheet,TouchableHighlight} from "react-native";
import Layout from "../../containers/Layout";
import { summaryStyle } from "../../styles/summary";
import WButton from "../../components/Button";
import { useSelector } from "react-redux";
import { openDatabase , } from "expo-sqlite";
import Constants from "expo-constants";


export default function SummaryScreen({ navigation }) {
  const db = openDatabase("db");
  const { water } = useSelector((state) => state);
 

    db.transaction(tx => {
      tx.executeSql(
        "create table if not exists history (id integer primary key not null, date getdate(), value int);"
      );
    });
  return (
    <View style={summaryStyle.container}>
      <View
        style={{
          ...summaryStyle.topContainer,
          height: `${100 - water.percentage}%`,
        }}
      ></View>
      <View
        style={{
          ...summaryStyle.bottomContainer,
          height: `${water.percentage}%`,
        }}
      ></View>
      <View style={summaryStyle.percentageContainer}>
        <Text style={summaryStyle.percentage}>{water.percentage}%</Text>
      </View>
    
      
      
      <WButton
        title={"Done drinking"}
        onPress={() => {
          
          id =>
          db.transaction(
            tx => {
              tx.executeSql(`update history set date = getdate() where id = ?;`, [
                id
              ]);
            },
            null,
            this.update
          )
              }}
              buttonStyle={summaryStyle.doneButtonFixedPosition}
      />

      <WButton
        title={"Drink History"}
        onPress={() => {
                navigation.navigate("History")
              }}
              buttonStyle={summaryStyle.historyButtonFixedPosition}
      />
     
      <WButton
        title={"Back to Edit Profile"}
        onPress={() => navigation.navigate("Profile")}
        buttonStyle={summaryStyle.backButtonFixedPosition}
      />
      <StatusBar barStyle="light-content" />
    </View>
  );
}

SummaryScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
