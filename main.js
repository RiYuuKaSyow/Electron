const electron = require('electron') ;
const app = electron.app ;
const browser = electron.BrowserWindow ;

let mainwindow ;

function createwindow(){
    mainwindow = new browser({
        width:1280,
        height:720,
        title:"Syow"
    });
    electron.Menu.setApplicationMenu(null) ;
    mainwindow.webContents.openDevTools() ;
    mainwindow.loadFile('html/time.html');
    mainwindow.on('closed',function(){
        mainwindow = null ;
    }) ;
}

//mainwindow.webContents.send('MsgfromMain', 'main-process-messages show') ;

app.on('ready' , createwindow) ;

app.on('window-all-closed',function(){
    app.quit() ;
});

app.on('active' , function(){
    if( mainwindow == null ){
        createwindow() ;
    }
});