import React, {Component} from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Login from './components/Login.js';
import Home from './components/Home.js';
import Cadastro from './components/Cadastro.js';
import Relato from './components/Relato.js';


export default class Rotas extends Component{

	render(){
		return(
			<Router navigationBarStyle={{ backgroundColor: '#fff' }} titleStyle={{ color: '#ff5400' }}>
				<Scene key = 'root'>
					<Scene key = 'login' component = {Login} hideNavBar />
					<Scene key = 'home' component = {Home} hideNavBar />
					<Scene key = 'cadastro' component = {Cadastro}  title="Cadastro" titleStyle = {{color: 'snow', backgroundColor: '#4519FF', fontSize: 16}} hideNavBar = {false} navigationBarStyle={{backgroundColor: '#4519FF', height: 40}} headerTintColor="snow"/>
					<Scene key = 'relato' component = {Relato}  title="Novo relato" titleStyle = {{color: 'snow', backgroundColor: '#FFE518', fontSize: 16}} hideNavBar = {false} navigationBarStyle={{backgroundColor: '#FFE518', height: 40}} headerTintColor="snow"/>
				</Scene>
			</Router>


			)
	}
}
