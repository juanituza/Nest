import { connectToServer } from './socket-client';
import './style.css'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h2>Websocket - Client</h2>

    <input id="jwtToken" type="text" placeholder="JWT token"/>
    <button id="connectBtn">Connect</button>
  
    <hr />
    <span id="server-status">offline</span>

    <ul id="client-ul">
     
    </ul>

    <form id="message-form">
      <input type="text" placeholder="Mensaje" id="message-input" />
      
    </form>

    <h3>Messages</h3>
    <ul id="messages-ul">
      
    </ul>
  </div>
`




// connectToServer();
const jwtToken= document.querySelector<HTMLInputElement>('#jwtToken')!;
const connectBtn= document.querySelector<HTMLButtonElement>('#connectBtn')!;

connectBtn.addEventListener('click', () => {
  if (jwtToken.value.trim().length <=0) {
    alert('Please enter a JWT token');
    return;
  }
  connectToServer( jwtToken.value.trim() );
});
// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
