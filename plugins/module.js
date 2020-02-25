Element.prototype.appendAfter = function(element) {
   element.parentNode.insertBefore(this, element.nextSibling)
}

function noop() {}

function _createModalFooter(buttons=[]){
    if(buttons.length==0)
    {
        return document.createElement('div');
    }

    const wrap = document.createElement('div')
    wrap.classList.add('modal-footer');

    buttons.forEach(btn=> {
        const $btn = document.createElement('button')
        $btn.textContent = btn.text;
        $btn.classList.add('btn');
        $btn.classList.add(`btn-${btn.type || 'secondary'}`);
        $btn.onclick = btn.handler || noop;
        wrap.appendChild($btn);
    })


    return wrap;
}


function _createModel(options) {
    const DEFAULT_WIDTH = '600 px';
    const modal = document.createElement("div");
    modal.classList.add('mWindow');
    modal.insertAdjacentHTML("afterbegin", `       
            <div class="mWindow-overlay" data-close="true">
            <div class="modal-window" style="width: ${options.width || DEFAULT_WIDTH}">
                <div class="modal-header">
                    <span class="modal-title">${options.title || 'Default title'}</span>
                    ${options.closable ? `<span class="modal-closed" data-close="true">&times;</span>`:''}
                </div>
                    <div class="modal-body" data-content>
                        ${options.content || ' '}
                    </div>              
            </div>
            </div>`)
    const footer = _createModalFooter(options.footerButtons);
    footer.appendAfter(modal.querySelector('[data-content]'));

    document.body.appendChild(modal)
    return modal;
}


$.modal = function(options)
{
    const $modal = _createModel(options);
    const ANIMATION_SPEED=500;
    let closing=false;
    let destroyed = false;

    const modal={
        open(){
            !closing && $modal.classList.add("open");
        },
        close(){
            closing=true;
            $modal.classList.remove("open");
            $modal.classList.add("hide");

            setTimeout(()=>{
                $modal.classList.remove("hide");
                closing = false;
            }, ANIMATION_SPEED)
        }
    };

    const listener = event=>{
        if(event.target.dataset.close) {
            modal.close();
        }
    };

    $modal.addEventListener('click', listener);

    return Object.assign(modal,{
        destroy(){
            console.log(listener);
            // console.log($modal);
            $modal.parentNode.removeEventListener('click',listener);
            $modal.parentNode.removeChild($modal);
            destroyed = true
        },
        setContent(html){
            $modal.querySelector('[data-content]').innerHTML=html;

        }
    })
}