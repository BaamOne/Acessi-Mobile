import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, StyleSheet } from "react-native";
import {
  Box,
  Image,
  Stack,
  Button,
  HStack,
  VStack,
  Text,
  Heading,
  Divider,
  Container,
  Menu,
  Pressable,
  HamburgerIcon,
} from "native-base";
import { UserModel } from "../../interfaces/User/UserInterface";

const SettingsComponent: React.FC = () => {
  //ideia e pegar o usuario logado em algum momento atraves do token, por enquanto so um usuario fixo

  const user: UserModel = {
    nameUser: "Fernando Matheus Engler ",
    emailUser: "fernando.engler@gmail.com",
    passwordUser: "",
  };

  return (
    <>
      <Container
        style={{
          backgroundColor: "rgba(68, 67, 67, 0.2)", // Add this line to set a darker background color
          padding: 10, // Add this line to add padding to the HStack
          marginTop: 20,
          marginLeft: 40,
          marginBottom: 20,
          flexDirection: "column", // Add this line to set the direction to column
          alignItems: "flex-start",
        }}
      >
        <VStack alignItems="end">
          <Menu
            style={{ justifyContent: "flex-end" }}
            w="190"
            trigger={(triggerProps) => {
              return (
                <Pressable
                  accessibilityLabel="More options menu"
                  {...triggerProps}
                >
                  <HamburgerIcon />
                </Pressable>
              );
            }}
          >
            <Menu.Item>Editar usuario</Menu.Item>
          </Menu>
        </VStack>

        <HStack
          alignItems="center"
          justifyContent="space-between" // Add this line to align the Menu at the end of the row
        >
          <Image
            size={20}
            borderRadius={100}
            source={{
              uri: "https://wallpaperaccess.com/full/317501.jpg",
            }}
            alt="Alternate Text"
          />

          <Text fontSize="2xl" style={{ marginLeft: 5 }}>
            {user.nameUser}
          </Text>
        </HStack>
        <Divider
          my="2"
          _light={{
            bg: "muted.800",
          }}
          _dark={{
            bg: "muted.50",
          }}
        />
        <Text>E-mail:</Text>
        <Text fontSize="2xl" style={{ marginLeft: 5 }}>
          {user.emailUser}
        </Text>
      </Container>
    </>
  );
};

export default SettingsComponent;
