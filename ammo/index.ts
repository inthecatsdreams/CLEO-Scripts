import * as Stuff from "../.config/enums";
const player = new Player(0);
let hosts = ["gta3_unreal", "vc_unreal", "sa_unreal"];
if (HOST == hosts[0] || HOST == hosts[1] || HOST == hosts[2]) {
    if(player.isPlaying()){
        while(true){
            wait(250);
            let weapon = player.getCurrentWeapon();
            player.setAmmo(weapon, 9999);
        }
    }


}