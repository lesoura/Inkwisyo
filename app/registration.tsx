// app/registration.tsx
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function RegistrationPage() {
  const router = useRouter();
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const [step, setStep] = useState(1);

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleCristel = () => router.push('/login');

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else router.replace('/login');
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const stepLabels = ['Name', 'Email', 'Password'];

  return (
    <View style={{ flex: 1, backgroundColor: '#121212' }}>
      {/* Top image with fade */}
      <View style={{ width: '100%', height: screenHeight * 0.5 }}>
        <ImageBackground
        source={
            step === 1
            ? require('@/assets/images/Step1.png')
            : step === 2
            ? require('@/assets/images/Step2.png')
            : require('@/assets/images/Step3.png')
        }
        style={{ flex: 1 }}
        resizeMode="cover"
        >
        <LinearGradient
            colors={['rgba(18,18,18,0)', '#121212']}
            style={{ flex: 1, justifyContent: 'flex-end' }}
        />
        </ImageBackground>
      </View>

      <View style={{ flex: 1, alignItems: 'center', padding: 20, justifyContent: 'center', marginTop: -50 }}>
        {/* Step Indicator */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginBottom: 25 }}>
        {stepLabels.map((label, index) => {
            const isActive = step === index + 1;
            return (
            <View key={index} style={{ alignItems: 'center' }}>
                <View
                style={{
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                    borderWidth: 1,
                    borderColor: '#fff',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: isActive ? 'rgba(255,255,255,0.2)' : 'transparent', // active circle
                    marginBottom: 5,
                }}
                >
                <Text style={{ color: '#fff', fontSize: 32, fontFamily: 'Denver-Serial-Bold' }}>{index + 1}</Text>
                </View>
                <Text style={{ color: '#fff', fontSize: 12 }}>{label}</Text>
            </View>
            );
        })}
        </View>

        {/* Step Inputs */}
        {step === 1 && (
          <View style={{ width: screenWidth - 40, marginBottom: 15 }}>
            <Text style={{ color: '#fff', marginBottom: 10, fontSize: 32, fontFamily: 'Denver-Serial-Bold' }}>Your Name</Text>
            <TextInput
              placeholder="Name"
              placeholderTextColor="#FFFFFF"
              value={name}
              onChangeText={setName}
              style={{
                color: '#FFFFFF',
                borderWidth: 1,
                borderColor: '#ccc',
                padding: 12,
                marginBottom: 15,
                borderRadius: 25,
                backgroundColor: 'rgba(119,119,119,0.27)',
              }}
            />
            <TextInput
              placeholder="Surname"
              placeholderTextColor="#FFFFFF"
              value={surname}
              onChangeText={setSurname}
              style={{
                color: '#FFFFFF',
                borderWidth: 1,
                borderColor: '#ccc',
                padding: 12,
                borderRadius: 25,
                backgroundColor: 'rgba(119,119,119,0.27)',
              }}
            />
          </View>
        )}

        {step === 2 && (
          <View style={{ width: screenWidth - 40, marginBottom: 15 }}>
            <Text style={{ color: '#fff', marginBottom: 10, fontSize: 32, fontFamily: 'Denver-Serial-Bold' }}>Email</Text>
            <TextInput
              placeholder="Email"
              placeholderTextColor="#FFFFFF"
              value={email}
              onChangeText={setEmail}
              style={{
                color: '#FFFFFF',
                borderWidth: 1,
                borderColor: '#ccc',
                padding: 12,
                marginBottom: 15,
                borderRadius: 25,
                backgroundColor: 'rgba(119,119,119,0.27)',
              }}
            />
            <TextInput
            placeholder=""
            placeholderTextColor="#FFFFFF"
            value={email}
            onChangeText={setEmail}
            editable={false} // disables typing
            style={{
                color: '#FFFFFF',
                borderWidth: 1,
                borderColor: 'transparent',
                padding: 12,
                borderRadius: 25,
                backgroundColor: 'transparent',
                opacity: 0.6, // optional, makes it look visually disabled
            }}
            />
          </View>
        )}

        {step === 3 && (
          <View style={{ width: screenWidth - 40, marginBottom: 15 }}>
            <Text style={{ color: '#fff', marginBottom: 10, fontSize: 32, fontFamily: 'Denver-Serial-Bold' }}>Password</Text>
            <TextInput
              placeholder="Password"
              placeholderTextColor="#FFFFFF"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              style={{
                color: '#FFFFFF',
                borderWidth: 1,
                borderColor: '#ccc',
                padding: 12,
                marginBottom: 15,
                borderRadius: 25,
                backgroundColor: 'rgba(119,119,119,0.27)',
              }}
            />
            <TextInput
              placeholder="Confirm Password"
              placeholderTextColor="#FFFFFF"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              style={{
                color: '#FFFFFF',
                borderWidth: 1,
                borderColor: '#ccc',
                padding: 12,
                borderRadius: 25,
                backgroundColor: 'rgba(119,119,119,0.27)',
              }}
            />
          </View>
        )}

        {/* Navigation buttons */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: screenWidth - 40 }}>
          {step > 1 && (
            <TouchableOpacity
              onPress={handleBack}
              style={{
                backgroundColor: '#777777',
                paddingVertical: 15,
                borderRadius: 25,
                flex: 1,
                marginRight: 10,
                alignItems: 'center',
              }}
            >
              <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>Back</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            onPress={handleNext}
            style={{
              backgroundColor: '#436270',
              paddingVertical: 15,
              borderRadius: 25,
              flex: 1,
              alignItems: 'center',
            }}
          >
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>
              {step < 3 ? 'Next' : 'Create'}
            </Text>
          </TouchableOpacity>
        </View>
              {/* Create Account */}
              <TouchableOpacity onPress={handleCristel} style={{ paddingVertical: 10, marginTop: 10, width: '100%', alignItems: 'center' }}>
                <Text style={{ color: '#fff', fontWeight: '500', textAlign: 'center' }}>
                  Already have an account? <Text style={{ fontWeight: 'bold', color: '#8C8ECF', textDecorationLine: 'underline' }}>Sign in</Text>
                </Text>
              </TouchableOpacity>
      </View>
    </View>
  );
}