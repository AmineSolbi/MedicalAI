import { ScrollView, Text, View, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { globalStyles } from "../../styles/global";
import { Link } from "expo-router";

export default function Profile() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>Amine Solbi</Text>
      <Text style={globalStyles.sectionTitle}>Emergency</Text>

      <View style={globalStyles.card}>
        
      <Link href="/components/profile/Emergencycontact" asChild>
        <Pressable style={globalStyles.item}>
          <Ionicons name="people-outline" size={22} color="#2563EB" />
          <Text style={globalStyles.itemText}>Emergency Contacts</Text>
          <Ionicons name="chevron-forward" size={18} color="#94A3B8" />
        </Pressable>
      </Link>


        <Link href="/components/profile/sos" asChild>
        <Pressable style={globalStyles.item}>
          <Ionicons name="warning-outline" size={22} color="#EF4444" />
          <Text style={globalStyles.itemText}>S.O.S</Text>
          <Ionicons name="chevron-forward" size={18} color="#94A3B8" />
        </Pressable>
        </Link>

      </View>

      <Text style={globalStyles.sectionTitle}>Health</Text>

      <View style={globalStyles.card}>
        <Pressable style={globalStyles.item}>
          <FontAwesome5 name="file-medical" size={22} color="#2563EB" />
          <Text style={globalStyles.itemText}>Medical Records</Text>
          <Ionicons name="chevron-forward" size={18} color="#94A3B8" />
        </Pressable>

        <Pressable style={globalStyles.item}>
          <FontAwesome5 name="history" size={22} color="#2563EB" />
          <Text style={globalStyles.itemText}>Medical History</Text>
          <Ionicons name="chevron-forward" size={18} color="#94A3B8" />
        </Pressable>
      </View>

        <Text style={globalStyles.sectionTitle}>Settings</Text>

      <View style={globalStyles.card}>
        <Pressable style={globalStyles.item}>
          <FontAwesome5 name="language" size={22} color="#2563EB" />
          <Text style={globalStyles.itemText}>Language</Text>
          <Ionicons name="chevron-forward" size={18} color="#94A3B8" />
        </Pressable>

        <Pressable style={globalStyles.item}>
          <FontAwesome5 name="moon" size={22} color="#2563EB" />
          <Text style={globalStyles.itemText}>Dark mode</Text>
          <Ionicons name="chevron-forward" size={18} color="#94A3B8" />
        </Pressable>

        <Pressable style={globalStyles.item}>
          <Ionicons name="log-out-outline" size={22} color="#EF4444" />
          <Text style={globalStyles.itemText}>Logout</Text>
        </Pressable>

        

      </View>


    </ScrollView>
  );
}