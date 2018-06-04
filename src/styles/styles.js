
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({


    container: {
        flex: 1,
        backgroundColor: '#FFE518'
    },

    login_animation: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },

    view_login_text: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 40
    },

    texto_login: {
        fontSize: 30,
        color: 'snow',
        textShadowOffset:{
            width:2,
            height: 3
        },
        textShadowColor: 'black',
    },
    content: {
        // not cool but good enough to make all inputs visible when keyboard is active
        paddingBottom: 100,
      },

    botao_login: {
        backgroundColor: "#3100FF",
        width: 150,
        height:40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },

    botao_login_texto: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'snow'
    },

    view_button: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    login_input: {
        padding: 16, marginTop: 40
    },

    cop: {
        fontSize: 14, 
        color: 'black',
        marginTop: 150
    },

    container_home: {
        flex: 1,
        backgroundColor: 'snow'
    },

    plus_animation: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },

    header: {
        backgroundColor: '#FFE518', flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20
    },


    feed: {
        backgroundColor: 'snow', flex: 10
    },

    footer: {
        marginBottom: 10, backgroundColor: '#FFE518', flex: 1, width: 60, height: 60, alignSelf: 'center', borderRadius: 30, justifyContent: 'center', alignItems: 'center'
    },

    drawer_view_render: {
        flex: 1, borderBottomWidth: 0.5, borderColor: '#CCC', marginHorizontal: 7, marginVertical: 5, flexDirection: 'row', backgroundColor: 'snow'
    },

    drawer_view_icon: {
        margin: 10, alignItems: 'center', justifyContent: 'center'
    },

    drawer_view_text: {
        alignItems: 'center', justifyContent: 'center', flex: 1
    },

    drawer_text_list: {
        fontSize: 16, fontWeight: 'bold', color: 'grey' 
    },

    drawer_container: {
        flex: 1, backgroundColor: 'snow'
    },

    drawer_avatar: {
        flex: 0.5, alignItems: 'center', justifyContent: 'center', backgroundColor: 'snow', marginTop: 30
    },

    drawer_flat: {
        marginBottom: 50, backgroundColor: 'snow'
    },

    container_relato: {
        backgroundColor: 'white'
    },

    camera_animation: {
        width: 130,
        height: 130,
        justifyContent: 'center',
        alignItems: 'center'
    },

    relato_view_text: {
        justifyContent: 'center', alignItems: 'center', marginTop: 20
    },

    relato_text: {
        fontSize: 16, fontWeight: 'bold'
    },

    relato_view_animation: {
        justifyContent: 'center', alignItems: 'center', marginTop: 30
    },

    relato_input: {
        padding: 16
    },


    relato_botao_submeter: {
        backgroundColor: "#E82D0C",
        width: 150,
        height:40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },



    loading_animation: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },

    imagem: {
        width: 280,
        height: 280,
        marginBottom: 30,
        borderRadius: 10
    },

    view_remover: {
        flexDirection: 'row', marginBottom: 10
    },

    text_remover: {
        fontSize: 16, color: 'red'
    },

    detalhes_view_text: {
        flexDirection: 'row', marginHorizontal: '5%', marginBottom: 10, alignItems: 'center'
    },

    detalhes_texto_titulo: {
        fontSize: 16, fontWeight: 'bold', color: 'black', textAlign: 'center', marginBottom: 10
    },

    detalhes_texto_comum: {
        fontSize: 14, marginLeft: 5
    },

    detalhes_view_geral: {
        marginBottom: 20, marginTop: 15
    },

    meusrelatos_texto_erro: {
        alignItems: 'center', justifyContent: 'center', fontSize: 18, marginTop: 80
    }

})

export default styles;