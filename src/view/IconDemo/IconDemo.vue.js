class {
};
"icon-demo" >
    name;
"copy" > /FishIcon>
    < FishIcon;
name = "code" > /FishIcon>
    < FishIcon;
name = "editor" > /FishIcon>
    < FishIcon;
name = "computer_huaban1" > /FishIcon>
    < FishIcon;
name = "eyeclose_huaban1" > /FishIcon>
    < /div>
    < /template>
    < script;
lang = "ts" >
;
import { FishIcon } from '../../lib';
console.log(FishIcon);
export default {
    name: "IconDemo",
    components: { FishIcon },
    setup(props) {
        console.log(props);
    }
}
    < /script>
    < style;
lang = "scss";
scoped >
        .icon - demo;
{
    width: 100 % ;
    margin - top;
    80;
    px;
    display: flex;
}
/style>;