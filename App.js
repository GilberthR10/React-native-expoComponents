import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Platform } from 'react-native';
import { dogs } from './data';
const Card = ({name, description, image, size}) => {
  // name
  // description
  // image
  // size
  return (
    <View style={{
      width: "100%",
      height: 'auto',
      backgroundColor: 'rgba(255, 255, 255,.82)',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      backdropFilter:' blur(5px)',
      padding: 10,
      border: 'border: 1px solid rgba(255, 255, 255, 1)',
      borderRadius: 30,
      marginBottom: 30
    }}>
      <Image
        style={{width: "100%", height: 420, borderRadius: 20}}
        source={{ uri: image}}
      />
      <Text style={{fontSize: 28, fontWeight: 'bold', marginTop: 10}}>{name}</Text>
      <Text style={{fontSize: 18, marginTop: 10, color: 'gray'}}>{description}</Text>
    </View>
  )
}



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{marginHorizontal: 12,}}
        style={{marginTop: Platform.OS === 'android' && 30}}>
        {dogs.map((dog, index) => <Card key={index} {...dog}/>)}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'linear-gradient(180deg, rgba(224,233,253,1) 0%, rgba(233,236,241,1) 90%)',
  },
});
