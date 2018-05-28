import React, {Component} from 'react';
import { View, StatusBar, ScrollView, Image } from 'react-native';
import { Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/styles.js';

export default class Detalhes extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }


    render(){
        return(

            <ScrollView>
                <Statusbar backgroundColor = "#E82D0C" />
                <Image source = {{ uri: this.props.imagem }} style={{ padding: '50%', margin: 3 }} />
            </ScrollView>
        )
    }
}