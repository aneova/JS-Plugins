const myModal=$.modal({
    title:'TITLE',
    closable:'true',
    content:`<h4>Window is working</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, repellat?</p>`,
    width:'400 px',
    footerButtons:[{
        text:'OK', type:'Primary', handler(){
        console.log('BTN CLICKED')}},
        {text:'Cancel', type:'danger',
            handler() {
                console.log('Danger BTN CLICKED');
                myModal.close();
        }
        }
    ]
});


