const ACTIONS = {
  APP: {
    CONFIG_LOADED: 'CONFIG_LOADED'
  },
  AUTHENTICATION: {
    LOGIN: 'AUTHENTICATION_LOGIN',
    LOGOUT: 'AUTHENTICATION_LOGOUT'
  },
  ARTISTS: {
    LIST_LOADED: 'ARTISTS_LIST_LOADED',
    LIST_UPDATED: 'ARTISTS_LIST_UPDATED'
  },
  BOTS: {
    LIST: {
      LOAD_SUCCESS: 'LOAD_SUCCESS',
      LOAD_FAILED: 'LOAD_FAILED'
    }
  },
  SONGS: {
    LIST_LOADED: 'SONGS_LIST_LOADED',
    LIST_UPDATED: 'SONGS_LIST_UPDATED'
  },
  TICKETS: {
    LIST_LOADED: 'TICKETS_LIST_LOADED',
    LIST_CLEARED: 'TICKETS_LIST_CLEARED',
    LOAD_FAILED: 'LOAD_FAILED',
    ADDED: 'TICKETS_LIST_ADDED',
    MODAL: {
      OPENED: 'TICKETS_MODAL_OPENED',
      CLOSED: 'TICKETS_MODAL_CLOSED'
    }
  }
};

export {
  ACTIONS
}
