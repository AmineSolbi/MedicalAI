import {ScrollView,Text} from "react-native";
import { globalStyles } from "../../styles/global";

export default function chatbotot() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>Chat</Text>
    </ScrollView>
  );
}