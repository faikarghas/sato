import ReactGA from 'react-ga'
export const initGA = () => {
  console.log('GA init')
  ReactGA.initialize('UA-186806546-1')
}
export const logPageView = () => {
  // console.log(`Logging pageview for ${window.location.pathname}`)
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}
export const logEvent = (category = '', action = '', label = '') => {
  if (category && action && label) {
    console.log('event');
    ReactGA.event({ category, action, label })
  }
}
export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal })
  }
}

export const modalView = ( modalName ) => {
  if (modalName) {
    console.log('modal');
    ReactGA.modalview(modalName);
  }
}