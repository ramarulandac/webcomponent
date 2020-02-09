class DialogBox extends HTMLElement {
    constructor(){
        super();
        this.attachShadow( { mode:'open' })
    }

    connectedCallback(){
        const templ = document.getElementById('templ-poppup');
        const nodo = document.body.appendChild(document.importNode(templ.content,true));
        this.shadowRoot.appendChild(nodo);

        document.querySelector('.cerrar').addEventListener('click', () => this.cerrar())
        document.querySelector('.overlay').addEventListener('click', () => this.cerrar())              
    }

    disconnectedCallback(){
        console.log('removing listeners..')
        document.querySelector('.cerrar').removeEventListener('click', () => this.cerrar())
        document.querySelector('.overlay').removeEventListener('click', () => this.cerrar())
    }

    static get observedAttributes(){
        return ['open'];
    }

    attributeChancedCalllback(name, oldVal,newVal){       
        if(oldVal!= newVal){
            this[name] = this.hasAttribute(name);          
        }
    }

    cerrar() {
        
            if(this.open != false){
                this.open = false;                
            }
    }

    get open(){
        return this.hasAttribute('open')
    }

    set open(isOpen) {
        const wrapper = document.querySelector('.wrapper');
        wrapper.classList.toggle('open',isOpen);

        if(isOpen){
            this.setAttribute('open','')
          
        } else {
            this.removeAttribute('open')
        }
    }
}  

if(!customElements.get('my-dialogbox')){
    customElements.define('my-dialogbox',DialogBox);
}
const popupbtn = document.getElementById('open-popup');
          
popupbtn.addEventListener('click', () => {
  document.querySelector('my-dialogbox').open = true;
})
