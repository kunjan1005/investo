let lang=localStorage.getItem('lang');
export const sidebarLang={
        mainmenu:{
            text:lang!=1?"Үндсэн цэс":"MAIN MENU",
            submenu:{
                dashboard:lang!=1?"Нүүр хуудас":'Dashboard',
                market:lang!=1?"Ханш":"Market"
            },
        customer:{
            text:lang!=1?"Харилцагчид":"CUSTOMERS",
            submenu:{
                customerlist:lang!=1?"Жагсаалт":"Customer List",
                account:lang!=1?"Данс":"Account",
            },
        },
        trading:{
            text:lang!=1?"Арилжаа":"TRADING",
            submenu:{
               addorder:lang!=1?"Захиалга нэмэх":"Add order",
               orderlist:lang!=1?"Захиалгийн жагсаалт":"Order list",
               tradinghistory:lang!=1?"Арилжааны түүх":"Trading history",
            }
        },
        withdraw:lang!=1?"Мөнгө хүсэх":'WITHDRAW',
        report:lang!=1?"тайлан":"REPORT",
        ipo:lang!=1?"IPO":"IPO",
        content:lang!=1?"Контент":"CONTENT"
        }
    }