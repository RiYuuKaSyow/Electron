/*
const electron = require('electron') ;
const app = electron.app ;
const browser = electron.BrowserWindow ;
*/

const {
    app,
    BrowserWindow,
    Tray,
    Menu,
} = require('electron') ;

app.on('ready' , createwindow) ;

let win ;


function createwindow(){
    let appicon = CreateTray() ;
    win = new BrowserWindow({
        width:1280,
        height:720,
        title:"Syow"
    });
    Menu.setApplicationMenu(null) ;
    
    win.webContents.openDevTools() ;
    win.loadFile('./home.html');
    win.on('minimize',function(){
        win.hide() ;
        
    });
    win.on('closed',function(){
        win = null ;
    }) ;
    appicon.on('double-click',function(){
        win.isVisible()? win.hide():win.show() ;
    });
    
}
function CreateTray(){
    
    const contextmenu = Menu.buildFromTemplate([{
            label:'開啟',
            click(){
                win.show() ;
            }
        },
        {
            label:'關閉',
            click(){
                win.removeAllListeners('close');
                win.close() ;
            }
        }
    ])
    let appIcon = new Tray('./img/clock.png') ; 
    appIcon.setToolTip('Syow') ;
    appIcon.setHighlightMode('always') ;
    appIcon.setContextMenu(contextmenu) ;
    return appIcon ;
};

//win.webContents.send('MsgfromMain', 'main-process-messages show') ;



app.on('window-all-closed',function(){
    app.quit() ;
});

app.on('active' , function(){
    if( win == null ){
        createwindow() ;
    }
});