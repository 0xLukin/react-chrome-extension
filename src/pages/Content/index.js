import { printLine } from './modules/print';
import React from 'react';
import ReactDOM from 'react-dom';
import InjectedApp from './InjectedApp';

console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');

printLine("Using the 'printLine' function from the Print Module");

const injectedNode = document.createElement('div');
injectedNode.id = 'my-injected-app';
document.body.prepend(injectedNode);

ReactDOM.render(<InjectedApp />, injectedNode);
