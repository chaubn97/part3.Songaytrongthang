var month = parseInt(prompt("nhap mot thang")) ;

switch (month) {
    case 1 :
    case 3 :
    case 5:
    case 7 :
    case 8 :
    case 10 :
    case 12:
        console.log("Thang"+ month +" co 31 ngay") ;
        break ;

    case 4 :
    case 6 :
    case 9 :
    case 11 :
        console.log("Thang " + month + " co 30 ngay") ;
        break ;

    case 2 :
        console.log("Thang 2 co 28 hoac 29 ngay") ;

    default:
        console.log("Nhap sai thang, moi nhap lai 1 thang tu 1-12");
        break ;
}