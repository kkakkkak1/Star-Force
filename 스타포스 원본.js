
level = {};
levels = {};
var cultime = {};
var allview = "\u200b".repeat(500);
var path="/sdcard/강화/star.json"
FS=FileStream;
if(FS.read(path)=="") {
    FS.write(path, "{}")
}else{
level=JSON.parse(FS.read(path))
}

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) { 

if(cultime[sender] ==undefined){
    cultime[sender] = true;
}

if(msg == "!치트쓸거양") {
  level[sender].level = 14;
  replier.reply(level[sender].level);
}

if(msg == "!더하기") {
    level[sender].level++;
    replier.reply(level[sender].level);
  }

  if(msg == "!빼기") {
    level[sender].level = level[sender].level++;
    replier.reply(level[sender].level);
  }

if(msg == "!내스타포스") {
    a = "";
    for(i = 0; i <level[sender].level; i++){
        a +="★"
        }
  replier.reply(sender+"님의 스타포스 정보"+allview+"\n\n"+level[sender].level+"성\n"+a.replace(/.{5}/g, "$& ")+"\n\n강화 시도수 :"+level[sender].try+"\n강화 실패수 : "+level[sender].lose+"\n파괴된 횟수 :"+level[sender].boom)
  //replier.reply(level[sender].level);
}

if(msg == "!강화" ) {
if(level[sender] ===undefined){
    level[sender]={level: 0, try: 0, lose: 0, boom: 0}
} //else{
if(cultime[sender] != true) {

} else {
  var ran = Math.random()
  level[sender].try++;
  cultime[sender] = false;
  if(level[sender].level < 3) {
    oun = (95-(5*level[sender].level))/100;
    hak = oun*100;
    MainMent = "스타포스 강화를 진행합니다!"+allview+" \n현재 "+sender+"님의 스타포스 : "+level[sender].level+"\n강화확률 : "+hak+"%\n 파괴확률 :"+"0%";
    //replier.reply("스타포스 강화를 진행합니다!"+allview+" \n현재 "+sender+"님의 스타포스 : "+level[sender].level+"\n강화확률 : "+hak+"%\n 파괴확률 :"+"0%");
    java.lang.Thread.sleep(1000);
    if(ran <= oun) {
        level[sender].level++;
        replier.reply(MainMent+"\n\n\n\n스타포스 강화 성공!!!!"+allview+"\n"+sender+"님의 스타포스 : "+level[sender].level)
    }
    else {
        level[sender].lose++;
        replier.reply(MainMent+"\n\n\n\n스타포스 강화 실패..."+allview+"\n"+sender+"님의 스타포스 : "+level[sender].level);
    }
} else if(2 < level[sender].level && level[sender].level < 15 ) {
    oun = (100-(5*level[sender].level))/100;
    hak = oun*100;
    MainMent = "스타포스 강화를 진행합니다!"+allview+"\n현재 "+sender+"님의 스타포스 : "+level[sender].level+"\n강화확률 : "+hak+"%\n 파괴확률 :"+"0%";
    //replier.reply("스타포스 강화를 진행합니다!"+allview+"\n현재 "+sender+"님의 스타포스 : "+level[sender].level+"\n강화확률 : "+hak+"%\n 파괴확률 :"+"0%");
    java.lang.Thread.sleep(1000);
    if(ran <= oun) {
        level[sender].level++;
        replier.reply(MainMent+"\n\n\n\n"+"스타포스 강화 성공!!!!"+allview+"\n"+sender+"님의 스타포스 : "+level[sender].level)
    } else {
        level[sender].lose++;
        replier.reply(MainMent+"\n\n\n\n"+"스타포스 강화 실패..."+allview+"\n"+sender+"님의 스타포스 : "+level[sender].level);
    }
} else if(15 == level[sender].level ) {
    oun = 0.3
    hak = oun*100;
    boom = 2.1;
    MainMent = "스타포스 강화를 진행합니다!(하락방지)"+allview+"\n현재 "+sender+"님의 스타포스 : "+level[sender].level+"\n강화확률 : "+hak+"%\n 파괴확률 :"+boom+"%";
    //replier.reply("스타포스 강화를 진행합니다!(하락방지)"+allview+"\n현재 "+sender+"님의 스타포스 : "+level[sender].level+"\n강화확률 : "+hak+"%\n 파괴확률 :"+boom+"%");
    java.lang.Thread.sleep(1000);
    if(ran <= oun) {
        level[sender].level++;
        replier.reply(MainMent+"\n\n\n\n"+"스타포스 강화 성공!!!!"+allview+"\n"+sender+"님의 스타포스 : "+level[sender].level)
    } else if(ran <= 0.021){
        level[sender].level = 0;
        level[sender].boom++;
        replier.reply(MainMent+"\n\n\n\n"+"장비가 파괴되었습니다..."+allview+"\n"+sender+"님의 스타포스 : "+level[sender].level);
    } else {
        level[sender].lose++;
        replier.reply(MainMent+"\n\n\n\n"+"스타포스 강화 실패...(하락 방지)"+allview+"\n"+sender+"님의 스타포스 : "+level[sender].level);
    }
}else if(15 < level[sender].level && level[sender].level < 18 ) {
    oun = 0.3
    hak = oun*100;
    boom = 2.1;
    MainMent = "스타포스 강화를 진행합니다!"+allview+"\n현재 "+sender+"님의 스타포스 : "+level[sender].level+"\n강화확률 : "+hak+"%\n 파괴확률 :"+boom+"%";
    //replier.reply("스타포스 강화를 진행합니다!"+allview+"\n현재 "+sender+"님의 스타포스 : "+level[sender].level+"\n강화확률 : "+hak+"%\n 파괴확률 :"+boom+"%");
    java.lang.Thread.sleep(1000);
    if(ran <= oun) {
        level[sender].level++;
        replier.reply(MainMent+"\n\n\n\n"+"스타포스 강화 성공!!!!"+allview+"\n"+sender+"님의 스타포스 : "+level[sender].level)
    } else if(ran <= 0.021){
        level[sender].level = 0;
        level[sender].boom++;
        replier.reply(MainMent+"\n\n\n\n"+"장비가 파괴되었습니다..."+allview+"\n"+sender+"님의 스타포스 : "+level[sender].level);
    } else {
        level[sender].level = level[sender].level -1;
        levels[sender] = level[sender].level+1;
        level[sender].lose++;
        replier.reply(MainMent+"\n\n\n\n"+"스타포스 강화 실패..."+allview+"\n"+sender+"님의 스타포스 : "+levels[sender] +"->"+level[sender].level);
    }
} else if(17 < level[sender].level && level[sender].level < 20 ){
    oun = 0.3
    hak = oun*100;
    boom = 2.8
    MainMent = "스타포스 강화를 진행합니다!"+allview+"\n현재 "+sender+"님의 스타포스 : "+level[sender].level+"\n강화확률 : "+hak+"%\n 파괴확률 :"+boom+"%"
    //replier.reply("스타포스 강화를 진행합니다!"+allview+"\n현재 "+sender+"님의 스타포스 : "+level[sender].level+"\n강화확률 : "+hak+"%\n 파괴확률 :"+boom+"%");
    java.lang.Thread.sleep(1000);
    if(ran <= oun) {
        level[sender].level++;
        replier.reply(MainMent+"\n\n\n\n"+"스타포스 강화 성공!!!!"+allview+"\n"+sender+"님의 스타포스 : "+level[sender].level)
    } else if(ran <= 0.028){
        level[sender].level = 0;
        replier.reply(MainMent+"\n\n\n\n"+"장비가 파괴되었습니다..."+allview+"\n"+sender+"님의 스타포스 : "+level[sender].level);
    } else {
        level[sender].level = level[sender].level -1;
        levels[sender] = level[sender].level+1;
        level[sender].lose++;
        replier.reply(MainMent+"\n\n\n\n"+"스타포스 강화 실패..."+allview+"\n"+sender+"님의 스타포스 : "+levels[sender] +"->"+level[sender].level);
    }
} else if(20 == level[sender].level) {
    oun = 0.3;
    hak = oun*100;
    boom = 7
    MainMent = "스타포스 강화를 진행합니다!(하락방지)"+allview+"\n현재 "+sender+"님의 스타포스 : "+level[sender].level+"\n강화확률 : "+hak+"%\n 파괴확률 :"+boom+"%";
    //replier.reply("스타포스 강화를 진행합니다!(하락방지)"+allview+"\n현재 "+sender+"님의 스타포스 : "+level[sender].level+"\n강화확률 : "+hak+"%\n 파괴확률 :"+boom+"%");
    java.lang.Thread.sleep(1000);
    if(ran <= oun) {
        level[sender].level++;
        replier.reply(MainMent+"\n\n\n\n"+"스타포스 강화 성공!!!!"+allview+"\n"+sender+"님의 스타포스 : "+level[sender].level)
    } else if(ran <= 0.07){
        level[sender].level = 0;
        level[sender].boom++;
        replier.reply(MainMent+"\n\n\n\n"+"장비가 파괴되었습니다..."+allview+"\n"+sender+"님의 스타포스 : "+level[sender].level);
    } else {
        level[sender].lose++;
        replier.reply(MainMent+"\n\n\n\n"+"스타포스 강화 실패...(하락방지)"+allview+"\n"+sender+"님의 스타포스 : "+level[sender].level);
    }
}else if(20 < level[sender].level && level[sender].level < 22) {
    oun = 0.3;
    hak = oun*100;
    boom = 7
    MainMent = "스타포스 강화를 진행합니다!"+allview+"\n현재 "+sender+"님의 스타포스 : "+level[sender].level+"\n강화확률 : "+hak+"%\n 파괴확률 :"+boom+"%";
    //replier.reply("스타포스 강화를 진행합니다!"+allview+"\n현재 "+sender+"님의 스타포스 : "+level[sender].level+"\n강화확률 : "+hak+"%\n 파괴확률 :"+boom+"%");
    java.lang.Thread.sleep(1000);
    if(ran <= oun) {
        level[sender].level++;
        replier.reply(MainMent+"\n\n\n\n"+"스타포스 강화 성공!!!!"+allview+"\n"+sender+"님의 스타포스 : "+level[sender].level)
    } else if(ran <= 0.07){
        level[sender].level = 0;
        level[sender].boom++;
        replier.reply(MainMent+"\n\n\n\n"+"장비가 파괴되었습니다..."+allview+"\n"+sender+"님의 스타포스 : "+level[sender].level);
    } else {
        level[sender].level = level[sender].level -1;
        levels[sender] = level[sender].level+1;
        level[sender].lose++;
        replier.reply(MainMent+"\n\n\n\n"+"스타포스 강화 실패..."+allview+"\n"+sender+"님의 스타포스 : "+levels[sender] +"->"+level[sender].level);
    }
} else if(21 < level[sender].level && level[sender].level < 23) {
    oun = 0.03;
    hak = oun*100;
    boom = 19.4
    MainMent = "스타포스 강화를 진행합니다!"+allview+"\n현재 "+sender+"님의 스타포스 : "+level[sender].level+"\n강화확률 : "+hak+"%\n 파괴확률 :"+boom+"%"
    //replier.reply("스타포스 강화를 진행합니다!"+allview+"\n현재 "+sender+"님의 스타포스 : "+level[sender].level+"\n강화확률 : "+hak+"%\n 파괴확률 :"+boom+"%");
    java.lang.Thread.sleep(1000);
    if(ran <= oun) {
        level[sender].level++;
        replier.reply(MainMent+"\n\n\n\n"+"스타포스 강화 성공!!!!"+allview+"\n"+sender+"님의 스타포스 : "+level[sender].level)
    } else if(ran <= 0.194){
        level[sender].level = 0;
        level[sender].boom++;
        replier.reply(MainMent+"\n\n\n\n"+"장비가 파괴되었습니다..."+allview+"\n"+sender+"님의 스타포스 : "+level[sender].level);
    } else {
        level[sender].level = level[sender].level -1;
        levels[sender] = level[sender].level+1;
        level[sender].lose++;
        replier.reply(MainMent+"\n\n\n\n"+"스타포스 강화 실패..."+allview+"\n"+sender+"님의 스타포스 : "+levels[sender] +"->"+level[sender].level);
    }
} else if(22 < level[sender].level && level[sender].level < 24) {
    oun = 0.02;
    boom = 29.4
    MainMent = "스타포스 강화를 진행합니다!"+allview+"\n현재 "+sender+"님의 스타포스 : "+level[sender].level+"\n강화확률 : 2%\n 파괴확률 :"+boom+"%";
    //replier.reply("스타포스 강화를 진행합니다!"+allview+"\n현재 "+sender+"님의 스타포스 : "+level[sender].level+"\n강화확률 : 2%\n 파괴확률 :"+boom+"%");
    java.lang.Thread.sleep(1000);
    if(ran <= oun) {
        level[sender].level++;
        replier.reply(MainMent+"\n\n\n\n"+"스타포스 강화 성공!!!!"+allview+"\n"+sender+"님의 스타포스 : "+level[sender].level)
    } else if(ran <= 0.294){
        level[sender].level = 0;
        level[sender].boom++;
        replier.reply(MainMent+"\n\n\n\n"+"장비가 파괴되었습니다..."+allview+"\n"+sender+"님의 스타포스 : "+level[sender].level);
    } else {
        level[sender].level = level[sender].level -1;
        levels[sender] = level[sender].level+1;
        level[sender].lose++;
        replier.reply(MainMent+"\n\n\n\n"+"스타포스 강화 실패..."+allview+"\n"+sender+"님의 스타포스 : "+levels[sender] +"->"+level[sender].level);
    }
} else if(23 < level[sender].level && level[sender].level <25) {
    oun = 0.01;
    boom = 39.6
    MainMent = "스타포스 강화를 진행합니다!"+allview+"\n현재 "+sender+"님의 스타포스 : "+level[sender].level+"\n강화확률 : 2%\n 파괴확률 :"+boom+"%";
    //replier.reply("스타포스 강화를 진행합니다!"+allview+"\n현재 "+sender+"님의 스타포스 : "+level[sender].level+"\n강화확률 : 2%\n 파괴확률 :"+boom+"%");
    java.lang.Thread.sleep(1000);
    if(ran <= oun) {
        level[sender].level++;
        replier.reply(MainMent+"\n\n\n\n"+"스타포스 강화 성공!!!!"+allview+"\n"+sender+"님의 스타포스 : "+level[sender].level)
    } else if(ran <= 0.396){
        level[sender].level = 0;
        level[sender].boom++;
        replier.reply(MainMent+"\n\n\n\n"+"장비가 파괴되었습니다..."+allview+"\n"+sender+"님의 스타포스 : "+level[sender].level);
    } else {
        level[sender].level = level[sender].level -1;
        levels[sender] = level[sender].level+1;
        level[sender].lose++;
        replier.reply(MainMent+"\n\n\n\n"+"스타포스 강화 실패..."+allview+"\n"+sender+"님의 스타포스 : "+levels[sender] +"->"+level[sender].level);
    }
} else if(level[sender].level == 25 ) {
    replier.reply("당신의 스타포스는 최대치입니다!")
}
}

//} 
FS.write(path, JSON.stringify(level));
java.lang.Thread.sleep(600000);
cultime[sender] = true;
}



}
