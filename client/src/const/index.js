export const PRIMARY_COLOR = '#DB4437';
export const BRIGHT_PRIMARY_COLOR = '#ECB3AE';

export const NODE_ENV = {
  PROD: 'prod',
  DEV: 'development',
  TEST: 'test'
}

export const MUI_THEME = {
  palette: {
    primary: {
      main: PRIMARY_COLOR
    },
    secondary: {
      main: BRIGHT_PRIMARY_COLOR
    }
  },
  overrides: {
    MuiInput: {
      underline: {
        '&&&&:hover:before': { borderBottomColor: PRIMARY_COLOR },
        '&:after': { borderBottomColor: PRIMARY_COLOR }
      }
    },
    MuiButton: {
      contained: {
        backgroundColor: PRIMARY_COLOR,
        color: '#FFF',
        textTransform: 'none',
        padding: '6px 14px'
      }
    },
    MuiFormControl: {
      root: {
        width: '230px',
        marginBottom: '20px',
        marginRight: '15px'
      }
    },
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: PRIMARY_COLOR,
      },
    },
    MuiPickersDay: {
      day: {
        color: PRIMARY_COLOR,
      },
      selected: {
        backgroundColor: PRIMARY_COLOR,
      },
      current: {
        color: PRIMARY_COLOR,
      },
    },
    MuiPickersModal: {
      dialogAction: {
        color: PRIMARY_COLOR,
      },
    },
    MuiDialog: {
      root: {
        zIndex: 1350
      }
    }
  },
}