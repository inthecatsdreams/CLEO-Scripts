import { KeyCode } from "../.config/enums";
const player = new Player(0);
let hosts = ["gta3_unreal", "vc_unreal", "sa_unreal"];
if (HOST == hosts[0] || HOST == hosts[1] || HOST == hosts[2]) {
    while(true){
        wait(250);
        if(Pad.IsKeyPressed(KeyCode.F1) && player.isPlaying()){
            player.alterWantedLevel(0);
            
        }
    }



}