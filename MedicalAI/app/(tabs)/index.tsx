import {ScrollView,Text} from "react-native";
import { globalStyles } from "../../styles/global";

export default function Index() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>My App</Text>
    </ScrollView>
  );
}