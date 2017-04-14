$(function(){
    console.log("in_wifiin");
    $.fn.page=function(pageSize,dataSource,callback){
        var container = $(this);
        var options = {
            pageSize:pageSize,
            dataSource: dataSource,
            className:"paginationjs-theme-blue paginationjs-small",
            showGoInput: true,
            showGoButton: true,
            callback:callback
        };

        container.pagination(options);
        return container;
    }
    console.log("end_wifiin");

});




//***********************************************************************************************************************
//var STATUS_NAME = "#STATUS#"
//var PAGE_FUNCTION_NAME = "#PAGE_FUNCTION_NAME#"
//var PAGE_NUM_NAME="#PAGE_NUM_NAME#";
//var first = "<li class=\""+STATUS_NAME+"\"><a href=\""+PAGE_FUNCTION_NAME+"\" aria-label=\"Previous\"><span aria-hidden=\"true\">&laquo;</span></a></li>";
//var last = "<li class=\""+STATUS_NAME+"\"><a href=\""+PAGE_FUNCTION_NAME+"\" aria-label=\"Next\"> <span aria-hidden=\"true\">&raquo;</span> </a> </li>";
//var pages="<li class=\""+STATUS_NAME+"\"><a href=\""+PAGE_FUNCTION_NAME+"\">"+PAGE_NUM_NAME+"</a></li>";
//var goPage = "";
//var noPageFunction="javascript:void(0)";
//$(function(){
//
//    $("#page").page(5,15,"a");
//});
//function a(num){
//    $("#page").page(num,15,"a");
//}
// $.fn.page=function(pageNumNow,pageTotal,pageFunction) {
//     var pageHtml = "";
//     pageHtml+=pageNumNow>1?first.replace(STATUS_NAME,"").replace(PAGE_FUNCTION_NAME,"javascript:"+pageFunction+"(1)"):first.replace(STATUS_NAME,"disabled").replace(PAGE_FUNCTION_NAME,noPageFunction);
//     for(var index = 1;index<=pageTotal;index++){
//        pageHtml+=getElement(index,pageTotal,pageNumNow,pageFunction);
//     }
//     pageHtml+=pageNumNow<pageTotal?last.replace(STATUS_NAME,"").replace(PAGE_FUNCTION_NAME,"javascript:"+pageFunction+"("+pageTotal+")"):last.replace(STATUS_NAME,"disabled").replace(PAGE_FUNCTION_NAME,noPageFunction);
//    $(this).html(pageHtml);
// }
//
//
//function getElement(pageNum,pageTotal,pageNumNow,pageFunction){
//    pageFunction = "javascript:"+pageFunction+"("+pageNum+")";
//    return   pageNum!=pageNumNow ?
//                  pages.replace(STATUS_NAME,"").replace(PAGE_FUNCTION_NAME,pageFunction).replace(PAGE_NUM_NAME,pageNum)
//                  :pages.replace(STATUS_NAME,"active").replace(PAGE_FUNCTION_NAME,noPageFunction).replace(PAGE_NUM_NAME,pageNum)
//
//}
//
