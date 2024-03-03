import React, { useState, useEffect } from "react";
import { Alert, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface AlertComponentProps {
  message: string;
  status: "success" | "error" | "info" | "warning" | "";
  onClose?: () => void; // Callback para fechar o alerta
  timerTimeout?: number | null; // Tempo em milissegundos para fechar o alerta automaticamente
}

const AlertComponent: React.FC<AlertComponentProps> = ({
  message,
  status,
  onClose,
  timerTimeout = 7000,
}) => {
  const [isAutoCloseEnabled, setIsAutoCloseEnabled] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (timerTimeout !== null) {
      setIsAutoCloseEnabled(true);

      timeout = setTimeout(() => {
        setIsAutoCloseEnabled(false);

        // Chama o callback onClose se fornecido
        if (onClose) {
          onClose();
        }
      }, timerTimeout);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    }; // Limpa o timeout ao desmontar o componente
  }, [timerTimeout, onClose]);

  const handleClose = () => {
    setIsAutoCloseEnabled(false);

    // Chama o callback onClose se fornecido
    if (onClose) {
      onClose();
    }
  };

  return (
    <View>
      {isAutoCloseEnabled && (
        <View
          style={{
            backgroundColor:
              status === "success"
                ? "green"
                : status === "error"
                ? "red"
                : status === "info"
                ? "blue"
                : status === "warning"
                ? "orange"
                : "gray",
            padding: 10,
            marginBottom: 10,
            borderRadius: 5,
            marginTop: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {/* Ícone de alerta pode ser adicionado aqui, se desejar */}
              <Text style={{ color: "white", marginLeft: 5 }} numberOfLines={3}>
                {message}
              </Text>
            </View>
            <TouchableOpacity onPress={handleClose}>
              <Ionicons
                name="close"
                size={20}
                color="white"
                style={{ marginRight: 5 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default AlertComponent;
