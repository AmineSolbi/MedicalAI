import { View, Text,ScrollView,Pressable } from "react-native";
import { globalStyles } from "../../../styles/global";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useEmergencyContact } from "../../../zustand/EmergencyContact";
import { useEffect } from "react";


export default function emergencycontact() {
const { contacts, loading, error, fetchContacts } = useEmergencyContact();
useEffect(() => {
    fetchContacts();
}, [fetchContacts]);

    if (loading) {
        return (
            <View style={globalStyles.container}>
                <Text>Loading contacts...</Text>
            </View>
        );
    }else if (error) {
        return (
            <View style={globalStyles.container}>   
                <Text>Error: {error}</Text>
            </View>
        );
    }
    return (
        <ScrollView style={globalStyles.container}>
            <Text style={globalStyles.sectionTitle}>Emergency Contacts</Text>
            <Pressable style={globalStyles.AddButton} >
            <Ionicons name="add" size={20} color="white" />
            <Text style={globalStyles.primaryButtonText}>Add Contact</Text>
            </Pressable>
            <View>
                {contacts.map((contact) => (
                    <Text key={contact.id}>
                        {contact.name} - {contact.phone_number}
                    </Text>
                ))}
            </View>
        </ScrollView>
    )
}
