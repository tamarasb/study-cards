import { StyleSheet, View, Modal, TextInput } from 'react-native';
import { useState } from 'react';
import PropTypes from 'prop-types';
import CreateButton from './CreateButton.js';
import ModalHeader from './ModalHeader.js';

export default function AddCollectionModal ({isModalVisible,changeModalVisibility,addCollection,keyCount,setKeyCount}) {
    const [name, setName] = useState('');

    return(
        <Modal
            visible={isModalVisible}
            transparent={true}
            animationType='fade'
            style={styles.modal}
        >
            <View style={styles.container}>
                <ModalHeader 
                    title={"New Collection"} 
                    changeModalVisibility={changeModalVisibility}
                />
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="your collection's name"
                        numberOfLines={3}
                        value={name}
                        onChangeText={setName}
                    />
                </View>
                <CreateButton
                    onPress={()=>{
                        let collection = {}
                        if(name != ''){
                            collection = {id:keyCount, name:name}
                            addCollection(collection);
                            setKeyCount()
                            setName('')
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
        paddingBottom: 24,
        borderColor:'#595758',
        borderWidth:2,
        marginTop:215,
        marginHorizontal:10,
        borderRadius:10,
        padding:8
    },
    input:{
        backgroundColor: '#ffffff',
        padding:10,
        borderWidth: .8,
        width:300,
        height: 45,
        borderRadius: 10,
        marginTop:16
    },
})

AddCollectionModal.propTypes = {
  isModalVisible: PropTypes.bool.isRequired,
  changeModalVisibility: PropTypes.func.isRequired,
  addCollection: PropTypes.func.isRequired,
  keyCount: PropTypes.number.isRequired,
  setKeyCount: PropTypes.func.isRequired,
};