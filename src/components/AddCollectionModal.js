import { StyleSheet, 
    Text, 
    View, 
    TouchableOpacity, 
    Modal,
    TextInput
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function AddCollectionModal ({isModalVisible,changeModalVisibility}) {
    const [name, setName] = useState('');

    return(
        <Modal
            visible={isModalVisible}
        >
            <View>
                <Text>New Collection</Text>
                <Text>Name</Text>
                <SafeAreaView style={styles.textArea}>
                    <TextInput
                        style={styles.input}
                        placeholder="e.g.: my collection"
                        multiline={true}
                        numberOfLines={3}
                        value={name}
                        onChangeText={setName}
                    />
                </SafeAreaView>
                <TouchableOpacity
                    onPress={()=>{changeModalVisibility()}}
                >
                    <Text>Create</Text>
                </TouchableOpacity>
            </View> 
        </Modal>
    )
}

const styles = StyleSheet.create({
    textArea:{
        backgroundColor: 'white',
        width:"100%"
    },
    input:{
        padding:10,
        borderWidth: .5,
        width:300,
        height: 64,
        textAlignVertical: 'top',
        borderRadius: 10
    },
})

AddCollectionModal.propTypes = {
  isModalVisible: PropTypes.bool.isRequired,
  changeModalVisibility: PropTypes.func.isRequired
};