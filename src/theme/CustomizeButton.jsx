const { createMuiTheme } = require("@material-ui/core");

const theme = createMuiTheme({
    overrides: {
      MuiButton: {
          root:{
              backgroundColor:'red'
          }
      },
    },
  });
  export default CustomizeButton