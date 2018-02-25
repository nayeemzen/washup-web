import StagingConfiguration from './config.staging';
import ProductionConfiguration from './config.production';
import DevelopmentConfiguration from './config.development';
import Environment from './Environment';

const configuration = {};
configuration[Environment.DEVELOPMENT] = DevelopmentConfiguration;
configuration[Environment.STAGING] = StagingConfiguration;
configuration[Environment.PRODUCTION] = ProductionConfiguration;

export default configuration[Environment.currentEnvironment()];