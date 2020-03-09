import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,

    },
    titleText: {
        fontFamily: 'nunito-bold',
        fontSize: 18,
        color: '#333',
        padding: 10,
        marginVertical: 10,
        borderWidth: .5,
        borderColor: '#ccc',
        borderRadius: 5,
        backgroundColor: '#ddd'
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20
    }
})