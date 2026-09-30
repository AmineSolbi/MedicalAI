import {ScrollView,Text} from "react-native";
import { globalStyles } from "../../styles/global";

export default function Appointments() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>Appointments</Text>
    </ScrollView>
  );
}