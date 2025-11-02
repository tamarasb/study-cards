import { StyleSheet, 
    Text, 
    View, 
    TouchableOpacity, 
    Modal,
    TextInput,
    Image
} from 'react-native';
import { useState } from 'react';
import PropTypes from 'prop-types';
import CreateButton from './CreateButton';

export default function AddCardModal ({isModalVisible,changeModalVisibility,keyCount,setKeyCount,collectionId,addCard}) {
    const [frontText, setfrontText] = useState('');
    const [backText, setBackText] = useState('');

    return(
        <Modal
            visible={isModalVisible}
            transparent={true}
            animationType='fade'
            style={styles.modal}
        >
            <View style={styles.container}>
                <View style={styles.row}>
                    <Text style={styles.title}>New Card</Text>
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={()=>{changeModalVisibility()}}
                    >
                        <Image 
                            source={require("../../assets/images/icon-close-16.png")}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.form}>
                    <Text style={styles.label}>Front Text</Text>
                    <TextInput
                        style={styles.input}
                        numberOfLines={3}
                        value={frontText}
                        onChangeText={setfrontText}
                    />
                    <Text style={styles.label}>Back Text</Text>
                    <TextInput
                        style={styles.input}
                        numberOfLines={3}
                        value={backText}
                        onChangeText={setBackText}
                    />
                </View>
                <CreateButton
                    onPress={()=>{
                        let card = {}
                        if((frontText != '') && (backText != '')){
                            card = {
                                id:keyCount, 
                                collectionId:collectionId,
                                frontText:frontText, 
                                backText:backText
                            }
                            addCard(card);
                            setKeyCount()
                            setfrontText('')
                            setBackText('')
                            changeModalVisibility()
                        }
                    }}
                />
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        backgroundColor:'#595758ec',
        paddingBottom: 32,
        borderColor:'#595758',
        borderWidth:2,
        marginTop:215,
        marginHorizontal:10,
        borderRadius:10,
        padding:8
    },
    title: {
        paddingTop:8,paddingStart:8,
        fontSize:20,
        fontWeight:'bold',
        color:'#ffffff'
    },
    row:{
        width:'100%',
        justifyContent:"space-between",
        flexDirection:"row",
    },
    closeButton:{
        alignSelf:'flex-end',
        padding: 8,
        borderColor:"#ffffff",
        borderRadius:50,
        borderWidth:2,
    },
    label:{
        fontSize:18,
        color:'#ffffff'
    },
    form:{width:'85%'},
    input:{
        backgroundColor: '#ffffff',
        padding:10,
        borderWidth: .8,
        height: 45,
        borderRadius: 10
    }
})

AddCardModal.propTypes = {
    isModalVisible: PropTypes.bool.isRequired,
    changeModalVisibility: PropTypes.func.isRequired,
    keyCount: PropTypes.number.isRequired,
    setKeyCount: PropTypes.func.isRequired,
    collectionId: PropTypes.number.isRequired,
    addCard: PropTypes.func.isRequired,
};