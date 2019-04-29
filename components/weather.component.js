class HuevoWeather extends HTMLElement {

  static get observedAttributes() {
    return ['icon', 'temperature', 'humidity', 'wind-speed'];
  }

  constructor() {
    super()
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({mode: 'open'})
    shadowRoot.innerHTML = `
    <style>
        :host {
            --blue: #e67e22
        }
        .content {
            border: #e2e2e2 1px solid;
            margin: 10px;
            border-radius: 5px;
            padding: 20px;
        }
        
        .img {
            float: left;
        }        
        .temp {
            float: left;
        }
        .value {
            float: left;
            font-size: 3em;
        }
        .units {
            float: left;    
            margin-top: 8px;        
        }
        
        .desc {
            float: right;
            color: #adadad;
        }
    </style>
    
    <div class="content">
      <img src="${this.icon}" class="icon">
      <div class="temp">
        <div class="value">${this.temperature}</div>
        <div class="units">ºC</div>
      </div>
      <div class="desc">
        <div class="humidity">Humedad: ${this.humidity}%</div>
        <div>Viento: ${this['wind-speed']}km/h</div>
      </div>
    </div>
    `
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    this[attr] = newValue;
  }
}

window.customElements.define('huevo-weather', HuevoWeather);
