import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Filters = ({ onChange, selections = [], sections = [] }) => {
  const getButtonStyle = (isSelected) => ({
    backgroundColor: isSelected ? '#495e57' : '#edefee',
  });

  const getTextStyle = (isSelected) => ({
    color: isSelected ? '#edefee' : '#495e57',
  });

  return (
    <View style={styles.filtersContainer}>
      {sections.map((section, index) => (
        <TouchableOpacity
          key={section} 
          onPress={() => onChange(index)}
          style={[
            styles.button,
            getButtonStyle(selections[index]),
          ]}>
          <View>
            <Text style={[styles.buttonText, getTextStyle(selections[index])]}>
              {section.charAt(0).toUpperCase() + section.slice(1)} 
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  filtersContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingLeft: 15,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderRadius: 9,
    marginRight: 15,
  },
  buttonText: {
    fontWeight: 'bold',
  },
});

export default Filters;
