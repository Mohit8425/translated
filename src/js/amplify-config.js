import { Amplify } from 'aws-amplify';
import config from '../amplifyconfiguration.json';

export const configureAmplify = () => {
  Amplify.configure(config);
};
