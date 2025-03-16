import React, { forwardRef, LegacyRef } from 'react';
import { TextInput, TextInputProps, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons, FontAwesome, Octicons } from '@expo/vector-icons';
import { styles } from './styles';

// Tipagem para os ícones aceitos
type IconComponent = 
  React.ComponentType<React.ComponentProps<typeof MaterialIcons>> | 
  React.ComponentType<React.ComponentProps<typeof FontAwesome>> | 
  React.ComponentType<React.ComponentProps<typeof Octicons>>;

// Definição das props do componente
type Props = TextInputProps & {
  IconLeft?: IconComponent;
  IconRight?: IconComponent;
  IconLeftName?: string;
  IconRightName?: string;
  title?: string;
  onIconLeftPress?: () => void;
  onIconRightPress?: () => void;
};

// Componente CustomInput com ForwardRef
export const CustomInput = forwardRef(({ 
  IconLeft, 
  IconRight, 
  IconLeftName, 
  IconRightName, 
  title, 
  onIconLeftPress, 
  onIconRightPress, 
  ...rest 
}: Props, ref: LegacyRef<TextInput> | null) => {

  // Função para calcular a largura do input
  const calculateSizeWidth = () => {
    if (IconLeft && IconRight) {
      return '80%';
    } else if (IconLeft || IconRight) {
      return '90%';
    } else {
      return '100%';
    }
  };

  // Função para calcular o padding esquerdo do input
  const calculateSizePaddingLeft = () => {
    if (IconLeft && IconRight) {
      return 10;
    } else if (IconLeft || IconRight) {
      return 10;
    } else {
      return 20;
    }
  };

  return (
    <> 
      {title && <Text>{title}</Text>}
      <View style={[styles.boxInput, { paddingLeft: calculateSizePaddingLeft() }]}>
        {/* Ícone da esquerda, renderizado apenas se existir */}
        {IconLeft && IconLeftName && (
          <TouchableOpacity onPress={onIconLeftPress}>
            <IconLeft name={IconLeftName as any} size={24} color="gray" style={styles.icon} />
          </TouchableOpacity>
        )}

        {/* Campo de entrada de texto */}
        <TextInput 
          style={[styles.input, { width: calculateSizeWidth() }]} 
          ref={ref} 
          {...rest} 
        />

        {/* Ícone da direita, renderizado apenas se existir */}
        {IconRight && IconRightName && (
          <TouchableOpacity onPress={onIconRightPress}>
            <IconRight name={IconRightName as any} size={24} color="gray" style={styles.icon} />
          </TouchableOpacity>
        )}
      </View>
    </> 
  );
});
