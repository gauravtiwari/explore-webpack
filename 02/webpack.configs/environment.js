// Setup environment variables

var devBuild = process.env.NODE_ENV !== 'production';
var nodeEnv = devBuild ? 'development' : 'production';

var environment = {
  dev: devBuild,
  nodeEnv: nodeEnv,
  prod: !devBuild
};

module.exports = environment;
