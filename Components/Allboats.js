// AllBoats.js
import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import Boats from './Boat';
import LinearGradient from 'react-native-linear-gradient'; // Import LinearGradient for gradient effect

const AllBoats = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Enhanced Title with Gradient Background */}
      <LinearGradient colors={['#007bff', '#00c6ff']} style={styles.titleContainer}>
        <Text style={styles.title}>🚤 GetABoat - For Sale 🚤</Text>
      </LinearGradient>

      {/* List of Boat Cards */}
      <Boats
        name="SEA RAY 500 SUNDANCER"
        description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
        icon_name="sailboat"
        poster={require("../img/sea_ray.jpg")}
      />

      <Boats
        name="Four Winns Horizon 180"
        description="A sporty look and refined details truly set the Horizon 180 above all others."
        icon_name="sailboat"
        poster={require("../img/four_winns.jpg")}
      />

      <Boats
        name="Princess V48"
        description="An open design with a full-length cockpit and sunroof, or the enclosed deck saloon model with climate control."
        icon_name="sailboat"
        poster={require("../img/princess.jpg")}
      />

      <Boats
        name="Bayliner 175 Bowrider"
        description="Its outboard power provides increased cockpit space and quiet, fuel-efficient performance."
        icon_name="sailboat"
        poster={require("../img/bayliner.jpg")}
      />

      <Boats
        name="Fairline Targa 47"
        description="Stretch out on the large sun bed while friends lounge in the generously appointed cockpit."
        icon_name="sailboat"
        poster={require("../img/fairline.jpg")}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
    textAlign: 'center',
  },
});

export default AllBoats;
