import react from 'react';
import { Stylesheet, View, Text, StatusBar } from 'react-native';
import * as Contacts from 'expo-contacts';
import { FlatList } from 'react-native-gesture-handler';

const styles = Stylesheet.create ({
    container: {
    flex: 1,
    margintop: Statusbar.currentHeight || 0,
    },
    item: {
    backgroundcolor: '#f6d4d2',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
 },
 title: {
     fontSize: 32,
 },
});

const item = ({nome}) => {
    <View style = {styles.item} >
        <text style={styles.nome}>nome</text>

    </View>
}

const Contatos = () => {

const [contatos, setContatos] = useState ([]);

seEffect(() => {
    (async () => {
        //Pede permissão do usuário para usar os contatos
      const { status } = await Contacts.requestPermissionsAsync();
      //verifica se a permissão foi dada
      if (status === 'granted') {
          //Pega os contatps armazenados no aparelho
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails],
        });
       // verifica se existe algum contato
        if (data.length > 0) {
            setContatos(data);
            //exibe o contato no alert
          const contact = data[0];
          alert(JSON.stringify(contact))
        }
      }
    })();
  }, []);
       const renderItem = ({item}) => {
           <Item nome = {item.firstName} />
       }
 
    return (
      <view style={styles.container}>
          <text> Contatos </text>
          <FlatList
          data={contatos}
          render item ={renderItem}
          keyExtractor={item => item.id}
          />
      </view>
    )

}

export default contatos;