import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {

    const buttonsWidth = 103
    const keyboard = [
        {
            name: "AC",
            backgroundColor: '#3E3163',
            width: buttonsWidth
        },
        {
            name: "",
            backgroundColor: '#3E3163',
            width: 206,
            disabled: true,

        },
        {
            name: "/",
            backgroundColor: '#FFC300',
            width: buttonsWidth
        },
        {
            name: "7",
            backgroundColor: '#48367C',
            width: buttonsWidth
        },
        {
            name: "8",
            backgroundColor: '#48367C',
            width: buttonsWidth
        },
        {
            name: "9",
            backgroundColor: '#48367C',
            width: buttonsWidth
        },
        {
            name: "x",
            sty: styles.buttonsStyle,
            backgroundColor: '#FFC300',
            width: buttonsWidth
        },
        {
            name: "4",
            backgroundColor: '#48367C',
            width: buttonsWidth
        },
        {
            name: "5",
            backgroundColor: '#48367C',
            width: buttonsWidth
        },
        {
            name: "6",
            backgroundColor: '#48367C',
            width: buttonsWidth
        },
        {
            name: "-",
            backgroundColor: '#FFC300',
            width: buttonsWidth
        },
        {
            name: "1",
            backgroundColor: '#48367C',
            width: buttonsWidth
        },
        {
            name: "2",
            backgroundColor: '#48367C',
            width: buttonsWidth
        },
        {
            name: "3",
            backgroundColor: '#48367C',
            width: buttonsWidth
        },
        {
            name: "+",
            sty: styles.buttonsStyle,
            backgroundColor: '#FFC300',
            width: buttonsWidth
        },
        {
            name: "0",
            backgroundColor: '#48367C',
            width: 206
        },
        {
            name: ",",
            backgroundColor: '#48367C',
            width: buttonsWidth
        },
        {
            name: "=",
            backgroundColor: '#FFC300',
            width: buttonsWidth
        },
    ];

    return (

      <View style={styles.container}>
        <View style={styles.containerResult}>
            <Text style={styles.textResult}>
                0
            </Text>
        </View>

        <View style={styles.constainerInput}>
            {keyboard.map((item, index) => {
                return(
                    <TouchableOpacity disabled = {item.disabled} style={[styles.buttonsStyle, {backgroundColor: item.backgroundColor, width: item.width}]}
                                      key={index}
                    >
                        <Text style={styles.buttonText}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            )}
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // flexGrow: 3,
        width: 412,
        height: 650,
    },
    containerResult: {
        height: 185,
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        flexWrap: 'wrap-reverse',
        backgroundColor: '#1E1240',
        padding: 20,
    },
    constainerInput: {
        alignItems: 'flex-end',
        alignContent: 'flex-end',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        backgroundColor: '#1E1240',
    },
    textResult: {
        color: 'white',
        fontSize: 80,
        fontWeight: 'bold',
        textAlign: 'right',
    },
    buttonsStyle: {
        // backgroundColor: '#48367C',
        // width: 103,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 1,
        borderRightWidth: 1,
    },

    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
        fontFamily: 'monospace',
     }

});