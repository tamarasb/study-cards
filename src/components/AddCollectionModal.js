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
import CreateButton from './CreateButton.js';

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
                <TouchableOpacity
                    style={styles.alignRight}
                    onPress={()=>{changeModalVisibility()}}
                >
                    <Image 
                        source={require("../../assets/images/icon-close-16.png")}
                    />
                </TouchableOpacity>
                <View>
                    <Text style={styles.label}>New Collection</Text>
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
        paddingTop: 16,
        paddingBottom: 32,
        borderColor:'#595758',
        borderWidth:2,
        marginTop:215,
        marginHorizontal:10,
        borderRadius:10
    },
    label: {
        alignSelf: 'flex-start',
        marginBottom: 15,
        fontSize:20,
        fontWeight:'bold',
        color:'#ffffff'
    },
    input:{
        backgroundColor: '#ffffff',
        padding:10,
        borderWidth: .8,
        width:300,
        height: 45,
        borderRadius: 10
    },
    alignRight:{
        alignSelf:'flex-end',
        paddingEnd: 16
    }
})

AddCollectionModal.propTypes = {
  isModalVisible: PropTypes.bool.isRequired,
  changeModalVisibility: PropTypes.func.isRequired,
  addCollection: PropTypes.func.isRequired,
  keyCount: PropTypes.number.isRequired,
  setKeyCount: PropTypes.func.isRequired,
};