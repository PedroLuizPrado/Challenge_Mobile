import React, { forwardRef, LegacyRef } from 'react';
import { TextInput, TextInputProps, Text, View, TouchableOpacity, TouchableOpacityProps,ActivityIndicator } from 'react-native';
import { MaterialIcons, FontAwesome, Octicons } from '@expo/vector-icons';
import { styles } from './styles';




type Props = TouchableOpacityProps & { 
    text: string,
    loading?: boolean
};


export  function Button({...rest}: Props) {
    return(
        <TouchableOpacity 
        style={styles.button}
            {...rest}
        >
            {rest.loading ? <ActivityIndicator
            />:<Text style={styles.textBottom}>{rest.text}</Text>}
        </TouchableOpacity>
    )
}