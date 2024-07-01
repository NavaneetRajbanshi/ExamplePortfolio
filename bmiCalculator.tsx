import { router } from 'expo-router';
import React ,{useState}  from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Route } from 'expo-router/build/Route';


const BmiCalculator =() => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [bmiResult, setBmiResult] = useState('');

  const calculateBMI = () => {
    const bmi = weight / ((height/100) * (height/100))
    setBmi(bmi.toFixed(1))

    if (bmi < 18.5) {
      setBmiResult('Underweight')
    } else if ( bmi >= 18.5 && bmi <= 24.9 ) {
      setBmiResult('Healthy')
    } else if ( bmi >= 25.0 && bmi <= 29.9 ) {
      setBmiResult('Overweight')
    } else if ( bmi >= 30) {
      setBmiResult('Obese')
    }
  }

  return (
    <View style={styles.container }>
      <Text style={styles.headerText}>BMI Calculator</Text>
      <TextInput 
      style= {styles.input}
      value={weight}
      onChangeText={(Text) => setWeight(Text)}
      placeholder='Weight in Kg'
      keyboardType='numeric' 
      />
      <TextInput 
      style= {styles.input}
      value={height}
      onChangeText={(Text) => setHeight(Text)}
      placeholder='Height in cm'
      keyboardType='numeric' 
      />    
      <TouchableOpacity 
        style={styles.button}
        onPress={calculateBMI}
        >
          <Text style={styles.buttonText}> Calculate BMI</Text>
      </TouchableOpacity> 
      <View style={styles.resultView}> 
        <Text style={styles.result}>{bmi}</Text>
        <Text style={styles.result}>{bmiResult}</Text>
      </View> 
      <View>
        <Button title='Details' onPress={() => router.push("/details")}>
        </Button>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef2f3',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  
  headerText: {
    fontSize: 28, 
    fontWeight: 'bold', 
    color: '#289df6', 
    marginBottom: 20,
  },
  input: {
    height: 55,
    width:'100%',
    margin: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    fontSize: 16,    
  },
  button:{
    backgroundColor: '#289df6',  
    width: '100%',
    height: 50, 
    justifyContent: 'center', 
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText:{
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#fff',
  },
  resultView:{
    margin:15,
  },
  result:{
    fontSize: 18, 
    fontWeight: 'bold', 
    marginVertical: 5, 
  },
});

export default BmiCalculator; 

