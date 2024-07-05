// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   Modal,
//   TouchableOpacity,
//   FlatList,
//   StyleSheet,
// } from "react-native";

// const CustomDropdown = ({ options, onSelect, selectedOption }) => {
//   const [modalVisible, setModalVisible] = useState(false);

//   const handleSelect = (option) => {
//     onSelect(option);
//     setModalVisible(false);
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity
//         onPress={() => setModalVisible(true)}
//         style={styles.button}
//       >
//         <Text>{selectedOption}</Text>
//       </TouchableOpacity>
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => setModalVisible(false)}
//       >
//         <TouchableOpacity
//           onPress={() => setModalVisible(false)}
//           style={styles.modalOverlay}
//         />
//         <View style={styles.modalContent}>
//           <FlatList
//             data={options}
//             renderItem={({ item }) => (
//               <TouchableOpacity
//                 onPress={() => handleSelect(item)}
//                 style={styles.option}
//               >
//                 <Text>{item}</Text>
//               </TouchableOpacity>
//             )}
//             keyExtractor={(item) => item.toString()}
//           />
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     alignSelf: "stretch",
//   },
//   button: {
//     height: 48,
//     paddingHorizontal: 10,
//     marginBottom: 15,
//     paddingVertical: 12,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 8,
//   },
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//   },
//   modalContent: {
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: "#fff",
//     borderRadius: 10,
//   },
//   option: {
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: "#ccc",
//   },
// });

// export default CustomDropdown;
