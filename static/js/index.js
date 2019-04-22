window.onload=function () {
    function ID(id) {
        return typeof id==="string"?document.getElementById(id):null;
    }
    function size(num){
        return num>=10 ? num: "0" + num;
    }
    let time_max=ID("time_max");
    let time_min=ID("time_min");
    let timer=setInterval(function(){
        let date=new Date();
        let getFullYear=size(date.getFullYear());
        let getMonth=size(date.getMonth()+1);
        let getDate=size(date.getDate());
        let getHours=size(date.getHours());
        let getMinutes=size(date.getMinutes());
        let getSeconds=size(date.getSeconds());
        time_max.innerText=getFullYear+"年"+getMonth+"月"+getDate+"日";
        time_min.innerText=getHours+"小时"+getMinutes+"分"+getSeconds+"秒";
    },1000);
};
