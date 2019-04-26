const electron = require('electron') ;
const app = electron.app ;
const browser = electron.BrowserWindow ;

let mainwindow ;

function createwindow(){
    mainwindow = new browser({
        width:960,
        height:540,
        title:"Syow"
    });
    mainwindow.Menu.setApplicationMenu(null) ;
    mainwindow.webContents.openDevTools() ;
    mainwindow.loadFile('home.html');
    mainwindow.on('closed',function(){
        mainwindow = null ;
    }) ;
}

app.on('ready' , createwindow) ;

app.on('window-all-closed',function(){
    app.quit() ;
});

app.on('active' , function(){
    if( mainwindow == null ){
        createwindow() ;
    }
});