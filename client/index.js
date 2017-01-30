import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';

import './styles/styles.css'; //Webpack can import CSS files too
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



render (
	<h1>Ed Track</h1>,
	document.getElementById('root')
);
