export let Api_Url= '';

switch (window.location.hostname) {
  case 'retro-machines.herokuapp.com':
      Api_Url= 'https://retromachinesapi.azurewebsites.net'
      break;
  default:
      Api_Url= 'http://localhost:44311/api';
}

export const environment = {
  production: true
};
