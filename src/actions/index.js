import {store} from '../store';
import { bindActionCreators } from 'redux';
import * as homeActionCreators from './homeActions';

export const homeActions = bindActionCreators(homeActionCreators, store.dispatch);
