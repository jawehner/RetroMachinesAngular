export let Api_Url= '';

switch (window.location.hostname) {
  case 'retro-machines.herokuapp.com':
      Api_Url= 'https://retromachinesapi.azurewebsites.net/api'
      break;
  default:
      Api_Url='https://retromachinesapi.azurewebsites.net/api' ;
}

export const environment = {
  production: true
};
