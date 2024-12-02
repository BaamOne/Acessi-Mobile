import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { AvaliationItemInterface } from "../../../interfaces/Avaliation/AvaliationItemInterface";
import { AvaliationService } from "../../../services/Avalations/AvaliationService";
import { FontAwesome } from "@expo/vector-icons";

const AvaliationCommentsComponent: React.FC<{ locationId: number }> = ({
  locationId,
}) => {
  const [avaliations, setAvaliations] = useState<AvaliationItemInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [hasData, setHasData] = useState<boolean>(true);
  const avaliationService = new AvaliationService();

  useEffect(() => {
    const fetchAvaliations = async () => {
      try {
        var data = await avaliationService.GetAvaliationComments(locationId);
        console.log("Avaliations fetched:", data);
        setAvaliations(data);
        if (data.length == 0) {
          setHasData(false);
        }
      } catch (error) {
        console.error("Error fetching avaliations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAvaliations();
  }, [locationId]);

  if (loading) {
    return <Text>Carregando...</Text>;
  }

  if (!hasData) {
    return (
      <View style={styles.noDataContainer}>
        <Text style={styles.noDataText}>Nenhuma avaliação encontrada</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.highlight}>
        {avaliations[0]?.avaliationLocal.name}
      </Text>
      <FlatList
        data={avaliations}
        keyExtractor={(item) => item.dateAvaliation.toString()}
        renderItem={({ item }) => (
          <View style={styles.avaliationContainer}>
            <Text style={styles.user}>{item.user.nameUser}</Text>
            <Text style={styles.date}>
              {new Date(item.dateAvaliation).toLocaleDateString()}
            </Text>
            <Text style={styles.comment}>{item.avaliationGivenByUser}</Text>
            <View style={styles.stars}>
              {[...Array(item.avaliationRating)].map((_, index) => (
                <FontAwesome key={index} name="star" size={24} color="gold" />
              ))}
              {[...Array(5 - item.avaliationRating)].map((_, index) => (
                <FontAwesome key={index} name="star-o" size={24} color="gold" />
              ))}
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  noDataContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noDataText: {
    fontSize: 18,
    color: "#666",
  },
  highlight: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  avaliationContainer: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
  },
  user: {
    fontWeight: "bold",
    marginBottom: 4,
  },
  date: {
    color: "#666",
    marginBottom: 8,
  },
  comment: {
    fontSize: 16,
  },
  stars: {
    flexDirection: "row",
    marginTop: 8,
  },
});

export default AvaliationCommentsComponent;
