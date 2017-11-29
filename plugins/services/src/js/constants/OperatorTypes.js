const OperatorTypes = {
  UNIQUE: {
    requiresValue: false,
    requiresEmptyValue: true,
    stringNumberValue: false,
    name: "Unique",
    description: "Run each app task on a unique attribue id"
  },
  CLUSTER: {
    requiresValue: true,
    requiresEmptyValue: false,
    stringNumberValue: false,
    name: "Cluster",
    description: "Run app tasks on nodes that share a certain attribute id"
  },
  GROUP_BY: {
    requiresValue: false,
    requiresEmptyValue: false,
    stringNumberValue: true,
    name: "Group By",
    description: "Run app tasks evenly distributed across a certain attribute"
  },
  IS: {
    requiresValue: true,
    requiresEmptyValue: false,
    stringNumberValue: false,
    name: "Is",
    description: "Run app tasks on nodes that share a certain attribute id"
  },
  LIKE: {
    requiresValue: true,
    requiresEmptyValue: false,
    stringNumberValue: false,
    name: "Like",
    description: "Run app tasks on a particular set of attribute ids"
  },
  UNLIKE: {
    requiresValue: true,
    requiresEmptyValue: false,
    stringNumberValue: false,
    name: "Unlike",
    description: "Don't run app tasks on a particular set of attribute ids"
  },
  MAX_PER: {
    requiresValue: true,
    requiresEmptyValue: false,
    stringNumberValue: true,
    name: "Max Per",
    description: "Run max # of app tasks on each attribute id"
  }
};

module.exports = OperatorTypes;
