import React from 'react'
import InputWrapper, { icons } from './InputWrapper'
import { StyleSheet, TextInput, ViewStyle } from 'react-native'

interface TextFieldProps {
    placeholder?: string;
    icon?: keyof typeof icons;
    value?: string;
    setValue?: (value: string) => void;
    style?: ViewStyle;
}

const TextField: React.FC<TextFieldProps> = ({ placeholder, icon, value, setValue, style }) => {
    return (
        <InputWrapper icon={icon} style={style}>
            <TextInput value={value} onChangeText={setValue} style={[styles.textField, { paddingLeft: icon ? 50 : 20}]} placeholder={placeholder} />
        </InputWrapper>
    )
}

const styles = StyleSheet.create({
    textField: {
        width: '100%',
        padding: 10,
        paddingHorizontal: 20,
        fontSize: 20,
        fontFamily: 'Nunito',
        height: 40,
    }
})

export default TextField
